const axios = require('axios');

async function fetchHTML(url) {
    try {
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            }
        });
        return data;
    } catch (error) {
        console.error(`Error fetching HTML for ${url}:`, error);
        return null;
    }
}

module.exports = { fetchHTML };
