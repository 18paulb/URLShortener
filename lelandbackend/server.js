import { createServer } from 'node:http';
import express from 'express';
import cors from 'cors'
import { shorternUrl } from './url_helper.js';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();
app.use(express.json());

const baseUrl = "http://localhost:4200"

// Allow requests from localhost:4200 to prevent Cors error
app.use(cors({
    origin: baseUrl
}));

// Map to hold values
// key - original url
// val - shortened url
let urlMap = new Map()

// Saves the url into the urlMap, original url is the key and shortened url is the value
app.post('/submit-url', (req, res) => {
    try {
        const data = req.body;
        let url = data.url

        // Check if the url is already in the map
        if (urlMap.has(url)) {
            res.json({shortenedUrl: urlMap.get(url)})
        } else {
            let hash = shorternUrl(url)
            urlMap.set(url, baseUrl+ "/"+hash)
            res.json({shortenedUrl: urlMap.get(url)})
        }
        
    } catch (e) {
        res.status(500)
    }
});

// Loops through the map to find the entry that has the value of the shortened url,
// returns the original url
app.get('/get-url', (req, res) => {
    try {
        const shortenedUrl = req.query.shortenedUrl;

        let foundUrl = ''
        for (const [key, value] of urlMap) {
            if (value === shortenedUrl) {
                foundUrl = key;
                break; 
            }
        }
        
        if (foundUrl != '') {
            res.json({ fullUrl: foundUrl });
        } else {
            res.status(400).json({ error: 'URL not found' });
        }
    } catch (e) {
        res.status(500)
    }
});

// Create HTTP server using the Express app
const server = createServer(app);

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
