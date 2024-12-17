---
layout: title
title: Release Version 1.3.0
nav_order: 96
parent: Changelog
---

Folgende Neuerungen und Verbesserungen wurden mit der Version 1.3.0 ausgerollt:

## <span style="color:#0b5394">**Neuer Baustein _Adresse_**</span>

Wir haben denBaustein _Adresse_ in Univelop implementiert. Um Adressdaten zu erfassen, müssen zukünftig nicht mehr verschiedene Text- und Nummernbausteine verwendet werden.
Als Zusatzfunktion wurde eine Verlinkung zu Google Maps eingebaut. In gewissen Bereichen wird die Adresse z. B. für eine Navigation genutzt. Nach der Eingabe der Adresse, kann über das abgebildete Kartensymbol die Adresse in Google Maps geöffnet werden und, bei Bedarf, die Navigation manuell gestartet werden.

![release brick address](\assets\latest-updates\release brick address.png "release brick address")

## <span style="color:#0b5394">**Update zu der neuen Kachel _Website_**</span>

In unserem letzten Newsletter haben wir die neue Kachelart _Website_ präsentiert. Seit der Einführung gab es bei Websites, die auf eine Anmeldemaske verweisen, u. U. die Meldung “Website verweigert den Zugriff”. Ohne zu weit ins Detail zu gehen; es liegt an dem Aufbau der Anmeldebereiche, die wir leider nicht beeinflussen können. Als Lösung kann nun in den Kacheleinstellungen einer der folgenden Link-Typen ausgewählt werden:

-   ### <span style="color:#0b5394">Eingebettet</span>
    ruft die Website direkt in Univelop auf, keine Anmeldung über bestimmten Anmeldemasken möglich
-   ### <span style="color:#0b5394">Mobil eingebettet, im Web Link</span>
    auf mobilen Endgerätes können die Benutzer die Website direkt in Univelop aufrufen und ggf. in einer Anmeldemaske anmelden. Nutzen Benutzer Univelop über den PC, wird die Website in dem Standard-Browser aufgerufen, wo dann ebenfalls eine Anmeldung möglich ist
-   ### <span style="color:#0b5394">Externer Link</span>
    die hinterlegte Website wird mit einem Klick auf die Kachel immer im Standard-Browser aufgerufen (auch auf mobilen Endgeräten)

![release tile website rework](\assets\latest-updates\release tile website rework.png "release tile website rework")

### <span style="color:#0b5394">**Weitere Verbesserungen**</span>

-   Baustein _PDF erstellen_ gibt keinen Fehler bei eingebetteten Bildern in der Wordvorlage aus
-   Bilduploads über mobilen Endgeräten werden nicht mehr gedreht
-   Löschen von Arbeitsumgebungen müssen nun vor jeder Löschung durch die Eingabe des Namens des Arbeitsbereichs bestätigt werden
-   IN-Filter (Oder-Auswahl) wurde erneut optimiert
-   Weitere Performanceverbesserungen
