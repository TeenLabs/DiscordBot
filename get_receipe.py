import feedparser               # module récupérant le contenu de flux RSS
from bs4 import BeautifulSoup   # module qui lit des pages html
import json
import sys

recettes_flux = feedparser.parse("https://cuisine-libre.org/?page=backend") # on récupère le contenu du flux dans 'recettes'

recette1 = recettes_flux.entries[0]   # on récupère la première recette


html_to_str1 = BeautifulSoup(recette1.content[0].value,features='html.parser')               #ici on enlève tous les éléments d'html pour garder que le texte

#ingrédients
ing = []
for ingredient in html_to_str1.findAll('div',{'class':'rss_texte'}):
    ing.append(ingredient)
res = BeautifulSoup(str(ing[0]),features='html.parser')
a=res.get_text()
print(a)

#tags
tags_list = []
for tag in recette1.tags:
    tags_list.append(tag.term.replace(u'\xa0',u''))


#prépa
prepa = ''
html_to_str2 = BeautifulSoup(recette1.summary,features='html.parser')

for lettre in html_to_str2.get_text():
    if lettre == "-" :
        break
    prepa += lettre
print(prepa)

#image lien

images = []
for img in html_to_str1.findAll('img'):
    images.append(img.get('src'))



recette1 = {
    'name': recette1.title,
    'link': recette1.link,
    'author' : recette1.author,
    'img_link' : images[0],
    'tags' : tags_list,
    'tutorial' : {
        "ingredients" : str(res.get_text()),
        "preparation" : str(prepa)
    }
}

with open('receipe.json', 'w') as f:
    json.dump(recette1, f)
    f.close()

print('bloub')
sys.stdout.flush()