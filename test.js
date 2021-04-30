a = "['Pissenlit', 'Poêlées et\xa0woks', 'Canada', 'Végétarien', 'Sans\xa0œuf', 'Sans\xa0gluten', 'Sans\xa0viande', 'Sauté']"

a = a.replace("[","").replace("]","").replace(/,/g,"").replace(/'/g,"").split(" ")
a= a.join(' / ')
console.log(a)