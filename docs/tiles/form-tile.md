---
layout: title
title: Formular
nav_order: 6
parent: Kacheln
---

Die _Formular_-Komponente dient dem vereinfachten Ausfüllen eines Listeneintrages. Beim Öffnen wird automatisch ein neuer Eintrag in der verknüpften Liste angelegt und direkt zur Bearbeitung geöffnet — ohne die Listenansicht zu laden. Das eignet sich besonders für wiederkehrende Erfassungen wie Zeiterfassung, Bestellungen oder Feedback-Formulare.

## Einstellungen

Zusätzlich zu den [allgemeinen Kacheleinstellungen](/docs/tiles/general-settings):

1. **Basiert auf der Liste** — Die [Einfache Liste](/docs/tiles/basic-tile), in der die neuen Einträge erstellt werden.
2. **Vorbelegung** — Über Filter können dem neuen Eintrag Standardwerte mitgegeben werden.
3. **Datensatz löschen, wenn nicht abgesendet** — Löscht automatisch Einträge, die nicht über den Absende-Button abgeschlossen wurden.
4. **Absenden erlauben** — Steuert, ob ein Absende-Button im Formular angezeigt wird.
5. **Bezeichnung Absende-Button** — Der Text, der als Tooltip für den Absende-Button angezeigt wird.
6. **Absenden-Icon** — Das Icon des Absende-Buttons.
7. **Bestätigungsnachricht** — Ein Text, der nach erfolgreichem Absenden des Formulars als Nachricht erscheint.
8. **Mehrmaliges Absenden pro Benutzer verbieten** — Verhindert, dass ein Benutzer das Formular mehrfach ausfüllen kann.
9. **Workflow starten** — Ein [Workflow](/docs/workflows/workflows), der bei erfolgreichem Absenden des Formulars gestartet wird.

## Verwandte Komponenten

- [Einfache Liste](/docs/tiles/basic-tile) — Die Basisliste, mit der das Formular verknüpft wird
- [Seite](/docs/tiles/page-tile) — Für einmalige Eingabemasken ohne dauerhafte Speicherung
