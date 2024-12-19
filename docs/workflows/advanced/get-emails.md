---
layout: workflow-step
title: Rufe E-Mails ab
parent: Erweitert
grand_parent: Workflows
icon: mark_email_unread
redirect_from:
    - /workflows/grand-childs-bricks/get-emails.html
---

Über den Baustein _Rufe E-Mails ab_ können E-Mails aus einem Postfach abgerufen werden.

_Hinweis: Dieser Baustein unterstützt derzeit nur Azure als E-Mail-Provider und kann nur in Workflows ausgeführt werden, welche auf dem Server laufen._

Um E-Mails von Azure abrufen zu können, muss dies zuerst eingerichtet und im Arbeitsbereich konfiguriert werden, wie in dieser Anleitung beschrieben.

Abgerufen werden die ersten **50** E-Mails aus dem Ordner **Posteingang (Inbox)** des angegebenen Postfaches, welche zu den gesetzten Einstellungen passen. Wenn es mehr als 50 E-Mails gibt, die zu den Einstellungen passen, wird in den Logs eine Warnung diesbezüglich ausgegeben.

Sollen mehr E-Mails verarbeitet werden, kann dies beispielsweise umgesetzt werden, indem die Einstellungen **Nur ungelesene** sowie **Nach dem Abrufen auf Gelesen stellen** beide auf Ja gesetzt werden und der Baustein innerhalb einer Iteration so lange aufgerufen wird, bis es keine Datensätze mehr gibt.

### <span style="color:#0b5394">**Einstellungen**</span>

1. <span style="color:#0b5394">**Empfänger-E-Mail (Text)**</span>  
   Hier muss die E-Mail-Adresse des Postfachs angegeben werden, aus welchem E-Mails abgerufen werden sollen.
1. <span style="color:#0b5394">**Nur ungelesene (Ja/Nein)**</span>  
   Wird diese Option auf Ja gesetzt, werden nur ungelesene E-Mails ausgegeben. Andernfalls werden sowohl ungelesene als auch gelesene abgerufen.
1. <span style="color:#0b5394">**Nach dem Abrufen auf Gelesen stellen (Ja/Nein)**</span>  
   Wenn diese Option auf Ja gesetzt wird, werden abgerufene E-Mails automatisch auf gelesen gesetzt.
1. <span style="color:#0b5394">**Inkl. Anhänge (Ja/Nein)**</span>  
   Ist diese Option auf Ja gesetzt, werden die Anhänge der E-Mails automatisch mitgeladen und stehen als Variable zur Verfügung.
   **Warnung: Da diese Option sehr Credit-Intensiv sein kann, sollte sie nur aktiviert werden, wenn die Anhänge wirklich benötigt werden.**
1. <span style="color:#0b5394">**Von Zeitpunkt (Datum)**</span>  
   Nur E-Mails ausgeben mit Empfangsdatum nach dem hier definierten Zeitpunkt.
1. <span style="color:#0b5394">**Bis Zeitpunkt (Datum)**</span>  
   Nur E-Mails ausgeben mit Empfangsdatum vor dem hier definierten Zeitpunkt.

In nachfolgenden Schritten des Workflows kann über den technischen Namen des Bausteins mit dem Selektor ".data" auf die Liste abgerufener E-Mails zugegriffen werden. (Beispiel: emails.data)
Diese kann in einem Iteriere über Werte Baustein genutzt werden, innerhalb welchem dann für jedes E-Mail-Objekt in der Liste die folgenden Variablen zur Verfügung stehen.

In nachfolgenden Schritten des Workflows kann über den technischen Namen des Bausteins mit dem Selektor ".data" auf die Liste abgerufener E-Mails zugegriffen werden. (Beispiel: emails.data)
Diese kann in einem [Iteriere über Werte](iterate-values) Baustein genutzt werden, innerhalb welchem dann für jedes E-Mail-Objekt in der Liste die nachfolgenden Variablen zur Verfügung stehen.

### <span style="color:#0b5394">**Variablen**</span>

1. **id**: Eindeutige Id des E-Mail-Objektes innerhalb von Azure
1. **subject**: Betreff der E-Mail
1. **body**: Inhalt der E-Mail, falls vorhanden (HTML E-Mails werden automatisch zu Text konvertiert)
1. **received_at**: Empfangszeitpunkt der E-Mail als Text (Beispiel: 2023-05-23 18:45:13.562)
1. **sender_email**: E-Mail-Adresse des Absenders der E-Mail
1. **sender_name**: Name des Absenders der E-Mail, sofern von diesem festgelegt
1. **is_read**: Ja/Nein, ob die E-Mail vor dem Abrufen bereits Gelesen war
1. **has_attachments**: Ja/Nein, ob die E-Mail Anhänge beinhaltet
1. **attachments**: Liste von Anhängen der E-Mail. Nur gefüllt wenn die Option **Inkl. Anhänge (Ja/Nein)** auf Ja gestellt ist und die jeweilige E-Mail Anhänge hat. Anhänge können z.B. als Zuweisungs-Wert für einen Datei-Upload Baustein verwendet werden. Da die Anhänge eine Liste sind, kann über diese ebenfalls mit dem [Iteriere über Werte](iterate-values) Baustein über die einzelnen Dateien iteriert werden. Auf den Dateinamen inkl. Dateiendung einzelner Dateien kann mithilfe der folgenden Formel zugegriffen werden: `toMap(attachment).name`.
