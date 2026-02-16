---
layout: title
title: Bedingungen und Rechnen mit Formeln
parent: Arbeiten mit Formeln
nav_order: 2
---

### <span style="color:#3d85c6">_Formelbausteine_ und technischer Name</span>

Über _Formelbausteine_ kann ganz einfach mit Bedingungen gerechnet werden oder sich Inhalte anzeigen lassen.
Hierzu nimmt man immer Bezug auf den technischen Namen eines Bausteins in der Liste.
Der technische Name steht im Designmodus des Bausteins direkt unter dem Abschnitt
Erweitert.
Der technische Name wird in vielen Fällen automatisch durch die Bezeichnung des Bausteins vorgegeben, außer dieser
wird im Nachgang abgeändert.

![technical name](/old_assets/formulary/technical name.png "technical name")

Diese Funktion lässt sich nun in vielerlei Hinsicht mit Formelbausteinen kombinieren.

**Hinweis zu den Beispielen: Es wird in den Beispielen der Baustein _Formel_ verwendet, welcher veraltet ist.**

**Beispiel:**
Ein
Baustein Datensatz überträgt den Stundenlohn aus der Kachel _Mitarbeiterstammdaten_ in einen lokalen Baustein _Nummer_ für den Zugriff auf verbundene Daten.
Es wird in dem Baustein Zahlenformel in den Einstellungen des Bausteins der technische Name des Bausteins angegeben, welcher den Stundenlohn übertragen bekommt.
Hier im Beispiel bekommt der Formelbaustein den Verweis "mitarbeiterLohn".
Wenn in der Liste unter anderem noch eine Arbeitszeit (hier mit techn. Namen _arbZeit_) enthalten ist, kann die Formel erweitert werden
z. B. zur Berechnung eines Arbeitslohns der erfassten Tätigkeit. Dazu wird die Formel mit dem technischen
Namen des Bausteins erweitert, der die Arbeitszeit enthält, also _mitarbeiterLohn_ \* **_arbZeit_**.

![formulabrick technical name](/old_assets/formulary/example formula brick technical name.png "formulabrick technical name")

1. Übernahme eines Wertes aus eines verbundenen Datensatz in den aktuellen hinzufügen
   ![formulabrick technical name](/old_assets/formulary/example formula brick technical name6.png "formulabrick technical name")
2. Auswahl Baustein Zahlenformel
3. Eingabe des Verweis _mitarbeiterLohn_
4. Die Formel sucht nun die Kachel mit dem technischen Namen _mitarbeiterLohn_, nimmt dessen Wert und nutzt ihn für die restliche Formel.

**Ergebnis:**  
![formulabrick technical name](/old_assets/formulary/example formula brick technical name3.png "formulabrick technical name")

Es bietet sich an den technischen Namen für PDF-Vordrucke oder lange Formeln abzukürzen. Für das Beispiel
des Stundenlohns könnte die Abkürzung **stdlo** gewählt werden. Je nach Anbindungswunsch an ein Fremdsystem
besteht die Notwendigkeit, dass der technische Name angepasst werden muss, wenn Univelop mit einem Fremdsystem
automatisch kommunizieren soll Schnittstellen, da das andere System unterschiedliche oder eigene Feldnamen und Bezeichnungen vorgibt.

### <span style="color:#3d85c6">Individuelle Berechnung mit Formelbaustein</span>

<span style="color:#3d85c6">**Berechnung mit Baustein _Textfeld_**</span>

Der Baustein _Textformel_ kann mit dem Baustein _Textfeld_
Berechnung durchführen. Verweist man in der Formel über den technischen Namen auf einen Baustein _Text_ und
multipliziert diesen mit einer natürlichen Zahl, wird der Textwert des Bausteins entsprechend des angegebenen
Multiplikators wiederholt. Eine Berechnung mit einer Dezimalzahl ist hier nicht möglich und führt zu einer
Fehlermeldung.

**Beispiel:**
![formula text brick](/old_assets/formulary/formula with text brick.png "formula text brick")

**Ergebnis:**
![formula text brick](/old_assets/formulary/formula with text brick2.png "formula text brick")

<span style="color:#3d85c6">**Berechnung mit Baustein _Nummer_**</span>

In den Formelbausteinen, z. B. in dem Baustein _Zahlenformel_ kann ebenfalls eine individuelle Berechnung erfolgen. Dabei müssen nicht zwingend zwei
technische Namen / Felder (wie im o. g. Beispiel) angegeben, sondern es können ebenso technischer Name,
Rechenzeichen und gewünschte Zahlen verwendet werden. Werden selbst gewählte Zahlen zur Berechnung verwendet,
ist es wichtig auf die korrekte Schreibweise zu achten: soll mit einer Dezimalzahl gerechnet werden, muss
anstelle eines Kommas ein Punkt verwendet werden (z. B. 0**.**5).

**Beispiel:**  
Auf einen Stundenlohn soll ein Samstagszuschlag erhoben werden. Der Zuschlag beträgt 50%. Die einzugebende Formel
würde dann lauten **stundenlohn\*1.5**.

Im Vergleich zu einem Nummernfeld hat dies den Vorteil, dass der prozentuale Zuschlag dynamisch bleibt und nur das
Feld Stundenlohn angepasst werden muss.

### <span style="color:#3d85c6">Berechnung unter Bedingungen</span>

Die altbekannte Wenn-Dann-Sonst-Formel aus Excel kann auch in den
Formelbausteinen
integriert werden.
Auch hier kann sich neben der aktuellen Liste auch auf eine verknüpfte Liste bezogen werden.

| Formel                                | Beispiel                                            | Beschreibung                                                                                                                                                                      |
| ------------------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| if(condition, thenValue)              | `if(arbeitstag == Samstag, stundenlohn*1,5)`        | wenn der Arbeitstag ein Samstag ist, erhöhe den Stundenlohn um 50%                                                                                                                |
| ifElse(condition,thenValue,elseValue) | `ifElse(reisezeit >= 12, verpflegungspauschale, 0)` | wenn die Reisezeit 12 Stunden oder länger dauert, trage den Wert aus dem Feld _Verpflegungspauschale_ ein (hier sollte dann ein Wert hinterlegt sein), sonst verwende den Wert 0. |
