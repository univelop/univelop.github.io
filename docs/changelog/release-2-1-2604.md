---
layout: title
title: Release Version 2.1
nav_order: 53
parent: Changelog
---

## <span style="color:#0b5394">**Komponenten**</span>

### <span style="color:#0b5394">**Einklappbare Datensatzliste auf Mobilgeräten**</span>

Auf Mobilgeräten öffnet sich ein Datensatz aus der Datensatzliste nun in einem geteilten Bildschirm: Die Liste klappt dabei automatisch zusammen und gibt dem Datensatz mehr Platz. Mit einem Tippen auf den Pfeil lässt sich die Liste jederzeit wieder einblenden.

![xmltojson](/assets/changelog/2-1/collapse-mobile.png)

## <span style="color:#0b5394">**Bausteine**</span>

### <span style="color:#0b5394">**Konfliktbehandlung im Editor-Baustein**</span>

Gleichzeitiges Bearbeiten von Texten im Editor-Baustein ist jetzt deutlich sicherer. 
Kommt es zu einem Konflikt, erscheint ein Dialog, der fragt, ob die eigenen Änderungen die des anderen Nutzers überschreiben sollen. So gehen keine Eingaben mehr unbemerkt verloren.

## <span style="color:#0b5394">**Workflows**</span>

### <span style="color:#0b5394">**Neuer Schritt: E-Mail beantworten**</span>

Mit dem neuen Workflow-Schritt „Antworte auf E-Mail" können E-Mails direkt aus einem Workflow heraus beantwortet werden. Der Schritt unterstützt HTML-Antworten, sowie das Hinzufügen von CC-Empfängern und BCC Empfängern.

![xmltojson](/assets/changelog/2-1/answer-email.png)


### <span style="color:#0b5394">**Neuer Schritt: XML zu JSON konvertieren**</span>

Der neue Workflow-Schritt „XML zu JSON" wandelt XML-Strings in ein JSON-Format um. Dabei stehen fünf verschiedene Konvertierungsmodi zur Auswahl, und optional kann per XPath gezielt ein Teilbereich des Dokuments extrahiert werden.

![xmltojson](/assets/changelog/2-1/xml-to-json.png)


### <span style="color:#0b5394">**Statische IP für Web-Anfragen**</span>

Der Workflow-Schritt „Web Request senden" kann Anfragen nun optional über eine statische IP-Adresse leiten. Das ist besonders nützlich, wenn externe Systeme eine IP-Freischaltung erfordern.

Der Einsatz der statischen IP beeinflusst den Credit-Verbrauch des Schritts. Die genaue Anzahl ist in der Beschreibung des Schritts einsehbar.

### <span style="color:#0b5394">**Zeichenkodierung im Schritt „Datei speichern"**</span>

Der Workflow-Schritt „Datei speichern" unterstützt ab sofort eine konfigurierbare Zeichenkodierung. Damit lässt sich das Encoding der gespeicherten Datei gezielt festlegen – hilfreich etwa bei CSV-Exporten für externe Systeme mit spezifischen Anforderungen.

## <span style="color:#0b5394">**Verschiedenes**</span>

### <span style="color:#0b5394">**Verbesserter Formeleditor**</span>

Der Formeleditor wurde in mehreren Bereichen überarbeitet: Die Darstellung von Variablen im Verzeichnisbaum ist übersichtlicher gestaltet, Tooltips zu Formel-Elementen werden klarer angezeigt, und das Verhalten beim Verwerfen leerer Formeln wurde korrigiert.

### <span style="color:#0b5394">**Lizenzanzeige für BigQuery und Portal**</span>

Im Kosten-Center werden nun für die Lizenzen „BigQuery Connector" und „Portal-Lizenz" die genutzten sowie die gebuchten Plätze angezeigt. So ist auf einen Blick ersichtlich, wie viele der gebuchten Kapazitäten bereits in Verwendung sind.

## <span style="color:#0b5394">**Weitere Änderungen**</span>

-   Fehlerbehebung: Zeitspannen-Dialog warf beim Schließen einen Fehler
-   Fehlerbehebung: Zeichnen-Baustein zeigte Schaltflächen bei kleinen Bildern nicht korrekt an
-   Fehlerbehebung: Registrierungsseite erlaubte keine Eingabe per E-Mail-Adresse
