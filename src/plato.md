---
pagination:
    data: platos
    size: 1
    alias: plato
permalink: 'platos/{{ plato.attributes.nombre | slug }}/'
eleventyComputed:
    titulo: '{{ plato.attributes.nombre }}'
layout: base
---

![{{plato.attributes.nombre}}](http://localhost:1337{{plato.attributes.foto.data.attributes.url}})

{{plato.attributes.descripcion}}
