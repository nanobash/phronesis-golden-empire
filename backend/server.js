require('dotenv').config({ path: '.env.local' });

// Set environmental variables

const API_SECRET_KEY = process.env.API_SECRET_KEY;
const ORGANIZATION_ID = process.env.ORGANIZATION_ID;
const WEBSITE_ID = process.env.WEBSITE_ID;
const CUSTOMER_ID = process.env.CUSTOMER_ID;
const FRONTEND_ORIGIN_URL = process.env.FRONTEND_ORIGIN_URL;

// -----------------------------------------------------------------------------------------

const cors = require('cors');
const express = require('express');
const app = express();

const corsOptions = {
    origin: FRONTEND_ORIGIN_URL,
    methods: ['POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

// Allow all origins
app.use(cors(corsOptions));

const RebillySDK = require('rebilly-js-sdk').default;

// Initalize Rebilly JS SDK with the organization and api key
const rebilly = RebillySDK({
    organizationId: ORGANIZATION_ID,
    sandbox: true, // Set to true for testing
    apiKey: API_SECRET_KEY,
});

app.use(express.static('public'));

app.post('/create-deposit-request', async (req, res) => {
    try {
        /*
            Make a POST API request to Rebilly to create a deposit request.
            https://www.rebilly.com/catalog/all/deposits/postdepositrequest
        */
        const response = await rebilly.depositRequests.create({
            data: {
                websiteId: WEBSITE_ID,
                // Replace {{ CUSTOMER_ID }} with the ID of the customer for which
                // a deposit request should be created.
                customerId: CUSTOMER_ID,
                // Replace {{ CURRENCY }} with the currency code in ISO 4217 format.
                currency: 'USD',
            }
        });
        // Extract the cashier token from the response.
        const token = response.fields.cashierToken;
        // Return the token.
        res.send({ token });
    } catch (error) {
        // Log any errors that occur.
        if (error?.response?.data) {
            console.error(error.response.data);
        } else {
            console.error(error);
        }
    }
});

app.listen(8080, () => console.log('Running on port 8080'));
