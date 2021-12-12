---
pagination:
    data: postres
    size: 1
    alias: postre
permalink: 'postres/{{ postre.attributes.nombre | slug }}/'
eleventyComputed:
    titulo: '{{ postre.attributes.nombre }}'
layout: base
---

![{{postre.attributes.nombre}}](http://localhost:1337{{postre.attributes.foto.data.attributes.url}})

{{postre.attributes.descripcion}}
