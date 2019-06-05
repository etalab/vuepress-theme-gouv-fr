# VuePress theme Gouv Fr
Un thème VuePress qui s'inspire de [template.data.gouv.fr](https://template.data.gouv.fr).

## Démonstration
https://bulletins.eig-forever.org utilise ce thème.

## Installation
Ajouter le package à la liste des dépendances

```bash
yarn add vuepress-theme-gouv-fr
```

Dans votre fichier de configuration VuePress (`.vuepress/config.js`), indiquer le nom du thème :

```js
module.exports = {
  theme: 'gouv-fr'
}
```

## Contribuer
Les contributions sont appréciées !

Pas de panique, la quasi totalité des fichiers proviennent du thème de base de VuePress. Les seuls fichiers modifiés sont :

- [styles/config.styl](styles/config.styl) : pour les couleurs
- [styles/custom.styl](styles/custom.styl) : pour le surchargement des classes CSS existantes

## Licence
MIT
