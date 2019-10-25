[![npm](https://img.shields.io/npm/v/vuepress-theme-gouv-fr.svg?style=flat-square)](https://npmjs.org/package/vuepress-theme-gouv-fr "View this project on npm")
[![NPM](https://img.shields.io/npm/l/vuepress-theme-gouv-fr.svg?style=flat-square)](https://npmjs.org/package/vuepress-theme-gouv-fr "View this project on npm")
[![npm](https://img.shields.io/npm/dy/vuepress-theme-gouv-fr.svg?style=flat-square)](https://npmjs.org/package/vuepress-theme-gouv-fr "View this project on npm")

# VuePress thème Gouv Fr

Un thème VuePress qui s'inspire de [template.data.gouv.fr](https://template.data.gouv.fr) et hérite du thème par défaut de VuePress.

## Démonstration

https://guides.etalab.studio utilise ce thème. Vous pouvez consulter le [code source associé](https://github.com/etalab/guides).

## Installation

Ajoutez le thème en tant que dépendance dans votre fichier `package.json` :

```sh
npm install vuepress-theme-gouv-fr
```

Indiquez que vous utilisez ce thème dans votre fichier de configuration VuePress (probablement à l'emplacement `.vuepress/config.js`)

```javascript
module.exports = {
  // D'autres éléments de configuration
  theme: 'vuepress-theme-gouv-fr'
}
```

Pour plus de détails, reportez-vous à [la documentation de VuePress](https://vuepress.vuejs.org/theme/using-a-theme.html).

## Configuration
Le thème ne dispose pas d'éléments de configuration.

## Composants
Les composants suivants sont disponibles.

### `CurrentGroupToc`
Permet d'afficher dans la barre de navigation uniquement les éléments du groupe courant lorsque vous utilisez plusieurs groupes au sein de votre documentation.

Il s'utilise de la manière suivante, probablement dans un fichier `README.md` :
```md
# Super guide

Une description

<CurrentGroupToc></CurrentGroupToc>
```

## Versions supportées
Ce thème est disponible pour les versions 0 et 1 de VuePress.

Les versions en `0.*` de ce thème sont compatibles avec VuePress 0, tandis que les versions en `1.*` sont compatibles avec VuePress 1.

## Licence

MIT
