---
layout: default
title: Die Bausteine und deren Einstellungen
parent: Alte Docs
nav_order: 5
has_children: true
has_toc: false
---

# <span style="color:#0b5394">**Die Bausteine und deren Einstellungen**</span>

Wie bereits im Kapitel "Die Designmodi und deren Einstellungen" beschrieben, besitzen die Bausteine individuelle und
globale Einstellmöglichkeiten, welche überall gleich sind. Im Folgenden gehen wir näher auf die spezifischen
Einstellungen und Funktionen der einzelnen Bausteine ein.

Die einzelnen Bausteine teilen sich in folgende Gruppen auf:

<!--
please do not edit, tables will be generated automatically
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
