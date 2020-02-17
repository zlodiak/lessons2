import time
from datetime import datetime
import requests
from bs4 import BeautifulSoup


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


def get_personal_pages_paths(html_text):
    paths = []
    soup = BeautifulSoup(html_text, 'lxml')
    link_obj = soup.find('div', {'class': 'results'}).find_all('a', {'class': 'search_item'})

    for path in link_obj:
        paths.append(path['href'])

    print('=========', len(paths), paths)

    return paths


@benchmark
def main():
    paths_all = []
    for lastname in lastnames:
        lastname_page = search_host + lastname
        lastname_paths = []

        with requests.Session() as session:
            html = session.get(lastname_page)
            lastname_paths = get_personal_pages_paths(html.text)
            paths_all.extend(lastname_paths)

    return paths_all


if __name__ == "__main__":
    personal_pages_paths = main()
    print('_____personal_pages_paths', personal_pages_paths)
    print('_____personal_pages_paths_len', len(personal_pages_paths))

# benchmarks: 4.2 - 4.7
# items: 386
    