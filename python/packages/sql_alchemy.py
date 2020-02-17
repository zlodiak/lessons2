import requests
from bs4 import BeautifulSoup
import logging
import datetime
from sqlalchemy import create_engine, Column, Integer, String, MetaData, Table, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm.session import sessionmaker


logging.basicConfig(filename="errors.log", level=logging.INFO)

base = declarative_base()
engine = create_engine('sqlite:///:memory.db:', echo=True)
session = sessionmaker(bind=engine)()

links_all = []
host = 'https://avito.ru/saransk'
search_words = [
    'asus',
    'lenovo',
    'xiaomi',
    'apple',
    'ipad',
]


def get_links(html_text):
    paths = []
    href = ''
    soup = BeautifulSoup(html_text, 'lxml')
    link_obj = soup.find_all('a')

    for path in link_obj:
        try:
            href = path['href']
            paths.append(href)
        except KeyError as e:
            now = datetime.datetime.now()
            logging.error("%s href error for %s" % (now.strftime("%Y-%m-%d %H:%M"), path))

    return paths


def get_html(search_word):
    with requests.Session() as session:
        response = session.get(host + '?q=' + search_word)
        links = get_links(response.text)
        links_all.extend(links)


def main():
    for search_word in search_words:
        get_html(search_word)


class Word(base):
    __tablename__ = 'words'

    id = Column(Integer, primary_key=True)
    word = Column(String)


main()
# print(links_all)
# print(search_words)


base.metadata.create_all(engine)
word1 = Word(word=search_words[0])
word2 = Word(word=search_words[1])
word3 = Word(word=search_words[2])
session.add_all([word1, word2, word3])
session.commit()

query = session.query(Word).filter_by(word='asus')
print('-----', query.first().word)

for i in query:
    print('===', i.id, i.word)
