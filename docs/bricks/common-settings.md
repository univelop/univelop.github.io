---
layout: title
title: Allgemeine Baustein-Einstellungen
parent: Bausteine
nav_order: 0
---

Jeder Baustein in Univelop verfügt über eine Reihe allgemeiner Einstellungen, die unabhängig vom Bausteintyp zur Verfügung stehen. Diese Einstellungen steuern Darstellung, Pflichtfeldlogik, Sichtbarkeit und Zugriffsrechte.

Bausteinspezifische Einstellungen werden auf den jeweiligen Baustein-Seiten beschrieben.

## Bezeichnung und Darstellung

1. **Bezeichnung** — Der angezeigte Name des Bausteins. Wird mehrsprachig unterstützt, wenn die Mehrsprachigkeit im Arbeitsbereich aktiviert ist.

2. **Technischer Name** — Ein eindeutiger Bezeichner, der in Formeln und Workflows verwendet wird, um auf den Wert dieses Bausteins zuzugreifen. Der technische Name wird über die Syntax `${technischerName}` referenziert. Jeder Baustein kann mehrere technische Namen besitzen, z. B. für Start- und Endzeit bei einer Zeitspanne.

3. **Icon** — Ein optionales Symbol, das neben der Bezeichnung angezeigt wird.

4. **Tooltip** — Ein optionaler Hinweistext, der in einem Hinweis-Icon am rechten Ende des Bausteins erscheint. Wird mehrsprachig unterstützt.

## Pflichtfeld

5. **Pflichtfeld** — Wenn aktiviert, muss der Nutzer dieses Feld ausfüllen, bevor der Eintrag gespeichert werden kann.

6. **Pflichtfeld unter Bedingungen** — Erlaubt es, die Pflichtfeld-Eigenschaft nur unter bestimmten Bedingungen zu aktivieren. Es können ein oder mehrere Filter definiert werden, die erfüllt sein müssen, damit das Feld als Pflichtfeld gilt.

## Sichtbarkeit und Bearbeitbarkeit

7. **Nur Lesen** — Wenn aktiviert, kann der Nutzer den Wert des Bausteins nur lesen, nicht bearbeiten.

8. **Unter Bedingungen bearbeiten** — Erlaubt es, ein im Nur-Lesen-Modus befindliches Feld unter bestimmten Bedingungen bearbeitbar zu machen. Es können Filter definiert werden, die bestimmen, wann das Feld editierbar wird.

9. **Baustein verstecken** — Blendet den Baustein vollständig aus der Ansicht aus.

10. **Unter Bedingungen anzeigen** — Erlaubt es, einen versteckten Baustein unter bestimmten Bedingungen anzuzeigen. Es können Filter definiert werden, die bestimmen, wann der Baustein sichtbar wird.

11. **In Schnellerfassung verstecken** — Blendet den Baustein im Schnellerfassungsdialog aus, der in der eingebetteten Listenansicht erscheint.

## Zugriffsrechte

12. **Zugriff einschränken** — Aktiviert die rollenbasierte Zugriffskontrolle für diesen Baustein. Wenn aktiviert, können für jede Rolle individuelle Lese- und Schreibrechte vergeben werden.

13. **Rollenberechtigungen** — Definiert für jede Rolle im Arbeitsbereich, ob Lese- und/oder Schreibzugriff auf diesen Baustein besteht. Zusätzlich können Bedingungen definiert werden, unter denen der Zugriff gewährt wird.

## Weitere Einstellungen

14. **KI-Beschreibung** — Ein optionaler Beschreibungstext, der KI-Agenten dabei hilft, den Zweck und Inhalt dieses Bausteins zu verstehen.

15. **Tab-Zugehörigkeit** — Ordnet den Baustein einem bestimmten Tab innerhalb des Eintrags zu. Tabs können im Designmodus für die Datensatzansicht erstellt werden.

16. **Solution** — Ordnet den Baustein einer installierten Solution zu, sofern Solutions im Arbeitsbereich aktiviert sind.
