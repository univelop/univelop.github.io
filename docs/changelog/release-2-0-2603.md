---
layout: title
title: Univelop 2.0
nav_order: 54
parent: Changelog
---

## <span style="color:#0b5394">**Neues Design und überarbeitete Benutzeroberfläche**</span>

### <span style="color:#0b5394">**Neuer Welcome Screen**</span>

Der neue Welcome Screen bietet einen zentralen Überblick über alle Arbeitsbereiche. Neue Nutzer werden Schritt für Schritt begleitet, passende Solutions aus dem Store vorgeschlagen und über aktuelle Changelogs und Features auf dem Laufenden gehalten.

![welcomescreen](\assets\changelog\2-0\welcomescreen.png 'welcomescreen')


### <span style="color:#0b5394">**Neuer Homescreen**</span>

Der überarbeitete Homescreen ist aufgeräumter und klarer strukturiert. Die neue Sidebar bündelt alle wichtigen Bereiche: Einstellungen, Workflows, Komponenten hinzufügen und Rollenwechsel – alles zentral erreichbar mit weniger Klicks.

![sidebar](\assets\changelog\2-0\sidebar.png 'sidebar')

### <span style="color:#0b5394">**Neuer Designmodus**</span>

Ab sofort gibt es nur noch einen zentralen Designmodus für alle Konfigurationen: Bezeichnungen anpassen, Bausteine konfigurieren, Listenansicht einrichten und erweiterte Einstellungen vornehmen – geführt und übersichtlich an einem Ort.

![designmode](\assets\changelog\2-0\designmode.png 'designmode')

### <span style="color:#0b5394">**Univelop-Managed Integrationen für KI**</span>

KI-Funktionen in Univelop sind ab sofort ohne eigene API-Key-Konfiguration nutzbar. Univelop stellt eine verwaltete OpenAI-Integration bereit, die direkt für den „Frag ChatGPT"-Baustein, den KI-Agenten und weitere KI-Bausteine genutzt werden kann – ohne dass Nutzer oder Admins einen eigenen OpenAI-Account benötigen. Das senkt die Einstiegshürde für KI-gestützte Workflows erheblich und ermöglicht es Teams, sofort mit intelligenter Automatisierung loszulegen.

### <span style="color:#0b5394">**Arbeitsbereich Dokumentation**</span>

Admins können ihren Arbeitsbereich jetzt mit einer integrierten Dokumentation versehen. Beschreibungen, Hinweise und strukturierte Informationen lassen sich direkt im Workspace hinterlegen und die gesamte Dokumentation kann exportiert werden, um sie z. B. als Handbuch weiterzugeben oder zu archivieren.

### <span style="color:#0b5394">**Volltextsuche**</span>

Die Volltextsuche lässt sich nun feingranularer konfigurieren. Administratoren können festlegen, welche Datensätze bei der Suche beachtet werden sollen. Das spart Zeit bei der Suche und reduziert unerwünschte Treffer.

## <span style="color:#0b5394">**Komponenten**</span>

### <span style="color:#0b5394">**Kanban Board – Drag & Drop und Schnellfilter-Suche**</span>

Das Kanban Board wurde gleich in zwei Bereichen deutlich verbessert! Ab sofort lässt sich Drag & Drop gezielt ein- oder ausschalten – ideal, wenn bestimmte Einträge nicht per Ziehen verschoben werden sollen. Zusätzlich haben die Schnellfilter eine Suchleiste erhalten: Auch in großen Listen mit vielen Einträgen findet ihr jetzt blitzschnell die richtigen Einträge!

## <span style="color:#0b5394">**Bausteine**</span>

### <span style="color:#0b5394">**Ressourcen-Zuweisung**</span>

Mit dem neuen Baustein **Ressourcen-Zuweisung** lassen sich Ressourcen per Drag & Drop flexibel auf Gruppen oder Ziele verteilen. Auf der linken Seite befindet sich der Ressourcenpool mit Such- und Filterfunktion, auf der rechten Seite die konfigurierten Ziele – etwa Teams, Projekte oder Schichten. Ressourcen können direkt per Drag & Drop zugewiesen, zwischen Zielen verschoben oder wieder in den Pool zurückgezogen werden, was die manuelle Planung erheblich beschleunigt.

### <span style="color:#0b5394">**Farbauswahl-Baustein & Titelfarbe von Datensätzen**</span>

Mit dem neuen **Farbauswahl-Baustein** können Nutzer Farben direkt in einem Datensatz speichern – aus den Workspace-Farben oder als individuelle RGB-Farbe. Außerdem kann der Farbauswahl-Baustein als **Titelfarbe** eines Datensatzes festgelegt werden. Diese Farbe wird als farbiger Punkt vor dem Datensatz-Titel angezeigt – auch in der Listenansicht beim Datensatz-Baustein – und sorgt so für eine schnelle visuelle Orientierung.

### <span style="color:#0b5394">**Datumsspanne-Baustein**</span>

Der neue **Datumsspanne-Baustein** ermöglicht es, einen Zeitraum mit Start- und Enddatum in einem einzigen Baustein zu speichern. Damit lassen sich Buchungen, Reservierungen, Urlaubsanträge oder Events direkt und strukturiert erfassen.

### <span style="color:#0b5394">**Segmente-Baustein**</span>

Mit dem neuen **Segmente-Baustein** steht eine kompakte Auswahlkomponente zur Verfügung, die zwischen Schalter und Dropdown positioniert ist. Bis zu 5 Optionen lassen sich direkt inline auswählen – ohne einen Dialog zu öffnen. Einzel- und Mehrfachauswahl sind konfigurierbar, ein Häkchen-Icon zeigt die aktive Auswahl an. Ideal für schnelle, visuelle Entscheidungen direkt im Formular.

### <span style="color:#0b5394">**Dynamischer Datensatz-Baustein**</span>

Der **Dynamische Datensatz-Baustein** ist nun offiziell für alle Nutzer verfügbar. Er erlaubt es, den Datensatz als auch die referenzierte Liste dynamisch zu bestimmen, anstatt ihn fest in den Einstellungen zu hinterlegen. Das ermöglicht hochflexible Verknüpfungen, bei denen der referenzierte Datensatz von einem anderen Baustein oder einer Formel abhängt.

### <span style="color:#0b5394">**Interaktive Nummernfelder in der Listenansicht**</span>

Nummernfelder können in der Listenansicht jetzt direkt mit **+/– Schaltflächen** bearbeitet werden – ohne den Datensatz öffnen zu müssen. Das erlaubt schnelle Anpassungen, z.B. von Mengen im Kanban-Board oder in der Ressourcen-Zuweisung.

## <span style="color:#0b5394">**Workflows**</span>

### <span style="color:#0b5394">**Workflow Labels**</span>

Workflows lassen sich jetzt mit **Labels** versehen und kategorisieren. So behalten Teams auch bei wachsender Workflow-Anzahl den Überblick – durch gezielte Filterung nach Labels lässt sich schnell navigieren und die Übersicht bleibt erhalten, ohne dass mühsam durch lange Listen gescrollt werden muss.

### <span style="color:#0b5394">**Merge PDF Workflow-Schritt**</span>

Mit dem neuen **„PDF zusammenfügen"**-Schritt können mehrere zuvor generierte PDFs oder Bilder in einem Workflow zu einem einzigen Dokument zusammengeführt werden. Das Ergebnis steht als Datei zur Verfügung und kann mit dem „Speichere Datei"-Schritt direkt in einen Baustein geschrieben werden – perfekt für Berichte, Lieferscheine oder Angebote, die aus mehreren Quellen zusammengestellt werden.

### <span style="color:#0b5394">**Erfasse Benutzereingabe (neuer Workflow-Schritt)**</span>

Der neue Workflow-Schritt **„Erfasse Benutzereingabe"** ermöglicht es, den Nutzer während eines Client-Workflows nach einem Wert zu fragen – Text, Zahl, Datum oder Ja/Nein. Die Eingabe erfolgt in einem kompakten Dialog und wird direkt als Variable im weiteren Verlauf des Workflows genutzt. So lassen sich interaktive, kontextabhängige Prozesse ohne Programmierkenntnisse realisieren.

### <span style="color:#0b5394">**Workflow-Buttons Links/Rechts in der Datensatz-Vorschau**</span>

In der Listenansicht können Workflow-Buttons jetzt als **Pfeil-Schaltflächen** links oder rechts in der Datensatz-Vorschau platziert werden. Das ermöglicht das direkte Weiterschalten des Status, z. B. im Kanban-Kontext, ohne den Datensatz öffnen zu müssen – ideal für schnelle Statusänderungen im Tagesgeschäft.

### <span style="color:#0b5394">**PDFs für „Frag ChatGPT"**</span>

Der Workflow-Schritt „Frag ChatGPT" unterstützt jetzt auch **PDFs als Eingabe**. Dokumente können direkt an die KI übergeben werden, sodass Inhalte analysiert, zusammengefasst oder Fragen beantwortet werden können – ohne manuelle Extraktion. Das eröffnet neue Einsatzmöglichkeiten bei der automatisierten Dokumentenverarbeitung.


## <span style="color:#0b5394">**Verschiedenes**</span>

### <span style="color:#0b5394">**OpenAI-Modellauswahl**</span>

In der OpenAI-Integration kann ab sofort das gewünschte Modell direkt ausgewählt werden. So habt ihr die volle Kontrolle darüber, welches OpenAI-Modell eure KI-Bausteine und Agenten verwenden – und könnt je nach Anwendungsfall zwischen Geschwindigkeit und Leistung abwägen.

## <span style="color:#0b5394">**Weitere Änderungen**</span>

-   „Kacheln" heißen ab sofort **Komponenten**
-   Mitglieder in den Einstellungen: Filter für aktive Rollen und Lizenztypen hinzugefügt.
-   Das Datum von überfälligen Aufgaben in der To-Do-Kachel wird jetzt rot markiert.
-   Datensatz-Baustein in der Listenansicht zeigt nun den refernzierten Datensatz inkl. Titelfarbe an.
-   Suchleiste im Workflow-Editor: Beim Hinzufügen neuer Schritte kann jetzt direkt nach dem passenden Schritt gesucht werden.