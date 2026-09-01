---
layout: title
title: Release Version 2.6.0
nav_order: 48
parent: Changelog
---

## <span style="color:#0b5394">**Komponenten**</span>

### <span style="color:#0b5394">**Datensatzsuche**</span>

Die Datensatzsuche lässt sich nun per Tastatur bedienen: Mit den Pfeiltasten navigiert ihr durch die gefundenen Einträge. So wählt ihr Datensätze deutlich schneller aus, ganz ohne die Maus zu benutzen.

![record search keyboard navigation](/assets/changelog/2-6/record-search-keyboard-navigation.png)

## <span style="color:#0b5394">**Bausteine**</span>

### <span style="color:#0b5394">**Kanban-Baustein**</span>

Der Kanban-Baustein lässt sich jetzt auch dann öffnen, wenn ihr nur Leserechte darauf habt. Karten lassen sich weder per Drag & Drop zwischen den Spalten verschieben noch bearbeiten, und neue Einträge lassen sich darüber nicht anlegen. Filter bleiben dabei nutzbar und der Titel bleibt beim Filtern sichtbar.

### <span style="color:#0b5394">**Eingebetteter Datensatz-Baustein**</span>

Im eingebetteten Datensatz-Baustein können ab sofort nur noch Datensätze als Kind-Element ausgewählt werden, die tatsächlich zum übergeordneten Datensatz gehören. Das verhindert inkonsistente Verknüpfungen.

### <span style="color:#0b5394">**Bild-Link-Baustein**</span>

![image link thumbnail](/assets/changelog/2-6/image-link-thumbnail.png)
Der Bild-Link-Baustein zeigt Vorschaubilder nun direkt als Thumbnail an.

## <span style="color:#0b5394">**Workflows**</span>

### <span style="color:#0b5394">**Web-Request-Schritt**</span>

Die Variablen des Web-Request-Schritts und des Schritts "Antwort an E-Mail senden" (Status, Header, Body) tauchen ab sofort im Formel-Editor unter "Variablen" auf, statt nur direkt in Ausdrücken nutzbar zu sein.

## <span style="color:#0b5394">**Verschiedenes**</span>

### <span style="color:#0b5394">**Rechnungsstatus in der Abrechnung**</span>

In den Abrechnungseinstellungen wird der Zahlungsstatus von Rechnungen nun direkt angezeigt. So seht ihr auf einen Blick, welche Rechnungen bereits bezahlt sind. Der Abschnitt für die Rechnungen ist nun für die Übersichtlichkeit aufgeteilt in die Abschnitte "Zahlungsmanagement" und "Rechnungen". 

![invoice status billing](/assets/changelog/2-6/invoice-status-billing.png)

## <span style="color:#0b5394">**Weitere Änderungen**</span>

-   Fehler beim Ermitteln der Titelfarbe eines Datensatzes behoben
-   Rechteprüfung bei Berechtigungsfiltern auf Mitglieder-Werte korrigiert
-   Duplizieren eines Datensatzes friert nicht mehr ein, wenn dessen Status ihn sperrt
-   Auswahl in Einstellungs-Dialogen schließt nicht mehr versehentlich den Einstellungsbildschirm
-   Kontraste im Formel-Editor verbessert
-   Farbe der Fehler-Badges vereinheitlicht
