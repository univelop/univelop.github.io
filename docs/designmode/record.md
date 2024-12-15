---
layout: title
title: Eintrag
parent: Designmodi
nav_order: 2
redirect_from:
    - /docs/designmode/childs/record.html
---

## <span style="color:#0b5394">**Eintrag**</span>

Wurde in einer Kachel in der Liste ein Eintrag ausgewählt, erscheint rechts der Listeneintrag. Oben rechts
befinden sich vier Symbole:

![four symbols](\assets\design-mode-setting\four symbols.png "four symbols")

1. <span style="color:#0b5394">**Benachrichtigungen für den ausgewählten Eintrag aktivieren**</span>
2. <span style="color:#0b5394">**Designmodus für Einträge öffnen**</span>
3. <span style="color:#0b5394">**Duplizieren des ausgewählten Eintrags**</span>
4. <span style="color:#0b5394">**Löschen des ausgewählten Eintrags**</span>

**Designmodus für Einträge**

![record](\assets\design-mode-setting\record.png 'record')

1. <span style="color:#0b5394">**Bausteine via Drag and Drop platzieren**</span>
2. <span style="color:#0b5394">**Bearbeiten des Titels** (am Anfang steht immer der Titel des Datensatzes / des Listeneintrags, frei wählbar)</span>
3. <span style="color:#0b5394">**Anzeige welcher Baustein gerade bearbeitet wird**</span>
4. <span style="color:#0b5394">**Pflichtfeld**</span>

    - Prüfung nach Verlassen des Datensatzes ob der Baustein mit einem Wert gefüllt ist

5. <span style="color:#0b5394">**Erweiterte Einstellungen**</span>

    - **Technischer Name**
      (s. o.)

    - **Nur Lesen**  
      Mit dieser Funktion werden Schreibrechte blockiert, können jedoch unter Bedingungen zugelassen werden.
      Zum Beispiel "Benutzerrolle = Admin" oder auch "Status = Offen". Bedeutet, dass der Baustein nur bearbeitet werden darf
      wenn jemand die Admin Rolle inne hat oder der Status noch auf "offen" steht. Hierzu wäre der Baustein erforderlich.

    - **Baustein verstecken**  
      Bausteine können versteckt werden, können jedoch unter Bedingungen zugelassen werden.

    - **In Schnellerfassung verstecken**  
      Wie bereits bei den Kacheleinstellungen beschrieben, können Bausteine in der Schnellerfassung versteckt werden, um
      die Listenansicht für den Einzelfall der Erfassung zu reduzieren.

    - **Duplizieren und Löschen**  
      Beim Duplizieren eines Datensatzes ist auf den technischen Namen zu achten. Beim Duplizieren wird der
      ursprüngliche technische Name mit dem Zusatz "2" versehen und sollte nach dem Duplizieren abgeändert werden.

    - **Baustein sperren/entsperren**
      Um die Einstellungen des Bausteins zu sichern, so dass diese nicht ohne weiteres änderbar sind, kann der Baustein _gesperrt_ werden.
      Dabei muss eine Begründung angegeben werden, damit weitere Admins im Designmodus über den Grund der Sperrung bescheid wissen.
      Ist ein Baustein gesperrt, kann dieser wieder entsperrt werden. Dabei sollte die Begründung der Sperrung beachtet werden.

    - **In anderen Tab verschieben**
      Wird angezeigt, wenn tabs für den Eintrag vorhanden sind. Über den Button wird der ausgewählte Baustein aus dem aktuellen Tab
      in den gewählten Tab verschoben.

6. <span style="color:#0b5394">**Titel und weiteres**</span>
   Klickt man im Designmodus auf den Titel, werden im rechten Bereich Einstellungen für den Titel, Tabs und Sekundärschlüssel angezeigt.
   Der Titel kann aus bis zu drei Bausteinen, einem selbst vergebenen Text und Trennzeichen bestehen. Dieser wird bei einem geöffneten Eintrag
   am oberen Bildschirmrand angezeigt.
   Sobald Tabs über die Einstellung unter der Titel-Einstellung angeschaltet werden, können Tabs hinzugefügt und mit Bausteinen konfiguriert werden.
   Sekundärschlüssel sind ein Weg, um zu definieren, welche Bausteine unter Einträgen immer einzigartig sein sollen.
   Es können bis zu drei Bausteine definiert werden, welche in Kombination immer eine einzigartige Kombination ergeben müssen.
   Sobald mehrere Einträge mit dem selben Sekundärschlüssel existieren, werden diese als solche markiert und in der Listenansicht hervorgehoben.
