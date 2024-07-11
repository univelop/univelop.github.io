---
layout: default
title: Verknüpfen von Listen
nav_order: 10
---

# <span style="color:#0b5394">**Verknüpfen von Listen**</span>

## <span style="color:#0b5394">Beziehungen von Datensätzen zueinander</span>

Es gibt zwei Arten von Beziehungen zwischen Daten. Die erste ist eine 1:1 Beziehung, die
zweite eine 1:n Beziehung, wobei n für eine beliebige Zahl steht.

### <span style="color:#0b5394">1:1 Beziehungen</span>

Eine 1:1 Beziehung beschreibt die direkte Abhängigkeit zweier Elemente voneinander.
In unserem Fall sprechen wir von zwei Datensätzen. Diese stehen in direkter Verbindung
miteinander und haben eine 1:1 Beziehung.

|        Datensatz 1         |             Datensatz 2             |
| :------------------------: | :---------------------------------: |
|   Mitarbeiter Herr Meyer   | Führerschein XYLK (von Herrn Meyer) |
| Abteilung Univelop Support |   Mailadresse support@univelop.de   |
|   Ansprechpartner/in Kim   |     Telefonnummer 0170 123 456      |
|            ...             |                 ...                 |

Die zuvor genannten Beispiele lassen erkennen, dass die Datensätze in dieser Konstellation nur
jeweils 1x existieren und in direkter Verbindung miteinander stehen. Möchte man diese
verknüpfen, kann auf beiden Seiten ein Datensatz Baustein verwendet.

### <span style="color:#0b5394">1:n Beziehungen</span>

Man spricht von einer 1:n Beziehung, wenn auf einer Seite ein Datensatz gemeint ist
und auf der anderen Seite eine Liste von Datensätzen. Die Liste von Datensätzen kann
beliebig lang sein.

|           Parent            |             Child 1              |             Child 2             |
| :-------------------------: | :------------------------------: | :-----------------------------: |
|    Firma Holzapfel GmbH     |     Mitarbeiter Herr Müller      |    Mitarbeiterin Frau Weber     |
|    Lieferschein L 456321    |         Pos. 1, 10 Äpfel         |        Pos. 2, 20 Birnen        |
| Firmenwagen Kennz. IZ U 123 |      Wartung 2015, 500 EUR       |      Wartung 2017, 731 EUR      |
|  Artikel BA123, Apfel rot   | Warenausgang 01.01.2023, 10 Stk. | Warenausgang 05.01.2023, 5 Stk. |
|             ...             |               ...                |               ...               |

Wir sprechen bei 1:n Beziehungen gerne von Parent / Child(s) oder Mutter- & Tochter-Datensätzen.
Eine Firma kann mit mehreren Mitarbeitern angelegt werden, ein Lieferschein hat mehr als eine Position
und ein Auto hat regelmäßig durchzuführende Wartungen, die anstehen.

In Univelop lösen wir diese dynamischen Verhältnisse mit zwei Liste. In Liste 1 werden die Daten
des Parent gepflegt, in Liste zwei die Daten der Kinder. Es wird also zum Beispiel eine Liste mit
Fahrzeugen benötigt und eine Liste mit Reparaturen. Zu Lösung dieses Verhältnisses wird der
Baustein Datensatz-Liste im Parent verwendet und der Baustein Datensatz im Child.

---

## <span style="color:#0b5394">Arten Daten in Univelop zu verknüpfen</span>

In Univelop unterscheiden wir prinzipiell drei Arten von Verknüpfungen.

1. <span style="color:#0b5394">**Datensatz**</span>
   Eine einfache Datensatz Verknüpfung bedeutet, dass **_ein_** Datensatz aus einer anderen Liste gepickt werden kann.
   Es kann zum Beispiel meine Liste Aufträge durch einen Datensatz Baustein mit der Liste Kostenstellen verbunden werden
   und ich bin somit in der Lage in meinen Aufträgen die dazu passende Kostenstelle zu picken.

2. <span style="color:#0b5394">**Datensätze**</span>
   Mit der Datensätze (Mehrzahl) Funktion wird die einfache Datensatz Funktion um n Datensätze erweitert.
   Es ist möglich mehr als nur einen Datensatz aus einer verknüpften Liste zu picken.
   Angenommen meine Aufträge haben Sparten, kann pro Auftrag mehr als eine Sparte gepickt werden,
   also Strom, Wasser und Gas - statt, dass ich mich wie beim Datensatz Baustein entscheiden müsste.

3. <span style="color:#0b5394">**Datensatz-Liste**</span>
   Durch eine funktionelle Liste von Datensätzen, kann ich beliebig viele Verknüpfungen zu einer Liste herstellen.
   Eine Liste von Datensätzen finden wir in den Bausteinen Datensatz-Liste, Kalender, Tabelle, Terminplaner und Matrix.

Zumeist werden diese Verknüpfungen in Unterlisten erstellt, da dort verschiedene Informationen zusammengeführt werden.

**Beispiel**
Ein einfacher Lieferschein (Warenausgänge) umfasst üblicherweise Stammdaten, wie ein Datum und Empfänger, sowie die gelieferten Produkte als Liste.
Der Belegkopf Lieferschein kann als Liste in Univelop verstanden werden. Die Produkte - klassische Stammdaten - finden sich ebenfalls in einer separaten Liste wieder.
Durch eine "Hilfsliste", die Artikelbewegungen genannt werden könnte, können die Verknüpfung zum Lieferschein und die Auswahl des Artikels erfasst werden.

Die Liste der Artikelbewegungen wird nun zum zentralen Auswertungselement. Aus Sicht des Lieferschein kann ein Blick in die Bewegungen geworfen werden
und es ist auf einen Blick ersichtlich welche Artikel in welcher Menge auf diesem Lieferschein stehen.
Aus Sicht des Artikel ist es nun möglich in die Bewegungen zu schauen und dort Abgänge für den Lagerbestand zu ermitteln und sich den Absatz
für bestimmte Perioden anzeigen zu lassen.

![linklistexample](\assets\link-lists\linklistexample.png 'linklistexample')

---

## <span style="color:#0b5394">Verknüpfung über den Baustein _Datensatz_</span>

Wie der Name schon sagt, kann über den
[Baustein _Datensatz_](/docs/record-spec-settings/grand-child-expanded/record.html)
auf einen Datensatz zugegriffen werden. Genauer gesagt auf einen Datensatz einer anderen Liste.

Nachdem der
[Baustein _Datensatz_](/docs/record-spec-settings/grand-child-expanded/record.html)
einer Liste hinzugefügt wurde, können verschiedene Einstellungen in Bezug auf die weiteren
Funktionen des Bausteins vorgenommen werden:

![brick record settings](\assets\link-lists\brick record settings.png "brick record settings")

1. <span style="color:#0b5394">**Baustein _Datensatz_ Funktion "Verknüpfung mit"**</span>  
   Damit der Baustein einwandfrei funktioniert, muss in den Einstellungen unter "Verknüpfung mit" die
   Verknüpfung zu einer anderen Liste vorgenommen werden. Aus dieser Liste kann dann ein Datensatz ausgewählt werden.

2. <span style="color:#0b5394">**Werte des verknüpften Datensatzes übernehmen**</span>  
   Ebenso besteht die Möglichkeit Daten aus dem verknüpften Datensatz in andere Bausteine zu übernehmen.
   Dies hat den Vorteil, dass die Daten in der aktuellen Liste zur Verfügung gestellt werden, ohne dass diese
   erneut eingeben werden müssen und somit eventuelle Übertragungsfehler reduziert werden.

    Dabei ist darauf zu achten, dass die zu Quell- und Zielbausteine der Liste den gleichen Typ aufweisen
    müssen, bedeutet nur
    [Textfeld](/docs/record-spec-settings/grand-childs-form/text.html)
    zu Textfeld,
    [Datum](/docs/record-spec-settings/grand-childs-form/date.html)
    zu Datum etc. Alle Werte jedoch könnten auch in ein Textfeld geschrieben werden.

    Darüber hinaus können die übernommenen Daten synchron gehalten werden. Bedeutet, wird der Switch nicht
    aktiviert, werden die Daten einmalig mit der Auswahl des Datensatzes übernommen. Beim synchron halten werden
    die Daten des Mutter-Datensatzes in diesen Datensatz immer aktuell gehalten.

    Hierbei muss in jedem Einzelfall abgewogen werden, ob die Daten synchron gehalten werden sollen oder nicht.
    Zum Beispiel zum Erstellen einer Kaufhistorie sollten die aus dem Artikel übernommenen Preise nicht synchron sein,
    da diese bei aktivierter Synchronisation bei jeder Änderung in den Artikelstammdaten ebenfalls überschrieben werden.
    Bei der Aktualisierung von z. B. Adress- und Stammdaten einer Rechnungsadresse ist das Synchronhalten der Daten
    sinnvoll.

    ![take on records + synchro](\assets\link-lists\take on records + synchro.png "take on records + synchro")

3. <span style="color:#0b5394">**Funktion "Datensatz löschen / duplizieren, wenn verknüpfter Datensatz gelöscht / dupliziert wird"**</span>  
   Wird der Switch dieser Funktion aktiviert, wird der betreffende Datensatz gelöscht oder dupliziert, sobald der
   Hauptdatensatz gelöscht oder dupliziert wird. Wenn es sich um zusammenhängende Bewegungsdaten handelt, kann dieser Switch aktiviert
   werden, um Datenmüll zu vermeiden. Beim Beispiel des Lieferscheins und der Artikelbewegungen macht es durchaus Sinn in den
   Artikelbewegungen im Datensatz Baustein Lieferschein diesen Schalter zu aktivieren, damit die Bewegungen gelöscht werden, sobald der
   Lieferschein gelöscht wird.

Informationen zu den Möglichkeiten zu _Filter und Sortierungen_ sind auf der Docs-Seite des Bausteins
[_Datensatz Liste_](/docs/record-spec-settings/grand-child-expanded/record-list.html)
zu finden.

## <span style="color:#3d85c6">Zusammenfassung</span>

Über den
[Baustein _Datensatz_](/docs/record-spec-settings/grand-child-expanded/record.html)
wird eine einfache Verknüpfung mit **einem** Datensatz einer anderen Liste
geschaffen und es besteht die Möglichkeit Daten einmalig oder dauerhaft zu übernehmen, sowie den Eintrag
zu löschen oder zu duplizieren, wenn dies gleichzeitig mit dem Löschen und Duplizieren des Hauptdatensatz
erfolgt.

---

## <span style="color:#0b5394">Verknüpfung über den Baustein _Datensatz Liste_</span>

Der
[_Datensatz Liste_](/docs/record-spec-settings/grand-child-expanded/record-list.html)
bietet die Möglichkeit sich mehrere Datensätze einer anderen Liste anzeigen zu lassen und über die
Verknüpfung weitere zusammengehörige Datensätze zu erstellen.

Ähnlich wie bei dem
[Baustein _Datensatz_](/docs/record-spec-settings/grand-child-expanded/record.html)
wird eine passende Bezeichnung und mit "Verknüpfung mit" der Baustein mit der gewünschten Liste verknüpft.

Über die Funktion "Verknüpfung über" wir der
[_Datensatz Liste_](/docs/record-spec-settings/grand-child-expanded/record-list.html)
über einen
[Baustein _Datensatz_](/docs/record-spec-settings/grand-child-expanded/record.html)
eine eindeutige Zuordnung aufgebaut.

![record list settings](\assets\link-lists\record list settings.png "record list settings")

Soll sich auf einen dritten Datensatz bezogen werden, wird es nicht mit der Funktion "Verknüpfung über"
funktionieren, da sich hierüber immer ausschließlich auf den eigenen Datensatz bezogen wird. Ist also in
der Liste eine Verknüpfung mit einer Stammdatenliste vorhanden und es wurde eine weitere Liste mit Stammdaten
erstellt, die dieser Liste angehört, dann muss über _Filter und Sortierung_ ein eindeutiger Zusammenhang
herstellt werden. Dies bedeutet konkret es wurde eine "Verknüpfung mit" gewählt und sowohl in der verknüpften
Liste als auch in dieser Liste ein
[Baustein _Datensatz_](/docs/record-spec-settings/grand-child-expanded/record.html)
eingebaut, der auf den gleichen Datensatz verweist, über die die Daten verknüpft werden können. In _Filter
und Sortierung_ wählt man den Zieldatensatz aus der verknüpften Liste aus und nutzt der Operator =B als
Filterkriterium aus. =B bedeutet = Baustein. Also der Baustein _Datensatz_ soll dem Baustein _Datensatz_
aus meiner Liste entsprechen.

<span style="color:#3d85c6">**Beispiel für "Verknüpfung über":**</span>

Es sind zwei Kacheln mit den Namen "Aufmaß" und "Aufmaßpositionen" (Hilfskachel) vorhanden. In der Aufmaßliste
sollen nun die dazugehörigen Aufmaßpositionen erfasst werden. In den Aufmaßpositionen wurde der
[Baustein _Datensatz_](/docs/record-spec-settings/grand-child-expanded/record.html)
eingebaut, welcher mit den Aufmaßen verknüpft ist. In "Verknüpfung über" kann jetzt die Liste "Aufmaß" ausgewählt
werden.

<span style="color:#3d85c6">**Beispiel für Verknüpfung mit dem Filter =B:**</span>

In dem Arbeitsbereich sind drei Kacheln mit den Namen "Kunde", "Liste Ansprechpartner Kunde" und "Bauvorhaben"
vorhanden. Sowohl die Bauvorhaben, als auch die Ansprechpartner sind mit den Kunden verknüpft. Zum Anzeigen der
Ansprechpartner in der Kundenliste kann aufgrund der direkten Verknüpfung die "Verknüpfung über" gewählt werden.

Zur Verknüpfung der Ansprechpartner in der Bauvorhaben Liste wird der Operator =B in der Filterung benötigt. In
den Bauvorhaben ist die Verknüpfung zum Kunden mit dem Baustein _Datensatz_ vorhanden. Als nächstes wird in "Verknüpfung
mit" die Kachel "Ansprechpartner" ausgewählt. Unter _Filter und Sortierung_ wird der Operator =B gesetzt, als Beispiel:
Kunde =B Auftraggeber. Übersetzt bedeutet es in der Kachel "Ansprechpartner" gibt es den Datensatz "Kunde". In der
Kachel "Bauvorhaben" gibt es den Baustein "Auftraggeber".

### <span style="color:#3d85c6">Art der Darstellung: Link zur Liste</span>

Der
[_Datensatz Liste_](/docs/record-spec-settings/grand-child-expanded/record-list.html)
kann auch als einfacher Link ohne Vorschau angezeigt werden. Im Standard wird nur der Name der Verknüpfung angezeigt,
sowie die Anzahl der verknüpften Datensätze.

Zusätzlich kann für den Baustein _Datensatz Liste_ eine Summe angezeigt werden. Hier lässt sich wählen zwischen der Anzahl der beinhalteten Datensätze oder der Summe über einen bestimmten Baustein. Wählt man die Variante
"Summe über einen Baustein", kann in "Summe über" der entsprechende Baustein ausgewählt werden. Vorgeschlagen zur Auswahl stehen nur verwendete Bausteine aus der verknüpften Kachel. Mögliche auswählbare Bausteine:

-   [Baustein _Nummer_](/docs/record-spec-settings/grand-childs-form/number.html)
-   [Baustein _Zeitspanne_](/docs/record-spec-settings/grand-childs-form/interval.html)
-   [Baustein _Zahlenformel_](/docs/record-spec-settings/grand-child-expanded/numberformular.html)
-   Filter
-   Datensatz-Verknüpfungen

Für eine eindeutigere Anzeige kann ein _Summen Suffix_ sowie die _Anzahl der Nachkommastellen_ festgelegt werden.

![record list settings2](\assets\link-lists\record list settings2.png "record list settings2")

### <span style="color:#3d85c6">Art der Darstellung: Eingebettete Liste</span>

Wird in den Einstellungen des Bausteins die "Art der Darstellung" auf "eingebettete Liste" geändert, wird eine Vorschau
der verknüpften Datensätze angezeigt. Im Standard ist die "Anzahl der Datensätze in Vorschau" auf 3 eingestellt. Die
Anzahl kann beliebig angepasst werden. Die angezeigten Daten in der Vorschau entsprechen der Vorschau in den Listeneinstellung
der verknüpften Liste.

**Beispiel einer eingebetteten Liste:**
![record list settings3](\assets\link-lists\record list settings3.png "record list settings3")

---

## <span style="color:#0b5394">Schnellerfassung für den Baustein _Datensatz Liste_</span>

Wird ein
[_Datensatz Liste_](/docs/record-spec-settings/grand-child-expanded/record-list.html)
als _eingebettete Liste_ verwendet kann die Funktion einer Schnellerfassung, aktiviert werden. Dies ist eine
charmante Art und Weise Einträge für die verknüpfte Liste in der aktuellen Kachel zu erstellen.
Die Einstellung wird mit dem entsprechenden Schalter im Baustein Datensatz-Liste aktiviert.

Falls gewisse Bausteine für die Schnellerfassung nicht relevant sind, empfehlen wir die Einstellung
"In der Schnellerfassung verstecken" in der verknüpften Liste zu aktivieren.
Ein typisches Beispiel hierfür sind die Datensatz Verknüpfung, welche beim Anlegen
durch die Datensatz-Verknüpfung automatisch gefüllt werden, sowie eventuell zu übernehmende Daten des verknüpften
Datensatzes.

Dass die Schnellerfassung aktiviert wurde erkennt man daran, dass der Button zum erfassen eines neuen Datensatzes
in der verknüpften Liste ein grüner Balken geworden ist. In der aktuellen Liste äußert es sich durch den
Button `+ Neu`.
