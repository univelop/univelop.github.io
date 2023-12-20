---
layout: default
title: Datensatz Liste
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 3
---

# <span style="color:#0b5394"><span class="material-icons">view_list</span> **Baustein *Datensatz Liste***</span>

Der Baustein *Datensatz Liste* sorgt für eine Mehrfachverknüpfung mit einer anderen Liste.
Die Verknüpfung und bedingte Anzeige kennt bei diesem Baustein zwei Wege.
In jedem Fall müssen Sie zunächst, wie bei dem Datensatz Baustein, 
eine einfache Verknüpfung mit einer anderen Liste wählen.

Da Ihnen durch die einfache Verknüpfung alle Datensätze der verknüpften Liste angezeigt werden, müssen Sie
die Anzeige nun bedingt filtern. Diese Filterung kennt zwei Wege. Entweder mittels "Verknüpfung über" oder
mit der Filterung und Sortierung. Anders als bei den Datensatz und Datensätze Bausteinen wird mit der Datensatz-Liste
kein Datensatz gepickt, sondern vielmehr erfasst (neu erstellt).

---

## <span style="color:#0b5394">Verknüpfung über und Filterung</span>

Nach einer Verknüpfung mit einer anderen Liste, kann eine Verknüpfung über gewählt werden.

*Die goldene Regel lautet: "Verknüpfe immer über dich selbst".*

Das heißt in der verknüpften Liste gibt es einen Datensatz Baustein, der zurück guckt.
Habe ich in meiner Liste Lieferscheine eine Datensatz-Liste in Richtung Artikelbewegungen,
benötige ich für die Verknüpfung über einen Datensatz-Baustein in den Artikelbewegungen,
der mit den Lieferscheinen verknüpft ist.

Im Prinzip wird mit der Verknüpfung über ein sehr einfacher Filter gesetzt, nämlich
nur auf die Datensätze, die mit einem selbst verknüpft sind.
Ein Badge ist nur möglich, wenn eine Verknüpfung über gewählt wurde.

Zusätzlich oder stattdessen kann auch eine Filterung auf ein bestimmtes Merkmal gesetzt werden.
Hier eignet sich zum dynamischen Filtern der =B (= Baustein) Filter.
Die Filterung dieses Bausteins könnte aussagen "Gebe mir alle Artikelbewegungen, in dessen
Feld Kunde das gleiche steht, wie in meinem Feld Kunde im Lieferschein". 
In Univelop entspricht das "Kunde =B Kunde".

![record-list1](\assets\record-spec-settings\record-list1.png "record-list1")






Verknüpfungs- und Filtermöglichkeiten sind in den Docs unter
[Verknüpfen von Listen](/docs/link-lists.html)
zu finden.