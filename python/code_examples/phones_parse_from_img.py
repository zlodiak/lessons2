import time
from selenium import webdriver
import requests

from PIL import Image
import base64
import pytesseract
import io


driver = webdriver.Chrome('/home/kalinin/chromedriver')
driver.get('https://www.avito.ru/saransk/kvartiry/1-k_kvartira_47_m_25_et._1610295577');
time.sleep(1)

hide_phone_el = driver.find_element_by_css_selector('a.item-phone-button_hide-phone')
hide_phone_el.click()
time.sleep(1)

show_phone_el = driver.find_element_by_css_selector('a.item-phone-button_with-img img')
phone_img_base64 = show_phone_el.get_attribute("src")

phone_img_base64 = phone_img_base64.split('base64,')[-1].strip()
pic = io.StringIO()
image_string = io.BytesIO(base64.b64decode(phone_img_base64))
image = Image.open(image_string)
bg = Image.new("RGB", image.size, (255,255,255))
bg.paste(image,image)

print(pytesseract.image_to_string(bg))
bg.save('pic.png')
