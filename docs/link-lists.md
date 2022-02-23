---
layout: default
title: Verknüpfen von Listen
nav_order: 8
---

# Verknüpfen von Listen

## Verknüpfung über den Datensatz Baustein

Wie der Name schon sagt, können Sie über den `Datensatz` Baustein auf einen Datensatz zugreifen.
Genauer gesagt auf einen Datensatz einer anderen Liste.

Ziehen Sie hierzu den Baustein an die gewünschte Position Ihrer Liste.
Nun benennen Sie den Baustein sinngemäß dem was er darstellen soll. In den
meisten Fällen ähnelt diese Bezeichnung der verknüpften Liste (z.B. Kunde oder Bauvorhaben)

Wählen Sie im nächsten Schritt die "Verknüpfung mit", also die Verknüpfung mit einer anderen Liste.
Über Filter und Sortierung können Sie sich nur bestimmte Datensätze anzeigen lassen, aus denen Sie
wählen können. Unter diesem Reiter können Sie ebenfalls die Sortierung festlegen, nach welcher
Ihnen die Daten angezeigt werden sollen.

Sie haben zudem die Möglichkeit Daten aus dem verknüpften Datensatz zu übernehmen. Dies hat den Vorteil,
dass Sie die Daten in der aktuellen Liste zur Verfügung gestellt bekommen, ohne diese erneut eingeben zu müssen
und um eventuelle Übertragungsfehler zu reduzieren. Bitte beachten Sie, dass die zu übernehmenden und
Zielbausteine Ihrer Liste die gleichen sein müssen, bedeutet nur Textfeld zu Textfeld, Datum zu Datum etc.
Es bietet sich also an die Bausteine im Vorfeld zu erstellen und gleich oder ähnlich zu benennen.
Sie haben zudem die Möglichkeit die übernommenen Daten synchron zu halten. Bedeutet, wenn Sie den Switch
nicht aktivieren werden die Daten einmalig mit Wahl des Datensatzes übernommen. Beim synchron halten werden
die Daten des Mutterdatensatzes in diesen Datensatz immer aktuell gehalten.

Dies bedeutet für Sie, dass Sie abwägen müssen, ob die Daten synchron gehalten werden sollen.
Zum erstellen einer Kaufhistorie sollten die aus dem Artikel übernommenen Preise nicht synchron sein.
Wenn es sich allerdings um Adress- und Stammdaten einer Rechnungsadresse handelt, sollten Sie
den Switch zum synchron halten aktivieren.

Es gibt den Switch zur Aktivierung der Funktion "Diesen Datensatz löschen / duplizieren, wenn verknüpfter
Datensatz gelöscht / dupliziert wird". Dieser aktiviert genau diese Funktion. Wenn es sich um zusammenhängende
Bewegungsdaten handelt, könnten Sie diesen Switch zum Beispiel aktivieren, um Datenmüll zu vermeiden.

### Zusammenfassung

Über den Baustein Datensatz schaffen Sie eine einfache Verknüpfung mit **einem** Datensatz einer
anderen Liste und haben die Möglichkeit Daten einmalig oder dauerhaft zu übernehmen, sowie den Eintrag
zu löschen oder zu duplizieren, wenn Sie dies mit dem Hauptdatensatz machen.

---

## Verknüpfung über den Datensatz-Liste Baustein

Der `Datensatz-Liste` Baustein bietet Ihnen die Möglichkeit mehrere Datensätze einer
anderen Liste anzeigen zu lassen und über die Verknüpfung weitere zusammengehörige
Datensätze zu erstellen.

Zunächst wählen Sie, wie beim Datensatz Baustein, eine passende Bezeichnung und die gewünschte
Liste, mit welcher Sie den Baustein verknüpfen möchten.

Jetzt haben Sie die Möglichkeit eine "Verknüpfung über" zu wählen. Dies bedeutet Sie verknüpfen den Baustein
mit einer Liste, über einen `Datensatz` Baustein, welcher sich in der anderen Liste befindet. So schaffen
Sie eine eindeutige Zugehörigkeit der Datensätze miteinander. Dies geht nur dann, wenn Sie eine eindeutige
Zuordnung über den aktuellen Datensatz mit dem verknüpften Datensatz haben. 

Wenn Sie sich auf einen dritten Datensatz beziehen möchten wird es nicht mit der "Verknüpfung über" 
funktionieren, da Sie sich damit immer auf den eigenen Datensatz beziehen. Haben Sie also in Ihrer Liste
eine Verknüpfung mit einer Stammdatenliste und haben eine weitere Liste mit Stammdaten erstellt, die dieser
Liste angehört, dann müssen Sie über die Filter und Sortierungsfunktion einen eindeutigen Zusammenhang
herstellen. Dies bedeutet konkret Sie haben eine Verknüpfung mit gewählt und in verknüpften Liste, sowie
in dieser Liste einen Datensatz Baustein eingebaut, der auf den gleichen Datensatz verweist, können Sie
die Daten darüber verknüpfen. Wählen Sie in Filter und Sortierung den Zieldatensatz aus der verknüpften
Liste aus und wählen =B als Filterkriterium aus. =B bedeutet = Baustein. Also der Datensatz Baustein
soll dem Baustein Datensatz aus meiner Liste entsprechen.

### Beispiel für Verknüpfung über

Sie haben eine Liste namens Aufmaß und eine Hilfsliste namens Aufmaßpositionen erstellt.
In der Aufmaßliste möchten Sie nun die dazugehörigen Aufmaßpositionen erfassen. In den
Aufmaßpositionen haben Sie einen Datensatz Baustein eingebaut, welcher mit den Aufmaßen
verknüpft ist. Jetzt können Sie in den Aufmaßen die Verknüpfung über Aufmaß wählen.

### Beispiel für Verknüpfung mit dem Filter =B

Sie haben drei Liste. Liste Kunde, Liste Ansprechpartner Kunde und die Liste Bauvorhaben.
Sowohl die Bauvorhaben, als auch die Ansprechpartner sind mit den Kunden verknüpft.
Zum Anzeigen der Ansprechpartner in der Kundenliste können Sie aufgrund der direkten Verknüpfung
die Verknüpfung über wählen.

Zur Verknüpfung der Ansprechpartner in der Bauvorhaben Liste benötigen Sie die =B Filterung.
Sie haben also in den Bauvorhaben die Verknüpfung zum Kunden mit dem Datensatz Baustein.
Nun wählen Sie Verknüpfen mit Ansprechpartner. Als nächstes wählen Sie die Filterung,
die zum Beispiel so aussieht: Kunde =B Auftraggeber. Also in der Ansprechpartner Liste gibt
es den Datensatz Kunde. In der Bauvorhaben Liste gibt es den Baustein Auftraggeber.

### Art der Darstellung: Link zur Liste

Sie können sich die verknüpften Datensätze als einfachen Link ohne Vorschau anzeigen lassen.
Im Standard sehen Sie hier im Baustein den Namen Ihrer Verknüpfung, sowie die Anzahl der
verknüpften Datensätze.

Sie haben die Möglichkeit den Switch "Summe statt Anzahl anzeigen" zu betätigen. Wenn Sie dies
tun, können Sie sich eine "Summe über" anzeigen lassen. Zur Auswahl stehen hier Nummern und
Zeitspannen Bausteine, sowie Formeln und Datensatz-Verknüpfungen. 
Sie können zudem noch ein Suffix für die angezeigte Summe wählen.

### Art der Darstellung: Eingebettete Liste

Mit der eingebetteten Liste haben Sie die Möglichkeit sich eine Vorschau anzeigen zu lassen.
Im Standard ist die "Anzahl der Datensätze in Vorschau" auf 3 eingestellt. Diese Anzahl können Sie
beliebig anpassen. Die angezeigten Daten in der Vorschau entsprechen der Vorschau Ihrer Listeneinstellung
der verknüpften Liste.

---

## Schnellerfassung für den Datensatz-Liste Baustein

Mit der `Eingebetteten Liste` haben Sie zusätzlich die Funktion einer Schnellerfassung, welche Sie aktivieren
können. Dies ist eine charmante Art und Weise Einträge für die verknüpfte Liste in Ihrer Liste zu erstellen.

Hierzu müssen Sie zunächst die Schnellerfassung in der verknüpften Liste aktivieren. Diese Einstellung
nehmen Sie über den Switch "Schnellerfassung aktivieren" im Designmodus der Kachel im Homescreens vor.
Sie haben Zudem die Möglichkeit die Schnellerfassung ausschließlich bei einer Verknüpfung über einen 
bestimmten Baustein zu aktivieren.

Als nächstes können Sie in den Einstellung der zu schnellerfassenden Liste Bausteine in der Schnellerfassung
verstecken. Falls diese Bausteine für die Schnellerfassung nicht relevant sind empfehlen wir es der
Einfachkeit halber. Ein typisches Beispiel hierfür sind die Datensatz Verknüpfung, welche Sie beim Anlegen
durch die Datensatz-Verknüpfung automatisch füllen, sowie eventuell zu übernehmende Daten des verknüpften
Datensatzes.

Dass die Schnellerfassung aktiviert wurde erkennen Sie daran, dass der Button zum erfassen eines neuen Datensatzes
in der verknüpften Liste ein grüner Balken geworden ist. In Ihrer Liste äußert es sich durch den grünen
Button `+ Neu`.