import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL = `mongodb+srv://${username}:${password}@cluster0.4voqu.mongodb.net/mydb?retryWrites=true&w=majority`;
Connection(process.env.MONGODB_URI || URL);
const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
DefaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);


export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
    paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
    paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
    paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
    paytmParams['ORDER_ID'] = uuid(),
    paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
    paytmParams['TXN_AMOUNT'] = '100',
    paytmParams['CALLBACK_URL'] = '/callback'
paytmParams['EMAIL'] = 'codeforinterview01@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'