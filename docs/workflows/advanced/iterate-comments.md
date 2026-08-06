---
layout: workflow-step
title: Iteriere über Kommentare
parent: Erweitert
grand_parent: Workflows
icon: forum
nav_order: 8
redirect_from:
    - /docs/workflows/load-records/iterate-comments.html
    - /docs/workflows/record-loading/iterate-comments.html
---

Mit dem Baustein _Iteriere über Kommentare_ werden die nachfolgenden Workflow-Bausteine für jeden Kommentar eines [Kommentar-Bausteins](../../bricks/advanced/comments.md) einmal ausgeführt. Durchlaufen wird immer vom neuesten zum ältesten Kommentar; ohne Filter der gesamte Verlauf.

Iteriert werden die Kommentare eines bestimmten Kommentar-Bausteins eines bestimmten Eintrages. Deshalb müssen Liste, Baustein und Eintrag-ID gemeinsam angegeben werden. Wie viele Kommentare gefunden wurden, steht im Workflow-Log.

### <span style="color:#0b5394">**Einstellungen**</span>

1. <span style="color:#0b5394">**Technischer Name**</span>
   Über diesen Namen werden die Werte des aktuellen Kommentars in den nachfolgenden Workflow-Bausteinen referenziert, bspw. `kommentar.text`.
1. <span style="color:#0b5394">**Verknüpfen mit Liste**</span>
   Die Liste, zu der der Eintrag mit dem Kommentar-Baustein gehört.
1. <span style="color:#0b5394">**Verknüpfung mit Baustein**</span>
   Der Kommentar-Baustein, dessen Kommentare durchlaufen werden, ausgewählt über seine Bezeichnung. Angeboten werden nur die Kommentar-Bausteine der gewählten Liste.
1. <span style="color:#0b5394">**Datensatz-ID (Text)**</span>
   Die ID des Eintrages, dessen Kommentare durchlaufen werden.

### <span style="color:#0b5394">**Filter**</span>

1. <span style="color:#0b5394">**Geschrieben von (Text)**</span>
   Nur Kommentare eines bestimmten Verfassers durchlaufen, angegeben als Nutzer-ID, Mitglieds-ID oder E-Mail-Adresse. Bleibt die Einstellung leer, werden die Kommentare aller Verfasser durchlaufen.
1. <span style="color:#0b5394">**Geschrieben nach (Datum)**</span>
   Nur Kommentare durchlaufen, die nach diesem Zeitpunkt geschrieben wurden.
1. <span style="color:#0b5394">**Geschrieben vor (Datum)**</span>
   Nur Kommentare durchlaufen, die vor diesem Zeitpunkt geschrieben wurden.

### <span style="color:#0b5394">**Verhalten**</span>

1. <span style="color:#0b5394">**Bei Fehler fortsetzen (Ja/Nein)**</span>
   Ist diese Option auf Ja gesetzt, wird ein Fehler innerhalb eines Durchlaufs im Workflow-Log vermerkt und mit dem nächsten Kommentar weitergemacht, anstatt den Workflow abzubrechen.

### <span style="color:#0b5394">**Variablen**</span>

Innerhalb der Iteration stehen die Werte des aktuellen Kommentars über den technischen Namen des Bausteins mit dem Punkt-Operator zur Verfügung. Die Beispiele gehen von dem technischen Namen `kommentar` aus.

1. **text**: Der Text des Kommentars, z. B. `kommentar.text`. Erwähnte Nutzer erscheinen darin als Verweis auf ihre E-Mail-Adresse, `@[max.mustermann@firma.de]`. Genau diese Schreibweise versteht der [Erstelle einen neuen Kommentar](create-comment.md) Baustein wieder, sodass ein daraus geschriebener Kommentar dieselben Nutzer erwähnt. Ist zu einem erwähnten Nutzer keine Adresse hinterlegt, bricht der Baustein mit einem Fehler ab, anstatt die Erwähnung stillschweigend zu verlieren.
1. **author_name**: Der angezeigte Name des Verfassers, z. B. `kommentar.author_name`. Bei einem von einem Workflow verfassten Kommentar ist das _Admin Service Account_, sofern dort kein Verfasser angegeben wurde — sonst der Name des angegebenen Nutzers.
1. **author_id**: Die Nutzer-ID des Verfassers, z. B. `kommentar.author_id` — nicht die Mitglieds-ID. Nur innerhalb des Arbeitsbereiches sinnvoll; für alles, was den Arbeitsbereich verlässt, ist die Adresse gedacht.
1. **author_email**: Die E-Mail-Adresse des Verfassers, z. B. `kommentar.author_email`. Geeignet, um denselben Nutzer in einem [Erstelle einen neuen Kommentar](create-comment.md) Baustein zu erwähnen, als `@[${kommentar.author_email}]`. Bei einem von einem Workflow verfassten Kommentar steht hier die Adresse des Admin-Service-Accounts.
1. **created_at**: Zeitpunkt, an dem der Kommentar geschrieben wurde.
1. **modified_at**: Zeitpunkt der letzten Änderung des Kommentars.

Der technische Name selbst — im Beispiel `kommentar` — steht für den Kommentar als Ganzes und sollte nicht direkt referenziert werden; die einzelnen Werte sind über den Punkt-Operator erreichbar.
