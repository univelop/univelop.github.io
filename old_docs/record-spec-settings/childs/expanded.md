---
layout: default
title: Erweiterte Bausteine
parent: Die Bausteine und deren Einstellungen
nav_order: 3
has_children: true
has_toc: false
---

# <span style="color:#0b5394">Erweiterte Bausteine</span>

Die erweiterten Bausteine gehen über die "einfachen" Formular Bausteine hinaus. Hiermit können Listen und
Bausteine verknüpft, sowie Dateien und Stati hinterlegt werden.

<!-- 
please do not edit, table will be generated automatically 
-->

<table>
  <thead>
    <tr>
      <th></th>
      <th><em>Erweitert</em></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {% assign pages = site.pages | where: "parent", "Erweiterte Bausteine" | sort: 'nav_order' %}
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