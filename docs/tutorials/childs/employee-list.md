---
layout: default
title: Erstellen einer Mitarbeiterliste
parent: Tutorials
nav_order: 2
---

# <span style="color:#0b5394">**Erstellen einer Mitarbeiterliste**</span>

Eine Mitarbeiterliste ist eine einfache Ansammlung von Stammdaten.

Zum Erstellen einer Mitarbeiterliste wird im Prinzip nur eine Liste benötigt. Dazu wird eine
[neue Kachel](/docs/design-mode-settings.html#arbeitsbereich)
angelegt, die "Mitarbeiter" heißen könnte. Öffnet man die Kachel und klickt anschließend auf das kleine +
klicken zum Erstellen eines neuen Datensatzes, werden die zwei Standard-
[Bausteine *Textfeld*](/docs/record-spec-settings/grand-childs-form/text.html)
mit den den Namen "Bezeichnung" und "Beschreibung" angezeigt. Die Bezeichnung ist dabei immer im Titel enthalten
und im
[Designmodus der Listenansicht](/docs/design-mode-settings.html#liste)
dort in der 5-teiligen Titeldarstellung des Datensatzes (Listeneintrag).

Der
[Baustein *Textfeld*](/docs/record-spec-settings/grand-childs-form/text.html)
mit dem Namen "Bezeichnung" kann z. B. in Name oder Vorname umbenannt werden. Weitere
Bausteine können wie folgt hinzugefügt werden:

| Baustein                                  | Verwendung
|:------:                                   |:------:
| [Baustein *Textfeld*](/docs/record-spec-settings/grand-childs-form/text.html)                       | Straße & Hausnummer
| [Baustein *Textfeld*](/docs/record-spec-settings/grand-childs-form/text.html)                       | PLZ & Wohnort
| [Baustein *E-Mail*](/docs/record-spec-settings/grand-childs-form/e-mail.html)                         | geschäftliche E-Mail-Adresse
| [Baustein *Telefon*](/docs/record-spec-settings/grand-childs-form/telephone.html)                       | geschäftliche Telefonnummer
| Baustein [*Nummer*](/docs/record-spec-settings/grand-childs-form/number.html) oder [*laufende Nummer*](/docs/record-spec-settings/grand-child-expanded/rolling-number.html)  | Personalnummer
| [Baustein *Datum*](/docs/record-spec-settings/grand-childs-form/date.html)                          | Unternehmenseintritt

Im Anschluss kann der Titel für die Datensätze bearbeitet werden, wie er pro Mitarbeiter / -in zusammengesetzt
werden soll. In der Regel wird dies über Vor- und Nachname dargestellt. Im
[Designmodus der Listenansicht](/docs/design-mode-settings.html#liste)
kann diese geändert und angepasst werden wie die Mitarbeiterdaten entsprechend dargestellt werden sollen.

Weitere Funktionen finden Sie in den nachfolgenden Abschnitten.

**Beispielergebnis:**
![example employee list](\assets\tutorials\example employee list.png "example employee list")