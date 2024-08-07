---
layout: default
title: Basis-Bausteine
parent: Die Bausteine und deren Einstellungen
nav_order: 1
has_children: true
has_toc: false
---

# <span style="color:#0b5394">**Basis-Bausteine**</span>

Mit den Basis Bausteinen können die Listeneinträge sortiert werden, sowie Hinweise erfasst und verlinkt werden.

<!-- 
please do not edit, table will be generated automatically 
-->

<table>
  <thead>
    <tr>
      <th></th>
      <th><em>Basis</em></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {% assign pages = site.pages | where: "parent", "Basis-Bausteine" | sort: 'nav_order' %}
    {% assign count = 0 %}
    <tr>
    {% for page in pages %}
      <td style="text-align:center;"><a href="{{ page.url }}">{{ page.title }}</a></td>
      {% assign count = count | plus: 1 %}
      {% assign mod = count | modulo: 3 %}
      {% if mod == 0 %}
        </tr><tr>
      {% endif %}
    {% endfor %}
    {% assign remainder = count | modulo: 3 %}
    {% if remainder != 0 %}
      {% assign empty_cells = 3 | minus: remainder %}
      {% for i in (1..empty_cells) %}
        <td></td>
      {% endfor %}
      </tr>
    {% endif %}
  </tbody>
</table>