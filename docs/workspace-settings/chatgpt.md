---
title: ChatGPT
nav_order: 2
layout: title
parent: Arbeitsbereich Einstellungen
redirect_from:
    - /docs/chat-gpt-integration.html
---
{: .warning}
Die ChatGPT Anbindung, bspw. über den ChatGPT Baustein, befindet sich in der Beta-Phase und wird nur auf Anfrage freigeschaltet. Das aktuelle Vorgehen weicht somit vom letzten Schritt der Aktivierung ab. Bei Interesse gerne bei uns unter support@univelop.de melden!

Um im Univelop die ChatGPT Anbindung zu nutzen, bspw. über den ChatGPT Baustein, muss zunächst der Arbeitsbereich mit ChatGPT verknüpft werden.
Hierfür wird ein eigener OpenAI Account und ein gültiger OpenAI API-Schlüssel benötigt.

## <span style="color:#0b5394">**Aktivierung**</span>

Jegliche Features von ChatGPT sind in Univelop standardmäßig deaktiviert.
Damit diese aktiviert werden und Univelop mit ChatGPT kommunizieren kann, wird ein gültiger OpenAI API-Schlüssel benötigt.
Dieser lässt sich nur mit einem eigenen OpenAI Account erstellen.
Wir empfehlen jedem Kunden, selber einen eigenen Account bei OpenAI zu erstellen. So können die entstehenden Kosten transparent bleiben
und diese auch kontrolliert werden (Token-Limit, direkte Abrechnung über OpenAI).
Ist dies nicht gewünscht, können wir auch einen API-Schlüssel für Sie bereitstellen.
In diesem Falle können die folgenden drei Schritte übersprungen werden und Sie könnten direkt mit uns über support@univelop.de Kontakt aufnehmen.

1. <span style="color:#0b5394">**OpenAI Account erstellen**</span>
   Der erste Schritt ist nur notwendig, wenn noch kein Konto für ChatGPT vorhanden ist. In dem Falle geht es bei Schritt 2 weiter.
   Um diesen API-Schlüssel zu erhalten, müssen Sie sich auf der OpenAI-Website registrieren und ein Konto erstellen.

2. <span style="color:#0b5394">**API-Schlüssel erstellen**</span>
   Nachdem Sie sich bei OpenAI angemeldet haben, können Sie einen API-Schlüssel erstellen. Dieser Schlüssel ist notwendig, damit Univelop mit ChatGPT kommunizieren kann. Für die Nutzung vom ChatGPT Baustein wird nur _ein einziger_ API-Schlüssel pro Arbeitsbereich benötigt.
   Bei den Berechtigungen wird ein eingeschränkter Zugriff auf die Modelle und die "Model capabilities" empfohlen:
   ![api key permissions](\assets\chat-gpt-integration\api_key_permissions.png 'api key permissions')
   _Stand 10.07.2024, die aktuellen Berechtigungseinstellungen bei der OpenAI API können abweichen_ <br>
   Die [Dokumentation von OpenAI](https://help.openai.com/en/articles/9186755-managing-your-work-in-the-api-platform-with-projects) ist hierzu umfangreich und sollte jegliche Fragen beantworten können.
   Sollten trotzdem Fragen offen bleiben, können Sie uns gerne kontaktieren.

3. <span style="color:#0b5394">**Optional: Projekt erstellen**</span>
   In Univelop kann optional kann eine Organisation-ID bzw. Projekt-ID mit angegeben werden.
   Dies dient dem Organisieren von mehreren API-Schlüsseln auf nur einem Account bzw. einer übergeordneten Organisation.
   Besitzen Sie bspw. mehrere Arbeitsbereiche, in denen sie planen, ChatGPT zu verwenden, so kann es sich anbieten, für den jeweiligen Arbeitsbereich
   ein eigenes Projekt unter OpenAI zu erstellen. [Hier](https://help.openai.com/en/articles/9186755-managing-your-work-in-the-api-platform-with-projects) dazu mehr.

4. <span style="color:#0b5394">**Aktivierung**</span>
   Sobald der API-Schlüssel und ggf. eine Organisation-ID erstellt wurde, kontaktieren Sie uns, damit wir die Aktivierung vornehmen. Dies dauert in der Regel nur wenige Minuten.
   Ist die Aktivierung unsererseits abgeschlossen, kann der API-Schlüssel und die Organisation-ID in den Einstellungen des Arbeitsbereiches eingetragen werden.

## <span style="color:#0b5394">**Mögliche Fehlermeldungen**</span>

Bei der Nutzung unserer ChatGPT Anbindung kann es trotz ordentlicher Einrichtung zu verschiedenen Fehlermeldungen kommen.
Im folgenden werden die häufigsten Fehler aufgelistet:

1. <span style="color:#0b5394">**Kein Guthaben auf dem Account**</span>

Wenn kein Guthaben auf dem OpenAI Account vorhanden ist, kann keine Anfrage an die OpenAI API gestellt werden.

2. <span style="color:#0b5394">**Ungültiger oder fehlender API-Schlüssel**</span>

Wenn der API-Schlüssel ungültig ist, bspw. wenn dieser aus dem Projekt entfernt wurde.
Wenn der API-Schlüssel nicht im Univelop Arbeitsbereich eingetragen bzw. wieder gelöscht wurde.

3. <span style="color:#0b5394">**Ratenlimit erreicht**</span>

OpenAI behält sich das Recht vor, die Anzahl der Anfragen pro Minute zu limitieren.
Diese Anzahl variiert je nach genutztem Modell und kann dazu führen, dass Anfragen nach einiger Zeit intensiver Benutzung abgelehnt werden.
Ob dies der Fall ist, lässt sich in unter den Organisation- bzw. Projekt-Einstellungen in OpenAI nachsehen.

4. <span style="color:#0b5394">**HTTP-Status 5xx**</span>

Ein HTTP-Status 5xx bedeutet, dass die Dienste von OpenAI zurzeit nicht erreichbar sind.
Dies hält in der Regel nur wenige Minuten an, bis sie wieder verfügbar sind.
Im Falle eines längeren Ausfalls, bitten wir, zuerst den Server-Status von OpenAI zu prüfen, bevor sie uns kontaktieren.

4. <span style="color:#0b5394">**Weitere Fehler**</span>

Weitere Fehler können durch eine fehlerhafte Konfiguration der ChatGPT Bausteinen, durch spezielle Eingaben oder auch durch Fehler in unserer ChatGPT-Anbindung entstehen. In diesem Falle bitten wir Sie, unseren Support dazu zu kontaktieren.
