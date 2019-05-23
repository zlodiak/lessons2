import requests
from bs4 import BeautifulSoup
from mechanize import Browser

import config

browser = Browser()


page_html = requests.get(config.url, headers=config.headers).text

soup = BeautifulSoup(page_html, 'lxml')

img_obj = soup.find('div', {'class': 'gallery-imgs-container'}).find('img')

img_url = 'https:' + img_obj['src']

print(img_url)

image_response = browser.open_novisit(img_url)

with open('image_out.png', 'wb') as f:
    f.write(image_response.read())












# url = 'https://www.avito.ru/saransk/kvartiry/1-k_kvartira_47_m_25_et._1610295577'
# headers = {'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.96 Safari/537.36'}
# results_filename = 'results.txt'
    