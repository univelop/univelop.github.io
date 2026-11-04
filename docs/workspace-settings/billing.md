---
layout: title
title: Kosten-Center
parent: Arbeitsbereich Einstellungen
nav_order: 8
---

Im **Kosten-Center** werden das Zahlungskonto, die Lizenzen, Rechnungen und der Credit-Verbrauch verwaltet. Ein Zahlungskonto kann mit mehreren Arbeitsbereichen verbunden sein.

## Zugriff

Das Kosten-Center kann von Besitzern und Admins des Arbeitsbereichs geöffnet werden. Die Inhalte des Zahlungskontos sehen und bearbeiten aber nur:

1. **Zahlungskonto-Besitzer** — hat alle Rechte am Zahlungskonto
2. **Zahlungskonto-Admins** — haben dieselben Rechte wie der Besitzer, mit Ausnahme der in der Tabelle markierten Aktionen

| Aktion | Besitzer | Admin |
|---|---|---|
| Namen des Zahlungskontos ändern | ✓ | ✓ |
| Stripe-Daten ändern (Adresse, Steuerdaten) | ✓ | ✓ |
| Zahlungskonto-Admins verwalten | ✓ | ✓ |
| Abrechnungszyklus, Zahlungsmethode und Rechnungsreferenz anpassen | ✓ | ✓ |
| Lizenzen buchen und Mitgliedern zuweisen | ✓ | ✓ |
| Zahlungskonto-Besitzer-Status übertragen | ✓ | – |

Als Zahlungskonto-Admins können nur Admins und Besitzer des aktuellen Arbeitsbereichs hinzugefügt werden. Der Besitzer-Status kann nur an einen bestehenden Zahlungskonto-Admin übertragen werden; der bisherige Besitzer wird dabei automatisch Admin.

{: .hint }
Zum Löschen eines Zahlungskontos muss der Univelop-Support kontaktiert werden.

## Zahlungskonto erstellen oder verknüpfen

Ist der Arbeitsbereich noch mit keinem Zahlungskonto verbunden, kann ein neues **Zahlungskonto erstellt** oder ein **vorhandenes Zahlungskonto verknüpft** werden. Beim Erstellen werden die Organisationsdaten erfasst, die gewünschten Lizenzen gebucht und die Zahlungsart gewählt — direkt online oder per Rechnung.

Mit dem Verknüpfen eines Zahlungskontos wird ein Demo-Arbeitsbereich zu einem Produktiv-Arbeitsbereich (siehe [Allgemein](/docs/workspace-settings/general)).

## Profil

Das Profil zeigt die Rechnungsdaten des Zahlungskontos:

1. **Zahlungskonto** — Name des Zahlungskontos
2. **Name der Organisation**
3. **Rechnungsadresse**
4. **Steuerinformationen** — Steuerstatus und USt.-ID
5. **Account ID** — die Kundennummer bei Stripe

In Univelop kann nur der Name des Zahlungskontos geändert werden. Adresse, Organisation und Steuerdaten werden über **Stripe-Daten ändern** im Stripe-Kundenportal bearbeitet.

## Zahlungsmanagement

1. **Zahlungsmethode** — Kartenzahlung, SEPA-Lastschrift oder Überweisung
2. **Abrechnungszyklus** — monatlich oder jährlich, jeweils auf Rechnung oder mit automatischer Abrechnung
3. **Rechnungsreferenz** — optionale Referenz, die auf den Rechnungen erscheint (max. 140 Zeichen). Eine Änderung gilt ab der nächsten Rechnung.

Über **Abrechnungszyklus anpassen** kann zwischen monatlicher und jährlicher Abrechnung gewechselt werden. **Zahlungsmethode anpassen** öffnet das Stripe-Kundenportal.

{: .warning }
Ein Wechsel des Abrechnungszyklus wird sofort anteilig abgerechnet. Ein Jahresabonnement hat eine Laufzeit von 12 Monaten.

## Rechnungen

Oberhalb der Tabelle wird die **nächste Rechnung** mit Datum und Betrag angezeigt. Ist eine Rechnung offen, erscheint ein Hinweis mit der Möglichkeit, sie direkt online zu bezahlen.

Die Tabelle zeigt die Rechnungen des aktuellen Abonnements mit folgenden Spalten:

1. **Nummer**
2. **Erstellt am**
3. **Fällig bis**
4. **Status** — Entwurf, Offen, Bezahlt, Uneinbringlich oder Storniert
5. **Referenz**
6. **Betrag** — brutto
7. **Beleg** — **Details** öffnet die Rechnung bei Stripe, wo sie auch heruntergeladen werden kann

Ältere Rechnungen sind über das **Rechnungsprofil** im Stripe-Kundenportal abrufbar.

## Lizenzen

Die Karte **Lizenzen** ist in drei Tabs aufgeteilt. Über **Bearbeiten** werden Lizenzen hinzugebucht oder reduziert.

### Übersicht

Für jedes gebuchte Produkt wird angezeigt, wie viele Lizenzen gebucht und wie viele davon genutzt sind — neben den Nutzerlizenzen (siehe [Lizenzen](/docs/member-management/licenses)) auch Zusatzprodukte wie den **BigQuery Connector** (genutzt = Arbeitsbereiche mit aktivierter BigQuery-Anbindung) und die **Portal-License** (genutzt = eingerichtete Portal-Domains).

### Arbeitsbereiche

Liste der Arbeitsbereiche, die mit dem Zahlungskonto verbunden sind und in denen man selbst Mitglied ist. Über **Öffnen** kann direkt in den jeweiligen Arbeitsbereich gewechselt werden.

### Mitglieder

Arbeitsbereichsübergreifende Übersicht aller Mitglieder (ohne External-User) aus allen Arbeitsbereichen des Zahlungskontos, mit ihren Lizenzen und der Anzahl ihrer Arbeitsbereiche. Die Liste kann nach Name/E-Mail, Lizenz und Arbeitsbereich gefiltert werden.

- **Lizenz-Abweichung** — zeigt nur Mitglieder, die in verschiedenen Arbeitsbereichen unterschiedliche Lizenzen haben. Solche Mitglieder sind zusätzlich mit einem Warnsymbol markiert.
- **Lizenz** — legt eine einheitliche Lizenz für das Mitglied in allen Arbeitsbereichen fest
- **Arbeitsbereiche** — passt an, in welchen Arbeitsbereichen das Mitglied ist. In neu hinzugefügten Arbeitsbereichen erhält es seine bisher höchste Lizenz.

## Credits

Die Credit-Übersicht zeigt den Verbrauch aller Arbeitsbereiche des Zahlungskontos für den laufenden Abrechnungsmonat und die zwei vorherigen. Das Credit-Budget gilt jeweils für einen Monat und wird danach zurückgesetzt.

| Aktion | Beschreibung |
|---|---|
| **Workflow** | Ausführungen von Workflows |
| **Schnittstelle (API V1)** | Aufrufe über die REST-API V1 |
| **Schnittstelle (API V2)** | Aufrufe über die REST-API V2 |
| **Job** | Hintergrund-Jobs |
| **Sessions** | Benutzer-Sitzungen |
| **Kalenderfreigaben** | Abrufe von Kalenderfreigaben |
| **Light-User (Part-Time)** | Verbrauch durch Part-Time-Lizenzen (nur sichtbar, wenn vorhanden) |
| **Rabatt** | Gutschriften (nur sichtbar, wenn vorhanden) |
