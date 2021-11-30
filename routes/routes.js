import express from "express";
import {userSignup,userLogin} from "../controller/user-Controller.js";
import {getProducts} from "../controller/product-controller.js";
import { getProductById } from "../controller/product-controller.js";
import { addPaymentGateway, paymentResponse } from "../controller/payment-controller.js";


const router=express.Router();

router.post("/signup",userSignup)
router.post('/login',userLogin);
router.get('/products',getProducts);
router.get('/product/:id',getProductById)



// router.post('/cart/add', addItemInCart);


router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);
export default router;