---
layout: default
title: Release Version 1.12.0
nav_order: 87
parent: Latest Updates
---

# <span style="color:#0b5394">**Release Version 1.12.0**</span>

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.12.0 ausgerollt:

## <span style="color:#0b5394">**Workflow Baustein _Sende E-Mail_**</span>

Um bspw. personalisierte E-Mails an Mitarbeiter oder Kunden zu versenden gibt es in der neuen Version den [_Sende E-Mail_](/docs/workflows/grand-childs-bricks/send-mail.html) Baustein.
Mit diesem können vollkommen dynamische, auf den Empfänger über bspw. vorhandene Stammdaten zugeschnittene E-Mails zusammengestellt und "en masse" versendet werden.

![release send mail step](\assets\latest-updates\release send mail step.png "release send mail step")

## <span style="color:#0b5394">**Neue Formeln**</span>

Für besseres Handling mit mathematischen Bedingungen gibts es nun [vier neue Formeln](/docs/formulary/childs/symbol-operator.html).
_round()_, _ceil()_ und _floor()_ zum (Ab-, Auf-)Runden von Zahlen und _abs()_ für den Absolutwert einer Zahl.

## <span style="color:#0b5394">**Workflow Baustein _Erstelle ein neues Mitglied_**</span>

Um große Mengen von Nutzern nicht mehr manuell anlegen zu müssen haben wir den [_Erstelle ein neues Mitglied_ Baustein](/docs/workflows/grand-childs-bricks/create-user.html) für die Workflows implementiert. So kann aus einer vorher angelegten Liste von Nutzer(-daten) und mithilfe einer Iteration über diese Nutzereinträge nutzbare Accounts erstellt werden, welche automatisch in den Arbeitsbereich hinzugefügt werden.

![release add user step](\assets\latest-updates\release add user step.png "release add user step")

## <span style="color:#0b5394">**Duplizieren von Workflows**</span>

Um Zeit beim Erstellen von [Workflows](/docs/workflows/workflow.html) zu sparen, ist es nun möglich existierende Workflows zu duplizieren.
Will man also einen Workflow erstellen, welcher strukturell einem bereits vorhandenen ähnelt, kann dieser einfach dupliziert werden, statt von null an entworfen zu werden.

## <span style="color:#0b5394">**Variablen in Workflows modifizierbar**</span>

Mit der neuen Version müssen neu errechnete Werte nicht mehr auf neue Variablen gesetzt werden.
So können bereits existierende Variablen über deren Namen mit neuen Werten überschrieben und bspw.
Summen mithilfe von Iterationen berechnet werden.

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

-   Performanceverbesserung
-   Verbesserung von Fehlermeldungen im [Baustein _PDF erstellen_](/docs/record-spec-settings/grand-child-expanded/create-pdf.html)
-   Diverse Fehler behoben
