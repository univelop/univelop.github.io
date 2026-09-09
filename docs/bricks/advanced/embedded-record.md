---
layout: title
title: Eingebetteter Datensatz
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: 2
---

Der Baustein _Eingebetteter Datensatz_ ermöglicht die Erstellung eines verknüpften Datensatzes und zeigt dessen Bausteine eingebettet innerhalb dieses Datensatzes an. Die Bausteine des verknüpften (untergeordneten) Datensatzes werden dabei direkt in der Detailansicht des übergeordneten Datensatzes dargestellt – ähnlich wie bei einem Abschnitt – inklusive einer Kopfzeile und eines Buttons zum Löschen des verknüpften Datensatzes.

Anders als bei der [Datensatz Liste](record-list.md), die mehrere verknüpfte Datensätze anzeigt, bettet dieser Baustein genau **einen** untergeordneten Datensatz ein. Er eignet sich daher besonders für 1:1-Verknüpfungen, bei denen ein zusätzlicher Datensatz untrennbar zu seinem übergeordneten Datensatz gehört – wie z.B. eine Personalakte zu einem Mitarbeiter oder eine Checkliste zu einem Vorgang.

Die Verknüpfung erfolgt immer über einen [Datensatz](record-picker.md) Baustein in der untergeordneten Liste, bei dem die Einstellung _Diesen Datensatz löschen/duplizieren, wenn verknüpfter Datensatz gelöscht oder dupliziert wird_ (im Folgenden „Zugehörigkeit") aktiviert ist und der auf die übergeordnete Liste zeigt. Dadurch wird der untergeordnete Datensatz beim Löschen oder Duplizieren des übergeordneten Datensatzes automatisch mit gelöscht bzw. dupliziert.

{: .warning }
Eine Verknüpfung mit aktivierter Zugehörigkeit kann nach dem Setzen nicht mehr geändert oder entfernt werden. Außerdem kann die Zugehörigkeit eines Datensatz Bausteins nicht mehr deaktiviert werden, sobald dieser von einem eingebetteten Datensatz Baustein verwendet wird.

### <span style="color:#0b5394">**Modi**</span>

Als erste Einstellung wird der Modus des Bausteins gewählt. Dieser legt fest, wie die einzubettende untergeordnete Liste bestimmt wird.

1. <span style="color:#0b5394">**Fest**</span>
   Eine feste Liste, in der ein verknüpfter Datensatz erstellt, eingesehen und gelöscht werden kann. Am besten geeignet für feste Verknüpfungen wie z.B. Mitarbeiter und Personalakte.
1. <span style="color:#0b5394">**Dynamisch**</span>
   Der Nutzer wählt eine der vordefinierten Listen von verknüpften Datensätzen, um einen Datensatz der Liste zu erstellen. Am besten geeignet für verschiedene Arten von verknüpften Datensätzen, wie z.B. Checklisten.

### <span style="color:#0b5394">**Einstellungen (Modus Fest)**</span>

Im Modus **Fest** wird genau eine untergeordnete Liste konfiguriert, die eingebettet werden soll.

1. <span style="color:#0b5394">**Liste**</span>
   Die untergeordnete Liste, deren Datensatz eingebettet werden soll.
1. <span style="color:#0b5394">**Verknüpfung über**</span>
   Der [Datensatz](record-picker.md) Baustein in der untergeordneten Liste mit aktivierter Zugehörigkeit, der auf diesen Datensatz zurück zeigt. Es können nur Listen ausgewählt werden, welche per Datensatz-Baustein auf diese Liste zeigen.

Solange noch kein untergeordneter Datensatz verknüpft ist, wird ein **Erstellen**-Button angezeigt. Dieser ist nur aktiv, wenn der Nutzer die Berechtigung zum Erstellen von Datensätzen in der untergeordneten Liste besitzt. Nach dem Erstellen werden die Bausteine des untergeordneten Datensatzes eingebettet angezeigt.

### <span style="color:#0b5394">**Einstellungen (Modus Dynamisch)**</span>

Im Modus **Dynamisch** werden mehrere mögliche untergeordnete Listen konfiguriert. Der Nutzer wählt zur Laufzeit aus, welcher Typ erstellt werden soll.

Für jede Option werden die folgenden Werte hinterlegt:

1. <span style="color:#0b5394">**Liste**</span>
   Die untergeordnete Liste, die für diese Option eingebettet werden kann.
1. <span style="color:#0b5394">**Verknüpfung über**</span>
   Der [Datensatz](record-picker.md) Baustein in dieser untergeordneten Liste mit aktivierter Zugehörigkeit, der auf diesen Datensatz zurück zeigt.
1. <span style="color:#0b5394">**Deaktiviert**</span>
   Ist eine Option deaktiviert, wird sie dem Nutzer zur Laufzeit nicht mehr zur Auswahl angeboten, bleibt aber in der Konfiguration erhalten. Optionen, die bereits von vorhandenen Datensätzen verwendet werden, sollten deaktiviert statt gelöscht werden.

Pro Baustein können maximal **50 Optionen** konfiguriert werden.

Solange kein untergeordneter Datensatz verknüpft ist, wird dem Nutzer eine Auswahlliste aller nicht deaktivierten Optionen angezeigt, für die er die Berechtigung zum Erstellen besitzt. Nach der Auswahl wird ein Datensatz des entsprechenden Typs erstellt und eingebettet. Die Auswahlliste bleibt sichtbar, ist aber nicht mehr änderbar. Um den Typ zu wechseln, muss der eingebettete Datensatz zunächst über den Löschen-Button entfernt werden.

### <span style="color:#0b5394">**Berechtigungen**</span>

Über die Einstellung **Berechtigungen** wird festgelegt, wie sich die Schreibrechte der eingebetteten Bausteine verhalten. Unabhängig vom gewählten Modus erfordert das Erstellen und Löschen des verknüpften Datensatzes immer Schreibrechte an diesem (übergeordneten) Datensatz.

1. <span style="color:#0b5394">**Rechte übernehmen**</span>
   Bausteine folgen den Rechten dieses Datensatzes. Ist dieser Datensatz schreibgeschützt oder gesperrt, sind die eingebetteten Bausteine ebenfalls schreibgeschützt. Gilt auch für Schreibberechtigungen von Rollen.
1. <span style="color:#0b5394">**Nur eigene Rechte verwenden**</span>
   Bausteine nutzen nur die Rechte der eigenen Liste und bleiben bearbeitbar, auch wenn dieser Datensatz gesperrt ist. Erstellen und Löschen des verknüpften Datensatzes erfordert weiterhin Schreibrechte an diesem Datensatz.

### <span style="color:#0b5394">**Weitere Einstellungen**</span>

1. <span style="color:#0b5394">**Button für Detailansicht ausblenden**</span>
   Blendet den Button neben dem Titel des eingebetteten Datensatzes aus, mit dem dieser in der Detailansicht geöffnet werden kann.
1. <span style="color:#0b5394">**Pflichtfeld**</span>
   Legt fest, ob ein verknüpfter Datensatz vorhanden sein muss.

Zusätzlich stehen die für Bausteine üblichen Sichtbarkeits- und Bearbeitbarkeits-Einstellungen zur Verfügung.

### <span style="color:#0b5394">**Darstellung und Verhalten**</span>

- Es wird immer genau ein untergeordneter Datensatz eingebettet.
- Die Bausteine des untergeordneten Datensatzes werden inline innerhalb eines abschnittsähnlichen Containers angezeigt. Bausteine, die in der untergeordneten Liste für die Schnellerfassung ausgeblendet sind, werden auch hier nicht angezeigt.
- Änderungen an den Bausteinen des eingebetteten Datensatzes werden – wie bei Bausteinen üblich – sofort gespeichert.
- Der untergeordnete Datensatz wird nicht automatisch erstellt, sondern erst, wenn der Nutzer den Erstellen-Button drückt bzw. eine Option auswählt.
- Das Löschen des eingebetteten Datensatzes ist über den Löschen-Button jederzeit möglich.
- Wird der übergeordnete Datensatz gelöscht, wird der eingebettete Datensatz über den Zugehörigkeits-Mechanismus automatisch mit gelöscht.

{: .warning }
Untergeordnete Datensätze (die zu anderen Datensätzen gehören) können keine eingebetteten Datensätze enthalten. Eine Einbettung ist somit nur eine Ebene tief möglich. Listen, die selbst bereits einen eingebetteten Datensatz Baustein enthalten, können nicht als untergeordnete Liste ausgewählt werden.

### <span style="color:#0b5394">**Verwendung in Workflows**</span>

Auf die einzelnen Bausteine des eingebetteten (untergeordneten) Datensatzes kann aus einem Workflow heraus nicht direkt zugegriffen werden – analog zum [Dynamischen Datensatz](dynamic-record-picker.md). Über den technischen Namen des Bausteins stehen jedoch die folgenden Werte zur Verfügung:

1. **Liste** (`recordSpecTechName`): Technischer Name der untergeordneten Liste, deren Datensatz eingebettet ist
1. **Datensatz-ID** (`recordId`): Eindeutige ID des eingebetteten Datensatzes – kann z.B. für Filter verwendet werden
1. **Datensatz-Titel** (`title`): Titel des eingebetteten Datensatzes (nur lesbar)

Die Verknüpfung kann per Workflow oder Import nur gesetzt werden, wenn der untergeordnete Datensatz auch tatsächlich über die konfigurierte Zugehörigkeit auf diesen Datensatz zeigt. Andernfalls wird die Zuweisung mit einer Fehlermeldung abgelehnt.

#### <span style="color:#0b5394">Datensatz per Aktion erstellen</span>

Der Baustein besitzt eine ausführbare Aktion, die im Modus **Fest** einen neuen untergeordneten Datensatz erstellt, ihn über die konfigurierte Verknüpfung mit diesem Datensatz verbindet und als Wert des Bausteins hinterlegt. Diese Aktion kann über den Workflow-Baustein [Führe Aktion aus](../../workflows/record-editing/run-action.md) ausgelöst werden. Dazu muss dem eingebetteten Datensatz Baustein ein technischer Name vergeben sein.

{: .warning }
Die Aktion ist nur im Modus **Fest** verfügbar und schlägt fehl, wenn bereits ein untergeordneter Datensatz verknüpft ist.
