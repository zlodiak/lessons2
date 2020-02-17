import time
from datetime import datetime
import requests
from bs4 import BeautifulSoup
import threading


lock = threading.RLock()
personal_pages_paths = []
domain = 'https://vk.com'
search_host = 'https://vk.com/people/'
lastnames = [
    'Иванов',
    'Петров',
    'Сидоров',
    'Козлов',
    'Смирнов',
    'Михайлов',
    'Соколов',
    'Кузнецов',
    'Попов',
    'Лебедев',
    'Волков',
    'Морозов',
    'Новиков',
]


def benchmark(func):
    def wrapped():
        start_time = datetime.now()
        res = func()
        print('\n benchmark:', datetime.now() - start_time)
        return res   

    return wrapped


def get_personal_page_paths(html_text):
    paths = []
    soup = BeautifulSoup(html_text, 'lxml')
    link_obj = soup.find('div', {'class': 'results'}).find_all('a', {'class': 'search_item'})

    for path in link_obj:
        paths.append(path['href'])

    return paths


def recieve_page_html(lastname_page):
    print(lastname_page)
    with requests.Session() as session:
        html = session.get(lastname_page)
        lastname_paths = get_personal_page_paths(html.text)
        lock.acquire()
        try:
            personal_pages_paths.extend(lastname_paths)
        finally:
            lock.release()        


@benchmark
def main():
    workers = []
    for lastname in lastnames:
        lastname_page = search_host + lastname
        lastname_paths = []
        paths = threading.Thread(target=recieve_page_html, args=(lastname_page,))
        paths.start()
        workers.append(paths)
        print('---start:', paths)

    for w in workers:
        w.join()
        print('---stop:', w)

    print('PATHS:', personal_pages_paths)
    print('\n LENGTH: ', len(personal_pages_paths))

    



if __name__ == "__main__":
    main()

# benchmarks: 4.4 - 9.4
# items: 386
    