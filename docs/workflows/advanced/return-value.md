---
layout: workflow-step
title: Gib Wert zurück
parent: Struktur
grand_parent: Workflows
icon: keyboard_return
nav_order: 11
nav_exclude: true
---

Mit dem Schritt _Gib Wert zurück_ werden Rückgabewerte an den aufrufenden Prozess gesendet. Dies wird über die API V2 mit dem Endpunkt `run-and-wait` unterstützt.

## Einstellungen

1. **Rückgabe-Parameter** — Die Parameter, die zurückgegeben werden. Für jeden Parameter wird ein Name, Typ und Wert angegeben — analog zu den Parametern beim [Starte Workflow](/docs/workflows/structure/start-workflow)-Schritt.

## Einschränkungen

- Der Schritt darf **nur einmal** pro Workflow verwendet werden.
- Er darf nur als **letzter Schritt** platziert werden.
- Der gesamte Rückgabewert (als JSON) darf maximal **50 KiB** groß sein.
- Bei Aufruf über `run-and-wait` beträgt die maximale Laufzeit **30 Sekunden**.
- Nur in **Server-Automatisierungen** verfügbar.

## Funktionsweise

Wird der Workflow über den API-Endpunkt `run-and-wait` aufgerufen und läuft erfolgreich durch, werden die Rückgabewerte im Response Body der API ausgegeben.

## Verwandte Schritte

- [Starte Workflow](/docs/workflows/structure/start-workflow) — Zum Starten eines Workflows mit Parametern
- [Webhook](/docs/workflows/advanced/webhook) — Für den externen Start eines Workflows über die API
