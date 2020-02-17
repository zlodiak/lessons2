# пример синхронных запрососв
# benchmarks 4.6 - 6.6
import requests
import asyncio
import requests
import time
from datetime import datetime


host = 'https://avito.ru/saransk'
search_words = [
	'asus',
	'lenovo',
	'xiaomi',
	'apple',
	'ipad',
]


def benchmark(func):
    def wrapped():
        start_time = datetime.now()
        res = func()
        print('\n benchmark:', datetime.now() - start_time)
        return res   

    return wrapped


def get_html(search_word):
    with requests.Session() as session:
        response = session.get(host + '?q=' + search_word)
        print(response.text)


@benchmark
def main():
	for search_word in search_words:
		get_html(search_word)


main()








# пример асинхронных запросов при попощи event loop:
# benchmarks 1.2 - 1.7
import requests
import asyncio
import aiohttp
import time
from datetime import datetime


host = 'https://avito.ru/saransk'
search_words = [
	'asus',
	'lenovo',
	'xiaomi',
	'apple',
	'ipad',
]


def benchmark(func):
    def wrapped():
        start_time = datetime.now()
        res = func()
        print('\n benchmark:', datetime.now() - start_time)
        return res   

    return wrapped


async def get_html(search_word):
    async with aiohttp.ClientSession() as session:
        resp = await session.get(host + '?q=' + search_word)
        assert resp.status == 200
        print(await resp.text())


@benchmark
def main():
	ioloop = asyncio.get_event_loop()
	tasks = [ioloop.create_task(get_html(word)) for word in search_words]
	ioloop.run_until_complete(asyncio.wait(tasks))
	ioloop.close()


main()


