---
titulo: El terrible restorán
layout: base.njk
---

Este es un restorán terrible pulento por las siguientes razones:

## Razones:

-   Es bacán.
-   Huele bien.
-   Tu ex.
-   Es bonito.

## Platos

Tenimo cualquier plato:

{% for plato in platos %}

-   [{{ plato.attributes.nombre }}](/platos/{{plato.attributes.nombre | slug}})
    {%- endfor %}

## Postres

También tenimo postres:

{% for postre in postres %}

-   [{{ postre.attributes.nombre }}](/postres/{{postre.attributes.nombre | slug}})
    {%- endfor %}
