---
layout: default
title: Inhaltsverzeichnis
nav_order: 1
---

# <span style="color:#0b5394">**Inhaltsverzeichnis**</span>

1. <span style="color:#0b5394">**Der Start in die App**</span>

    - [Registrieren und Anmelden](/docs/start-app.html#registrieren-und-anmelden)
    - [Erstellen eines Arbeitsbereichs](/docs/start-app.html#erstellen-eines-arbeitsbereichs)
    - [Einem Arbeitsbereich beitreten](/docs/start-app.html#einem-arbeitsbereich-beitreten)
    - [Startertutorial](/docs/start-app.html#startertutorial-zum-erstellen-eines-neuen-arbeitsbereichs-und-einer-kachel)

2. <span style="color:#0b5394">**Die Programmstruktur**</span>

    - [Arbeitsbereich(e)](/docs/software-structure.html#arbeitsbereiche)
    - [Kacheln](/docs/software-structure.html#kacheln)
    - [Listen](/docs/software-structure.html#listen)
    - [Einträge](/docs/software-structure.html#eintr%C3%A4ge)
    - [Bausteine](/docs/software-structure.html#bausteine)

3. <span style="color:#0b5394">**Die Designmodi und deren Einstellungen**</span>

    - [Arbeitsbereich](/docs/design-mode-settings.html#arbeitsbereich)
    - [Kachel](/docs/design-mode-settings.html#kachel)
    - [Liste](/docs/design-mode-settings.html#liste)
    - [Eintrag](/docs/design-mode-settings.html#eintrag)

4. <span style="color:#0b5394">**Die Bausteine und deren Einstellungen**</span>

<!-- 
please do not edit, list will be generated automatically 
-->

{% assign categories = "Basis-Bausteine,Formular-Bausteine,Erweiterte Bausteine" | split: ',' %}
{% for category in categories %}
   1. <span style="color:#0b5394">**{{ category }}**</span>
   {% assign pages = site.pages | where: "grand_parent", "Die Bausteine und deren Einstellungen" | where: "parent", category | sort: "nav_order" %}
        <ul>
        {% for page in pages %}
            <li><a href="{{ page.url }}">{{ page.title }}</a></li>
        {% endfor %}
        </ul>
{% endfor %}

5. <span style="color:#0b5394">**Zusätzliche globale Einstellungen und Funktionen**</span>

    - [Mitglieder](/docs/global-settings-and-functions.html#mitglieder)
    - [Rollen](/docs/global-settings-and-functions.html#rollen)
    - [Teams](/docs/global-settings-and-functions.html#teams)
    - [Rechte / Berechtigungen](/docs/global-settings-and-functions.html#rechte--berechtigungen)
    - [Benachrichtigungen](/docs/global-settings-and-functions.html#benachrichtigungen)
    - [Filtern und Sortieren](/docs/search-and-filters.html)
    - [Suchen](/docs/global-settings-and-functions.html#suchen)
    - Gespeicherte Ansicht / Eigene Kacheln

6. <span style="color:#0b5394">**Import und Export**</span>

    - [Arbeitsbereiche](/docs/import-export.html#arbeitsbereiche)
    - [Kacheln](/docs/import-export.html#kacheln)
    - [Datensätze / Inhalte](/docs/import-export.html#datens%C3%A4tze-und-inhalte)

7. <span style="color:#0b5394">**Verknüpfung von Listen**</span>

    - [Über den Baustein _Datensatz_](/docs/link-lists.html#verkn%C3%BCpfung-%C3%BCber-den-baustein-datensatz)
    - [Über den Baustein _Datensatz Liste_](/docs/link-lists.html#verkn%C3%BCpfung-%C3%BCber-den-baustein-datensatz-liste)
    - [Schnellerfassung für den Baustein _Datensatz Liste_](/docs/link-lists.html#schnellerfassung-f%C3%BCr-den-baustein-datensatz-liste)

8. <span style="color:#0b5394">**Schnittstellen**</span>

    - [REST API](/docs/interface.html#rest-api)
    - [Integration von Schnittstellen](/docs/interface.html#integration-von-schnittstellen)

9. <span style="color:#0b5394">**Tutorials**</span>

    - [Erstellen einer To-Do-Liste](/docs/tutorials/childs/to-do-list.html#erstellen-einer-to-do-liste)
    - [Erstellen einer Mitarbeiterliste](/docs/tutorials/childs/employee-list.html#erstellen-einer-mitarbeiterliste)
    - [Verknüpfung von Listen](/docs/tutorials/childs/connect-list-employee.html#verknüpfen-von-listen-anhand-des-tutorials-mitarbeiterliste)
    - Arbeitsbereichorganisation mit gefilterten Kacheln

10. <span style="color:#0b5394">**Formelsammlung**</span>

    - [Datumsformeln](/docs/formulary/childs/formula%20date.html)
    - [Bedingungen und Rechnen mit Formeln im Baustein _Formel_](/docs/formulary/childs/condition-calculate-with.html)
    - [Rechensymbole / Operatoren](/docs/formulary/childs/symbol-operator.html)
    - [Kombinationen und Beispiele](/docs/formulary/childs/combinations-examples.html)

11. <span style="color:#0b5394">**Workflows**</span>
    - [Allgemeines](/docs/workflows/workflow.html#allgemeines-zu-workflows)
    - [Bausteine](/docs/workflows/childs/bricks.html)
