const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });
const OpenAI = require('openai');

const key = process.env.OPENAI_API_KEY;

// Initialize the OpenAI API with your API key
const openai = new OpenAI({
    apiKey: key
});

async function extractEventData(html)
{
    const prompt = `Extract the following information from the HTML content: 
    - Event Name
    - Event Dates
    - Location
    - Description
    - Key Speakers
    - Agenda/Schedule
    - Registration Details
    - Pricing
    - Categories
    - Audience type

    HTML content:
    ${html}`;

    try
    {
        const completion = await openai.chat.completions.create(
            {
                messages: [{ role: "system", content: prompt }],
                model: "gpt-3.5-turbo",
            });

        const extractedData = completion.choices[0].message.content.trim();
        return JSON.parse(extractedData);
    } catch (error)
    {
        console.error("Error generating summary with OpenAI:", error);
        return null;
    }
}

module.exports = { extractEventData };
