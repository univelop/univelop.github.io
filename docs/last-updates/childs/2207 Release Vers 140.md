---
layout: default
title: Release Version 1.4.0
nav_order: 95
parent: Latest Updates
---

# <span style="color:#0b5394">**Release Version 1.4.0**</span>

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.4.0 ausgerollt:

## <span style="color:#0b5394">**Neue Kachelart *Formular***</span>
Wir haben eine neue Kachelart in Univelop implementiert, welche die Interaktion nochmals deutlich vereinfacht. Die [*Formular* Kachel](/docs/software-structure.html#-kachel-formular)  ermöglicht es, schnell neue Einträge, wie z. B. Arbeitszeiten, zu erfassen. Dadurch spart man Klicks beim Navigieren durch Kacheln und Einträge.
Drückt man auf die *Formular* Kachel, so öffnet sich direkt ein Listeneintrag zum Ausfüllen. Diesen sendet man per Klick auf das Icon oben rechts ab. 
Die *Formular* Kachel wird mit einer einfachen Liste verbunden, in der dann die neuen Einträge gespeichert werden.   

![release tile form](\assets\latest-updates\release tile form.png "release tile form")

## <span style="color:#0b5394">**Excel Export für komplexe Bausteine**</span>  
Bausteine, die mehrere Daten beinhalten, werden in der neuen Version detaillierter ausgegeben. Es wird z. B. der [Zeitspannen Baustein](/docs/record-spec-settings/grand-childs-form/interval.html) beim [Export](/docs/import-export.html#datensätze-und-inhalte), statt einer einzigen, in mehrere Spalten aufgeteilt. So können die benötigten Daten, wie die gesamte Arbeitszeit, einfach und ohne Berechnungen oder Formatierungen herausgelesen werden. In den Einstellungen der Bausteine kann für jede Spalte der technische Name individuell gesetzt werden.

## <span style="color:#0b5394">**Beliebige Anzahl von Nachkommastellen**</span>  
Im Web ist diese Funktion schon seit kurzem vorhanden. Nun gibt es auch auf iOS und Android die Möglichkeit, die benötigte Anzahl der Nachkommastellen, bei dem [Nummer](/docs/record-spec-settings/grand-childs-form/number.html) und dem Formelbaustein einzustellen.
Dazu gibt es auch die Funktion, Tausender-Trennzeichen an- und abzuschalten. So werden spezielle Mengen wie z. B. Euro oder m³ genau erfasst und konsistent dargestellt.  

![release decimal places](\assets\latest-updates\release decimal places.png "release decimal places")

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>
- [Kachelart *Website*](/docs/software-structure.html#-kachel-website) für jede Nutzerrolle sichtbar
- Scroll Funktion bei Listen verbessert
- Darstellung der Kachelbezeichnung optimiert
- Weitere Stabilitäts- und Performance Verbesserungen 