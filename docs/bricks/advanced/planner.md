---
layout: title
title: Planner (Tages- und Wochenplaner)
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 36
permalink: /docs/bricks/advanced/planner.html
redirect_from:
    - /docs/bricks/planner.html
---

{: .warning }
Dieses Feature ist noch nicht verfügbar und wird in einer zukünftigen Version erscheinen.

Mit dem Baustein _Planner_ (Tages- und Wochenplaner) werden Buchungen oder Termine in einem zeit- und ressourcenbasierten Raster dargestellt. Eine Zeile pro Ressource (z. B. Räume, Personen), Spalten für Zeitslots bzw. Tage – typisch für Kalender- oder Buchungsansichten. Der Planner unterstützt sowohl Tages- als auch Wochenansicht und nutzt dafür das UI-Paket **uni_planner**, das in der Univelop-App als Planner-Brick eingebunden wird.


---

## <span style="color:#0b5394">Einstellungen</span>

Der Planner benötigt zwei verknüpfte Listen (RecordSpecs): eine **Ressourcen-Liste** (z. B. Räume, Mitarbeiter) und eine **Buchungs-Liste** (Termine/Buchungen), die im Raster angezeigt werden.

1. <span style="color:#0b5394">**Ressourcen-Liste**</span>  
   Liste, deren Einträge die Zeilen des Planers bilden. Über Ressourcen-Filter und Sortierung wird festgelegt, welche Ressourcen angezeigt werden und in welcher Reihenfolge.

2. <span style="color:#0b5394">**Buchungs-Liste**</span>  
   Liste der Buchungen bzw. Termine, die im Raster platziert werden. Über Buchungs-Filter werden die angezeigten Einträge eingeschränkt.

3. <span style="color:#0b5394">**Ressourcen-Label**</span>  
   Brick der Ressourcen-Liste, dessen Wert als Zeilenbeschriftung im Planer genutzt wird.

4. <span style="color:#0b5394">**Buchung → Ressource**</span>  
   Brick in der Buchungs-Liste, der die zugehörige Ressource referenziert (z. B. Datensatz-Baustein „Raum“ oder „Mitarbeiter“).

5. <span style="color:#0b5394">**Buchung → Datum**</span>  
   Brick in der Buchungs-Liste für das Datum des Termins.

6. <span style="color:#0b5394">**Buchung → Zeitraum**</span>  
   Optional: Brick für Start- und Endzeit des Termins (Zeitspanne).

7. <span style="color:#0b5394">**Verknüpfung Buchung ↔ Ressource**</span>  
   Verknüpfungsfelder für die Zuordnung zwischen Buchung und Ressource (`bookingsLinkByBrickId` / `resourceBacklinkByBrickId`).

8. <span style="color:#0b5394">**Sortierung Ressourcen**</span>  
   Optional: Brick und Richtung (auf-/absteigend) für die Sortierung der Ressourcenzeilen.

9. <span style="color:#0b5394">**Anzeigezeitraum**</span>  
   Standard-Anzeigezeitraum (z. B. 9:00–17:00) für Tages- und Wochenansicht.

10. <span style="color:#0b5394">**Spaltentitel Ressource**</span>  
    Formel oder Text für den Titel der Ressourcen-Spalte (z. B. „Ressource“ oder „Raum“).

Die Einstellungen werden in der Brick-Konfiguration (Planner-Einstellungen) in der App bearbeitet.

---

## Ablauf im Planer

- Die **Ressourcen** werden aus der verknüpften Ressourcen-Liste geladen (mit Filter und Sortierung).
- Die **Buchungen** werden pro Tag und Ressource abgefragt; Datum und Ressourcen-Brick der Buchungs-Liste steuern Filter und Zuordnung.
- Der sichtbare Zeitbereich und die Ansicht (Tag/Woche) werden über die integrierten Steuerungs-Widgets gewechselt.
- Ein Klick auf eine Buchung kann die Schnellbearbeitung des zugehörigen Datensatzes öffnen.

---

## Verknüpfte Listen und Filter

Der Planner-Brick verwendet zwei verknüpfte RecordSpecs: die Buchungs-Liste und die Ressourcen-Liste. Damit können z. B. Filter mit „=B (relatedTo)“ auf den Kontext des Planers (z. B. übergeordneter Datensatz) zugreifen.

