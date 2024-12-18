---
layout: title
title: Best Practices
parent: Arbeiten mit Formeln
nav_order: 5
---

Im Folgenden werden einige zu empfehlende Praktiken im Umgang mit Formeln in Univelop vorgestellt.

## <span style="color:#0b5394">Formeln vor dem Einsatz austesten</span>

Formeln werden u.A. in E-Mails oder PDF-Bausteinen verwendet.
Dabei ist es wichtig, dass dort die Formel korrekt ist und das gewünschte Ergebnis liefert.

Um dies zu gewährleisten, sollte die Formel vor dem Einsatz mit einem Formelbaustein getestet werden. Das kann die Arbeit mit Formeln deutlich beschleunigen, wenn man z.B. Formeln im Baustein ausprobiert, statt diese in eine PDF-Vorlage einzubinden, die PDF zu erstellen und danach die Vorlage anzupassen etc. Über den Designmodus kann die Formel schneller angepasst und geprüft werden.

So ein Formelbaustein kann nach dem Test einfach wieder gelöscht werden, wenn er nicht mehr gebraucht wird.

## <span style="color:#0b5394">Formeln in Formelbausteine auslagern</span>

Bei E-Mails oder PDF-Vorlagen ist es oft nötig, komplizierte Formeln zu verwenden, um
bspw. abhängig von den Formulardaten eine passende Anrede auszuwählen oder ein entsprechendes Datum einzublenden.

Dabei kann eine Formel schnell sehr lang werden und an Übersichtlichkeit verlieren.
Um dabei trotzdem einen Überblick zu behalten, und besser zu kontrollieren, ob die Formel korrekt ist, sollten diese nicht direkt in die Vorlage/den Text eingebunden werden,
sondern in einen passenden Baustein ausgelagert werden.

![best practices replace formula](\assets\formulary\best_practices replace formula.png "best practices replace formula")

Dies sollte nicht für jede Formel gemacht werden, sondern nur für diejenigen, die sehr lang sind und/oder häufig verwendet werden. Auch Formeln, die zwar lang sind, aber z.B. nur in einer einzigen Vorlage einmalig verwendet werden, müssen nicht in einen Formelbaustein ausgelagert werden.
Hier sollte abgewägt werden, wie umfangreich der Listeneintrag im Vergleich zur Vorlage oder zum Text ist.

## <span style="color:#0b5394">Formeln wiederverwenden</span>

Versendet man an vielen Stellen im System E-Mails oder erstellt viele PDFs, die sich auch auf die selben Listen beziehen und ähnliche Inhalte haben, so lohnt es sich, für dieselben Formeln einen kollektiven Formelbaustein zu verwenden, um Dopplungen derselben Formel zu vermeiden.

Dadurch kann man die Formel zentral anpassen und sieht zudem, ob die Formel gültig ist.
Außerdem vermeidet man so fehler, da die eine Formel nur einmal geschrieben wird, statt den vielen Malen an verschiedenen Stellen.

Beispielsweise bei der Brutto/Netto-Kalkulation kann zunächst ein Formelbaustein für die
Nettobetrag erstellt werden, auf welchen dann in der Brutto-Kalkulation oder der MwSt.-Berechnung zugegriffen wird.

## <span style="color:#0b5394">Auf Datentypen achten</span>

Bei der Verwendung von Formeln ist es wichtig, Formeln entsprechend der Datentypen zu nutzen.

Nutzt man z.B. die Formel `formatDate(date,format)`, so sollte kein Text unter `date` eingegeben werden.
