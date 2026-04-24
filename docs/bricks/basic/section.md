---
layout: title
title: Abschnitt
parent: Basis-Bausteine
grand_parent: Bausteine
nav_order: 1
redirect_from:
    - /docs/record-spec-settings/grand-childs-base/section.html
---

Mit dem Baustein _Abschnitt_ können Einträge thematisch in Bereiche gegliedert werden. Alle Bausteine unterhalb eines Abschnitts gehören zu diesem Abschnitt und können gemeinsam ein- und ausgeklappt werden.

## Einstellungen

Allgemeine Einstellungen wie Sichtbarkeit und Berechtigungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.

1. **Zusammenklappbar** — Aktiviert die Möglichkeit, den Abschnitt ein- und auszuklappen.
2. **Standardmäßig zusammengeklappt** — Legt fest, ob der Abschnitt beim Öffnen eines Eintrags zunächst eingeklappt angezeigt wird. Nur verfügbar wenn _Zusammenklappbar_ aktiviert ist.
3. **Bausteine für Kopfzeile** — Bis zu vier Bausteine aus dem Eintrag, die im eingeklappten Zustand direkt unter dem Abschnitt-Titel als Vorschau angezeigt werden. Wird ein Baustein _Datei Upload_ als Kopfzeile hinzugefügt, wird zusätzlich die Anzahl der vorhandenen Dateien angezeigt. Nur verfügbar wenn kein Bild unter _Banner_ hochgeladen wurde und _Zusammenklappbar_ aktiviert ist.
4. **Banner** — Ein optionales Bild, das als Banner über dem Abschnitt-Titel angezeigt wird. Abschnitte mit Banner können nicht zusammengeklappt werden.
5. **Titelfarbe** — Die Farbe des Abschnitt-Titels. Mögliche Werte: _Weiß_, _Schwarz_, _Primärfarbe_. Nur verfügbar wenn für den _Banner_ ein Bild hochgeladen wurde. 

## Hinweise

- Erweiterte Einstellungen (Nur Lesen, Baustein verstecken, In Schnellerfassung verstecken) eines Abschnitts gelten automatisch für **alle Bausteine innerhalb** dieses Abschnitts.
- Ein Abschnitt kann auch ohne Ein-/Ausklappfunktion genutzt werden, um Einträge rein optisch zu gliedern.

## Funktionsweise 
Über _Zusammenklappbar_ können wir unseren Abschnitt ein- und ausklappbar machen und  über _Standardmäßig zusammengeklappt_ einstellen, dass dieser beim Aufrufen des Eintrags zusammengeklappt ist. Unter _Bausteine für Kopfzeile_ können dann Bausteine die im zusammengeklappten Zustand unter der Überschrift erscheinen sollen ausgewählt werden, hier bspw. ein Datei-Upload. 
![alt text](/assets/workflows/advanced/bricks/basic/section-overview-v2.png)
Beim Dateinupload-Baustein wird die Anzahl der vorhandenen Dateien angezeigt.
![alt text](/assets/workflows/advanced/bricks/basic/section-result-v2.png)
![alt text](image.png)
## Verwandte Bausteine

- [Überschrift](/docs/bricks/basic/subheading) — Einfache optische Zwischenüberschrift ohne Funktionalität
