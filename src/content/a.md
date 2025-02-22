---
title: 'Page Title aaaaaaaaa'
description: 'Page Description aaaaaaaaa'
author: 'Ezra Wolf aaaaaaaaa'
date: '18 Feb. 2020'
tags: ['this is a tag', 'this is another tag']
coverImagePath: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
coverImageAlt: 'Text about the random image'
published: true
---

abc test here the thing

# aaaaaaaaaaa

text goes here


```
export type PageBase = {
    slug: string;
    title: string;
    description: string;
    author: string;
    date: string;
    tags: string[];
    coverImagePath: string;
    coverImageAlt: string;
    published: boolean;
}
```
