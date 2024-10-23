---
layout: default
---

<h1> <span style="color:#0b5394"><b>{{ page.title }}</b></span></h1>

{{ page.content }}

{% assign current_page = page.url %}
{% assign current_parent = page.parent %}
{% assign pages_list = site.pages | sort: 'nav_order' %}

{% assign found_current = false %}
{% assign next_page = nil %}

{% for p in pages_list %}
{%- if p.url == current_page -%}
{%- assign found_current = true -%}
{%- elsif found_current == true and p.parent == current_parent -%}
{%- assign next_page = p -%}
{%- break -%}
{%- endif -%}
{% endfor %}

{%- if next_page -%}

  <div class="next-button">
    <a href="{{ next_page.url }}" class="btn">Weiterlesen: {{ next_page.title }}</a>
  </div>
{%- endif -%}
