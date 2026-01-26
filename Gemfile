# frozen_string_literal: true

source "https://rubygems.org"

# Match GitHub Pages production: use github-pages gem instead of jekyll.
# See https://jekyllrb.com/docs/step-by-step/10-deployment/
# Versions: https://pages.github.com/versions/
gem "github-pages", "~> 232", group: :jekyll_plugins

# Theme (compatible with GitHub Pages)
gem "just-the-docs", "~> 0.12"

# Ruby 3.0+ needs webrick for `bundle exec jekyll serve`
# https://jekyllrb.com/docs/
gem "webrick", "~> 1.8"

# Windows and JRuby
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1.1", platforms: [:mingw, :x64_mingw, :mswin]
