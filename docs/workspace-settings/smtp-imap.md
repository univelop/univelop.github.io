---
title: E-Mail (SMTP/IMAP)
nav_order: 8
layout: title
parent: Arbeitsbereich Einstellungen
---

Über eine Integration des Typs _E-Mail (SMTP/IMAP)_ kann Univelop E-Mails über ein beliebiges Postfach versenden und aus diesem abrufen. Damit ist der Betrieb unabhängig von Microsoft möglich, etwa mit einem eigenen Mailserver oder einem gängigen Hosting-Anbieter.

Angelegt wird die Integration unter **Arbeitsbereich Einstellungen → Integrationen**.

{: .hint }
Es gibt zwei verwandte Typen: _E-Mail (SMTP)_ kann ausschließlich versenden, _E-Mail (SMTP/IMAP)_ zusätzlich abrufen. Für den Baustein [Rufe E-Mails ab](../workflows/emails/get-emails.md) wird _E-Mail (SMTP/IMAP)_ benötigt.

### <span style="color:#0b5394">**Einrichtung**</span>

1. Unter **Integrationen** eine neue Integration anlegen und als Typ _E-Mail (SMTP/IMAP)_ wählen.
1. **Name** und **E-Mail** ausfüllen. Die E-Mail-Adresse ist die Absenderadresse und das Postfach, aus dem abgerufen wird.
1. Optional **Autodiscover** verwenden: Univelop ermittelt anhand der E-Mail-Adresse die Serveradressen, Ports und Verschlüsselungseinstellungen des Anbieters und füllt die Felder vor. Gefundene Werte sollten geprüft werden; schlägt Autodiscover fehl, werden die Felder manuell ausgefüllt.
1. Die verbleibenden Zugangsdaten und Servereinstellungen eintragen (siehe unten).
1. **Bestätigen und Verbindung testen** auswählen. Dabei werden die Zugangsdaten verschlüsselt gespeichert und SMTP- sowie IMAP-Verbindung geprüft. Erst danach ist die Integration einsatzbereit.

{: .warning }
Nach dem Test sind die Einstellungen nicht mehr änderbar und das Passwort wird nicht mehr angezeigt. Ändern sich Zugangsdaten oder Server, muss die Integration neu angelegt werden.

### <span style="color:#0b5394">**Einstellungen**</span>

1. <span style="color:#0b5394">**Name**</span>
   Bezeichnung der Integration innerhalb von Univelop, frei wählbar.
1. <span style="color:#0b5394">**E-Mail**</span>
   Die E-Mail-Adresse des Postfachs. Sie wird als Absender verwendet und ist das Postfach, aus dem der Baustein _Rufe E-Mails ab_ liest.
1. <span style="color:#0b5394">**Benutzername**</span> (optional)
   Nur nötig, wenn der Mailserver einen von der E-Mail-Adresse abweichenden Anmeldenamen erwartet. Bleibt das Feld leer, wird die E-Mail-Adresse verwendet.
1. <span style="color:#0b5394">**Passwort**</span>
   Das Kennwort des Postfachs. Bei Anbietern mit Zwei-Faktor-Authentifizierung ist hier in der Regel ein anwendungsspezifisches Kennwort einzutragen, nicht das normale Anmeldekennwort.
1. <span style="color:#0b5394">**Postausgangsserver (SMTP)**</span> und <span style="color:#0b5394">**SMTP-Port**</span>
   Server und Port für den Versand.
1. <span style="color:#0b5394">**Posteingangsserver (IMAP)**</span> und <span style="color:#0b5394">**IMAP-Port**</span>
   Server und Port für das Abrufen.
1. <span style="color:#0b5394">**SSL/TLS**</span> und <span style="color:#0b5394">**STARTTLS**</span>
   Verschlüsselung der Verbindung, entsprechend den Vorgaben des Anbieters. Beide Optionen werden von Autodiscover mit gesetzt.

### <span style="color:#0b5394">**Statische IP-Adresse**</span>

Manche Mailserver akzeptieren Verbindungen nur von freigegebenen IP-Adressen. Für diesen Fall gibt es in den erweiterten Einstellungen die Option **Statische IP verwenden**: SMTP- und IMAP-Verkehr wird dann über eine feste IP-Adresse von Univelop geleitet, die im Mailserver freigegeben werden kann.

Ist die Option aktiviert, wird die zu freigebende Adresse direkt in der Integration angezeigt und kann dort kopiert werden.

### <span style="color:#0b5394">**Verwendung**</span>

Eine getestete Integration steht anschließend in den E-Mail-Bausteinen zur Auswahl, unter anderem in [Rufe E-Mails ab](../workflows/emails/get-emails.md).
