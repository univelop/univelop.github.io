---
layout: default
title: Freigabe
parent: Erweitert
grand_parent: Die Bausteine und deren Einstellungen
nav_order: 4
---

# <span style="color:#0b5394">**Die Bausteine und deren Einstellungen**</span>
## <span style="color:#0b5394">**Erweiterte Bausteine**</span>
### <span style="color:#3d85c6">Baustein *Freigabe*</span>

Der *Freigabe* Baustein erlaubt es Ihnen Datensätze unveränderbar zu sichern. Der Baustein wird als
Button angezeigt und kann zusätzlich funktionell im Status mit verwendet werden. Zudem ist es möglich
mit diesem Baustein eine Pflichtfeldprüfung durchzuführen.

Zum grundsätzlichen Aufbau:

![lock](\assets\record-spec-settings\1lock.png "lock")

1. **Der Freigabe Button**  
    dieser wird bei nicht freigegbenen Datensätzen farblich gekennzeichnet angezeigt.
2. **Zeitstempel für gesperrte Datensätze**  
    Bei gesperrten Datensätzen erfolgt eine Beschreibung der Sperrung (Nutzer / Datum).
3. **Freigabe eines gesperrten Datensatzes**  
    Wurde der Datensatz gesperrt kann dieser über "Entsperren" wieder freigegeben werden
    (anders als beim Sperren über Status)
4. **Eine Verknüpfung mit dem
[Baustein *Status*](https://univelop.github.io/docs/record-spec-settings.html#status "Die Bausteine und deren Einstellungen // Baustein Status")
ist möglich**
5. **Sämtliche Pflichtfelder (Prüfung bei Freigabe) müssen einzeln angehakt werden**

Zudem sind gesperrte Datensätze an dem kleinen Schloss am oberen rechten Bildschirmrand zu erkennen.
Gesperrte Datensätze können nicht gelöscht werden.

![lock2](\assets\record-spec-settings\2lock.png "lock2") ![lock3](\assets\record-spec-settings\3lock.png "lock3")

**Zusammenfassung:**

1. Über den Baustein *Freigabe* ist eine Pflichtfeldprüfung möglich. Hierzu muss in den Einstellungen des
Bausteins unter "Validierung" der Switch *Pflichtfeld* gesetzt werden. Ist nur ein Baustein *Freigabe*
eingebaut und kein
[Baustein *Status*](https://univelop.github.io/docs/record-spec-settings.html#status "Die Bausteine und deren Einstellungen // Baustein Status"),
werden diese Bausteine grundsätzlich auf Inhalte geprüft, wenn die Freigabe betätigt wird.
2. Das Bearbeiten und Löschen von gesperrten Datensätzen ist nicht möglich. Die Datensätze, sowie verknüpfte Datensätze
müssen entsperrt werden (Mutter- & Tochterdatensätze über
[Baustein *Datensatz Liste*](https://univelop.github.io/docs/record-spec-settings.html#datensatz-liste "Die Bausteine und deren Einstellungen // Baustein Datensatz Liste"))
3. Wer Datensätze sperren und entsperren darf wird in den
[Rollen und Rechten](https://univelop.github.io/docs/global-settings-and-functions.html#rechte--berechtigungen "Zusätzliche globale Einstellungen und Funktionen // Rechte / Berechtigungen")
festgelegt.

![lock4](\assets\record-spec-settings\4lock.png "lock4")