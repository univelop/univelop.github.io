---
title: Formeln
nav_order: 8
layout: title
---

<table>
  <thead>
    <tr>
      <th>Formel</th>
      <th>Beschreibung</th>
      <th>Beispiel</th>
      <th>Parameter</th>
      <th>Rückgabe</th>
    </tr>
  </thead>
  <tbody>
    {% for item in site.data.expressions['text-expressions'] %}
    <tr>
      <td>
        <code>{{ item.expression }}</code>
      </td>
      <td>{{ item.description | markdownify }}</td>
      <td>{{ item.example | markdownify }}</td>
      <td>
        {% if item.parameters %}
            {% for param in item.parameters %}
                {{ forloop.index }}. Wert {{ param }}<br />
            {% endfor %}
        {% endif %}
      </td>
      <td>{{ item.returns }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
