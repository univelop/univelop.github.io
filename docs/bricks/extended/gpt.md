---
layout: title
title: ChatGPT
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 28
redirect_from:
    - /docs/record-spec-settings/grand-childs-expanded/chatgpt.html
---

<span style="color:#0b5394">Hinweis: Der ChatGPT Baustein befindet sich in der Beta-Phase und ist nur auf Anfrage benutzbar. Bei Interesse gerne bei uns unter support@univelop.de melden!</span>

Mit dem ChatGPT Baustein kann ein Datensatz anhand eines Textes bzw. einer Spracheingabe ausgefüllt werden.
Der Baustein nutzt im Kern ChatGPT, um aus einer Eingabe den aktuellen Datensatz auszufüllen.

Nutzbar ist der Baustein erst nach einer [erfolgreichen Aktivierung der ChatGPT Anbindung](/docs/chat-gpt-integration.html)!

## <span style="color:#0b5394">**Unterstützte Bausteine**</span>

Mit unterstützten Bausteinen sind die gemeint, welche sich durch ChatGPT ausfüllen lassen.
Aktuell werden folgende Bausteine unterstützt:

-   Textfeld
-   Nummer
-   Schalter
-   Datum
-   Zeitspanne, Timer
-   Dropdown, Mehrfachauswahl
-   Adresse
-   Abmessungen
-   Benutzer
-   Telefon, E-Mail
-   Datensatz, Datensätze, Datensatzliste
-   Datensatz sperren
-   Status

## <span style="color:#0b5394">**Einrichtung (Vor der Anwendung)**</span>

ChatGPT erhält nicht den vollständigen Datensatz, also nicht alle Bausteine, sondern nur die Bausteine,
die für den aktuellen Benutzer sichtbar sind und dazu ein Tooltip haben. Das Tooltip dient als Hilfe für ChatGPT,
um die einzelnen Bausteine besser zu verstehen.
Damit man also den ChatGPT Baustein erfolgreich nutzen kann, müssen alle Baustein, die von ChatGPT ausgefüllt werden sollen,
mit einem Tooltip versehen werden. Darin sollte kurz aber klar beschrieben werden, was eingetragen wird.

Wenn bspw. ein Datensatz Baustein für einen Artikel vorliegt, kann im Tooltip erklärt werden, welchem Muster die Artikelnummer folgt.
Hat man zwei gleichnamig oder semantisch ähnlich benannte Bausteine, lohnt es sich, diese in dessen Tooltips deutlich zu beschreiben um diese dadurch unterscheidbar zu machen.

## <span style="color:#0b5394">**Anwendung**</span>

Ist der Baustein konfiguriert, kann die Benutzung los gehen. Der Benutzer kann nun einen Text ins Textfeld eintippen,
oder über den Mikrofon-Button am rechten Rand per Sprache etwas rein sprechen.

Der gesprochene oder eingetippte Text soll möglichst klar beschreiben, was im Datensatz eingetragen werden soll.
Dabei hilft mehr Beschreibung oft zu besseren Ergebnissen, solange sich die Beschreibung nur auf das Wesentliche im Datensatz beschränkt. Die Eingabe kann in Stichpunkten oder in ganzen Sätzen erfolgen. Ob als Anweisung oder als beschreibende Information ("Du sollst das heutige Datum eintragen"/ "Am heutigen Datum...") ist auch nicht relevant.

Die Eingabe sollte möglichst keine Abkürzungen oder umgangssprachliche Reden beinhalten.
Nummern oder IDs sind gerne gesehen und funktionieren besser, als eine Umschreibung des gesuchten Wertes.
So ist z.B. die Benennung eines Artikels über die EAN oder Artikelnummer besser, als über den Namen (13/BE128431-01 statt "Ein roter Eimer mit 5l Fassungsvermögen").

### <span style="color:#0b5394">**Beispielanwendung Zeiterfassung**</span>

![Zeiterfassung](\assets\record-spec-settings\chatgpt_time_tracking.png 'Zeiterfassung')

| Baustein         | Tooltip                                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Datum            | Trage hier das Datum deiner Arbeitszeit ein.                                                                                                                                                                  |
| Zeitspanne       | Trage hier die Start- und Enduhrzeit ein. Du kannst auch Pausen, z.B. Mittagspausen direkt abziehen. Achte darauf, dass sich deine Arbeitszeiten nicht überschneiden                                          |
| Mitarbeiter      | Trage dich selbst ein                                                                                                                                                                                         |
| Projekt          | Trage das Projekt ein, für welches du die Zeit erfassen möchtest.                                                                                                                                             |
| Art              | Trage die Kategorie ein, in welche sich die Arbeit einordnen lässt.                                                                                                                                           |
| Bemerkung Kunde  | Trage hier eine Bemerkung ein, die der Kunde versteht. Diese kann der Kunde auf dem Leistungsnachweis einsehen. Wenn unklar ist, was du hier erfassen sollst frage am besten deine Projekt- oder Teamleitung. |
| Bemerkung intern | Trage hier eine interne Bemerkung ein. Diese kann der Kunde nicht sehen.                                                                                                                                      |

Für eine Zeiterfassung werden folgend einige Beispiele genannt, welche als Eingabe möglich sind:

-   Ich habe heute am Projekt ABC für die Firma XY von 12 bis 18 Uhr gearbeitet
-   Projekt ABC, Firma XY, 12-18 Uhr, Mitarbeiter Max Mustermann
-   Bitte trage mich ins Feld Mitarbeiter ein, ins Projektfeld das Projekt ABC, in das Firmenfeld XY und in die Uhrzeit bitte 12 bis 18.
-   Das Projekt ist ABD, der Mitarbeiter bin ich, die Firma ist XY und die Arbeitszeit war von 12 bis 18 Uhr.

Folgende Eingaben für eine Zeiterfassung sind nicht sinnvoll und würden unbefriedigende Ergebnisse liefern:

-   ~~Ich hab heute für meine Lieblingsfirma wie üblich fünf stunden geackert~~
-   ~~Ich hab ab 12 Uhr für den Rest des Tages am aktuellen Projekt gearbeitet und es hat gar keinen Spaß gebracht~~

## <span style="color:#0b5394">**Kosten**</span>

Der ChatGPT Baustein nutzt im Hintergrund GPT 3.5 Turbo. Dies ist das kostengünstigste Modell von OpenAI und
bietet eine gute Balance zwischen zufriedenstellenden Ergebnissen, geringen Kosten und hoher Geschwindigkeit.

Pro abgesendetem Text an ChatGPT können zwischen 1.000 und 25.000 Tokens im Input und rund 200 bis 3.000 Tokens im Output verbraucht werden.
Die exakte Anzahl hängt von der Anzahl der auszufüllenden Bausteinen im Datensatz ab.
Stand 10.07.2024 kosten mit dem Modell GPT 3.5 Turbo 1.000.000 Input-Tokens $0,50 und 1.000.000 Output-Tokens $1,50.
Diese Zahlen werden für die folgende Berechnung der Kosten pro Abfrage herangezogen.

Diese Berechnung dient der Veranschaulichung und soll eine Hilfe zur Vorstellung der Kosten sein.
Benutzt man im eigenen Anwendungsfall auch 11 Bausteine, heißt dies nicht, dass die eigenen Kosten dem des Beispiels entsprechen.

| Größe vom Datensatz                  | Input-Tokens pro Abfrage | Output-Tokens pro Abfrage | Kosten pro Abfrage | Kosten pro 1000 Abfragen |
| ------------------------------------ | ------------------------ | ------------------------- | ------------------ | ------------------------ |
| 11 Bausteine, ohne Datensatzliste    | ~2.800                   | ~400                      | $0,0020            | $2 / 1,85€               |
| 6 Bausteine, inkl. Datensatzliste    | ~4.000                   | ~1.500                    | $0,00425           | $4,25 / 3,90€            |
| 26 Bausteine, inkl 4 Datensatzlisten | ~19.000                  | ~3.000                    | $0,014             | $14 / 13€                |

_Hinweis: Dies ist nur eine Beispielrechnung. Sie bildet keineswegs die tatsächlich anfallenden Kosten bei der Nutzung im eigenen Anwendungsfall ab._
