---
layout: workflow-step
title: Gib Wert zurück
parent: Struktur
grand_parent: Workflows
icon: keyboard_return
nav_order: 11
nav_exclude: true
---

Mit dem Workflow-Schritt _Gib Wert zurück_ kann ein Workflow Rückgabewerte an den aufrufenden Prozess senden. Dies wird derzeit bereits von der API V2 über den Endpunkt `run-and-wait` unterstützt.

Rückgabewerte müssen, wie auch beim Starte-Workflow Schritt, als (Rückgabe-)Parameter mit dem richtigen Dateityp definiert werden. Der Schritt darf nur einmal innerhalb von Server Workflows und nur als letzter Schritt verwendet werden.

Der gesamte Rückgabewert als json darf nicht größer als 50 Kibibytes sein. Wird der Workflow über den API Endpunkt `run-and-wait` aufgerufen, so kann dieser maximal 30 Sekunden laufen bevor er abgebrochen wird. Läuft der Workflow erfolgreich durch, werden dessen Rückgabewerte im Response Body der API ausgegeben.
