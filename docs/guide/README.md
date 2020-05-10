---
sidebar: auto
---

# Guide

## Mevcut bir Proje için

```
# install as a local dependency
yarn add -D vuepress # OR npm install -D vuepress

# create a docs directory
mkdir docs
# create a markdown file
echo '# Hello VuePress' > docs/README.md
```

```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

## Vue Press klasör yapısı

```
.
├── docs
│   ├── .vuepress (Optional)
│   │   ├── components (Optional)
│   │   ├── theme (Optional)
│   │   │   └── Layout.vue
│   │   ├── public (Optional)
│   │   ├── styles (Optional)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (Optional, Danger Zone)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (Optional)
│   │   └── enhanceApp.js (Optional)
│   │
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│
└── package.json
```

## Default page routing

For the above directory structure, the default page routing paths are as follows:

| Relative Path    | Page Routing |
| ---------------- | ------------ |
| README.md        | /            |
| /guide/README.md | /guide/      |
| /config.         | /config.html |
