---
layout: default
title: Änderungsprotokoll
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 26
---

# <span style="color:#0b5394"><span class="material-icons">smart_button</span> **Baustein _Änderungsprotokoll_**</span>

Der Baustein _Änderungsprotokoll_ zeichnet alle Änderungen auf, die in einem Eintrag vorgenommen wurden.
Wird in einer "Unterliste" die Einstellung "Diesen Datensatz löschen/duplizieren, wenn verknüpfter Datensatz
gelöscht oder dupliziert wird" aktiviert, dann ist das Änderungsprotokoll dieser Unterliste über den
Mutter-Datensatz zu finden. Ein entsprechender Hinweis erscheint im Änderungsprotokoll des Tochter-Datensatzes.

Das Änderungsprotokoll kann auch nachträglich eingefügt werden. Bisherige Änderungen im Datensatz werden protokolliert
und beim nachträglichen Einfügen hinzugefügt.

Folgende Punkte zeichnet der Baustein bei Änderungen auf:

-   Benutzer
-   Datum der Änderung
-   betreffender Baustein
-   Vergleichswert:
    -   alter und neuer Wert bei Änderungen von Daten
    -   Plus-Zeichen bei hinzugefügten Daten
    -   Eimer-Symbol bei entfernten Daten

&nbsp;

![changelog](\assets\record-spec-settings\changelog.png 'changelog')

&nbsp;

Wird in anderen Kacheln der Eintrag über den [Baustein _Datensatz_](/docs/record-spec-settings/grand-child-expanded/record.html) verwendet und Werte des Stammdatensatzes werden übernommen und die Einstellung "synchron halten" ist aktiviert, werden bekanntlich die Änderungen an dem Stammdatensatz in diesen Kacheln entsprechend übernommen (s. [Verknüpfung über den Baustein _Datensatz_](/docs/link-lists.html)). Auch hier zeichnet der Baustein _Änderungsprotokoll_ die entsprechenden Änderungen auf, um die Auswirkungen der Änderung aufzuzeigen und gibt dabei jeweils die betreffende Kachel aus.

Mit einem Mausklick auf "Änderungsprotokoll" wird die komplette Änderungshistorie ausgegeben.

&nbsp;

![changelog](\assets\record-spec-settings\changelog1.png 'changelog')
