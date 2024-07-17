---
layout: default
title: Erstellen einer Zeiterfassung
parent: Tutorials
nav_order: 4
---

# <span style="color:#0b5394">**Erstellen einer Zeiterfassung**</span>

Erstellen Sie Ihre eigene Zeiterfassung direkt in Univelop, um Arbeitszeiten Ihrer Mitarbeiter digital per App zu erfassen.

_Hinweis: Die in dieser Anleitung verwendeten Bausteine und Felder dienen dem Beispiel. Sollten Sie Ihre eigene Zeiterfassung erstellen, können Sie in den folgenden Schritten Ihre eigenen Bausteine und Bezeichnungen wählen._

## <span style="color:#0b5394">**Erstellen der ersten Listen**</span>

Jede Univelop Oberfläche beginnt mit einer [einfachen Liste](), in der Sie Informationen speichern.

![time-tracking (1)](\assets\tutorials\time-tracking (1).png "time-tracking (1)")

1. Öffnen Sie den Designmodus
2. Wählen Sie die [einfach Liste]() und ziehen Sie diese auf die leere Oberfläche.
3. Nennen Sie die einfache Liste "Mitarbeiter".
4. Fügen Sie nun eine weitere einfach Liste hinzu. Benennen Sie diese "Zeiterfassung".

![time-tracking (2)](\assets\tutorials\time-tracking (2).png "time-tracking (2)")

Sie haben nun zwei einfache Listen erstellt, in denen Sie Informationen speichern können.

## <span style="color:#0b5394">**Anpassen der einfachen Liste: Mitarbeiter**</span>

Um eine Zeiterfassung zu bauen, müssen wir Felder und Bausteine zu unseren einfachen Listen hinzufügen.

![time-tracking (3)](\assets\tutorials\time-tracking (3).png "time-tracking (3)")

1. Klicken Sie auf die einfache Liste Mitarbeiter und wählen Sie den Button: Felder und Bausteine bearbeiten. _Hinweis: Eine neue erstellte einfache Liste beinhaltet immer standardmäßig eine Bezeichnung und eine Beschreibung (Textfeld). Dieses können Sie entweder direkt löschen oder umbenennen._
2. In diesem Beispiel sollen Mitarbeiterinformationen mit den folgenden Attributen gespeichert werden: Vorname, Nachname, Personalnummer, Adresse, Telefonnummer, E-Mail.
3. Für die Informationen Vor- und Nachnamen verwenden den Baustein: Textfeld. Ziehen Sie diesen auf die leere Oberfläche,
   klicken Sie auf diesen und legen Sie anschließend die Bezeichnung fest.  
   ![time-tracking (4)](\assets\tutorials\time-tracking (4).png "time-tracking (4)")
4. Für die Personalnummer verwenden wir den Baustein: Nummer.
5. Für die Informationen Adresse, Telefonnummer und E-Mail fügen Sie die entsprechenden Bausteine: E-Mail, Telefon und Adresse hinzu.

![time-tracking (5)](\assets\tutorials\time-tracking (5).png "time-tracking (5)")

### <span style="color:#0b5394">**Titel der einfachen Liste anpassen**</span>

Über den Titel können Sie auswählen, welche Informationen (Bausteine) angezeigt werden sollen.

1. Gehen Sie im Designmodus auf das Stiftsymbol in der oberen rechten Ecke.
2. Nun können Sie auf der rechten Seite die angezeigten Informationen auswählen.
3. Wählen Sie aus den vorhandenen Informationen in der einfachen Liste diese aus, die Sie im Titel angezeigt bekommen wollen.
4. Klicken Sie anschließend auf Speichern.

![time-tracking (6)](\assets\tutorials\time-tracking (6).png "time-tracking (6)")

### <span style="color:#0b5394">**Listeneintrag der einfachen Liste anpassen**</span>

Über den Button: Listeneintrag bearbeiten können Sie auswählen, welche Informationen (Bausteine) in der Listenansicht angezeigt werden sollen.

1. Sie sehen in der linken Leiste alle Informationen, die wir bereits in der einfachen Liste angelegt haben.
2. Sie können nun nach Belieben auswählen, welche der dargestellten Informationen Sie in der Listenansicht sehen wollen.
3. Auf der rechten Seite können Sie die Reihenfolge der dargestellten Informationen anpassen.
4. Drücken Sie anschließend auf Speichern.

![time-tracking (7)](\assets\tutorials\time-tracking (7).png "time-tracking (7)")

## <span style="color:#0b5394">**Anpassen der einfachen Liste: Zeiterfassung**</span>

![time-tracking (8)](\assets\tutorials\time-tracking (8).png "time-tracking (8)")

1. Klicken Sie auf die einfache Liste: Zeiterfassung und anschließend auf Felder und Bausteine bearbeiten.
2. Innerhalb der Zeiterfassung benötigen wir folgende Informationen: Zeitspanne der Arbeitszeit, Datum.
3. Fügen Sie nun die Bausteine: Zeitspanne und Datum hinzu.
   ![time-tracking (9)](\assets\tutorials\time-tracking (9).png "time-tracking (9)")
4. In den Einstellungen der einzelnen Bausteine können Sie zusätzliche Funktionen aktivieren. Da es sich um eine Zeiterfassung handelt, aktivieren wir bei dem Baustein: Zeiterfassung die Funktion: Erfassung von Pausen.
   ![time-tracking (10)](\assets\tutorials\time-tracking (10).png "time-tracking (10)")
   Innerhalb des Bausteins: Datum aktivieren wir die Funktionen: Anzeige Wochentag und aktuelles Datum standardmäßig setzten.

![time-tracking (11)](\assets\tutorials\time-tracking (11).png "time-tracking (11)")

### <span style="color:#0b5394">Einfache Listen miteinander verknüpfen</span>

Zusätzlich möchten wir die erfassten Arbeitszeiten bestimmten Mitarbeiter zuordnen. Hierfür erstellen wir eine Verknüpfung zwischen den beiden einfachen Listen mithilfe des Bausteins Datensatz.

1. Wir befinden uns weiterhin im Designmodus der einfachen Liste: Zeiterfassung.
2. Da wir erfasste Arbeitszeiten einem Mitarbeiter zuordnen wollen, benötigen wir eine Verknüpfung zwischen den beiden einfachen Listen.
3. Um eine Verknüpfung herzustellen, verwenden wir den erweiterten Baustein: Datensatz.
4. Fügen Sie diesen der einfachen Liste hinzu.
5. Legen Sie anschließend eine Bezeichnung fest.  
   ![time-tracking (12)](\assets\tutorials\time-tracking (12).png "time-tracking (12)")
6. Um anschließend die Verknüpfung beider Listen herzustellen, wählen Sie: Verknüpfung mit aus.
   ![time-tracking (13)](\assets\tutorials\time-tracking (13).png "time-tracking (13)")
7. Da wir die Zeiterfassung mit den Mitarbeitern verknüpfen wollen, wählen Sie anschließend die Verknüpfung mit: Mitarbeiter aus.
   ![time-tracking (14)](\assets\tutorials\time-tracking (14).png "time-tracking (14)")
8. Gehen Sie anschließend auf Speichern.
9. Schließen Sie danach den Designmodus über den Button: Bearbeitung beenden.
   _Hinweis: Anschließend können Sie wie im vorangegangen Schritt den Titel und den Listeneintag frei nach Ihrem Belieben anpassen._

## <span style="color:#0b5394">Erste Mitarbeiterinformationen anlegen</span>

Sie haben nun erfolgreich eine Zeiterfassung erstellt. Um diese nutzen zu können, müssen Sie im Anschluss die Mitarbeiterinformationen in der einfachen Liste Mitarbeiter anlegen.

1. Öffnen Sie die einfache Liste Mitarbeiter durch Drücken auf die Kachel.
2. Anschließend können Sie mithilfe des Plus-Symbols einen neuen Mitarbeiter erstellen.
   ![time-tracking (15)](\assets\tutorials\time-tracking (15).png "time-tracking (15)")
3. Durch das wiederholtes Drücken auf das Plus-Symbol können Sie weitere Einträge erstellen.

## <span style="color:#0b5394">Arbeitszeiten erfassen</span>

Nachdem Sie die Mitarbeiterinformationen angelegt haben, können Sie erste Arbeitszeiten erfassen.

1. Öffnen Sie die einfache Liste: Zeiterfassung.
2. Klicken Sie auf das Plus-Symbol.
3. Wählen Sie einen Mitarbeiter aus.
4. Füllen Sie die entsprechende Zeitspanne aus.
5. Das Datum wird aufgrund der vorher festgelegten Einstellungen automatisch auf das aktuelle Datum gesetzt.

![time-tracking (16)](\assets\tutorials\time-tracking (16).png "time-tracking (16)")

Herzlichen Glückwunsch. Sie haben erfolgreich Ihre erste eigene Zeiterfassung erstellt!
