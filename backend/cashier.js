import dotenv from "dotenv"

dotenv.config({ path: '.env.local' });

// Set environmental variables

const API_SECRET_KEY = process.env.API_SECRET_KEY;
const ORGANIZATION_ID = process.env.ORGANIZATION_ID;
const WEBSITE_ID = process.env.WEBSITE_ID;
const CUSTOMER_ID = process.env.CUSTOMER_ID;
const FRONTEND_ORIGIN_URL = process.env.FRONTEND_ORIGIN_URL;

// -----------------------------------------------------------------------------------------

import express from "express";
import RebillyAPI from "rebilly-js-sdk";

const app = express();

const rebilly = RebillyAPI({
    organizationId: ORGANIZATION_ID,
    sandbox: true,
    apiKey: API_SECRET_KEY,
    timeout: 5000,
});

app.use(express.static("public"));

app.post("/create-cashier", async (req, res) => {
    try {
        const response = await rebilly.cashiers.create({
            data: {
                websiteId: WEBSITE_ID,
                customerId: CUSTOMER_ID,
                currency: "USD",
            },
        });

        const cashierToken = response.fields.cashierToken;

        res.send({ cashierToken });
    } catch (error) {
        if (error?.response?.data) {
            console.error(error.response.data);
        } else {
            console.error(error);
        }
    }
});

app.listen(8080, () => console.log("Running on port 8080"));
