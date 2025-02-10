---
layout: title
title: Datensatz
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 1
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/record.html
---

Mit dem Baustein _Datensatz_ wird eine einfache Verknüpfung zu einem einzelnen Datensatz einer anderen Liste aus dem
Arbeitsbereich hergestellt.

![recordPicker](\old_assets\record-spec-settings\recordpicker.png 'recordPicker')

1. Verknüpfung mit:
   Mittels dieser Einstellung wird festgelegt aus welcher Liste ein Datensatz ausgewählt werden soll.

2. Filter und Sortierung:
   Es kann anhand der Werte in der verknüpften Liste das angezeigte Ergebnis vorgefiltert werden.
   Mittels =B Filter ist es sogar dynamisch auf Grundlage der eigenen Werte möglich.

3. Werte des verknüpften Datensatzes übernehmen:
   Es ist möglich einmalig oder synchron Werte aus dem verknüpften Datensatz in diesen zu übernehmen.
   Beim Artikel kann z.B. die Einheit übernommen werden.

4. Datensatz initial setzen:
   Wenn die Auswahl nur einen Datensatz zulassen würde, würde dieser automatisch gesetzt werden.

5. Mit aktuellem Benutzer vorbelegen:
   Beim Erstellen eines neuen Eintrages wird der aktuelle Benutzer eingetragen, sofern dieser zu den angegebenen Filtern passt.

6. Diesen Datensatz löschen/duplizieren, wenn verknüpfter Datensatz gelöscht oder dupliziert wird:
   Mittels diesem Schalter wird die im Titel beschriebene Funktion aktiviert. Sie verheiratet die Datensätze
   ebenso miteinander, was Auswirkungen auf die Datensatzsperre und das Änderungsprotokoll hat.
   Die Sperre erfolgt über den übergeordneten Datensatz und das Änderungsprotokoll ist ebenso dort zu finden.

Bei der Nutzung des Datensatz Bausteins wird beim Klick auf den Baustein die Datensatz-Suche geöffnet.
Hier können die Datensätze durchgescrollt oder nach ihnen gesucht werden.

![recordPicker2](\old_assets\record-spec-settings\recordpicker2.png 'recordPicker2')

Die Verknüpfungsmöglichkeiten sind in den Docs unter
Verknüpfen von Listen
zu finden.
