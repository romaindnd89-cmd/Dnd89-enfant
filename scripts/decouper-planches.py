#!/usr/bin/env python3
"""Découpe une planche (plusieurs illustrations dans une image) et branche chaque case dans la galerie.

Usage (depuis la racine du dépôt) :
  python scripts/decouper-planches.py renard lieu ~/Downloads/planche-renard-lieux.png
  python scripts/decouper-planches.py renard lieu planche.png --grille 3x1     # forcer la grille
  python scripts/decouper-planches.py renard lieu planche.png --marge 1.5      # rogner 1,5 % sur chaque bord de case

Nécessite Pillow : pip install pillow
Les cases sont prises dans l'ordre de lecture (gauche à droite, puis de haut en bas), dans l'ordre
des éléments de la galerie qui n'ont pas encore d'image. Les images sont écrites dans
public/art/galerie/ et la ligne image: '...' est ajoutée dans src/campaigns/<histoire>/Galerie.tsx.
"""
import argparse, os, re, sys, unicodedata
from PIL import Image

LAYOUT = {2: (2, 1), 3: (3, 1), 4: (2, 2), 5: (3, 2), 6: (3, 2)}
LAYOUT_LIEU = {2: (1, 2), 3: (1, 3), 4: (2, 2), 5: (3, 2), 6: (3, 2)}  # lieux : cases larges, empilées

def slug(s):
    s = s.replace('œ', 'oe').replace('Œ', 'oe')
    s = unicodedata.normalize('NFD', s)
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn').lower()
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')

p = argparse.ArgumentParser()
p.add_argument('camp'); p.add_argument('kind', choices=['lieu', 'personnage', 'objet']); p.add_argument('planche')
p.add_argument('--grille'); p.add_argument('--marge', type=float, default=1.0)
a = p.parse_args()

fichier = os.path.join('src', 'campaigns', a.camp, 'Galerie.tsx')
lignes = open(fichier, encoding='utf-8').read().split('\n')
rx = re.compile(r"kind:\s*'(\w+)',\s*name:\s*(?:\"([^\"]*)\"|'([^']*)')")
cibles = []
for i, l in enumerate(lignes):
    m = rx.search(l)
    if m and m.group(1) == a.kind and not re.search(r"image:\s*'", l):
        cibles.append((i, m.group(2) or m.group(3)))
if not cibles:
    sys.exit('Rien à faire : tous les éléments de ce type ont déjà une image.')

table = LAYOUT_LIEU if a.kind == 'lieu' else LAYOUT
if a.grille:
    c, r = map(int, a.grille.lower().split('x'))
else:
    c, r = table[len(cibles)]
im = Image.open(a.planche).convert('RGB')
W, H = im.size
cw, ch = W / c, H / r
mx, my = cw * a.marge / 100, ch * a.marge / 100
os.makedirs('public/art/galerie', exist_ok=True)

for n, (idx, nom) in enumerate(cibles):
    col, row = n % c, n // c
    if row >= r:
        print('Plus de case pour', nom); break
    box = tuple(round(v) for v in (col * cw + mx, row * ch + my, (col + 1) * cw - mx, (row + 1) * ch - my))
    case = im.crop(box)
    case.thumbnail((1200, 1200))
    fic = f'{a.camp}-{slug(nom)}.webp'
    case.save(os.path.join('public/art/galerie', fic), 'WEBP', quality=84)
    lignes[idx] = re.sub(r'\s*\},\s*$', f", image: '/art/galerie/{fic}' }},", lignes[idx])
    print('OK', fic, case.size)

open(fichier, 'w', encoding='utf-8').write('\n'.join(lignes))
print(f'Terminé ({c}x{r}). Regarde les images dans public/art/galerie/ ; si une case est mal coupée, relance avec --grille ou --marge.')
