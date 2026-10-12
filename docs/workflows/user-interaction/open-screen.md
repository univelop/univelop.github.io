---
layout: workflow-step
title: Öffne Seite
parent: Benutzerinteraktion
grand_parent: Workflows
icon: open_in_new
nav_order: 4
---

Mit dem Schritt _Öffne Seite_ wird auf dem Gerät des Benutzers eine bestimmte Seite geöffnet. Je nach Einstellung kann eine Listenansicht, der erste passende Datensatz, ein neuer Datensatz oder eine Seitenkomponente angezeigt werden.

## Einstellungen

1. **Aktion** — Die Art der Navigation:
   - _Navigiere zu Liste_ — Öffnet eine Listenansicht.
   - _Navigiere zum ersten Eintrag_ — Öffnet den ersten Eintrag einer Liste, der die angegebenen Filter erfüllt.
   - _Erstelle einen neuen Datensatz_ — Erstellt und öffnet einen neuen Eintrag.
   - _Navigiere zu Seitenkomponente_ — Öffnet eine bestimmte Seite innerhalb des Arbeitsbereichs.
2. **Verknüpfung mit** — Die Liste, zu der navigiert wird, aus der der Eintrag geladen wird oder in der ein neuer Eintrag erstellt wird. Bei _Navigiere zu Seitenkomponente_ stehen nur seitenartige Listen zur Auswahl.
3. **Filter und Sortierung** — Filterbedingungen zur Einschränkung der Ergebnisse sowie die Sortierung. Nur verfügbar bei _Navigiere zu Liste_ und _Navigiere zum ersten Eintrag_.
4. **Bei einzelnem Datensatz direkt zum Datensatz springen** — Überspringt die Listenansicht, wenn nur ein einzelner Eintrag den Filtern entspricht. Nur verfügbar bei _Navigiere zu Liste_.
5. **Erstelle Datensatz, wenn keiner gefunden wurde** — Erstellt automatisch einen neuen Eintrag, wenn die Filter kein Ergebnis liefern. Nur verfügbar bei _Navigiere zum ersten Eintrag_.
6. **Vorbelegung** — Über Filter können einem neuen Eintrag bzw. einer neuen Seite Standardwerte mitgegeben werden. Nur verfügbar bei _Erstelle einen neuen Datensatz_ und _Navigiere zu Seitenkomponente_.
7. **Im Dialog öffnen** — Öffnet das Navigationsziel in einem Pop-Up Fenster statt als vollständige Navigation. Nur verfügbar bei _Navigiere zum ersten Eintrag_, _Erstelle einen neuen Datensatz_ und _Navigiere zu Seitenkomponente_.
8. **Aktuelle Seite ersetzen** — Ersetzt die aktuelle Seite durch das Navigationsziel. Wird die Seite anschließend über den Zurück-Button verlassen, führt dieser zum Homescreen statt zur ursprünglichen Seite zurück.

## Hinweise

- Nur in **geräteseitigen Automatisierungen** verfügbar.
- Dieser Schritt verbraucht keine [Credits](/docs/credits).

## Verwandte Schritte

- [Schließe Seite](/docs/workflows/user-interaction/close-screen) — Zum Schließen der aktuellen Seite
