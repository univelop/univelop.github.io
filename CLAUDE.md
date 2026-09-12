# CLAUDE.md - Univelop Documentation Site

## Overview

This is a **Jekyll-based documentation site** for [Univelop](https://www.univelop.de), a German no-code platform for building business applications. The site is hosted on GitHub Pages at `docs.univelop.de` and uses the **Just-the-Docs** remote theme.

All documentation content is written in **German**.

## Tech Stack

- **Static Site Generator**: Jekyll (via GitHub Pages gem ~223)
- **Theme**: `pmarsceill/just-the-docs` (remote theme)
- **Plugins**: `jekyll-feed`, `jekyll-remote-theme`, `jekyll-redirect-from`
- **Styling**: SCSS with custom `uni_light` color scheme
- **Formatter**: Prettier (tabWidth: 4, singleQuote, trailingComma: es5)
- **Run locally**: `bundle exec jekyll serve`

## Directory Structure

```
/
├── _config.yml              # Jekyll config (theme, callouts, footer, edit links)
├── _data/
│   └── expressions_docs.json  # Formula/expression reference data (drives formula pages)
├── _includes/               # Liquid template partials
│   ├── basic_bricks_table.html    # Auto-generates brick tables from site.pages
│   ├── input_bricks_table.html
│   ├── advanced_bricks_table.html
│   ├── expressions_table.html     # Formula reference table from _data JSON
│   ├── expression_category.html
│   ├── expression_example.html
│   ├── expression_variables_table.html
│   ├── next_page_button.html      # Sequential navigation (child → sibling → parent-sibling)
│   ├── head_custom.html
│   ├── nav_footer_custom.html
│   ├── search_placeholder_custom.html
│   └── toc_heading_custom.html
├── _layouts/
│   ├── title.md             # Main doc layout (extends table_wrappers, adds blue H1, TOC, nav)
│   └── workflow-step.md     # Workflow step layout (extends default, adds Material icon)
├── _sass/color_schemes/
│   └── uni_light.scss       # Custom theme: link color + heading color #0b5394
├── assets/
│   ├── logo.png
│   ├── search-analytics.js
│   └── changelog/           # Screenshots organized by release version (1-33/ through 1-39/)
├── old_assets/              # Legacy images (referenced with forward-slash paths)
├── docs/                    # All documentation pages
│   ├── bricks/              # Bausteine (building blocks)
│   │   ├── basic/           # Basis-Bausteine (display-only bricks)
│   │   ├── input/           # Formular-Bausteine (form input bricks)
│   │   └── advanced/        # Erweiterte Bausteine (complex bricks)
│   ├── tiles/               # Kacheln (app tiles on homescreen)
│   ├── designmode/          # Designmodi (design mode docs)
│   ├── workflows/           # Workflows (automation steps)
│   │   ├── structure/       # Struktur (control flow)
│   │   ├── record-loading/  # Einträge laden
│   │   ├── record-editing/  # Einträge bearbeiten
│   │   ├── file-handling/   # Dateibearbeitung
│   │   ├── user-interaction/ # Benutzerinteraktion
│   │   ├── user-management/ # Benutzerverwaltung
│   │   └── advanced/        # Erweitert (email, webhooks, AI)
│   ├── formulas/            # Formelsammlung (formula reference)
│   ├── how-to-use-formulas/ # Arbeiten mit Formeln (formula tutorials)
│   ├── member-management/   # Mitgliederverwaltung
│   ├── workspace-settings/  # Arbeitsbereich Einstellungen
│   ├── interfaces/          # Schnittstellen (REST API, calendar shares)
│   ├── changelog/           # Changelog (release notes, version folders)
│   └── *.md                 # Top-level standalone pages
└── index.md                 # Homepage (layout: default, nav_order: 0)
```

## Navigation Hierarchy (3 levels)

The site uses Just-the-Docs' automatic sidebar navigation built from front matter fields:

```
Level 1 (top-level)     Level 2 (parent)              Level 3 (grand_parent)
─────────────────────   ─────────────────────────────  ──────────────────────
Bausteine (nav:6)    →  Basis-Bausteine            →  individual bricks
                        Formular-Bausteine
                        Erweiterte Bausteine
Kacheln (nav:5)      →  individual tile types
Designmodi (nav:4)   →  Listenansicht, Eintrag, etc.
Workflows (nav:12)   →  Struktur, Einträge laden,  →  individual steps
                        Einträge bearbeiten, etc.
Formelsammlung (nav:9)
Changelog (nav:99)   →  release version folders     →  individual release pages
```

## Front Matter Patterns

### Standard documentation page
```yaml
---
layout: title
title: Page Title (German)
parent: Parent Category Name
grand_parent: Top-level Category   # only for 3rd-level pages
nav_order: 3
redirect_from:
    - /docs/old-path/page.html
---
```

### Top-level category page (no parent)
```yaml
---
title: Category Name
nav_order: 5
layout: title
has_toc: false                     # disables auto TOC, shows children_nav instead
redirect_from:
    - /docs/old-path.html
---
```

### Workflow step page
```yaml
---
layout: workflow-step
title: Step Name
parent: Workflow Subcategory        # e.g. "Einträge bearbeiten"
grand_parent: Workflows
icon: material_icon_name            # Material Design icon (e.g. ads_click, approval)
nav_order: 3
redirect_from:
    - /docs/old-path.html
---
```

## Layouts

| Layout | Extends | Used For |
|--------|---------|----------|
| `title` | `table_wrappers` | All standard doc pages. Adds blue H1, anchor headings, children nav, next-page button |
| `workflow-step` | `default` | Workflow step pages. Adds Material icon before title |
| `default` | (theme) | Homepage only |

## Content Conventions

- **Primary color**: `#0b5394` (blue) — handled by the theme/layouts, no need for inline spans
- **Section headings**: Use plain `##` markdown headings — do NOT use inline `<span style="color:...">` (the layout handles H1 styling)
- **Settings lists**: `1. **Setting Name** — Description` (numbered list, bold name, em-dash)
- **Image paths**: Forward slashes only: `/old_assets/path/image.png` or `/assets/docs/{category}/image.png`
- **New images**: Changelog screenshots in `assets/changelog/{version}/`, doc images in `assets/docs/{category}/`
- **Missing screenshots**: Track in `SCREENSHOTS_NEEDED.md` at repo root
- **Callout blocks** (defined in _config.yml):
  - `{: .warning }` → yellow, title "WARNUNG"
  - `{: .hint }` → blue, title "HINWEIS"
  - `{: .important }` → red, title "WICHTIG"
  - `{: .tip }` → green, title "💡 TIPP"

## Page Templates

### Brick pages (Template A/B)
- **Common settings** are documented once in `docs/bricks/common-settings.md` — do NOT repeat them on individual brick pages
- Each brick page links to common settings with: `Allgemeine Einstellungen werden unter [Allgemeine Baustein-Einstellungen](/docs/bricks/common-settings) beschrieben.`
- Only document **brick-specific** settings on individual pages
- Simple bricks (input/basic): ~25-40 lines
- Complex bricks (advanced): ~40-120 lines, scaled by feature complexity

### Workflow step pages (Template C)
- Use `layout: workflow-step` with `icon` field (Material Design icon name)
- ~30-80 lines with Einstellungen section

### Tile pages (Template D)
- ~30-80 lines with Einstellungen and Indikator sections

### Workspace settings pages (Template F)
- ~30-80 lines with Einstellungen and optional Einrichtung (setup) section

### Category index pages (Template E)
- Use `has_toc: false`, include auto-generated tables via Liquid

## Key Conventions When Making Changes

1. **Always include `redirect_from`** when creating new pages to maintain backward compatibility with old URLs
2. **Use `layout: title`** for standard pages, `layout: workflow-step` for workflow steps
3. **Set `has_toc: false`** on category index pages that use include-based tables
4. **Match `parent` exactly** to the parent page's `title` field (German names)
5. **Workflow steps require `icon`** — use Material Design icon names
6. **Category index pages** use Liquid includes (`{% include basic_bricks_table.html %}`) to auto-generate child page tables
7. **Formula pages** are driven by `_data/expressions_docs.json` — update the JSON to add/modify formulas
8. **nav_order** determines page ordering within siblings; top-level categories range from 0–99
9. **Changelog releases** go in `docs/changelog/{version}/` with assets in `assets/changelog/{version}/`
10. **All content is in German** — use German for titles, descriptions, and body text
11. **No inline color spans** — the theme handles heading colors automatically
12. **Brick-specific settings only** on individual brick pages — link to common-settings.md for shared ones
13. **Rewrite plan** is in `REWRITE_PLAN.md` — consult for the full phased rewrite approach
