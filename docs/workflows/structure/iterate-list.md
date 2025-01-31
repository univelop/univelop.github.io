---
layout: workflow-step
title: Iteriere über Werte
parent: Struktur
grand_parent: Workflows
icon: format_list_numbered
nav_order: 5
redirect_from:
    - /docs/workflows/grand-childs-bricks/iterate-values.html
---

Mit dem Baustein _Iteriere über Werte_ kann über einen dynamischen Wert bzw. eine Liste von Werten iteriert werden.
Dabei muss für den dynamischen Wert in den Einstellungen eine explizite Liste (z.B. "[0,1,2,3]", "[a,b,c,d]") oder eine
Formel, welche einen dynamischen Wert liefert, angegeben werden.

Dabei ist unter dem technischen Namen des Bausteins der Wert der aktuellen Iteration zu finden.
Bei einer Iteration über "[0,1,2,3,4]" wird also unter dem technischen Namen zuerst "0", dann "1" etc.
geliefert.
