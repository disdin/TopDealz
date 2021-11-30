import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
//Components
import Connection from "./database/db.js"
import DefaultData from "./Default.js";
import router from "./routes/routes.js"
import { v4 as uuid } from 'uuid';

dotenv.config();
const app =express();

app.use(bodyParser.json({extendedd:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/",router);

const port=process.env.PORT||8000;

const username=process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;
const url=`mongodb+srv://${username}:${password}@cluster0.in5fm.mongodb.net/flipkartDB?retryWrites=true&w=majority`

Connection(process.env.MONGODB_URI||url);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
}

app.listen(port,()=>console.log(`Server is running on port ${port}`))

DefaultData();


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
paytmParams['EMAIL'] = 'sidhantbahri01@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'