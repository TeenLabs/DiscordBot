import feedparser
from bs4 import BeautifulSoup




recettes = feedparser.parse("https://cuisine-libre.org/?page=backend")

yo = recettes.entries[0].content[0].value
print(yo)
soup1 = BeautifulSoup(yo)

images = []

for img in soup1.findAll('img'):
    images.append(img.get('src'))

print(f"Image recette : {images[0]}")

a= []
for ingredient in soup1.findAll('div',{'class':'rss_texte'}):
    a.append(ingredient)
print(a[0])

res = BeautifulSoup(str(a[0]))

print(res.get_text())

soup = BeautifulSoup(recettes.entries[0].summary)



print(f"Recette : {recettes.entries[0].title}")
print(f"Lien : {recettes.entries[0].link}")
print(f"Auteur : {recettes.entries[0].author}")


for tag in recettes.entries[0].tags:
    print(tag.term)

recette = ''
for lettre in soup.get_text():
    if lettre == "-" :
        break
    recette += lettre

print(recette)
