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
    {% endif %}
    </tr>
  </tbody>
</table>