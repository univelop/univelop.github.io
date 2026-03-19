---
title: Volltextsuche
nav_order: 19
layout: title
nav_exclude: true
---

Die Volltextsuche in Univelop ermöglicht das schnelle und umfassende Durchsuchen aller Datensätze einer Liste. So können Datensätze zuverlässig gefunden werden, unabhängig der Position der Informationen im Datensatz. Um eine leistungsstarke und skalierbare Suche über alle Datensätze hinweg sicherzustellen, setzen wir auf einen externen Servicedienstleister und spiegeln den bestehenden Datenbestand dorthin.

### Verhalten

Die Suche liefert bereits während der Eingabe passende Ergebnisse und berücksichtigt dabei auch unvollständige oder teilweise eingegebene Begriffe. Auch ist eine fehlertolerante Suche aktiviert, sodass auch bei kleineren Tippfehlern relevante Treffer gefunden und angezeigt werden.
Bei der Gewichtung der Ergebnisse wird der Titel eines Datensatzes gegenüber den Inhalten der Bausteine priorisiert. Innerhalb der Bausteine existiert keine weitere Gewichtung. Exakte Treffer werden teilweise passenden Ergebnissen bevorzugt.

### Suchmodi

Je nach Anwendungsfall verwendeter Listen bestehen unterschiedliche Anforderungen an die Volltextsuche von Datensätzen. Um dies bestmöglich abzudecken stehen mehrere Suchmodi zur Auswahl.

{: .hint }
Die Volltextsuche ermöglicht das Finden von Datensätzen parallel zu Filter und Sortierung. Dies funktioniert uneingeschränkt für alle Datensätze, unabhängig des gewählten Volltextsuch-Modus. Auch ohne Volltextsuche können Datensätze präzise über Filter eingegrenzt werden.

Die folgenden Suchmodi stehen zur Verfügung:

1. **Erste 1.000 Datensätze**: Bis zu 1.000 Datensätze sind kostenfrei durchsuchbar. Überschreitet die Liste dieses Limit, versendet das System eine Warn-E-Mail an die Arbeitsbereichs-Admins und stellt den Modus nach einer 7-tägigen Schonfrist automatisch auf „Aktuelle Datensätze“ um. Dieser Modus kann nicht gewählt werden, wenn die Liste bereits mehr als 1.000 Datensätze hat.

2. **Aktuelle Datensätze**: Alle Datensätze, die in den letzten 6 Monaten bearbeitet wurden, sind kostenfrei durchsuchbar. Datensätze ohne Änderungen in diesem Zeitraum werden nicht indiziert und sind nicht durchsuchbar. Bei 200 oder weniger Datensätzen können diese lokal durchsucht werden. Die lokale Suche funktioniert unabhängig der Bearbeitungsdaten von Datensätzen und ermöglicht es Datensätze frei zu durchsuchen, wenn diese über Filter auf 200 oder weniger eingegrenzt wurden.

3. **Alle Datensätze**: Alle Datensätze sind vollständig durchsuchbar. Jeder Datensatz über 1.000 hinaus wird mit einem Credit pro Monat berechnet.

4. **Deaktiviert**: Die Volltextsuche ist ausgeschaltet. Sinnvoll für versteckte Systemlisten, wie bspw. nicht direkt sichtbare Positionen. Verbessert die Performance bei hochfrequent aktualisierten Listen. In Datensatz-Auswahlen und beim Scanner ist die Suche nur noch möglich, wenn es weniger als 200 Datensätze gibt oder diese auf weniger als 200 heruntergefiltert werden.
