---
layout: default
title: Verknüpfen von Listen
nav_order: 8
---

# <span style="color:#0b5394">**Verknüpfen von Listen**</span>

## <span style="color:#0b5394">Verknüpfung über den Baustein *Datensatz*</span>

Wie der Name schon sagt, kann über den
[Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html)
auf einen Datensatz zugegriffen werden. Genauer gesagt auf einen Datensatz einer anderen Liste.

Nachdem der
[Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html)
einer Liste hinzugefügt wurde, können verschiedene Einstellungen in Bezug auf die weiteren
Funktionen des Bausteins vorgenommen werden:

![brick record settings](\assets\link-lists\brick record settings.png "brick record settings")

1. <span style="color:#0b5394">**Baustein *Datensatz* Funktion "Verknüpfung mit"**</span>  
Damit der Baustein einwandfrei funktioniert muss in den Einstellungen unter "Verknüpfung mit" die
Verknüpfung zu einer anderen Liste vorgenommen werden.

2. <span style="color:#0b5394">**Werte des verknüpften Datensatzes übernehmen**</span>  
    Ebenso besteht die Möglichkeit Daten aus dem verknüpften Datensatz in andere Bausteine zu übernehmen.
    Dies hat den Vorteil, dass die Daten in der aktuellen Liste zur Verfügung gestellt werden, ohne dass diese
    erneut eingeben werden müssen und somit eventuelle Übertragungsfehler reduziert werden.

    Dabei ist darauf zu achten, dass die zu Quell- und Zielbausteine der Liste den gleichen Typ aufweisen
    müssen, bedeutet nur
    [Textfeld](/docs/record-spec-settings/grand-childs-form/text.html)
    zu Textfeld,
    [Datum](/docs/record-spec-settings/grand-childs-form/date.html)
    zu Datum etc.

    Darüber hinaus können die übernommenen Daten synchron gehalten werden. Bedeutet, wird der Switch nicht
    aktiviert, werden die Daten einmalig mit der Auswahl des Datensatzes übernommen. Beim synchron halten werden
    die Daten des Mutterdatensatzes in diesen Datensatz immer aktuell gehalten.

    Hierbei muss in jedem Einzelfall abgewogen werden, ob die Daten synchron gehalten werden sollen oder nicht.
    Zum Beispiel zum Erstellen einer Kaufhistorie sollten die aus dem Artikel übernommenen Preise nicht synchron sein,
    da diese bei aktivierter Synchronisation bei jeder Änderung in den Artikelstammdaten ebenfalls überschrieben werden.
    Bei der Aktualisierung von z. B. Adress- und Stammdaten einer Rechnungsadresse ist das Synchronhalten der Daten
    sinnvoll.

    ![take on records + synchro](\assets\link-lists\take on records + synchro.png "take on records + synchro")

3. <span style="color:#0b5394">**Funktion "Datensatz löschen / duplizieren, wenn verknüpfter Datensatz gelöscht / dupliziert wird"**</span>  
Wird der Switch dieser Funktion aktiviert, wird der betreffende Datensätz gelöscht oder dupliziert, sobald der
Hauptdatensatz gelöscht wird. Wenn es sich um zusammenhängende Bewegungsdaten handelt, kann dieser Switch aktiviert
werden, um Datenmüll zu vermeiden.

Informationen zu den Möglichkeiten zu *Filter und Sortierungen* sind auf der Docs-Seite des Bausteins
[*Datensatz Liste*](/docs/record-spec-settings/grand-child-expanded/record-list.html)
zu finden.

### <span style="color:#3d85c6">Zusammenfassung</span>

Über den
[Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html)
wird eine einfache Verknüpfung mit **einem** Datensatz einer anderen Liste
geschaffen und es besteht die Möglichkeit Daten einmalig oder dauerhaft zu übernehmen, sowie den Eintrag
zu löschen oder zu duplizieren, wenn dies gleichzeitig mit dem Löschen und Duplizieren des Hauptdatensatz
erfolgt.

---

## <span style="color:#0b5394">Verknüpfung über den Baustein *Datensatz Liste*</span>

Der
[*Datensatz Liste*](/docs/record-spec-settings/grand-child-expanded/record-list.html)
bietet die Möglichkeit sich mehrere Datensätze einer anderen Liste anzeigen zu lassen und über die
Verknüpfung weitere zusammengehörige Datensätze zu erstellen.

Ähnlich wie bei dem
[Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html)
wird eine passende Bezeichnung und mit "Verknüpfung über" der Baustein mit der gewünschten Liste verknüpft.

Über die Funktion "Verknüpfung über" wir der
[*Datensatz Liste*](/docs/record-spec-settings/grand-child-expanded/record-list.html)
über einen
[Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html)
eine eine eindeutige Zuordnung aufgebaut.

![record list settings](\assets\link-lists\record list settings.png "record list settings")

Soll sich auf einen dritten Datensatz bezogen werden, wird es nicht mit der Funktion "Verknüpfung über" 
funktionieren, da sich hierüber immer ausschließlich auf den eigenen Datensatz bezogen wird. Ist also in
der Liste eine Verknüpfung mit einer Stammdatenliste vorhanden und es wurde eine weitere Liste mit Stammdaten
erstellt, die dieser Liste angehört, dann muss über *Filter und Sortierung* ein eindeutiger Zusammenhang
herstellt werden. Dies bedeutet konkret es wurde eine "Verknüpfung mit" gewählt und sowohl in der verknüpften
Liste als auch in dieser Liste ein
[Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html)
eingebaut, der auf den gleichen Datensatz verweist, über die die Daten verknüpft werden können. In *Filter
und Sortierung* wählt man den Zieldatensatz aus der verknüpften Liste aus und nutzt der Operator =B als
Filterkriterium aus. =B bedeutet = Baustein. Also der Baustein *Datensatz* soll dem Baustein *Datensatz*
aus meiner Liste entsprechen.

<span style="color:#3d85c6">**Beispiel für "Verknüpfung über":**</span>

Es sind zwei Kacheln mit den Namen "Aufmaß" und "Aufmaßpositionen" (Hilfskachel) vorhanden. In der Aufmaßliste
sollen nun die dazugehörigen Aufmaßpositionen erfasst werden. In den Aufmaßpositionen wurder der
[Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html)
eingebaut, welcher mit den Aufmaßen verknüpft ist. In "Verknüpfung über" kann jetzt die Kachel "Aufmaß" ausgewählt
werden.

<span style="color:#3d85c6">**Beispiel für Verknüpfung mit dem Filter =B:**</span>

In dem Arbeitsbereich sind drei Kacheln mit den Namen "Kunde", "Liste Ansprechpartner Kunde" und "Bauvorhaben"
vorhanden. Sowohl die Bauvorhaben, als auch die Ansprechpartner sind mit den Kunden verknüpft. Zum Anzeigen der
Ansprechpartner in der Kundenliste kann aufgrund der direkten Verknüpfung die "Verknüpfung über" gewählt werden.

Zur Verknüpfung der Ansprechpartner in der Bauvorhaben Liste wird der Operator =B in der Filterung benötigt. In
den Bauvorhaben ist die Verknüpfung zum Kunden mit dem Baustein *Datensatz* vorhanden. Als nächstes wird in "Verknüpfung
mit" die Kachel "Ansprechpartner" ausgewählt. Unter *Filter und Sortierung* wird der Operator =B gesetzt, als Beispiel:
Kunde =B Auftraggeber. Übersetzt bedeutet es in der Kachel "Ansprechpartner" gibt es den Datensatz "Kunde". In der
Kachel "Bauvorhaben" gibt es den Baustein "Auftraggeber".

### <span style="color:#3d85c6">Art der Darstellung: Link zur Liste</span>

Der
[*Datensatz Liste*](/docs/record-spec-settings/grand-child-expanded/record-list.html)
kann auch als einfacher Link ohne Vorschau angezeigt werden. Im Standard wird nur der Name der Verknüpfung angezeigt,
sowie die Anzahl der verknüpften Datensätze.

Zusätzlich kann für den Baustein *Datensatz Liste* ein Badge eingestellt werden. Ein Badge ist entweder die Anzeige der Anzahl der beinhalteten Datensätze oder die Summe eines bestimmten Baustein. Wählt man die Variante
"Summe über einen Baustein", kann in "Summe über" der entsprechende Baustein ausgewählt werden. Vorgeschlagen zur Auswahl stehen nur verwendete Bausteine aus der verknüpften Kachel. Mögliche auswählbare Bausteine:
- [Baustein *Nummer*](/docs/record-spec-settings/grand-childs-form/number.html)
- [Baustein *Zeitspanne*](/docs/record-spec-settings/grand-childs-form/interval.html)
- [Baustein *Formel*](/docs/record-spec-settings/grand-child-expanded/formular.html)
- Filter
- Datensatz-Verknüpfungen

Für eine eindeutigere Anzeige kann ein *Summen Suffix* sowie die *Anzahl der Nachkommastellen* festgelegt werden.

![record list settings2](\assets\link-lists\record list settings2.png "record list settings2")

### <span style="color:#3d85c6">Art der Darstellung: Eingebettete Liste</span>

Wird in den Einstellungen des Bausteins die "Art der Darstellung" auf "eingebettete Liste" geändert, wird eine Vorschau
der verknüpften Datensätze angezeigt. Im Standard ist die "Anzahl der Datensätze in Vorschau" auf 3 eingestellt. Die
Anzahl kann beliebig angepasst werden. Die angezeigten Daten in der Vorschau entsprechen der Vorschau in den Listeneinstellung
der verknüpften Liste.

**Beispiel einer eingebetteten Liste:**
![record list settings3](\assets\link-lists\record list settings3.png "record list settings3")
---

## <span style="color:#0b5394">Schnellerfassung für den Baustein *Datensatz Liste*</span>

Wird ein
[*Datensatz Liste*](/docs/record-spec-settings/grand-child-expanded/record-list.html)
als *eingebettete Liste* verwendet kann die Funktion einer Schnellerfassung, aktiviert werden. Dies ist eine
charmante Art und Weise Einträge für die verknüpfte Liste in der aktuellen Kachel zu erstellen.

Zunächst muss im
[Designmodus in den Einstellungen der Kachel](/docs/design-mode-settings.html#kachel)
die Funktion "Schnellerfassung aktivieren" aktiviert werden. Dazu besteht die Möglichkeit die Schnellerfassung
ausschließlich bei einer Verknüpfung über einen bestimmten Baustein zu aktivieren.

Falls gewisse Bausteine für die Schnellerfassung nicht relevant sind, empfehlen wir es der
Einfachkeit halber. Ein typisches Beispiel hierfür sind die Datensatz Verknüpfung, welche beim Anlegen
durch die Datensatz-Verknüpfung automatisch gefüllt werden, sowie eventuell zu übernehmende Daten des verknüpften
Datensatzes.

Dass die Schnellerfassung aktiviert wurde erkennt man daran, dass der Button zum erfassen eines neuen Datensatzes
in der verknüpften Liste ein grüner Balken geworden ist. In der aktuellen Liste äußert es sich durch den grünen
Button `+ Neu`.