---
layout: default
title: Release Version 1.15.0
nav_order: 84
parent: Latest Updates
---

# <span style="color:#0b5394">**Release Version 1.15.0**</span>

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.15.0 ausgerollt:

## <span style="color:#0b5394">**Baustein _QR-/Barcode_**</span>

Um Einträge in Univelop schneller zu finden, oder Verlinkungen in PDFs einzubauen, haben wir für die neue Version den [_Baustein QR-/Barcode_](/docs/record-spec-settings/grand-child-expanded/qr-barcode.html) implementiert. Dieser erzeugt aus einem gewählten Baustein einen QR-Code oder einen Barcode. Der QR-/Barcode kann direkt gescannt werden oder steht zur Nutzung in einem PDF/Word-Dokument bereit. Der QR-/Barcode kann wie jeder andere Baustein auch, durch Referenzierung des technischen Namens in einer Wordvorlage, verwendet werden.

![release qrcode brick](\assets\latest-updates\release qrcode brick.png "release qrcode brick")

## <span style="color:#0b5394">**Workflow-Baustein _Wähle Pfade_**</span>

Um bspw. Anträge anhand des Inhaltes, per Workflow unterschiedlich zu verarbeiten gibt es ab Univelop 1.15 den [Workflow Baustein _Wähle Pfade_](/docs/workflows/grand-childs-bricks/choose-path.html). Mit diesem können Pfade erstellt werden, welche bei einer erfüllten Bedingung durchlaufen werden. Innerhalb eines Pfades können beliebig viele Workflow-Schritte eingebaut werden.

![release workflow choose paths](\assets\latest-updates\release workflow choose paths.png "release workflow choose paths")

## <span style="color:#0b5394">**Workflow-Baustein _Lösche einen Eintrag_**</span>

Um aus Listen Datensätze zu entfernen, gibt es nun den [Workflow Baustein _Lösche einen Eintrag_](/docs/workflows/grand-childs-bricks/delete-record.html). Mit diesem wird anhand der Datensatz-ID ein Datensatz gelöscht.

## <span style="color:#0b5394">**Logs für Workflows**</span>

Um bei Fehlern und unerwartetem Verhalten nachvollziehen zu können, wie der Workflow durchgeführt wurde und welcher Baustein einen Fehler verursacht hat, haben wir Logs hinzugefügt. Diese umfassen einen Eintrag pro ausgeführten Baustein, in welchem die ausgeführte Aktion oder der Fehler geschildert wird.

![release workflow logs](\assets\latest-updates\release workflow logs.png "release workflow logs")

## <span style="color:#0b5394">**Neue Formeln**</span>

Um besser mit Zeiten umzugehen, gibt es wieder [vier neue Formeln](/docs/formulary/childs/formula%20date.html#liste-mit-standard-datumsformeln):
_addMinutes_ und _subtractMinutes_, sowie _addHours_ und _subtractHours_.
Diese addieren oder entfernen zu einer gegebenen Uhrzeit die gewünschte Anzahl an Minuten bzw. Stunden.

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

-   Diverse Fehler behoben
