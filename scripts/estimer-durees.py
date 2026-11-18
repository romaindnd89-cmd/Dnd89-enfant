#!/usr/bin/env python3
"""
Estime la durée de jeu réelle de chaque histoire à partir de son contenu.

Modèle (calé sur les histoires dont la durée annoncée est fiable) :
  durée = (mots à lire à voix haute / 130 par minute)
        + (nombre de jets de dés mentionnés x 50 % joués x 1,5 min)
        + (nombre de combats x 8 min de tours de table en plus des jets)

Lancer :  python3 scripts/estimer-durees.py   (depuis la racine du projet)
"""
import re, glob

HISTOIRES = {
    'Moustaches': ['src/campaigns/moustaches/*.tsx', 'src/campaigns/RoyaumeDesMoustaches.tsx'],
    'Bouboule': ['src/campaigns/bouboule/*.tsx'],
    'Étoile Filante': ['src/campaigns/etoile/*.tsx', 'src/campaigns/EtoileCampaign.tsx'],
    'Aube': ['src/campaigns/aube/*.tsx', 'src/campaigns/AubeCampaign.tsx'],
    'Renardeau': ['src/campaigns/renard/*.tsx'],
    'Lutins': ['src/campaigns/lutins/*.tsx'],
    'Dragonneau': ['src/campaigns/dragonneau/*.tsx'],
    'Couronne': ['src/campaigns/couronne/*.tsx'],
    'Île qui Bougeait': ['src/campaigns/ile/*.tsx'],
    'La Dernière Lanterne': ['src/campaigns/lanterne/*.tsx'],
}

def texte(t):
    t = re.sub(r'<br\s*/?>', ' ', t)
    t = re.sub(r'<[^>]+>', ' ', t)
    return re.sub(r'\s+', ' ', t.replace('&nbsp;', ' ')).strip()

def mots(t):
    return len(re.findall(r"[\wÀ-ÿ'’-]+", t))

def hm(minutes):
    h, m = divmod(int(round(minutes / 5.0)) * 5, 60)
    return f'{h}h{m:02d}' if h else f'{m} min'

print(f"{'Histoire':16} {'mots':>6} {'à lire':>7} {'jets':>5} {'combats':>8}   durée estimée")
for nom, motifs in HISTOIRES.items():
    fichiers = [f for p in motifs for f in glob.glob(p) if 'Illustrations' not in f]
    src = '\n'.join(open(f, encoding='utf-8').read() for f in fichiers)
    lus = sum(mots(texte(x)) for x in re.findall(r'<ReadAloud[^>]*>(.*?)</ReadAloud>', src, flags=re.S))
    # les prologues sont des fichiers de données : tous leurs paragraphes sont lus à voix haute
    for f in fichiers:
        if f.endswith('Prologue.tsx'):
            lus += sum(mots(x) for x in re.findall(r'^\s+"(.{40,})",$', open(f, encoding='utf-8').read(), flags=re.M))
    total = mots(texte(re.sub(r'import[^\n]*\n', '', src)))
    jets = len(re.findall(r'(?:Test|Jet) d[eu]|jet d[eu]|\(D20|DD \d+', src))
    combats = len(re.findall(r'<CombatBox', src))
    t = lus / 130 + jets * 0.5 * 1.5 + combats * 8
    print(f'{nom:16} {total:6} {lus:7} {jets:5} {combats:8}   {hm(t * 0.85)} à {hm(t * 1.15)}')
