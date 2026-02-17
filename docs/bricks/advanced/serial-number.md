---
layout: title
title: Laufende Nummer
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 13
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/rolling-number.html
---

Der Baustein _Laufende Nummer_ vergibt fortlaufende, eindeutige Nummern an Einträge. Er eignet sich für Kundennummern, Belegnummern, Auftragsnummern und ähnliche Anwendungsfälle.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Präfix** — Optionaler Vorsatz vor der Nummer, z. B. einzelne Buchstaben, Kürzel oder „2025-". Leerzeichen zwischen Präfix und Nummer werden vom System ignoriert.
2. **Anzahl der Ziffern** — Länge der Nummer mit führenden Nullen (z. B. 5 → „00001"). Beim Überschreiten der Länge wird dennoch fortlaufend weitergezählt.
3. **Letzte Nummer** — Zeigt die zuletzt vergebene Nummer an. Die nächste Nummer ist diese plus 1. Kann bei einer versehentlichen Lücke manuell korrigiert werden.
4. **Manuelle Nummern erlauben** — Aktiviert neben dem Button „Nächste Nummer" auch einen Stift zur manuellen Eingabe einer Nummer.

## Hinweise

- Die laufende Nummer wird erst beim Klick auf „Nächste Nummer" (oder bei manueller Eingabe) vergeben, nicht automatisch beim Erstellen eines Eintrags.
- Die Eindeutigkeit der Nummer wird vom System geprüft.
