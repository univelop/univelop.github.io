---
layout: title
title: Release Version 2.4.0
nav_order: 50
parent: Changelog
---

## <span style="color:#0b5394">**Bausteine**</span>

### <span style="color:#0b5394">**Zellenwerte per Drag & Drop verschieben**</span>

In der klassischen Tabellenansicht könnt ihr einzelne Zellenwerte jetzt per Drag & Drop verschieben. Die Funktion lässt sich über eine Einstellung aktivieren. Rein lesende Zellenwerte, wie z. B. Text-Formel-Bausteine, sind nicht per Drag & Drop verschiebbar.

![drag and drop table](/assets/changelog/2-4/drag-drop-table.png)

### <span style="color:#0b5394">**Dynamische Höhe im Editor-Baustein**</span>

Der Editor-Baustein unterstützt jetzt eine dynamische Höhe: Statt fester Höhe passt sich die Ansicht automatisch an den gesamten Inhalt an.

### <span style="color:#0b5394">**Benutzerdefinierte Druckgröße**</span>

Bild-, Zeichnungs-, QR-Code- und KI-Bilderkennungs-Bausteine könnt ihr nun mit einer benutzerdefinierten Druckgröße in Zentimetern versehen. Wird nur eine Seite angegeben, skaliert das Bild automatisch im passenden Seitenverhältnis.

### <span style="color:#0b5394">**Farbwähler im Editor**</span>

Der Editor-Baustein nutzt ab sofort denselben Farbwähler wie Status- und Auswahl-Felder für Text- und Hintergrundfarbe. So könnt ihr eure Workspace-Farben direkt beim Formatieren von Texten auswählen.



## <span style="color:#0b5394">**Workflows**</span>

### <span style="color:#0b5394">**Neuer Schritt "Mitgliederrolle ändern"**</span>

Mit dem neuen Workflow-Schritt "Mitgliederrolle ändern" könnt ihr die Rolle eines Mitglieds automatisiert anpassen. Unzulässige Rollenwechsel bei Admins und Besitzern werden dabei automatisch verhindert.

![member role change](/assets/changelog/2-4/member-role-change.png)

### <span style="color:#0b5394">**Zeichenkodierung bei "XML zu JSON"**</span>

Der Workflow-Schritt "XML zu JSON" unterstützt ab sofort eine einstellbare Zeichenkodierung für die Eingabe, sodass sich auch XML-Dateien mit abweichendem Encoding korrekt verarbeiten lassen.

## <span style="color:#0b5394">**Verschiedenes**</span>

### <span style="color:#0b5394">**Anteilige Preisvorschau im Lizenz-Dialog**</span>

Im Lizenz-Dialog seht ihr jetzt eine korrekte Vorschau des anteiligen Preises, bevor ihr eine Lizenzänderung bestätigt. Die Vorschau zeigt getrennt den künftigen Betrag pro Abrechnungszyklus und die einmalige Ausgleichszahlung für die laufende Periode.

![license price preview](/assets/changelog/2-4/license-price-preview.png)

### <span style="color:#0b5394">**Vollbildansicht für Datensätze**</span>

Die Vollbildansicht für Datensätze lässt sich nun unabhängig von der Bildschirmgröße nutzen, nicht mehr nur auf großen Displays.

## <span style="color:#0b5394">**Weitere Änderungen**</span>

-   Datensatz-Auswahl lässt sich in der klassischen Tabellenansicht wieder fehlerfrei setzen und leeren
-   Kanban-Vorschau im Eintrag an die Baustein-Sektion angeglichen
-   Zurück-Geste des Browsers im Design-Modus und beim Bearbeiten von Workflows deaktiviert
-   Workflow-Erstellung und Label-Verwaltung nur noch mit Schreibrechten sichtbar
-   PDFs im Workflow-Schritt "E-Mails abrufen" werden nicht mehr fälschlich als eingebettete Bilder eingeordnet
-   Admins können Workflows im Design-Modus auch bei aktivierter anderer Vorschau-Rolle bearbeiten
-   Maximale Zeichenanzahl für Segment-Optionen von 15 auf 20 erhöht
-   Verschieben von Kacheln in globale, für alle sichtbare Ordner auf Admins und Eigentümer beschränkt
