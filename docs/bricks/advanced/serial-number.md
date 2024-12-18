---
layout: title
title: Laufende Nummer
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 12
redirect_from:
    - /docs/record-spec-settings/grand-child-expanded/rolling-number.html
---

Den Baustein _Laufende Nummer_ wird überall dort wo Datensätzen mit einer fortlaufende Nummer versehen werden sollen
(z. B. Kunden, Bauvorhaben, Lieferscheine, etc.) verwendet.

![rollingNumber](\assets\record-spec-settings\rollingnumber.png 'rollingNumber')

1. <span style="color:#0b5394">**Präfix**</span>  
   i. d. R. werden hierfür einzelne Buchstaben, Buchstabenkombinationen oder "Jahreszahl-" verwendet.
   Leerzeichen zur Trennung von Buchstabe und Zahl werden vom System ignoriert.
2. <span style="color:#0b5394">**Anzahl der Ziffer**</span>  
   Länge der laufenden Nummer. Beim überschreiten der Länge wird dennoch fortlaufend weiter gezählt.
3. <span style="color:#0b5394">**letzte Nummer**</span>  
   Die zuletzt gewählte Nummer wird angezeigt. Die kommende Nummer ist diese plus 1.
   Sie kann bei einer versehentlichen Lücke korrigiert werden.
4. <span style="color:#0b5394">**Mit manuellen Nummern**</span>  
   Erfassung der laufenden Nummer über den Button "Nächste Nummer" oder per manueller Eingabe ermöglichen.
   Der Stift zur manuellen Eingabe wird durch diese Einstellung ein- oder ausgeblendet.
5. <span style="color:#0b5394">**Nächste Nummer automatisch vergeben**</span>
   Die nächste Nummer kann auch ohne Drücken des Buttons automatisch vergeben werden.
   Es sollte darauf geachtet werden diese Einstellung nur zu aktivieren,
   wenn dies auch wirklich gewünscht wird und immer der Fall ist, dass die nächste Nummer gezogen werden soll.
