# 📦 MediaInfoCard

`MediaInfoCard` est un composant React Native réutilisable, conçu pour afficher un média (image, vidéo, etc.) avec un titre, un corps de texte, et des interactions configurables. Il est hautement personnalisable et réactif aux états comme le `focus` ou `hover`.

## ✨ Fonctionnalités

- Affichage flexible d’un média avec overlay
- Support du mode focus avec des attributs spécifiques
- Personnalisation poussée (alignement, taille, poids des textes, radius, etc.)
- Comportements interactifs via `useInfoCard`
- Rendu optimisé avec `@legendapp/state/react` et `<Computed>`

## 📦 Installation

```bash
npm install react-native
npm install @legendapp/state
```

## 🚀 Utilisation

```tsx
import MediaInfoCard from './MediaInfoCard';

<MediaInfoCard
  title="Titre principal"
  body="Description brève"
  media={<Image source={require('./img.png')} style={{ width: '100%', height: '100%' }} />}
  mediaWidth={120}
  mediaHeight={120}
  mediaRadius={10}
  mainColor="#222"
  vertical
  spacing={16}
/>
```

## 🧩 Props

| Nom                | Type                     | Description |
|--------------------|--------------------------|-------------|
| `title`            | `string \| ReactNode`    | Titre affiché |
| `body`             | `string \| ReactNode`    | Corps du texte |
| `media`            | `ReactNode`              | Élément média affiché |
| `mediaWidth`       | `number`                 | Largeur du média |
| `mediaHeight`      | `number`                 | Hauteur du média |
| `mediaRadius`      | `number`                 | Rayon des coins du média |
| `mediaBorder`      | `number`                 | Bordure autour du média |
| `mediaGap`         | `number`                 | Espace entre le média et les textes |
| `mediaOverlay`     | `ReactNode`              | Élément superposé au média |
| `mediaSquare`      | `boolean` (default: `true`) | Forcer un format carré |
| `mainColor`        | `string`                 | Couleur principale utilisée |
| `titleSize`        | `number`                 | Taille du titre |
| `titleWeight`      | `string \| number`       | Poids du titre |
| `titleLines`       | `number`                 | Limite de lignes pour le titre |
| `bodySize`         | `number`                 | Taille du corps |
| `bodyWeight`       | `string \| number`       | Poids du corps |
| `bodyLines`        | `number`                 | Limite de lignes pour le corps |
| `vertical`         | `boolean`                | Affichage vertical des éléments |
| `spacing`          | `number` (default: `12`) | Espacement entre les sections |
| `align`            | `"left" \| "center" \| "right"` | Alignement du contenu |
| `justify`          | `"flex-start" \| "center" \| "flex-end"` | Justification du contenu |
| `fullWidth`        | `boolean`                | Utiliser toute la largeur disponible |
| `focus`            | `boolean`                | État focus (surbrillance) |
| `hoverable`        | `boolean`                | Applique un effet de hover |
| `lighterHighlight` | `boolean`                | Applique un surlignage clair |
| `radius`           | `number` (default: `5`)  | Rayon des coins de la carte |
| `adaptWidthToMedia`| `boolean`                | Adapter la largeur du container au média |
| `attrsOnFocus`     | `Partial<MediaInfoCardProps>` | Props à appliquer en mode `focus` |

> ⚙️ Interactions dynamiques comme `resolvePress`, `resolveMediaPress`, etc. sont gérées via `useInfoCard`.

## 🧠 Architecture

- `components/` : composants atomiques réutilisables
- `hooks/useInfoCard.ts` : logique métier et gestion des press handlers
- `MediaInfoCard.tsx` : wrapper principal
- `types/MediaInfoCardProps.ts` : typage des props

## 📄 Licence

MIT
