from bs4 import BeautifulSoup
import requests

url = "https://remax.pt/comprar?searchQueryState=%7B%22regionName%22:%22porto%22,%22businessType%22:1,%22page%22:1,%22regionID%22:%22%22,%22regionType%22:%22%22,%22sort%22:%7B%22fieldToSort%22:%22PublishDate%22,%22order%22:1%7D,%22mapIsOpen%22:false%7D"

result = requests.get(url)
doc = BeautifulSoup(result.text, "html.parser")

prices = doc.find_all(text="€")

print(prices)
