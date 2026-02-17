---
layout: title
title: Artikel Scanner
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 28
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/article%20scanner.html
---

Der Baustein _Artikel Scanner_ ermöglicht die Erfassung von Artikelbewegungen mittels eines Endgeräts mit Scanlaser. Er unterstützt zwei Modi: _Artikel hinzufügen_ (neuer Warenausgang) und _Artikel abarbeiten_ (bestehende Positionen abarbeiten).

## Voraussetzungen

- Ein Endgerät mit Scanlaser (nicht mit Smartphone-Kamera bedienbar). Die Univelop-App muss installiert sein (Android oder iOS).
- Das Endgerät muss nach dem Scanvorgang einen automatischen Tab oder Enter senden, um die Suchfunktion auszulösen. Die Konfiguration erfolgt in den Geräteeinstellungen (z. B. bei Honeywell-Geräten über den Befehl `/t`).
- Zwei zusätzliche Listen werden benötigt: eine für die Artikelbewegungen und eine für die Warenausgänge.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Verknüpfung mit** — Die Liste, in die die Artikelbewegungen geschrieben werden.
2. **Verknüpfung über** — Die Liste, aus der die Warenausgänge angezeigt werden.
3. **Modus** — Wählt zwischen _Artikel hinzufügen_ und _Artikel abarbeiten_.
4. **Menge vorbelegen** — Die Standardmenge, die bei jedem Scanvorgang vorbelegt wird. Im Modus _Artikel abarbeiten_ kann hier auch eine Formel verwendet werden (z. B. `menge_angefragt - menge_ausgegeben`).
5. **Mengenbaustein** — Der Baustein in der Artikelbewegung, in den die gescannte Menge eingetragen wird.
6. **Zusätzlicher Mengenbaustein** — Ein optionaler zweiter Mengenbaustein.
7. **Artikel-Baustein** — Der _Datensatz_-Baustein, der den Artikel referenziert.
8. **Zusätzlicher Scannerbaustein** — Ein optionaler weiterer Baustein, der ebenfalls gescannt werden kann (z. B. Lagerplatz).
9. **Filter und Sortierung** — Im Modus _Artikel abarbeiten_: Filtert die offenen Positionen (z. B. Differenz > 0).
10. **Menge aufsummieren, statt überschreiben** — Nur im Modus _Artikel abarbeiten_: Summiert mehrere Scanvorgänge auf, statt den Wert zu überschreiben.
11. **Scan zur Artikelbestätigung erzwingen** — Erwartet in jedem Fall einen Scanvorgang; manuelle Eingabe ist nicht möglich.
12. **Automatisch bestätigen** — Bestätigt den Scanvorgang automatisch nach dem Eintragen aller Werte.

## Funktionsweise

### Modus: Artikel hinzufügen

In diesem Modus wird ein Artikel gescannt und als neue Artikelbewegung erfasst. Der Scanner überträgt die Nummer in die Suche, der gefundene Artikel wird eingetragen, und nach Bestätigung wird die Artikelbewegung gespeichert.

Dieser Modus eignet sich, wenn Warenausgaben nicht elektronisch angefordert werden (z. B. per E-Mail). Ein Warenausgang wird manuell angelegt und die gescannten Artikel werden dem Ausgang zugeordnet.

### Modus: Artikel abarbeiten

In diesem Modus werden bestehende offene Positionen abgearbeitet. Der Baustein zeigt den nächsten zu scannenden Artikel an und die vorbelegte Menge wird aus einer Formel berechnet. Mehrere Scanvorgänge können aufsummiert werden.

Dieser Modus eignet sich, wenn Bestellungen elektronisch in Univelop erfasst wurden und die physische Ausgabe dokumentiert werden soll.

### Scanvorgang

Der Scanvorgang läuft wie folgt ab:

1. Der Barcode wird gescannt und die Nummer in das Suchfeld übertragen.
2. Der Artikel wird automatisch gesucht und zugeordnet.
3. Die vorbelegte Menge kann über Plus/Minus angepasst werden.
4. Optional wird ein zusätzlicher Baustein (z. B. Lagerplatz) gescannt.
5. Per _Hinzufügen_ oder _Hinzufügen und Fertig_ wird der Vorgang abgeschlossen.

Die Reihenfolge der Scanvorgänge ist frei wählbar — über das vorangestellte Icon kann bestimmt werden, welcher Baustein als nächstes gescannt wird (blau = nächster Scan).

## Hinweise

- Die Konfiguration des automatischen Tab/Enter nach dem Scanvorgang ist geräte- und herstellerabhängig. Die Dokumentation des jeweiligen Herstellers enthält entsprechende Anleitungen.
- Im Modus _Artikel abarbeiten_ kann die Funktion _Menge aufsummieren_ genutzt werden, um Teillieferungen über mehrere Scanvorgänge abzubilden.

## Verwandte Bausteine

- [QR-Code / Barcode](/docs/bricks/advanced/qr-barcode) — Für die Anzeige von QR-Codes und Barcodes
- [Datensatz Liste](/docs/bricks/advanced/record-list) — Für die Anzeige der offenen Positionen
- [Datensatz](/docs/bricks/advanced/record-picker) — Für die Verknüpfung mit Artikelstammdaten
