---
layout: default
title: Formular-Bausteine
parent: Die Bausteine und deren Einstellungen
nav_order: 2
has_children: true
has_toc: false
---

# <span style="color:#0b5394">**Formular Bausteine**</span>

Mit den Formular Bausteinen können einfache Formulare erstellt und mit Inhalten gefüllt werden, die als
Informationen bereit gestellt werden sollen. Mit den Formular Bausteinen können zudem einfache Zuordnungen
von Datensätzen hergestellt, sortiert und gefiltert werden, sowie Leserechte und Anzeigen unter
Bedingungen festlegen.


<!-- 
please do not edit, table will be generated automatically 
-->

<table>
  <thead>
    <tr>
      <th></th>
      <th><em>Formular</em></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {% assign pages = site.pages | where: "parent", "Formular-Bausteine" | sort: 'nav_order' %}
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