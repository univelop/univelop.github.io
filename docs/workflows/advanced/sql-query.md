---
layout: workflow-step
title: SQL-Abfrage
parent: Erweitert
grand_parent: Workflows
icon: storage
nav_order: 9
---

Mit dem Baustein _SQL-Abfrage_ wird eine Abfrage auf einem Microsoft SQL Server ausgeführt. Die zurückgegebenen Zeilen stehen den nachfolgenden Workflow-Bausteinen als Liste zur Verfügung — vergleichbar mit [Importiere Tabelle](import-table.md), nur mit einer Datenbank als Quelle statt einer hochgeladenen Datei.

Der Baustein ist ausschließlich in **Server-Automatisierungen** verfügbar. Für die Verbindung zur Datenbank wird eine direkte Netzwerkverbindung benötigt, die aus dem Browser heraus nicht möglich ist.

### <span style="color:#0b5394">**Voraussetzung: Integration anlegen**</span>

Die Zugangsdaten werden nicht im Workflow hinterlegt, sondern einmalig als Integration vom Typ _Microsoft SQL Server_ in den Arbeitsbereich-Einstellungen. Dadurch können mehrere Workflows dieselbe Datenbank verwenden, und das Passwort wird verschlüsselt gespeichert statt im Klartext in der Workflow-Definition zu stehen.

1. <span style="color:#0b5394">**Server (Text)**</span>
   Hostname oder IP-Adresse des SQL Servers.
1. <span style="color:#0b5394">**Port (Zahl)**</span>
   Der Port, auf dem der SQL Server erreichbar ist. Standard ist `1433`.
1. <span style="color:#0b5394">**Datenbank (Text)**</span>
   Der Name der Datenbank, auf der die Abfragen ausgeführt werden.
1. <span style="color:#0b5394">**Benutzername (Text)**</span>
   Der Anmeldename. Verwendet wird die SQL-Server-Authentifizierung.
1. <span style="color:#0b5394">**Passwort (Text)**</span>
   Das Passwort des Benutzers. Wird verschlüsselt gespeichert und nach dem Speichern nicht mehr angezeigt.
1. <span style="color:#0b5394">**Verbindung verschlüsseln (Ja/Nein)**</span>
   Verschlüsselt die Verbindung zum Server per TLS. Sollte eingeschaltet bleiben; ohne Verschlüsselung sind Zugangsdaten und Abfrageergebnisse auf dem Weg zum Server mitlesbar.
1. <span style="color:#0b5394">**Serverzertifikat vertrauen (Ja/Nein)**</span>
   Unter _Erweitert_. Akzeptiert auch selbstsignierte Zertifikate. Nur nötig, wenn der Server kein von einer offiziellen Stelle ausgestelltes Zertifikat verwendet.
1. <span style="color:#0b5394">**Statische IP verwenden (Ja/Nein)**</span>
   Unter _Erweitert_. Baut die Verbindung über eine feste IP-Adresse auf, die sich in der Firewall des SQL Servers freigeben lässt. Siehe [Zugriff über eine Firewall](#zugriff-über-eine-firewall).

Über _Verschlüsseln und testen_ wird eine echte Verbindung zum Server aufgebaut und eine Testabfrage ausgeführt. Erst danach lässt sich die Integration im Workflow auswählen. Schlägt der Test fehl, steht der Grund direkt in der Fehlermeldung — meist ein nicht erreichbarer Server, ein falsches Passwort oder ein Zertifikat, dem nicht vertraut wird.

{: .hint }
Der Datenbank-Benutzer sollte nur die Rechte bekommen, die tatsächlich gebraucht werden — in der Regel Lesezugriff auf einzelne Tabellen oder Sichten. Die Rechte dieses Benutzers sind die entscheidende Schutzebene für die Datenbank, nicht die Formulierung der Abfrage.

### <span style="color:#0b5394">**Einstellungen**</span>

1. <span style="color:#0b5394">**Technischer Name**</span>
   Über diesen Namen werden die Ergebniszeilen in den nachfolgenden Workflow-Bausteinen referenziert, bspw. `kunden.data`.
1. <span style="color:#0b5394">**Integration**</span>
   Die Integration vom Typ _Microsoft SQL Server_. Angeboten werden nur Integrationen, die SQL-Abfragen ausführen können.
1. <span style="color:#0b5394">**SQL-Abfrage (Text)**</span>
   Die auszuführende Abfrage. Werte aus dem Workflow werden mit `${...}` eingesetzt.
1. <span style="color:#0b5394">**Maximale Anzahl Zeilen (Zahl)**</span>
   Die Obergrenze der geladenen Zeilen. Standard ist `1000`. Siehe [Zeilenbegrenzung](#zeilenbegrenzung).

### <span style="color:#0b5394">**Werte aus dem Workflow einsetzen**</span>

Die Abfrage wird wie ein Text mit Platzhaltern behandelt: `${...}` wird vor der Ausführung durch den jeweiligen Wert ersetzt.

```sql
SELECT id, name, umsatz
FROM kunden
WHERE region = '${trigger.record.region}'
```

{: .warning }
Der Wert wird unverändert in die Abfrage eingesetzt. Enthält er ein Anführungszeichen oder selbst SQL-Code, verändert das die Abfrage — im ungünstigsten Fall werden dadurch fremde Daten gelesen oder verändert. Abfragen deshalb nur aus vertrauenswürdigen Werten zusammensetzen und keine ungeprüften Eingaben von Nutzern einsetzen. Der wirksamste Schutz bleibt ein Datenbank-Benutzer mit möglichst wenigen Rechten.

### <span style="color:#0b5394">**Ergebniszeilen verarbeiten**</span>

Über den technischen Namen mit dem Zusatz `.data` steht die Liste der Zeilen zur Verfügung. Jede Zeile ist ein Objekt, dessen Felder den Spalten der Abfrage entsprechen. Die Beispiele gehen von dem technischen Namen `kunden` aus.

- `kunden.data` — die vollständige Liste aller Zeilen
- `kunden.data[0].name` — der Wert der Spalte `name` in der ersten Zeile

Mit [Iteriere über Werte](../structure/iterate-list.md) werden die Zeilen einzeln durchlaufen; innerhalb der Iteration sind die Spalten über `toMap(zeile).name` erreichbar. Mit [Erstelle Eintrag](../record-loading/create-record.md) lassen sich die Werte anschließend in Datensätze schreiben.

Spalten in der Abfrage zu benennen — `SELECT k.name AS kunde` — macht die Feldnamen im Workflow eindeutig und lesbar. Liefert eine Abfrage zwei gleichnamige Spalten, etwa `SELECT a.id, b.id`, bekommt die zweite automatisch einen Zusatz: `id` und `id_2`.

### <span style="color:#0b5394">**Datentypen**</span>

Die Werte behalten ihren Datentyp und müssen im Workflow nicht umgewandelt werden. Zahlen lassen sich direkt weiterrechnen, Datumswerte direkt in Datums-Bausteine schreiben.

| SQL-Typ | Typ im Workflow |
|---|---|
| `INT`, `BIGINT` | Ganzzahl |
| `DECIMAL`, `NUMERIC`, `FLOAT`, `MONEY` | Kommazahl |
| `BIT` | Ja/Nein |
| `VARCHAR`, `NVARCHAR`, `CHAR` | Text |
| `DATE`, `DATETIME`, `DATETIME2` | Datum |
| `UNIQUEIDENTIFIER` | Text |
| `VARBINARY`, `IMAGE` | Text (Base64-kodiert) |
| `NULL` | Leer |

### <span style="color:#0b5394">**Zeilenbegrenzung**</span>

Liefert die Abfrage mehr Zeilen als unter _Maximale Anzahl Zeilen_ eingestellt, werden nur die ersten Zeilen geladen. Der Workflow läuft weiter, erhält aber den Status _Warnung_ und einen entsprechenden Eintrag im Workflow-Log.

Die Grenze verhindert, dass eine versehentlich zu weit gefasste Abfrage — etwa ein vergessenes `WHERE` — den gesamten Tabelleninhalt lädt. Werden mehr Zeilen gebraucht, ist es meist besser, die Abfrage einzuschränken oder direkt in SQL zusammenzufassen, als die Grenze anzuheben: `WHERE`, `TOP` oder eine Aggregation mit `GROUP BY` verlagern die Arbeit auf die Datenbank, die dafür gebaut ist.

### <span style="color:#0b5394">**Zugriff über eine Firewall**</span>

Datenbanken sind in der Regel nicht frei aus dem Internet erreichbar, sondern nur für bestimmte IP-Adressen freigegeben. Mit der Option _Statische IP verwenden_ baut Univelop die Verbindung über eine feste IP-Adresse auf, die sich in der Firewall des SQL Servers freigeben lässt. Die freizugebende Adresse wird in der Integration direkt neben der Option angezeigt und kann von dort kopiert werden.

Verbindungen über die statische IP-Adresse verbrauchen doppelt so viele Credits wie direkte Verbindungen.

### <span style="color:#0b5394">**Hinweise**</span>

- Verfügbar in: Server-Automatisierung.
- Der Baustein verbraucht Credits abhängig von der Datenmenge der zurückgegebenen Zeilen. Eine Abfrage, die nur die benötigten Spalten auswählt, ist damit auch günstiger als `SELECT *`.
- Bei einem Probelauf wird der Baustein übersprungen und der Workflow erhält den Status _Warnung_ — es wird keine Abfrage ausgeführt.
- Unterstützt wird Microsoft SQL Server mit SQL-Server-Authentifizierung, also Benutzername und Passwort.
- Für Daten aus Web-Schnittstellen statt aus einer Datenbank eignet sich [Sende Web-Request](web-request.md).
