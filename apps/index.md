---
layout: default
title: List of HTML Files
---

# Available HTML Files

<ul>
  {% assign current_path = page.url | remove: "index.html" %}

  {% for item in site.pages %}
    {% if item.url contains current_path and item.url != page.url %}
      <li><a href="{{ site.baseurl }}{{ item.url }}">{{ item.name | default: item.title }}</a></li>
    {% endif %}
  {% endfor %}

  {% for file in site.static_files %}
    {% if file.path contains current_path and file.extname == ".html" %}
      <li><a href="{{ site.baseurl }}{{ file.path }}">{{ file.name }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
