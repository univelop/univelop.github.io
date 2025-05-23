---
title: Formelsammlung
nav_order: 9
layout: title
redirect_from:
    - /docs//formulary/formulary.html
---

{% assign all_expressions = site.data.expressions_docs %}
{% assign categories = all_expressions | group_by: 'category' %}

<!-- Order in which the categories should be rendered -->

{% assign category_order = "logic,number,date,text,list" | split: "," %}

<table>
  <thead>
    <tr>
      <th>Formel</th>
      <th>Beispiel</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    {% for cat in category_order %}
      {% assign cat_group = categories | where: "name", cat | first %}
      {% if cat_group %}
        <tr>
          <th colspan="3">{% include expression_category.html category=cat_group.name %}</th>
        </tr>
        {% for item in cat_group.items %}
          <tr>
            <td><code>{{ item.expression }}</code></td>
            <td>{% include expression_example.html examples=item.examples %}</td>
            <td>{{ item.description | markdownify }}</td>
          </tr>
        {% endfor %}
      {% endif %}
    {% endfor %}
  </tbody>
</table>
