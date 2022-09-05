---
layout: default
title: Änderungsprotokoll
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 17
---

# <span style="color:#0b5394"><span class="material-icons">smart_button</span> **Baustein *Änderungsprotokoll***</span>

Der Baustein *Änderungsprotokoll* zeichnet alle Änderungen auf, die in einem Eintrag vorgenommen wurden.
Folgende Punkte zeichnet der Baustein bei Änderungen auf:

- Benutzer
- Datum der Änderung
- betreffender Baustein
- Vergleichswert:
    - alter und neuer Wert bei Änderungen von Daten
    - Plus-Zeichen bei hinzugefügten Daten
    - Eimer-Symbol bei entfernten Daten

![changelog](\assets\record-spec-settings\changelog.png "changelog")

Wird in anderen Kacheln der Eintrag über den [Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html) verwendet und Werte des Stammdatensatzes werden übernommen und die Einstellung "synchron halten" ist aktiviert, werden bekanntlich die Änderungen an dem Stammdatensatz in diesen Kacheln entsprechend übernommen (s. [Verknüpfung über den Baustein *Datensatz*](/docs/link-lists.html)). Auch hier zeichnet der Baustein *Änderungsprotokoll* die entsprechenden Änderungen auf, um die Auswirkungen der Änderung aufzuzeigen und gibt dabei jeweils die betreffende Kachel aus.

Mit einem Mausklick auf "Änderungsprotokoll" wird die komplette Änderungshistorie ausgegeben.

![changelog](\assets\record-spec-settings\changelog1.png "changelog")