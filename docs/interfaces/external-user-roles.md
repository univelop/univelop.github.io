---
layout: title
title: Externe Benutzerrollen
parent: Schnittstellen
nav_order: 6
---

Externe Benutzerrollen ermöglichen die automatische Synchronisation von Rollenzuweisungen mit einem externen Identitätssystem wie Microsoft Entra (Azure AD). So können Gruppenmitgliedschaften aus dem externen System automatisch auf Univelop-Rollen übertragen werden.

## Voraussetzungen

- Eine [Microsoft (App-Only) Integration](/docs/workspace-settings/integrations) muss im Arbeitsbereich eingerichtet sein
- Die Funktion muss für den Arbeitsbereich aktiviert werden

## Funktionsweise

1. In den Rolleneinstellungen wird für jede gewünschte Rolle die **externe Synchronisation** aktiviert
2. Die **externe Gruppen-ID** (z. B. eine Azure AD Gruppen-ID) wird hinterlegt
3. Univelop gleicht die Gruppenmitgliedschaften regelmäßig ab und weist die Rollen entsprechend zu

Wenn ein Benutzer in der externen Gruppe hinzugefügt oder entfernt wird, wird die Rollenzuweisung in Univelop automatisch aktualisiert.
