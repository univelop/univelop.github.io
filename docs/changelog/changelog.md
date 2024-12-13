---
title: Changelog
nav_order: 99
layout: title
has_toc: false
redirect_from:
  - /docs/last-updates/latest-updates.html
---

<table>
  <!-- <thead>
    <tr>
      <th></th>
      <th><em>Releases</em></th>
      <th></th>
    </tr>
  </thead> -->
  <tbody>
    {% assign pages = site.pages | where: "parent", "Changelog" | sort: 'nav_order' %}
    {% assign count = 0 %}
    <tr>
    {% for page in pages %}
      <td style="text-align:center;"><a href="{{ page.url }}">{{ page.title }}</a></td>
      {% assign count = count | plus: 1 %}
      {% assign mod = count | modulo: 2 %}
      {% if mod == 0 %}
        </tr><tr>
      {% endif %}
    {% endfor %}
    {% assign remainder = count | modulo: 2 %}
    {% if remainder != 0 %}
      {% assign empty_cells = 2 | minus: remainder %}
      {% for i in (1..empty_cells) %}
        <td></td>
      {% endfor %}
      </tr>
    {% endif %}
  </tbody>
</table>
