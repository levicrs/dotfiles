from bs4 import BeautifulSoup
import requests

url = "https://www.imovirtual.com/comprar/moradia/?search%5Bfilter_float_price%3Afrom%5D=10000&search%5Bfilter_float_price%3Ato%5D=180000&search%5Bfilter_enum_rooms_num%5D%5B0%5D=3&search%5Bfilter_enum_rooms_num%5D%5B1%5D=4&search%5Bfilter_enum_rooms_num%5D%5B2%5D=5&search%5Bfilter_enum_rooms_num%5D%5B3%5D=6&search%5Bfilter_enum_rooms_num%5D%5B4%5D=7&search%5Bfilter_enum_rooms_num%5D%5B5%5D=8&search%5Bfilter_enum_rooms_num%5D%5B6%5D=9&search%5Bfilter_enum_rooms_num%5D%5B7%5D=more&locations%5B0%5D%5Bregion_id%5D=13&locations%5B1%5D%5Bregion_id%5D=3"

result = requests.get(url)
doc = BeautifulSoup(result.text, "html.parser")

print(doc.prettify())
