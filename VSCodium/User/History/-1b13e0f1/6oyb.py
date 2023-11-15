from bs4 import BeautifulSoup
import requests

url = "https://www.newegg.ca/gigabyte-geforce-rtx-4070-gv-n4070wf3oc-12gd/p/N82E16814932611"

result = requests.get(url)
doc = BeautifulSoup(result.text, "html.parser")

print(doc.prettify())
