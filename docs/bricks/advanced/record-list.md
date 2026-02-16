---
layout: title
title: Datensatz Liste
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 3
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/record-list.html
---

Der Baustein _Datensatz Liste_ zeigt beliebige Einträge einer Liste an.
Die Verknüpfung und bedingte Anzeige kennt bei diesem Baustein zwei Wege.
Entweder zeigt sie alle Einträge einer Liste an, die die eingestellten Filter erfüllen, oder solche Einträge, die mit dem aktuellen Datensatz explizit verbunden sind.
In jedem Fall müssen Sie zunächst, wie bei dem Datensatz Baustein,
eine einfache Verknüpfung mit einer anderen Liste wählen.

Da Ihnen durch die einfache Verknüpfung alle Datensätze der verknüpften Liste angezeigt werden, müssen Sie
die Anzeige nun bedingt filtern. Diese Filterung kennt zwei Wege. Entweder mittels "Verknüpfung über" oder
mit der Filterung und Sortierung. Anders als bei den Datensatz und Datensätze Bausteinen wird mit der Datensatz-Liste
kein Datensatz gepickt, sondern vielmehr erfasst (neu erstellt).

---

## <span style="color:#0b5394">Verknüpfung über und Filterung</span>

Nach einer Verknüpfung mit einer anderen Liste, kann eine Verknüpfung über gewählt werden.

_Die goldene Regel lautet: "Verknüpfe immer über dich selbst"._

Das heißt in der verknüpften Liste gibt es einen Datensatz Baustein, der zurück guckt.
Habe ich in meiner Liste Lieferscheine eine Datensatz-Liste in Richtung Artikelbewegungen,
benötige ich für die Verknüpfung über einen Datensatz-Baustein in den Artikelbewegungen,
der mit den Lieferscheinen verknüpft ist.

Im Prinzip wird mit der Verknüpfung über ein sehr einfacher Filter gesetzt, nämlich
nur auf die Datensätze, die mit einem selbst verknüpft sind.
"Summe anzeigen" ist nur möglich, wenn eine Verknüpfung über gewählt wurde.

Zusätzlich oder stattdessen kann auch eine Filterung auf ein bestimmtes Merkmal gesetzt werden.
Hier eignet sich zum dynamischen Filtern der =B (= Baustein) Filter.
Die Filterung dieses Bausteins könnte aussagen "Gebe mir alle Artikelbewegungen, in dessen
Feld Kunde das gleiche steht, wie in meinem Feld Kunde im Lieferschein".
In Univelop entspricht das "Kunde =B Kunde".

![record-list1](/old_assets/record-spec-settings/record-list1.png 'record-list1')

## <span style="color:#0b5394">Einstellungen der Oberfläche</span>

Die Datensatz-Liste kann als eingebettete Liste oder als Link zur Liste dargestellt werden.

Bei einem Link zur Liste gelangt man mit Drücken auf den Baustein in der verknüpften Liste und sieht dort
in der Listenansicht die gefilterten Datensätze.

Wird eine eingebettete Liste gewählt, ergeben sich weitere Darstellungsoptionen.
Zunächst kann die Anzahl der Datensätze in Vorschau gewählt werden. Im Standard eine 3.
Die Vorschau enthält immer die Listenansicht der verknüpften Liste.

Aktiviert man die Schnellerfassung, rutscht das + zum Anlegen neuer Datensätze von oben rechts
nach unten und man kann in einer Vorschau den neuen Datensatz erfassen, statt dass dieser
geöffnet wird. Bausteine der verknüpften Liste könnten für die Schnellerfassung ausgeblendet werden.

Weiterhin könnte der Erfassungs-Button ausgeblendet werden und der Button zur Detailansicht kann
versteckt werden. Dies sind Sicherheitseinstellungen, damit Personen ohne Berechtigungen a keine Datensätze
erfassen können und b im Zweifel nur die Inhalte der Schnellerfassung sehen können.

Zu guter Letzt gibt es noch "Summe anzeigen". Hier kann zwischen einer Summe über die Anzahl der Datensätze in der verknüpften Liste und einer Summe über einen Baustein gewählt werden. Diese Summe kann gefiltert werden oder damit
kann weiter gerechnet werden, wenn wir z.B. an Netto-Umsatz und darauf aufbauend Steuer und Brutto denken.

![record-list2](/old_assets/record-spec-settings/record-list2.png 'record-list2')

Verknüpfungs- und Filtermöglichkeiten sind in den Docs unter
Verknüpfen von Listen
zu finden.
