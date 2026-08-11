---
layout: title
title: Release Version 2.5.0
nav_order: 49
parent: Changelog
---

## <span style="color:#0b5394">**Komponenten**</span>

### <span style="color:#0b5394">**Fehlerbericht für Excel/CSV-Importe**</span>

Beim Import von Excel- und CSV-Dateien könnt ihr euch nun einen herunterladbaren Fehlerbericht erzeugen lassen. Der Import-Dialog zeigt außerdem den aktuellen Fortschritt und die Anzahl nicht verarbeitbarer Werte schon vor dem eigentlichen Import an.

## <span style="color:#0b5394">**Bausteine**</span>

### <span style="color:#0b5394">**Sprache-zu-Text und Text-zu-Sprache für den KI-Agent-Baustein**</span>

Der KI-Agent-Baustein unterstützt ab sofort Sprache-zu-Text und Text-zu-Sprache über verwaltete KI-Integrationen, auch im Web. Audioaufnahmen lassen sich damit direkt transkribieren lassen, ohne eine eigene KI-Anbindung konfigurieren zu müssen.

### <span style="color:#0b5394">**Neue Formel-Variable "Technischer Name der Liste"**</span>

In Formeln lässt sich nun der technische Name der Liste, zu der ein Datensatz gehört, direkt als Variable verwenden. Wird die Liste umbenannt, folgt der Wert automatisch dem neuen technischen Namen.

## <span style="color:#0b5394">**Workflows**</span>


### <span style="color:#0b5394">**Prüfung auf ungültige Baustein-Referenzen in Workflow-Schritten**</span>

Workflow-Schritte werden jetzt automatisch darauf geprüft, ob referenzierte Bausteine noch existieren. So fallen leere oder ungültige Baustein-Referenzen schneller auf, bevor sie zu Fehlern im laufenden Workflow führen.

## <span style="color:#0b5394">**Verschiedenes**</span>

### <span style="color:#0b5394">**Statische IP für Mail-Integrationen**</span>

Für SMTP- und IMAP-Integrationen lässt sich nun eine statische IP-Adresse aktivieren. Das erleichtert es, den Mailserver-Zugriff eures Unternehmens gezielt für Univelop freizuschalten.


## <span style="color:#0b5394">**Weitere Änderungen**</span>

-   Tabellen-Aktionsmenü wird ausgeblendet, wenn keine Aktion verfügbar ist
-   Fehlermeldung bei der Baustein-Einrichtung "Farbe registrieren" verbessert
-   Fehlermeldung bei fehlender Baustein-Spezifikation korrigiert
-   Hinweistext und Fehlermeldung bei ungültigen Nutzererwähnungen in Kommentaren verbessert
