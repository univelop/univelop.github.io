---
title: Formeln
nav_order: 8
layout: title
---

{% assign all_expressions = site.data.expressions_docs %}
{% assign categories = all_expressions | group_by: 'category' %}

<table>
  <thead>
    <tr>
      <th>Formel</th>
      <th>Beispiel</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    {% for cat_group in categories %}
      <tr>
        <th colspan="3">{% include expression_category.html category=cat_group.name %}</th>
      </tr>
      {% for item in cat_group.items %}
        <tr>
          <td><code>{{ item.expression }}</code></td>
          <td>{{ item.example | markdownify }}</td>
          <td>{{ item.description | markdownify }}</td>
        </tr>
      {% endfor %}
    {% endfor %}
  </tbody>
</table>
