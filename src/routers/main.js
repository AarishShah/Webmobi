const express = require("express");
const router = new express.Router();
const { fetchHTML } = require("../utils/scrape");
const { extractEventData } = require("../utils/analysis");

const eventUrls = [
    'https://renegademarketing.com/blog/the-top-b2b-marketing-events-on-our-radar/#pavilion-summit',
    // Add more URLs as needed
];

async function scrapeEvent(url) {
    const htmlContent = await fetchHTML(url);
    if (!htmlContent) {
        return { error: `Failed to fetch HTML content for ${url}` };
    }
    const eventData = await extractEventData(htmlContent);
    return eventData;
}

router.get('/scrape', async (req, res) => {
    const results = await Promise.all(eventUrls.map(url => scrapeEvent(url)));
    const validResults = results.filter(result => result !== null);

    res.json(validResults);
});

module.exports = router;
