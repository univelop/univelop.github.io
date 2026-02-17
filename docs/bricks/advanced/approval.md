---
layout: title
title: Genehmigung
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 5
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/approval.html
---

Mit dem Baustein _Genehmigung_ kann ein Genehmigungsablauf zu einem Datensatz abgebildet werden. Ein Datensatz wird von einem ausgewählten Genehmiger geprüft und kann mit einer Bemerkung genehmigt oder abgelehnt werden. Der Baustein eignet sich z. B. für Bestellanforderungen, Urlaubsanträge oder Freigabeprozesse.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Fester Genehmiger** — Legt einen festen Benutzer als Genehmiger fest. Ist kein fester Genehmiger gesetzt, kann der Anfordernde den Genehmiger bei der Anfrage auswählen.
2. **Genehmiger über Benutzer-Baustein** — Ermöglicht es, den Genehmiger über einen oder mehrere _Benutzer_-Bausteine im Datensatz zu bestimmen.
3. **Genehmiger nach Rollen filtern** — Schränkt die auswählbaren Genehmiger auf bestimmte Rollen ein.
4. **Genehmigungsfrist (Tage)** — Die Anzahl der Tage, innerhalb derer die Genehmigung erfolgen soll (Standard: 7).
5. **Eintrag automatisch sperren** — Sperrt den Datensatz bei Genehmigung automatisch.
6. **Unterschrift erforderlich** — Fordert vom Genehmiger eine Unterschrift beim Genehmigen.
7. **Workflow starten** — Wählt einen Workflow aus, der bei Genehmigung oder Ablehnung gestartet wird.

## Funktionsweise

Der Genehmigungsprozess durchläuft vier Zustände:

- **Inaktiv** (`inactive`) — Keine Genehmigung angefordert.
- **Ausstehend** (`pending`) — Genehmigung wurde angefordert und wartet auf Prüfung.
- **Genehmigt** (`approved`) — Der Genehmiger hat den Datensatz genehmigt.
- **Abgelehnt** (`rejected`) — Der Genehmiger hat den Datensatz mit einer Bemerkung abgelehnt.

Im ersten Schritt fordert ein Benutzer die Genehmigung an und wählt ggf. einen Genehmiger aus. Der Genehmiger kann den Datensatz prüfen und mit einer Bemerkung genehmigen oder ablehnen. Bei der Genehmigung kann optional eine Unterschrift gefordert sein. Die Genehmigung oder Ablehnung kann jederzeit von einem Benutzer mit entsprechenden Rechten zurückgesetzt werden.

### Abgeleitete Werte

Der Baustein stellt folgende Werte bereit, die in Formeln und Filtern verwendet werden können:

- **Status** — Der aktuelle Genehmigungszustand.
- **Genehmiger-ID** — Die ID des Genehmigers.
- **Genehmiger-Name** — Der Name des Genehmigers.
- **Bemerkung** — Die Bemerkung bei Genehmigung oder Ablehnung.
- **Unterschrift** — Die optionale Unterschrift des Genehmigers.
- **Zeitpunkt** — Der Zeitpunkt der letzten Statusänderung.

## Hinweise

- Der Genehmigungsprozess kann über die Workflow-Schritte [Genehmigung anfordern](/docs/workflows/user-interaction/send-approval-request) und [Warte auf Genehmigung](/docs/workflows/user-interaction/wait-for-approval) auch vollständig in Workflows abgebildet werden.
- Der Status des Bausteins kann in Bedingungen und Filtern verwendet werden, z. B. `genehmigung.status == 'approved'`.

## Verwandte Bausteine

- [Datensatz sperren](/docs/bricks/advanced/release) — Für die manuelle Datensatzsperre
- [Unterschrift](/docs/bricks/advanced/signature) — Für separate Unterschriftenerfassung
- [Status](/docs/bricks/advanced/status) — Für allgemeine Statusverwaltung
