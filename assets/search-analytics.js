// Search Analytics for Univelop Docs
// Tracks search events and sends them to Google Analytics

(function () {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function () {
        // Check if gtag is available
        if (typeof gtag === 'undefined') {
            console.warn(
                'Google Analytics (gtag) not found. Search tracking disabled.'
            );
            return;
        }

        // Track search input events
        trackSearchInput();

        // Track search result clicks
        trackSearchResultClicks();
    });

    function trackSearchInput() {
        // Look for search input field (Just the Docs theme uses specific selectors)
        const searchInput = document.querySelector('#search-input');

        if (!searchInput) {
            // Try alternative selectors that might be used by Just the Docs
            const alternativeSelectors = [
                'input[type="search"]',
                '.search-input',
                '[data-search-input]',
                'input[placeholder*="search" i]',
                'input[placeholder*="suchen" i]',
            ];

            for (let selector of alternativeSelectors) {
                const input = document.querySelector(selector);
                if (input) {
                    trackSearchInputEvents(input);
                    return;
                }
            }

            console.warn('Search input not found. Search tracking disabled.');
            return;
        }

        trackSearchInputEvents(searchInput);
    }

    function trackSearchInputEvents(searchInput) {
        let searchTimeout;
        let lastSearchTerm = '';

        // Track when user starts typing
        searchInput.addEventListener('input', function (e) {
            const searchTerm = e.target.value.trim();

            // Clear previous timeout
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }

            // Track search after user stops typing for 500ms
            searchTimeout = setTimeout(function () {
                if (searchTerm && searchTerm !== lastSearchTerm) {
                    trackSearchEvent('search_input', searchTerm);
                    lastSearchTerm = searchTerm;
                }
            }, 500);
        });

        // Track when user submits search (Enter key or search button)
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                const searchTerm = e.target.value.trim();
                if (searchTerm) {
                    trackSearchEvent('search_submit', searchTerm);
                }
            }
        });

        // Track search button clicks
        const searchButton = document.querySelector(
            '.search-button, button[type="submit"]'
        );
        if (searchButton) {
            searchButton.addEventListener('click', function () {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    trackSearchEvent('search_button_click', searchTerm);
                }
            });
        }
    }

    function trackSearchResultClicks() {
        // Track clicks on search results
        document.addEventListener('click', function (e) {
            // Look for search result links
            const searchResultLink = e.target.closest(
                '.search-result a, .search-results a, [data-search-result]'
            );

            if (searchResultLink) {
                const searchTerm = getCurrentSearchTerm();
                const resultTitle = searchResultLink.textContent.trim();
                const resultUrl = searchResultLink.href;

                trackSearchEvent('search_result_click', searchTerm, {
                    result_title: resultTitle,
                    result_url: resultUrl,
                });
            }
        });
    }

    function getCurrentSearchTerm() {
        // Try to get current search term from input field
        const searchInput = document.querySelector(
            '#search-input, input[type="search"], .search-input'
        );
        return searchInput ? searchInput.value.trim() : '';
    }

    function trackSearchEvent(eventAction, searchTerm, additionalParams = {}) {
        if (!searchTerm) return;

        const eventData = {
            event_category: 'search',
            event_label: searchTerm,
            search_term: searchTerm,
            ...additionalParams,
        };

        // Send to Google Analytics
        gtag('event', eventAction, eventData);
    }

    // Track search result impressions (when search results are shown)
    function trackSearchResultsShown(searchTerm, resultCount) {
        if (searchTerm && resultCount !== undefined) {
            trackSearchEvent('search_results_shown', searchTerm, {
                result_count: resultCount,
            });
        }
    }

    // Expose function for external use
    window.trackSearchResultsShown = trackSearchResultsShown;
})();
