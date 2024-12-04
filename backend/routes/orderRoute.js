import express from "express"
import { placeOrder, placeOrderStripe, allOrders, updateStatus, userOrders, verifyStripe } from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js"
const orderRouter = express.Router()


// Admin feature
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

//Payment Methode
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)

// User features
orderRouter.post('/userorders', authUser, userOrders)

// verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)

export default orderRouter