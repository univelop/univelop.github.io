---
layout: workflow-step
title: Antworte auf E-Mail
parent: E-Mails
grand_parent: Workflows
icon: reply
nav_order: 3
---

Über den Baustein _Antworte auf E-Mail_ kann auf eine bestehende E-Mail geantwortet werden. Dazu wird die ID der E-Mail benötigt, welche zuvor z.B. über den Baustein [Rufe E-Mails ab](get-emails.md) abgerufen wurde.

### <span style="color:#0b5394">**Einstellungen**</span>

1. <span style="color:#0b5394">**Integration (Pflichtfeld)**</span>
   Die E-Mail-Integration, über welche die Antwort versendet werden soll.
1. <span style="color:#0b5394">**E-Mail ID (Pflichtfeld)**</span>
   Die eindeutige ID der E-Mail, auf die geantwortet werden soll. Diese kann z.B. über den Baustein [Rufe E-Mails ab](get-emails.md) als Variable `id` abgerufen werden.
1. <span style="color:#0b5394">**Inhalt (Pflichtfeld)**</span>
   Der Text der Antwort-E-Mail. Formeln und Variablen können hier verwendet werden.
1. <span style="color:#0b5394">**Format**</span>
   Das Format des E-Mail-Inhalts. Mögliche Werte: **Text** (Standard) oder **HTML**.
1. <span style="color:#0b5394">**An alle antworten (Ja/Nein)**</span>
   Wenn diese Option auf Ja gesetzt wird, wird die Antwort an alle ursprünglichen Empfänger gesendet (Reply All). Standardmäßig wird nur an den Absender geantwortet.
1. <span style="color:#0b5394">**Von E-Mail**</span>
   Die E-Mail-Adresse, von der aus die Antwort versendet werden soll.
1. <span style="color:#0b5394">**Weitere Empfänger (An) – Name / E-Mail**</span>
   Optionale zusätzliche Empfänger im An-Feld. Mehrere Empfänger können kommagetrennt angegeben werden.
1. <span style="color:#0b5394">**Weitere Empfänger (CC) – Name / E-Mail**</span>
   Optionale Empfänger im CC-Feld. Mehrere Empfänger können kommagetrennt angegeben werden.
1. <span style="color:#0b5394">**Weitere Empfänger (BCC) – Name / E-Mail**</span>
   Optionale Empfänger im BCC-Feld. Mehrere Empfänger können kommagetrennt angegeben werden.
1. <span style="color:#0b5394">**Anhänge**</span>
   Dateien, die der Antwort-E-Mail als Anhang beigefügt werden sollen.
1. <span style="color:#0b5394">**Anhänge aus Baustein**</span>
   Dynamische Anhänge aus einem Datei-Baustein oder einer Variable.
1. <span style="color:#0b5394">**Im "Gesendet" Ordner speichern (Ja/Nein)**</span>
   Wenn diese Option auf Ja gesetzt wird, wird die gesendete Antwort im Ordner "Gesendet" des Postfachs gespeichert.
   Einige E-Mail-Dienste tun dies automatisch, auch ohne das diese Einstellung aktiviert ist. In dem Fall lässt sich dies nicht verhindern.
