---
layout: default
title: ChatGPT
parent: Erweiterte Bausteine
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 28
---

# <span style="color:#0b5394"><span class="material-icons">psychology</span> **Baustein *ChatGPT***</span>

<span style="color:#0b5394">Hinweis: Der ChatGPT Baustein befindet sich in der Beta-Phase und ist nur auf Anfrage benutzbar. Bei Interesse gerne bei uns unter support@univelop.de melden!</span>

Mit dem ChatGPT Baustein kann ein Datensatz anhand eines Textes bzw. einer Spracheingabe ausgefüllt werden.
Der Baustein nutzt im Kern ChatGPT, um aus einer Eingabe den aktuellen Datensatz auszufüllen.

## <span style="color:#0b5394">**Aktivierung**</span>

Der ChatGPT Baustein ist aktuell standardmäßig deaktiviert.
Damit dieser von uns aktiviert wird, benötigen wir einen gültigen OpenAI API-Schlüssel.
Wir empfehlen jeden Kunden, selber einen eigenen Account bei OpenAI zu erstellen, damit so die entstehenden Kosten transparent bleiben 
und diese auch kontrolliert werden können (Token-Limit, direkte Abrechnung über OpenAI).
Ist dies nicht gewünscht, können wir auch einen API-Schlüssel für Sie bereitstellen. 
In diesem Falle können die folgenden drei Schritte übersprungen werden und Sie könnten direkt mit uns über support@univelop.de Kontakt aufnehmen. 

1. <span style="color:#0b5394">**OpenAI Account erstellen**</span> 
Der erste Schritt ist nur notwendig, wenn noch kein Konto für ChatGPT vorhanden ist. In dem Falle geht es bei Schritt 2 weiter.
Um diesen API-Schlüssel zu erhalten, müssen Sie sich auf der OpenAI-Website registrieren und ein Konto erstellen.

2. <span style="color:#0b5394">**API-Schlüssel erstellen**</span>
Nachdem Sie sich bei OpenAI angemeldet haben, können Sie einen API-Schlüssel erstellen. Dieser Schlüssel ist notwendig, damit Univelop mit ChatGPT kommunizieren kann. Für die Nutzung vom ChatGPT Baustein wird nur *ein einziger* API-Schlüssel pro Arbeitsbereich benötigt. Die [Dokumentation von OpenAI](https://help.openai.com/en/articles/9186755-managing-your-work-in-the-api-platform-with-projects) ist hierzu umfangreich und sollte jegliche Fragen beantworten können. Sollten trotzdem Fragen offen bleiben, können Sie uns gerne kontaktieren.

2. <span style="color:#0b5394">**Aktivierung**</span>
Sobald der API-Schlüssel erstellt wurde, kontaktieren Sie uns, damit wir die Aktivierung vornehmen. Dies dauert in der Regel nur wenige Minuten.
Ist die Aktivierung abgeschlossen, kann der Baustein wie gewohnt genutzt werden.

Um nun mit ChatGPT zufriedenstellende Ergebnisse zu erhalten, muss man diesen zielgerichtet einrichten.
Dies wird in den folgenden Abschnitten genauer erläutert.

## <span style="color:#0b5394">**Unterstützte Bausteine**</span>

Mit unterstützten Bausteinen sind die gemeint, welche sich durch ChatGPT ausfüllen lassen.
Aktuell werden folgende Bausteine unterstützt: 
- Textfeld
- Nummer
- Schalter
- Datum
- Zeitspanne, Timer
- Dropdown, Mehrfachauswahl
- Adresse
- Abmessungen
- Benutzer
- Telefon, E-Mail
- Datensatz, Datensätze, Datensatzliste
- Datensatz sperren
- Status

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
Dabei hilft mehr Beschreibung oft zu besseren Ergebnissen, solange sich die Beschreibung nur auf das Wesentliche im Datensatz beschränkt. Die Eingabe kann in Stichpunkten oder in ganzen Sätzen erfolgen. Ob als Anweisung oder als beschreibende Information (Du sollst das heutige Datum eintragen/ Am heutigen Datum...) ist auch nicht relevant.
Für eine Zeiterfassung werden folgend einige Beispiele genannt, welche als Eingabe möglich sind:
- Ich habe heute am Projekt ABC für die Firma XY von 12 bis 18 Uhr gearbeitet
- Projekt ABC, Firma XY, 12-18 Uhr, Mitarbeiter Max Mustermann
- Bitte trage mich ins Feld Mitarbeiter ein, ins Projektfeld das Projekt ABC, in das Firmenfeld XY und in die Uhrzeit bitte 12 bis 18.
- Das Projekt ist ABD, der Mitarbeiter bin ich, die Firma ist XY und die Arbeitszeit war von 12 bis 18 Uhr.

Folgende Eingaben für eine Zeiterfassung sind nicht sinnvoll und würden unbefriedigende Ergebnisse liefern:
- ~~Ich hab heute für meine Lieblingsfirma wie üblich fünf stunden geackert~~
- ~~Ich hab ab 12 Uhr für den Rest des Tages am aktuellen Projekt gearbeitet und es hat gar keinen Spaß gebracht~~

Die Eingabe sollte möglichst keine Abkürzungen oder umgangssprachliche Reden beinhalten.
Nummern oder IDs sind gerne gesehen und funktionieren besser, als eine Umschreibung des gesuchten Wertes.
So ist z.B. die Benennung eines Artikels über die EAN oder Artikelnummer besser, als über den Namen (13/BE128431-01 statt "Ein roter Eimer mit 5l Fassungsvermögen"). 
