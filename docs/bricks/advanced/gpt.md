---
layout: title
title: ChatGPT
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 31
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/chatgpt.html
---

{: .hint }
Der ChatGPT-Baustein befindet sich in der Beta-Phase und ist nur auf Anfrage nutzbar. Bei Interesse bitte unter support@univelop.de melden.

Mit dem Baustein _ChatGPT_ kann ein Datensatz anhand einer Text- oder Spracheingabe automatisch ausgefüllt werden. Der Baustein nutzt im Kern OpenAI, um aus einer natürlichen Eingabe die passenden Felder im aktuellen Datensatz zu befüllen.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

Der Baustein hat keine zusätzlichen bausteinspezifischen Einstellungen. Die Konfiguration erfolgt über die _Tooltips_ der einzelnen Bausteine im Datensatz (siehe Einrichtung).

## Voraussetzungen

Der Baustein ist erst nach erfolgreicher Aktivierung der ChatGPT-Anbindung in den [Arbeitsbereich-Einstellungen](/docs/workspace-settings/chatgpt) nutzbar.

## Einrichtung

ChatGPT erhält nicht alle Bausteine eines Datensatzes, sondern nur diejenigen, die für den aktuellen Benutzer sichtbar sind **und** ein Tooltip haben. Das Tooltip dient als Beschreibung für ChatGPT, um die einzelnen Bausteine korrekt zuzuordnen.

Damit der Baustein funktioniert, müssen alle Bausteine, die von ChatGPT ausgefüllt werden sollen, mit einem aussagekräftigen Tooltip versehen werden. Darin sollte kurz und klar beschrieben werden, was eingetragen werden soll. Beispiele:

- Bei einem _Datensatz_-Baustein für Artikel kann im Tooltip erklärt werden, welchem Muster die Artikelnummer folgt.
- Bei zwei ähnlich benannten Bausteinen sollten die Tooltips deutlich unterscheidbar formuliert sein.

### Unterstützte Bausteine

Folgende Bausteine können von ChatGPT ausgefüllt werden:

- Textfeld, Nummer, Schalter, Datum
- Zeitspanne, Timer
- Dropdown, Mehrfachauswahl
- Adresse, Abmessungen
- Benutzer, Telefon, E-Mail
- Datensatz, Datensätze, Datensatz Liste
- Datensatz sperren, Status

## Funktionsweise

Der Benutzer tippt einen Text ins Textfeld oder nutzt den Mikrofon-Button für eine Spracheingabe. Die Eingabe sollte möglichst klar beschreiben, was im Datensatz eingetragen werden soll. Die Eingabe kann in Stichpunkten oder ganzen Sätzen erfolgen.

**Tipps für gute Eingaben:**
- Nummern oder IDs verwenden statt Umschreibungen (z. B. `13/BE128431-01` statt „Ein roter Eimer mit 5l").
- Keine Abkürzungen oder umgangssprachliche Formulierungen verwenden.
- Mehr Details führen zu besseren Ergebnissen, solange sie sich auf den Datensatz beschränken.

### Beispiel: Zeiterfassung

| Baustein | Tooltip |
| --- | --- |
| Datum | Trage hier das Datum deiner Arbeitszeit ein. |
| Zeitspanne | Trage hier die Start- und Enduhrzeit ein. Achte darauf, dass sich Arbeitszeiten nicht überschneiden. |
| Mitarbeiter | Trage dich selbst ein. |
| Projekt | Trage das Projekt ein, für welches du die Zeit erfassen möchtest. |
| Art | Trage die Kategorie ein, in welche sich die Arbeit einordnen lässt. |

Mögliche Eingaben:
- „Ich habe heute am Projekt ABC für die Firma XY von 12 bis 18 Uhr gearbeitet"
- „Projekt ABC, Firma XY, 12-18 Uhr, Mitarbeiter Max Mustermann"

## Hinweise

- Pro Abfrage werden je nach Datensatzgröße zwischen 1.000 und 25.000 Input-Tokens und 200 bis 3.000 Output-Tokens verbraucht.
- Die KI-Beschreibung (_Tooltip_) jedes Bausteins ist entscheidend für die Qualität der Ergebnisse.

## Verwandte Bausteine

- [Bild-Erkennung](/docs/bricks/advanced/gpt-image-scanner) — Für die Befüllung eines Datensatzes aus einem Bild
