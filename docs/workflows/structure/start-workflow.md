---
layout: workflow-step
title: Starte Workflow
parent: Struktur
grand_parent: Workflows
icon: account_tree
nav_order: 6
redirect_from:
    - /docs/workflows/advanced/start-workflow.html
---

Mit dem Workflow-Schritt _Starte Workflow_ kann ein anderer Workflow gestartet werden. Workflows, welche lokal auf dem Gerät laufen, können sowohl andere lokale als auch auf dem Server laufende Workflows starten.

Auf dem Server laufende Workflows können wiederum nur andere, ebenfalls auf dem Server laufende, Workflows anstoßen.
Dem zu startenden Workflow können benutzerdefinierte Parameter übergeben werden. Auf diese kann im gestarteten Workflow mit `params.parameterName` zugegriffen werden. Beispiel: `params.test1`.

Neben Parametern kann dem zu startenden auch eine Datensatz-ID übergeben werden. Dies ist sinnvoll, wenn der erste Schritt in dem zu startenden Workflow ein "Wähle Datensatz"-Schritt ist. Der gestartete Workflow wählt dann den Datensatz mit der übergebenen ID und verhält sich genau so, als wäre er per Workflow-Button aus einem Datensatz heraus gestartet worden.
