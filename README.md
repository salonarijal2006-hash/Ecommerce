# Campus Cart

A beginner GitHub collaboration project by **Prajusha Subedi** and **Salona Rijal**.

This is a small e-commerce website built with HTML, CSS, and JavaScript. We used beginner Git commands: clone, branch, add, commit, push, pull, and merge.

## Team

- Prajusha Subedi
- Salona Rijal

## Live website

After GitHub Pages is turned on, the site will be available at:

https://salonarijal2006-hash.github.io/Ecommerce/

## How to open locally

Open `index.html` in a browser, or from Terminal:

```bash
cd ~/Desktop/Ecommerce
open index.html
```

## Git commands we used

```bash
# copy the project from GitHub
git clone https://github.com/salonarijal2006-hash/Ecommerce.git

# go into the folder
cd Ecommerce

# get the latest code
git pull

# make your own branch
git checkout -b prajusha/homepage

# save files
git add .
git commit -m "Add Campus Cart homepage"

# send your branch to GitHub
git push -u origin prajusha/homepage

# switch back to main
git checkout main

# merge your branch into main
git merge prajusha/homepage

# send main to GitHub
git push origin main
```

## Pages

- `index.html` — home page and products
- `about.html` — about the team
- `styles.css` — design
- `script.js` — add to cart
