---
layout: default
title: Bedingungen und Rechnen mit Formeln
parent: Arbeiten mit Formeln
nav_order: 2
---

# <span style="color:#0b5394">**Arbeiten mit Formeln**</span>
## <span style="color:#0b5394">Bedingungen und Rechnen mit Formeln in *Formelbausteinen*</span>
### <span style="color:#3d85c6">*Formelbausteine* und technischer Name</span>

Über *Formelbausteine* kann ganz einfach mit Bedingungen gerechnet werden oder sich Inhalte anzeigen lassen. 
Hierzu nimmt man immer Bezug auf den technischen Namen eines Bausteins in der Liste oder den technischen
Namen eines Bausteins in einer
[verknüpften Liste](/docs/link-lists.html).
Der technische Name steht im Designmodus des Bausteins direkt unter dem Abschnitt
[**ERWEITERT**](/docs/design-mode-settings.html#eintrag).
Der technische Name wird in vielen Fällen automatisch durch die Bezeichnung des Bausteins vorgegeben, außer dieser
wird im Nachgang abgeändert.

![technical name](\assets\formulary\technical name.png "technical name") 

Diese Funktion lässt sich nun in vielerlei Hinsicht mit
[*Formelbausteinen*](/docs/formulary/formulary.html#formelbausteine-1)
kombinieren.  

**Hinweis zu den Beispielen: Es wird in den Beispielen der Baustein *Formel* verwendet, welcher veraltet ist. Die in den Beispielen angegebenen Formel sind jedoch weiterhin gültig und, abhängig vom Ergebnistyp der Formel, mit den neuen [*Formelbausteinen*](/docs/formulary/formulary.html#formelbausteine-1) funktionsfähig.**

**Beispiel:**
Ein
[Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html)
mit Namen "Mitarbeiter" wird als *Technischer Name* ebenfalls **mitarbeiter** heißen.
In der Kachel *Mitarbeiterstammdaten* ist der Stundenlohn erfasst. Soll nun zum Beispiel der Stundenlohn
des ausgewählten Mitarbeiters abgefragt werden, wird in dem
[Baustein *Zahlenformel*](/docs/record-spec-settings/grand-child-expanded/numberformular.html)
in den Einstellungen des Bausteins der Verweis "mitarbeiter.stundenlohn" eingegeben.

![formulabrick technical name](\assets\formulary\example formula brick technical name.png "formulabrick technical name") 

1. Auswahl Baustein
[Baustein *Zahlenformel*](/docs/record-spec-settings/grand-child-expanded/numberformular.html)
2. Eingabe des Verweis *mitarbeiter.stundenlohn*
3. Die Formel sucht nun über die verknüpfte Kachel "Mitarbeiter" im 
[Baustein *Datensatz*](/docs/record-spec-settings/grand-child-expanded/record.html)
den ausgewählten Mitarbeiter

    ![formulabrick technical name](\assets\formulary\example formula brick technical name2.png "formulabrick technical name")

4. [Baustein *Zahlenformel*](/docs/record-spec-settings/grand-child-expanded/numberformular.html)
sucht im ausgewählten Mitarbeiter nach einem Baustein mit dem technischen Namen *Stundenlohn*
5. Formel gibt den gefundenen Wert zurück  

**Ergebnis:**  
![formulabrick technical name](\assets\formulary\example formula brick technical name3.png "formulabrick technical name")

Wenn in der Liste unter anderem noch eine Arbeitszeit enthalten ist, kann die Formel erweitert werden
z. B. zur Berechnung eines Arbeitslohns der erfassten Tätigkeit. Dazu wird die Formel mit dem technischen
Namen des Bausteins erweitert, der die Arbeitszeit enthält, also *mitarbeiter.stundenlohn* * ***arbeitszeit***.

![formulabrick technical name](\assets\formulary\example formula brick technical name4.png "formulabrick technical name")  

**Ergebnis:**  
![formulabrick technical name](\assets\formulary\example formula brick technical name5.png "formulabrick technical name")

Es bietet sich an den technischen Namen für PDF-Vordrucke oder lange Formeln abzukürzen. Für das Beispiel
des Stundenlohns könnte die Abkürzung **stdlo** gewählt werden. Je nach Anbindungswunsch an ein Fremdsystem
besteht die Notwendigkeit, dass der technische Name angepasst werden muss, wenn Univelop mit einem Fremdsystem
automatisch kommunizieren soll
([Schnittstellen](/docs/interface.html))
, da das andere System unterschiedliche oder eigene Feldnamen und Bezeichnungen vorgibt.

### <span style="color:#3d85c6">Individuelle Berechnung mit Formelbaustein</span>
<span style="color:#3d85c6">**Berechnung mit Baustein *Textfeld***</span>

Der 
[Baustein *Textformel*](/docs/record-spec-settings/grand-child-expanded/textformular.html)
kann mit dem
[Baustein *Textfeld*](/docs/record-spec-settings/grand-childs-form/text.html)
Berechnung durchführen. Verweist man in der Formel über den technischen Namen auf einen Baustein *Text* und
multipliziert diesen mit einer natürlichen Zahl, wird der Textwert des Bausteins entsprechend des angegebenen
Multiplikators wiederholt. Eine Berechnung mit einer Dezimalzahl ist hier nicht möglich und führt zu einer
Fehlermeldung. 

**Beispiel:**
![formula text brick](\assets\formulary\formula with text brick.png "formula text brick")

**Ergebnis:**
![formula text brick](\assets\formulary\formula with text brick2.png "formula text brick")

<span style="color:#3d85c6">**Berechnung mit Baustein *Nummer***</span>

In den [Formelbausteinen](/docs/formulary/formulary.html#formelbausteine), z. B. in dem
[Baustein *Zahlenformel*](/docs/record-spec-settings/grand-child-expanded/numberformular.html)
kann ebenfalls eine individuelle Berechnung erfolgen. Dabei müssen nicht zwingend zwei
technische Namen / Felder (wie im o. g. Beispiel) angegeben, sondern es können ebenso technischer Name,
Rechenzeichen und gewünschte Zahlen verwendet werden. Werden selbst gewählte Zahlen zur Berechnung verwendet,
ist es wichtig auf die korrekte Schreibweise zu achten: soll mit einer Dezimalzahl gerechnet werden, muss
anstelle eines Kommas ein Punkt verwendet werden (z. B. 0**.**5).  

**Beispiel:**  
Auf einen Stundenlohn soll ein Samstagszuschlag erhoben werden. Der Zuschlag beträgt 50%. Die einzugebende Formel
würde dann lauten **stundenlohn*1.5**.  

Im Vergleich zu einem Nummernfeld hat dies den Vorteil, dass der prozentuale Zuschlag dynamisch bleibt und nur das
Feld Stundenlohn angepasst werden muss.

### <span style="color:#3d85c6">Berechnung unter Bedingungen</span>

Die altbekannte Wenn-Dann-Sonst-Formel aus Excel kann auch in den
[Formelbausteinen](/docs/formulary/formulary.html#formelbausteine)
integriert werden.
Auch hier kann sich neben der aktuellen Liste auch auf eine verknüpfte Liste bezogen werden.

| Formel                                | Beispiel                                              | Beschreibung
|------                                 |------                                                 |------
| if(condition, thenValue)              | `if(arbeitstag == Samstag, stundenlohn*1,5)`          | wenn der Arbeitstag ein Samstag ist, erhöhe den Stundenlohn um 50%
| ifElse(condition,thenValue,elseValue) | `ifElse(reisezeit >= 12, verpflegungspauschale, 0)`   | wenn die Reisezeit 12 Stunden oder länger dauert, trage den Wert aus dem Feld *Verpflegungspauschale* ein (hier sollte dann ein Wert hinterlegt sein), sonst verwende den Wert 0.