---
layout: title
title: Editor
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 23
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/editor.html
---

Der Baustein _Editor_ stellt einen WYSIWYG-Editor (_What You See Is What You Get_) zur Verfügung, mit dem Texte intuitiv formatiert werden können. Er bietet alle gängigen Funktionen zur Textbearbeitung — z. B. Fettdruck, Kursiv, Listen, Überschriften und Links.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

Der Baustein hat keine zusätzlichen bausteinspezifischen Einstellungen.

## Funktionsweise

Standardmäßig ist der Editor im Ansichtsmodus. Über den Stift-Button wird der Bearbeitungsmodus auf einer eigenen Seite geöffnet. Alle Änderungen werden beim Zurücknavigieren automatisch gespeichert. Über den „Abbrechen"-Button können Änderungen verworfen werden.

Zusätzlich bietet der Editor eine Vollbildansicht, die über den nebenstehenden Button aktiviert wird. Mit den entsprechenden Berechtigungen ist eine Bearbeitung auch direkt im Vollbildmodus möglich.

## Hinweise

- Der Editor speichert intern im Quill-Delta-Format, einem strukturierten JSON-Format für formatierten Text.
- Der Inhalt kann in PDF-Ausdrücken über den technischen Namen referenziert werden.

## Verwandte Bausteine

- [Textfeld](/docs/bricks/input/text-field) — Für einfache, unformatierte Texteingabe
- [Formatierter Hinweis](/docs/bricks/basic/rich-text-hint) — Für statischen formatierten Text
