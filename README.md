# Webmobi - B2B Event Scraper

This project is a Node.js application that scrapes data from B2B event websites. It fetches HTML content from the specified URLs, uses the OpenAI API to extract relevant event data, and returns the extracted data in JSON format.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- An OpenAI API key. You can get one by signing up at [OpenAI](https://platform.openai.com/api-keys).

## Setup

1. Clone the repository:
    
    ```bash
    git clone https://github.com/AarishShah/Webmobi
    
    ```
    
2. Navigate to the project directory:
    
    ```bash
    cd <project-directory>
    
    ```
    
3. Install the dependencies:
    
    ```bash
    npm install
    
    ```
    
4. Create a `.env` file in the root of your project and add your OpenAI API key:
    
    ```
    OPENAI_API_KEY=your-openai-api-key
    
    ```
    

## Running the Application

1. Start the server:
    
    ```bash
    npm run dev
    
    ```
    
2. To test the application, you can use Postman or any other API testing tool.

### Endpoints

- **GET /scrape**: Scrapes the data from URLs specified in `main.js` and returns the extracted data.
    
    Example request:
    
    ```
    GET <http://localhost:5000/scrape>
    
    ```
    

## File Structure

```
.
├── src
│   ├── routers
│   │   └── main.js        # Main router for handling routes
│   ├── utils
│   │   ├── analysis.js    # OpenAI API integration for extracting event data
│   │   └── scrape.js      # Fetching HTML content from URLs
│   └── index.js           # Entry point for the application
├── .env                   # Environment variables file
├── .gitignore             # Git ignore file
├── package-lock.json      # Lockfile for npm dependencies
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation

```

## Notes

- Ensure to add the `.env` file to your project directory before running the application.
- Use Postman or any API testing tool to interact with the endpoint and verify the functionality.

## License

This project is licensed under the MIT License.