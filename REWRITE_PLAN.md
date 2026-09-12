# Plan: Comprehensive Documentation Rewrite for Univelop Docs

## Context

The Univelop documentation site (`docs.univelop.de`) has grown organically and suffers from major inconsistencies: pages range from 5 to 174 lines, 50% are under 20 lines, formatting varies wildly, and ~15-20 features in the codebase have no documentation at all. The goal is a complete rewrite that is **consistent, clean, expansive, and grounded in the actual code** from `univelop-master/`.

The rewrite will touch ~170+ content pages (excluding changelog), create ~25-30 new pages (including concept pages), and establish standardized templates for each page type.

---

## Phase 0: Foundation — Templates, Structure, Terminology & Tracking File

**Goal:** Establish the standard page templates, terminology conventions, and tracking file before touching any content.

### 0.1 Create `SCREENSHOTS_NEEDED.md` in repo root
Track every screenshot that needs to be created. Format:
```
| Page | Screenshot Description | Priority |
|------|----------------------|----------|
| docs/bricks/input/text-field.md | Text field brick in record view with settings panel open | Medium |
```

### 0.2 Normalize image path convention
- All image paths use **forward slashes** (`/old_assets/...` not `\old_assets\...`)
- New images go in `/assets/docs/{category}/{page-name}/`
- Fix all 291 backslash-path references across 102 files

### 0.3 Establish terminology conventions

Many product concepts use their **English names** even in the German UI (confirmed via `de.jsonc`). The documentation must mirror the product, not translate further. When in doubt, check the `de.jsonc` translation file.

**Terms to keep in English** (as used in the product UI):

| English Term | NOT | Usage |
|---|---|---|
| Solution | ~~Lösung~~ | Product packaging concept |
| Solution Store | ~~Lösungs-Shop~~ | Marketplace for solutions |
| Workflow | ~~Arbeitsablauf~~ | Automation feature |
| Power Feature | ~~Erweiterte Funktion~~ | Premium feature tier |
| Credits | ~~Guthaben~~ | Automation consumption unit |
| Tab | ~~Reiter~~ | Section divider in records |
| Icon | ~~Symbol~~ | Brick/status icon |
| Design | ~~Gestaltung~~ | Workspace/tile appearance |
| Theme | ~~Farbschema~~ | Color scheme |
| Banner | ~~Titelbild~~ | Workspace header image |
| Logo | ~~Firmenzeichen~~ | Workspace logo |
| Home | ~~Startseite~~ | Home screen |
| Scanner | ~~Abtaster~~ | Barcode scanner feature |
| Kanban Board | ~~Kanban-Tafel~~ | Board brick/tile |
| Matrix | ~~Matrix~~ | Matrix brick |
| Timer | ~~Zeitmesser~~ | Timer brick |
| ChatGPT | — | AI feature name |
| AI Agent | ~~KI-Assistent~~ | AI workflow step |
| Integration | — | External service connection |
| Managed Integration | — | Univelop-managed integrations |
| API Key | — | Authentication tokens (use "API-Schlüssel" in settings context) |
| Status | — | Status brick/concept |
| Beta | — | Feature maturity label |
| Feedback | — | User feedback |
| Request Body / Header | — | Webhook settings |
| CC / BCC | — | Email fields |
| PDF / XML / JSON / CSV | — | File format names |
| HTML | — | Markup format |
| SMTP / STARTTLS | — | Email protocol names |
| OpenAI / BigQuery / Zoho | — | Service brand names |

**Terms that ARE translated** (use the German form):

| German Term | NOT | Code/English |
|---|---|---|
| Baustein | ~~Brick~~ | Brick |
| Kachel | ~~Tile~~ | Tile |
| Datensatz | ~~Record~~ | Record |
| Arbeitsbereich | ~~Workspace~~ | Workspace |
| Formel | ~~Expression~~ | Expression |
| Technischer Name | ~~Technical Name~~ | technicalNameMap |
| Pflichtfeld | ~~Required Field~~ | Mandatory |
| Rollen und Rechte | ~~Roles and Rights~~ | UserRole, UserRight |
| Listenansicht | ~~List View~~ | ListView |
| Designmodus | ~~Design Mode~~ | DesignMode |
| Schnellerfassung | ~~Quick Add~~ | QuickAdd |

**Rule of thumb:** If the user sees the English term in the app UI, use it in the docs. If the app shows a German term, use German. Brand names and technical protocol names are always English.

### 0.4 Create concept pages

Create a new `docs/concepts/` section for cross-cutting concepts that are referenced from many places. Each concept page provides a single authoritative explanation, avoiding repetition across brick, workflow, and tile pages.

**File structure:**
```
docs/concepts/
├── concepts.md              (index — "Konzepte", nav_order 3)
├── technical-names.md       (Technische Namen)
├── expressions.md           (Formeln & Ausdrücke)
├── filters.md               (Filter & Sortierung)
├── record-linking.md        (Listen verknüpfen)
├── roles-and-rights.md      (Rollen & Rechte)
├── solutions.md             (Solutions)
├── power-features.md        (Power Features)
├── credits.md               (Credits)
├── offline.md               (Offline-Modus)
└── lifecycle.md             (Datensatz-Lifecycle)
```

**Concept pages (priority order):**

| File | Title | Why needed | References from |
|------|-------|-----------|-----------------|
| `technical-names.md` | Technische Namen | Central concept for formulas, workflows, API — currently explained ad-hoc | All brick pages, formula pages, API docs |
| `expressions.md` | Formeln & Ausdrücke | Overview of the expression system, where it's used (formula bricks, conditions, dynamic text) — distinct from the formula *reference* pages | Formula bricks, showIf/enableIf, PDF templates, mail subjects |
| `filters.md` | Filter & Sortierung | Every list-referencing brick uses filters; currently unexplained | Record list, calendar, scheduler, matrix, table, kanban, tiles |
| `record-linking.md` | Listen verknüpfen | "Verknüpfung mit" / "Verknüpfung über" appears in 20+ brick settings | Record picker, record list, table, calendar, scheduler, matrix |
| `roles-and-rights.md` | Rollen & Rechte | Permission model referenced in common settings, tiles, member management | Common settings, tile settings, member management |
| `solutions.md` | Solutions | Product packaging concept — English name kept per UI | Solution store, workspace settings |
| `power-features.md` | Power Features | Premium feature tier — referenced on ~15 brick pages | All power-feature brick pages |
| `credits.md` | Credits | Consumption unit for automations — referenced in workflows, AI bricks | Workflow pages, GPT brick, AI agent |
| `offline.md` | Offline-Modus | Offline behavior affects many bricks and workflows differently | Various brick and workflow pages |
| `lifecycle.md` | Datensatz-Lifecycle | Record lifecycle (create → save → lock → delete) referenced in release, status, approval bricks | Release, status, approval, workflow steps |

**Concept page template (Template G):**
```markdown
---
layout: title
title: [German Name]
parent: Konzepte
nav_order: N
---

[2-4 sentence overview of this concept: what it is, why it matters.]

## Überblick

[Detailed explanation of the concept — 2-5 paragraphs depending on complexity.]

## Verwendung

[Where this concept appears in the product. Bulleted list with links to specific pages.]

## Hinweise

- [Tips, common mistakes, best practices]

## Verwandte Konzepte

- [Links to other concept pages]
```

Each concept page should be **authoritative but concise** (30-80 lines). Other pages link here instead of re-explaining the concept. Use phrasing like: *"Technische Namen identifizieren Bausteine eindeutig — siehe [Technische Namen](/docs/concepts/technical-names)."*

### 0.5 Create shared "Allgemeine Baustein-Einstellungen" reference page

Before rewriting individual brick pages, create a new page at `docs/bricks/common-settings.md` that documents the settings shared by **all** bricks. This avoids repeating the same information on every brick page. Individual brick pages will link here with a short note like: *"Allgemeine Einstellungen wie Sichtbarkeit, Pflichtfeld und Nur Lesen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben."*

**Common settings to document** (from `BrickSpec` + `CommonSettings` in code):

| Setting | Code Key | Description |
|---------|----------|-------------|
| Bezeichnung | `labelMl` | Multi-language display label for the brick |
| Technischer Name | `technicalNameMap` | Technical identifier used in formulas and workflows |
| Icon | `iconName` | Optional icon for the brick |
| Tooltip | `tooltipMl` | Hover tooltip text (multilingual) |
| Pflichtfeld | `isMandatory` | Whether this field must be filled |
| Pflichtfeld wenn | `mandatoryIf` | Conditions under which the field becomes mandatory |
| Nur Lesen | `readOnly` | Makes the field read-only |
| Bearbeitbar wenn | `enableIf` | Conditions under which a read-only brick becomes editable |
| Verstecken | `hideBrick` | Hides the brick from users |
| Anzeigen wenn | `showIf` | Conditions under which a hidden brick becomes visible |
| Im Schnelldialog verstecken | `hideOnQuickAdd` | Hide in quick-add preview dialog |
| KI-Beschreibung | `aiDescription` | Description for AI agents |
| Rollenberechtigungen | `rolePermissionsSettings` | Role-based read/write access control |
| Tab-Zugehörigkeit | `tabId` | Which tab/section the brick belongs to |

**Source files:**
- `univelop-master/packages/uni_core/lib/src/bricks/models/brick_spec.dart`
- `univelop-master/packages/uni_core/lib/src/bricks/util/catalog_setting.dart` (CommonSettings)
- `univelop-master/packages/univelop/lib/bricks/widgets/brick_settings.dart` (settings UI)

### 0.6 Define standard page templates

Every page type gets a consistent structure. The templates below define the **sections** each page must have (content length scales with feature complexity).

#### Template A: Input/Basic Brick Page (~25-40 lines)

Only documents **brick-specific** settings. Common settings are covered by the shared reference page.

```markdown
---
layout: title
title: [German Name]
parent: [Formular-Bausteine | Basis-Bausteine]
grand_parent: Bausteine
nav_order: N
redirect_from: [old URLs]
---

[1-2 sentence description of what this brick does and when to use it.]

## Einstellungen

[Allgemeine Einstellungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.]

1. **[Brick-specific setting]** — [description from code]
...

## Hinweise

- [Any important notes, gotchas, or tips. Omit section if none.]

## Verwandte Bausteine

- [Links to related bricks]
```

#### Template B: Advanced Brick Page (~40-120 lines, scales with complexity)

Only documents **brick-specific** settings. Common settings are linked.

```markdown
---
layout: title
title: [German Name]
parent: Erweiterte Bausteine
grand_parent: Bausteine
nav_order: N
redirect_from: [old URLs]
---

[2-4 sentence description: what it does, primary use case, key capability.]

## Funktionsweise

[How the brick works conceptually. 1-3 paragraphs for complex bricks.]

## Einstellungen

[Allgemeine Einstellungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.]

1. **[Brick-specific setting]** — [description]
...

## Verwendung in Workflows

[How this brick interacts with workflow steps. Link to relevant steps. Omit if no workflow interaction.]

## Hinweise

- [Notes, limitations, tips]

## Verwandte Bausteine

- [Cross-references]
```

#### Template C: Workflow Step Page (~30-80 lines)
```markdown
---
layout: workflow-step
title: [German Name]
parent: [Workflow Subcategory]
grand_parent: Workflows
icon: [material_icon_name]
nav_order: N
redirect_from: [old URLs]
---

[1-3 sentence description of what this step does.]

## Einstellungen

1. **[Setting]** — [description derived from code's settings map]
...

## Beispiel

[Brief usage example or common pattern. Omit for very simple steps.]

## Hinweise

- [Notes, constraints (e.g. "Nur in Geschäftsprozessen verfügbar")]
```

#### Template D: Tile Page (~30-80 lines)
```markdown
---
layout: title
title: [German Name]
parent: Kacheln
nav_order: N
redirect_from: [old URLs]
---

[1-3 sentence description of this tile type and when to use it.]

## Einstellungen

1. **[Setting]** — [description]
...

## Indikator

[How the tile indicator works for this type, if applicable.]

## Hinweise

- [Notes, tips]
```

#### Template E: Category Index Page
```markdown
---
title: [Category Name]
nav_order: N
layout: title
has_toc: false
redirect_from: [old URLs]
---

[1-2 paragraph overview of this category.]

{% include [relevant_table].html %}
```

#### Template F: Workspace Settings Page (~30-80 lines)
```markdown
---
layout: title
title: [German Name]
parent: Arbeitsbereich Einstellungen
nav_order: N
redirect_from: [old URLs]
---

[1-2 sentence description of what this settings area controls.]

## Einstellungen

1. **[Setting]** — [description]
...

## Einrichtung

[Step-by-step setup instructions, if applicable (e.g. for integrations, mailing). Omit for simple settings.]

## Hinweise

- [Notes, prerequisites, limitations]
```

### 0.7 Implement automatic term-to-link replacement (auto-linking)

To ensure every mention of a known concept, brick, or workflow step is hyperlinked without relying on manual effort, implement an automatic linking system.

**Approach: Custom Jekyll plugin + GitHub Actions deployment**

The site currently deploys via GitHub Pages classic build, which does not support custom plugins. Migration to **GitHub Actions** deployment unlocks custom Ruby plugins.

**Step 1: Create `_data/autolinks.yml`**

A data file mapping terms to their target URLs and optional aliases:

```yaml
# Concept pages
- term: Technischer Name
  url: /docs/concepts/technical-names
  aliases: [Technische Namen, technischen Namen, technischen Namens]
- term: Power Feature
  url: /docs/concepts/power-features
  aliases: [Power Features]
- term: Credits
  url: /docs/concepts/credits
- term: Solution
  url: /docs/concepts/solutions
  aliases: [Solutions]
- term: Filter & Sortierung
  url: /docs/concepts/filters
  aliases: [Filter und Sortierung, Filtern und Sortieren]

# Bricks (selected high-value ones)
- term: Datensatz
  url: /docs/bricks/advanced/record-picker
  aliases: [Datensatz-Baustein]
  context_only: true  # only link when "Baustein" follows within 2 words
- term: Status
  url: /docs/bricks/advanced/status
  context_only: true
- term: Tabelle
  url: /docs/bricks/advanced/table
  context_only: true
# ... more entries

# Workflow steps
- term: Geschäftsprozess
  url: /docs/workflows/workflows
  aliases: [Geschäftsprozesse, Geschäftsprozessen]
```

**Step 2: Create `_plugins/autolink_glossary.rb`**

A Jekyll hook (`:documents, :post_render`) that uses **Nokogiri** to walk the HTML DOM:
- Iterates over text nodes only (skips `<a>`, `<code>`, `<pre>`, `<h1>`-`<h6>` elements)
- For each term in `autolinks.yml`, replaces the **first occurrence per page** with a hyperlink
- Skips linking on the term's own page (no self-links)
- Supports `context_only` flag for ambiguous terms
- Excludes pages listed in a `skip_autolink` front matter key

**Step 3: Migrate to GitHub Actions deployment**

Create `.github/workflows/jekyll.yml`:
```yaml
name: Deploy Jekyll site
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.2'
          bundler-cache: true
      - run: bundle exec jekyll build
      - uses: actions/upload-pages-artifact@v3
  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Then switch the repo's Pages settings from "Deploy from branch" to "GitHub Actions".

**Fallback (if migration is not desired):** A client-side JavaScript approach using `_includes/autolink.html` that runs in the browser. This works without migration but has no SEO benefit and a slight flash of unlinked content.

**Implementation note:** Auto-linking is done in Phase 7 after all content is written, so the link targets are stable. The `autolinks.yml` file is maintained alongside the docs — when a new concept or brick page is added, an entry is added to the YAML.

---

## Phase 1: Structural Changes

**Goal:** Reorganize navigation hierarchy where beneficial, and create concept pages.

### 1.1 Proposed hierarchy changes

**Current → New:**

The current hierarchy is mostly sound. Changes:

1. **Merge "Formelsammlung" and "Arbeiten mit Formeln"** into a single **"Formeln"** section
   - Current: Two separate top-level sections (nav_order 9 and 10) that confuse users
   - New: `Formeln` (nav_order 9) with children: `Überblick`, `Text`, `Zahl`, `Datum`, `Logik`, `Listen`, `Beispiele`, `Best Practices`, `Bedingungen`
   - Moves formula reference and formula tutorials under one roof

2. **Add "Integrationen" as explicit subsection under Schnittstellen**
   - Document: AWS SES, Microsoft (App-Only + Delegated), SendGrid, SMTP/IMAP, OpenAI, Zoho
   - Currently only REST API and Calendar Shares are documented

3. **Add "Konzepte" as new top-level section** (nav_order 3)
   - Houses cross-cutting concept pages that are linked from many places
   - See Phase 0.4 for the full list of concept pages

4. **Keep all other categories as-is** — Bausteine, Kacheln, Workflows, Designmodi, Mitgliederverwaltung, Arbeitsbereich Einstellungen, Changelog are well-structured

### 1.2 New pages to create

**Concept pages:**

| File Path | Title | Parent | Layout |
|-----------|-------|--------|--------|
| `docs/concepts/concepts.md` | Konzepte | — (top-level) | title |
| `docs/concepts/technical-names.md` | Technische Namen | Konzepte | title |
| `docs/concepts/expressions.md` | Formeln & Ausdrücke | Konzepte | title |
| `docs/concepts/filters.md` | Filter & Sortierung | Konzepte | title |
| `docs/concepts/record-linking.md` | Listen verknüpfen | Konzepte | title |
| `docs/concepts/roles-and-rights.md` | Rollen & Rechte | Konzepte | title |
| `docs/concepts/solutions.md` | Solutions | Konzepte | title |
| `docs/concepts/power-features.md` | Power Features | Konzepte | title |
| `docs/concepts/credits.md` | Credits | Konzepte | title |
| `docs/concepts/offline.md` | Offline-Modus | Konzepte | title |
| `docs/concepts/lifecycle.md` | Datensatz-Lifecycle | Konzepte | title |

**Shared reference pages:**

| File Path | Title | Parent | Layout |
|-----------|-------|--------|--------|
| `docs/bricks/common-settings.md` | Allgemeine Baustein-Einstellungen | Bausteine | title |

**Brick pages:**

| File Path | Title | Parent | Layout |
|-----------|-------|--------|--------|
| `docs/bricks/advanced/kanban.md` | Kanban | Erweiterte Bausteine | title |
| `docs/bricks/advanced/checklist.md` | Checkliste | Erweiterte Bausteine | title (rewrite stub) |
| `docs/bricks/advanced/resource-allocation.md` | Ressourcenplanung | Erweiterte Bausteine | title |
| `docs/bricks/advanced/text-expression.md` | Text-Formel | Erweiterte Bausteine | title |
| `docs/bricks/advanced/number-expression.md` | Zahlen-Formel | Erweiterte Bausteine | title |
| `docs/bricks/advanced/bool-expression.md` | Logik-Formel | Erweiterte Bausteine | title |
| `docs/bricks/advanced/list-expression.md` | Listen-Formel | Erweiterte Bausteine | title |
| `docs/bricks/advanced/action-button.md` | Aktions-Button | Erweiterte Bausteine | title |
| `docs/bricks/input/segments.md` | Segmente | Formular-Bausteine | title |
| `docs/bricks/input/timer.md` | Timer | Formular-Bausteine | title |
| `docs/bricks/input/color-picker.md` | Farbauswahl | Formular-Bausteine | title (rewrite stub if exists) |

**Tile pages:**

| File Path | Title | Parent | Layout |
|-----------|-------|--------|--------|
| `docs/tiles/ai-agent-tile.md` | KI-Agent Kachel | Kacheln | title (rewrite stub if exists) |
| `docs/tiles/resource-allocation-tile.md` | Ressourcenplanung Kachel | Kacheln | title |

**Workflow step pages:**

| File Path | Title | Parent | Layout |
|-----------|-------|--------|--------|
| `docs/workflows/advanced/upload-to-cloud.md` | In Cloud hochladen | Erweitert | workflow-step |
| `docs/workflows/advanced/ai-agent.md` | KI-Agent | Erweitert | workflow-step |
| `docs/workflows/user-interaction/user-input.md` | Benutzereingabe | Benutzerinteraktion | workflow-step |

**Interface pages:**

| File Path | Title | Parent | Layout |
|-----------|-------|--------|--------|
| `docs/interfaces/integrations.md` | Integrationen | Schnittstellen | title |
| `docs/interfaces/external-user-roles.md` | Externe Benutzerrollen | Schnittstellen | title (rewrite stub) |

**Workspace settings pages:**

| File Path | Title | Parent | Layout |
|-----------|-------|--------|--------|
| `docs/workspace-settings/general.md` | Allgemein | Arbeitsbereich Einstellungen | title |
| `docs/workspace-settings/design.md` | Design | Arbeitsbereich Einstellungen | title |
| `docs/workspace-settings/api-keys.md` | API-Schlüssel | Arbeitsbereich Einstellungen | title |
| `docs/workspace-settings/integrations.md` | Integrationen | Arbeitsbereich Einstellungen | title |
| `docs/workspace-settings/billing.md` | Abrechnung | Arbeitsbereich Einstellungen | title |
| `docs/workspace-settings/health-check.md` | Statusprüfung | Arbeitsbereich Einstellungen | title |

### 1.3 Pages to potentially remove or merge

| Current Page | Action | Reason |
|-------------|--------|--------|
| `docs/bricks/advanced/dynamic-record-picker.md` | Keep hidden (`nav_exclude: true`) or merge into record-picker.md | Currently empty, nav-excluded |
| `docs/how-to-use-formulas/*` | Merge into new `docs/formulas/` structure | Consolidating formula docs |
| `docs/formulas/*` | Merge into new unified `docs/formulas/` structure | Consolidating formula docs |

---

## Phase 2: Rewrite All Brick Pages (~66 existing + ~11 new)

**Source of truth:** `packages/uni_core/lib/src/` — brick classes, `BrickSpec` model, `BrickCatalog`

**Order:** Basic bricks → Input bricks → Advanced bricks (simple → complex)

### 2.1 Basic Bricks (8 pages) — Template A
Rewrite each to ~30 lines. Settings derived from code.

| File | Code Class | Complexity |
|------|-----------|------------|
| `basic/text.md` (Hinweis/HintBrick) | `HintBrick` | Simple |
| `basic/subheading.md` | `SubheadingBrick` | Simple |
| `basic/section.md` | `SectionBrick` (Headline) | Simple |
| `basic/rich-text-hint.md` | `RichTextHintBrick` | Simple |
| `basic/file.md` | `FileBrick` | Simple |
| `basic/image.md` (Bild) | `ImageBrick` | Simple |
| `basic/navigation.md` | `NavigationBrick` | Simple |
| `basic/web-button.md` | `WebButtonBrick` | Simple |

### 2.2 Input Bricks (17 existing + 3 new = ~20 pages) — Template A
Rewrite each to ~30-50 lines. Cross-reference code settings.

| File | Code Class | Complexity |
|------|-----------|------------|
| `input/text-field.md` | `TextFieldBrick` | Simple |
| `input/number-field.md` | `NumberFieldBrick` | Simple |
| `input/switch.md` | `SwitchBrick` | Simple |
| `input/drop-down.md` | `DropDownBrick` | Medium (options config) |
| `input/multi-selection.md` | `MultiSelectionBrick` | Medium |
| `input/date-picker.md` | `DatePickerBrick` | Simple |
| `input/date-range.md` | `DateRangeBrick` | Simple |
| `input/time-span.md` | `TimeSpanBrick` | Medium (start/end) |
| `input/email.md` | `TextFieldBrick` (email mode) | Simple |
| `input/phone.md` | `TextFieldBrick` (phone mode) | Simple |
| `input/address.md` | `AddressBrick` | Medium |
| `input/file-picker.md` | `FilePickerBrick` | Simple |
| `input/image-picker.md` | `ImagePickerBrick` | Simple |
| `input/geo-location.md` | `GeoLocationBrick` | Medium |
| `input/measure.md` | `MeasureBrick` | Simple |
| `input/user-picker.md` | `UserPickerBrick` | Medium |
| `input/color-picker.md` | `ColorPickerBrick` | Simple |
| **NEW** `input/segments.md` | `SegmentsBrick` | Simple |
| **NEW** `input/timer.md` | `TimerBrick` | Medium |

### 2.3 Advanced Bricks (37 existing + ~8 new = ~45 pages) — Template B
Scale detail to complexity. Complex bricks get 80-150 lines.

**Simple advanced (~40-60 lines each):**
- `changelog.md`, `comments.md`, `flow-button.md`, `webhook-button.md`, `serial-number.md`, `qr-barcode.md`, `image-link.md`, `file-link.md`
- **NEW:** `action-button.md`, `text-expression.md`, `number-expression.md`, `bool-expression.md`, `list-expression.md`

**Medium advanced (~60-100 lines each):**
- `record-picker.md`, `multi-record-picker.md`, `record-list.md`, `date-expression.md`, `drawing.md`, `signature.md`, `editor.md`, `release.md`
- **NEW:** `kanban.md`, `checklist.md`

**Complex advanced (~100-150 lines each):**
- `status.md`, `status-button.md`, `approval.md`, `calendar.md`, `scheduler.md`, `table.md`, `matrix.md`, `gpt.md`, `gpt-image-scanner.md`, `print-out.md`, `item-scanner.md`, `xml.md`
- **NEW:** `resource-allocation.md`

---

## Phase 3: Rewrite All Workflow Step Pages (~48 existing + ~3 new)

**Source of truth:** `packages/uni_core/lib/src/workflows/flow_steps/`, `FlowStepCatalog`

**Order:** By category (Structure → Record Loading → Record Editing → User Interaction → User Management → File Handling → Advanced)

### 3.1 Category Index Pages (7 pages) — Template E
Rewrite each category overview. Keep `layout: title`, `has_toc: false` where used.

### 3.2 Individual Step Pages (~41 existing + 3 new) — Template C

For each step: verify settings against code's `FlowStepSpec` and `FlowStepCatalogItem`. Document:
- All settings from the step's `settings` map
- Which `FlowType`s the step supports (client automation, server automation, business process)
- Whether it loads a record into context (`loadsRecord`)
- Connection points (`nextKeys`) for branching steps

**New step pages:**
| File | Code Class | Icon |
|------|-----------|------|
| `workflows/advanced/upload-to-cloud.md` | `UploadFileToCloudStorageStep` | cloud_upload |
| `workflows/advanced/ai-agent.md` | `AiAgentStep` | smart_toy |
| `workflows/user-interaction/user-input.md` | `UserInputStep` | input |

---

## Phase 4: Rewrite All Tile Pages (~15 existing + ~1 new)

**Source of truth:** `packages/uni_core/lib/src/tiles/models/tile_spec.dart`, `TileSpecType` enum

For each tile: document all settings from `TileSpec`, indicator options, role permissions, and specific behavior.

**Pages:**
- Rewrite: `basic-tile.md`, `filter-tile.md`, `form-tile.md`, `folder-tile.md`, `page-tile.md`, `member-tile.md`, `kanban-board-tile.md`, `to-do-tile.md`, `web-tile.md`, `settings-tile.md`, `scanner-tile.md`, `ai-agent-tile.md`, `general-settings.md`, `tiles.md` (index)
- **NEW:** `resource-allocation-tile.md`

---

## Phase 5: Rewrite Formula Pages (consolidate ~12 pages into ~10)

**Source of truth:** `_data/expressions_docs.json`, `packages/uni_core/lib/src/expressions/`

### 5.1 Merge "Formelsammlung" + "Arbeiten mit Formeln" into unified `docs/formulas/`

**New structure:**
```
docs/formulas/
├── formulas.md          (index — "Formeln", nav_order 9)
├── overview.md          (Überblick — how expressions work, syntax, where they're used)
├── text.md              (Text-Formeln — include + inline examples)
├── number.md            (Zahlen-Formeln — include + inline examples)
├── date.md              (Datum-Formeln — include + inline examples)
├── logic.md             (Logik-Formeln — include + inline examples)
├── list.md              (Listen-Formeln — include + inline examples)
├── examples.md          (Praxisbeispiele)
├── best-practices.md    (Best Practices)
└── conditions.md        (Bedingungen & Filter)
```

### 5.2 Each formula category page
- Keep `{% include expressions_table.html %}` for auto-generated reference
- **Add** 2-3 paragraphs of educational content above the table
- **Add** 2-3 practical examples with expected output
- Reference `expressions_docs.json` for accuracy

---

## Phase 6: Rewrite Remaining Sections

### 6.1 Designmodi (5 pages)
- `designmode.md`, `list-view.md`, `record.md`, `workflow.md`, `workspace.md`
- Enrich with actual settings and options from code
- Cross-reference to bricks, tiles, and workflows where relevant

### 6.2 Mitgliederverwaltung (3 pages)
- Rewrite based on `UserRole`, `UserRight`, `UserLicense` models from code
- Document: roles (Admin, Owner, custom), rights per RecordSpec (canRead, canCreate, canModify, canDelete, canExecuteWorkflow), license types (admin, pro, light)
- `invitations.md`, `roles-rights.md`, `member-management.md`

### 6.3 Arbeitsbereich Einstellungen (8 existing + 6 new = 14 pages) — Template F

**Source of truth:** `univelop-master/packages/univelop/lib/workspace/util/workspace_setting_destination.dart` (defines 14 settings pages), `univelop-master/packages/uni_core/lib/src/workspace/models/workspace.dart`

The code defines 14 distinct settings destinations. Current docs cover 8. Fill the gaps:

| File | Title | Status | Code Source |
|------|-------|--------|-------------|
| `workspace-settings.md` | Arbeitsbereich Einstellungen | Rewrite (index) | — |
| `general.md` | Allgemein | **NEW** | `WorkspaceGeneralSettings` (name, type, timezone, locale) |
| `design.md` | Design | **NEW** | `WorkspaceDesignSettings` (banner, logo, colors, theme) |
| `notifications.md` | Benachrichtigungen | Rewrite | `WorkspaceNotificationSettings` (times, error emails) |
| `multi-language.md` | Mehrsprachigkeit | Rewrite | Workspace `supportedLocales`, `defaultLocale` |
| `mailing.md` | E-Mail Versand | Rewrite | `emailSettings`, IntegrationTypes (Microsoft, SMTP, SendGrid, AWS) |
| `portal-mode.md` | Portal-Modus | Rewrite | `WorkspaceDomainSettings` |
| `chatgpt.md` | ChatGPT | Rewrite | `chatGptEnabled`, `chatGptKey`, `chatGptOrganizationId` |
| `print-out.md` | Drucken | Rewrite (stub) | PrintOut settings |
| `shortcuts.md` | Tastenkürzel | Rewrite (stub) | Shortcut definitions |
| `api-keys.md` | API-Schlüssel | **NEW** | `WorkspaceApiKeySettings` |
| `integrations.md` | Integrationen | **NEW** | `WorkspaceIntegrationsSettings` (AWS, Microsoft, SendGrid, SMTP, OpenAI, Zoho) |
| `billing.md` | Abrechnung | **NEW** | `WorkspaceBillingAccountSettings` (Stripe) |
| `health-check.md` | Statusprüfung | **NEW** | `WorkspaceHealthCheckDisplay` |

### 6.4 Schnittstellen (5 existing + 2 new = 7 pages)
- Rewrite `rest-api.md` based on actual API endpoints from `uni_api` package
- Rewrite `calendar-shares.md` from `CalendarApiService`
- Rewrite `import-export.md`
- **NEW:** `integrations.md` documenting all IntegrationTypes (AWS, Microsoft, SendGrid, SMTP, OpenAI, Zoho)
- **NEW:** `external-user-roles.md` (rewrite "coming soon" stub)

### 6.5 Top-level standalone pages (12 pages)
- Rewrite: `first-steps.md`, `program-structure.md`, `data-structure.md`, `search-and-filter.md`, `rules.md`, `link-lists.md`, `credits.md`, `health-check.md`, `beta.md`, `solutions.md`, `power-features.md`, `login-with-apple.md`

---

## Phase 7: Global Cleanup, Cross-References & Auto-Linking

### 7.1 Fix all image paths
- Replace all `\old_assets\...` with `/old_assets/...` (291 occurrences in 102 files)
- Where text can stand alone, remove image reference and add to `SCREENSHOTS_NEEDED.md`
- Where image is essential (import/export steps, complex UI flows), keep with fixed path

### 7.2 Standardize formatting across all pages
- Headings: Use `##` for section headers (no inline color spans in H2s — the layout already colors H1)
- Settings lists: Numbered lists with `**bold setting name**` followed by em-dash and description
- No inline `<span style="color:...">` — let the theme handle colors
- Callout blocks use `{: .warning }`, `{: .hint }`, `{: .important }`, `{: .tip }` consistently

### 7.3 Add manual cross-references

Ensure every page has explicit links to related content. **Linking rules:**

1. **Brick pages:** Link to related workflow steps in a "Verwandte Bausteine" section (e.g. Approval brick → Send Approval Request, Wait for Approval, Reset Approval steps)
2. **Workflow step pages:** Link back to bricks they operate on, and to related steps
3. **Tile pages:** Link to related bricks and features
4. **Formula pages:** Link to expression bricks and concept pages
5. **Concept pages:** Link to all pages that use the concept (via "Verwendung" section)
6. **Inline mentions:** Whenever text mentions another brick, step, tile, or concept by name, wrap it in a markdown link. For example: "Der _[Status](/docs/bricks/advanced/status)_-Baustein muss..." instead of "Der _Status_-Baustein muss..."

**Linking checklist per page type:**

| Page Type | Must link to |
|-----------|-------------|
| Basic Brick | Related input/advanced bricks, concept pages (if applicable) |
| Input Brick | Related bricks, workflow steps that read/write this brick |
| Advanced Brick | Related bricks, workflow steps, concept pages (filters, linking, lifecycle) |
| Workflow Step | Bricks it operates on, related steps, concept pages (credits, lifecycle) |
| Tile | Related bricks/lists, concept pages |
| Concept | All pages that reference this concept |

### 7.4 Implement auto-linking

Execute the auto-linking plan from Phase 0.7:

1. **Create `_data/autolinks.yml`** — Populate with all concept pages, high-value brick pages, and workflow step pages. Estimated ~80-120 entries.
2. **Create `_plugins/autolink_glossary.rb`** — Implement the Nokogiri-based post-render hook.
3. **Migrate to GitHub Actions** — Create `.github/workflows/jekyll.yml`, switch repo Pages settings.
4. **Test & tune** — Build locally, verify links are correct, adjust aliases and exclusions. Ensure no double-linking (manual + auto) by removing manual links that the plugin will handle, or by adding `skip_autolink: true` to specific pages.

### 7.5 Verify terminology consistency

Run a final check across all pages against the terminology table from Phase 0.3:
- Search for German translations of English terms (e.g. "Lösung" instead of "Solution") and fix
- Search for English terms that should be German (e.g. "Brick" instead of "Baustein") and fix
- Verify `de.jsonc` is still the source of truth for any edge cases

### 7.6 Update `CLAUDE.md`
- Update with any structural changes made
- Add the template definitions for future consistency
- Document the auto-linking system and `autolinks.yml` maintenance process

---

## Execution Order Summary

| Phase | Scope | Est. Pages |
|-------|-------|-----------|
| 0 | Foundation (templates, terminology, concept page definitions, tracking file, common-settings page, auto-linking design) | 1 new page + setup files |
| 1 | Structural changes (hierarchy, create concept pages, create new content stubs) | ~35 new pages created (11 concepts + 24 others) |
| 2 | Brick pages | ~78 pages (67 existing + 11 new) |
| 3 | Workflow step pages | ~51 pages (48 existing + 3 new) |
| 4 | Tile pages | ~16 pages (15 existing + 1 new) |
| 5 | Formula pages (merge + rewrite) | ~10 pages |
| 6 | Remaining sections (designmode, members, workspace settings, interfaces, standalone) | ~41 pages (35 existing + 6 new workspace settings) |
| 7 | Global cleanup, cross-refs, auto-linking, terminology check, image fixes | All pages + plugin + CI |

**Total: ~210+ content pages rewritten/created, plus auto-linking infrastructure**

---

## Verification

After each phase:
1. Run `bundle exec jekyll build` to verify no broken Liquid templates or front matter errors
2. Spot-check navigation hierarchy renders correctly
3. Verify all `redirect_from` URLs are preserved
4. Check `SCREENSHOTS_NEEDED.md` is updated with any missing images
5. After all phases: full site review for broken links and formatting consistency

---

## Key Files Referenced

**Code sources (read-only, for accuracy):**
- `univelop-master/packages/uni_core/lib/src/bricks/util/brick_catalog.dart` — all brick types
- `univelop-master/packages/uni_core/lib/src/bricks/models/brick_spec.dart` — common brick settings
- `univelop-master/packages/uni_core/lib/src/bricks/util/catalog_setting.dart` — CommonSettings constants
- `univelop-master/packages/univelop/lib/bricks/widgets/brick_settings.dart` — settings UI panel
- `univelop-master/packages/uni_core/lib/src/workflows/flow_steps/flow_step_catalog.dart` — all workflow steps
- `univelop-master/packages/uni_core/lib/src/tiles/models/tile_spec.dart` — all tile types
- `univelop-master/packages/uni_core/lib/src/expressions/` — expression engine
- `univelop-master/packages/uni_core/lib/src/users_members/models/` — roles, rights, licenses
- `univelop-master/packages/uni_core/lib/src/workspace/models/workspace.dart` — workspace model
- `univelop-master/packages/univelop/lib/workspace/util/workspace_setting_destination.dart` — 14 settings pages
- `univelop-master/packages/uni_api/lib/src/services/` — API endpoints

**Doc site files to modify:**
- `_config.yml` — if formula section merge requires nav changes
- `_includes/*.html` — if brick table includes need updating
- `_layouts/` — no changes expected
- `docs/**/*.md` — all content pages
- `docs/concepts/*.md` — new concept pages
- `_data/autolinks.yml` — auto-linking term definitions (new)
- `_plugins/autolink_glossary.rb` — auto-linking plugin (new)
- `.github/workflows/jekyll.yml` — GitHub Actions deployment (new)
- `CLAUDE.md` — update after structural changes

**Terminology source:**
- `univelop-master/packages/uni_core/assets/translations/de.jsonc` — German UI translations (source of truth for English vs. German terms)
