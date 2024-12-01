---
layout: title
title: Release Version 1.5.0
nav_order: 94
parent: Updatehistorie
---

# <span style="color:#0b5394">**Release Version 1.5.0**</span>

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.5.0 ausgerollt:

## <span style="color:#0b5394">**Neuer Baustein _Tabelle_**</span>

Wir haben den neuen [Baustein “Tabelle”](/docs/record-spec-settings/grand-child-expanded/table.html) in Univelop implementiert. Mit diesem Baustein ist es möglich, in einem Listeneintrag Einträge zu einer untergeordneten bzw. verbundenen Liste hinzuzufügen und auszufüllen. So kann beispielsweise ein Einsatzplan innerhalb eines Projekt-Eintrages erzeugt werden, ohne zwischen Listen hin- und herzuspringen. Bei Bedarf kann von der Tabelle aus ein einzelner Eintrag direkt geöffnet werden. Außerdem beinhaltet der Baustein eine Vorbelegungs-Funktion. So kann mit einem Klick ein Eintrag für z. B. jeden Mitarbeiter erzeugt werden.

![release brick table](\assets\latest-updates\release brick table.png "release brick table")

## <span style="color:#0b5394">**Excel Im-/Export von Mitgliedern**</span>

Für Admins eines Arbeitsbereiches gibt es nun die Möglichkeit, Mitglieder auf die selber Art und Weise wie Benutzerrollen und Teams zu [importieren und exportieren](/docs/import-export.html#im--und-export-von-mitgliedern). So können neue Mitglieder in eine Excel-Datei eingetragen und importiert werden, um diese mit einem Klick zu einem Arbeitsbereich hinzuzufügen. Dabei ist es möglich, für jedes Mitglied neben den personenbezogenen Daten die aktive Rolle und das aktive Team sowie die möglichen Rollen und Teams anzugeben.

![release member export](\assets\latest-updates\release member export.png "release member export")

## <span style="color:#0b5394">**Referenzprüfung bei Löschen eines Datensatzes**</span>

Um die Handhabung von verschachtelten und verbundenen Datensätzen und Listen zu vereinfachen, werden in der neuen Version Nutzer beim Löschen eines Datensatzes darüber informiert, dass dieser an anderen Stellen, z. B. über einen Baustein “Datensatz”, referenziert und verwendet wird und das Löschen weitere Datensätze beeinflusst. So wird direkt klar, dass ein Datensatz nicht ohne weitere Nebeneffekte gelöscht werden kann.

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

-   Anzeige der Anzahl Benachrichtigungen auf Homescreen
-   Verbesserung des IN-Filter
-   Funktionalitätsverbesserung des [Kachel-Import](/docs/import-export.html#kacheln)
-   Diverse kleine Funktionalitätsverbesserungen
