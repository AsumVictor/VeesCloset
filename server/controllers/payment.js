const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../middleware/CatchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.get(
  "/stripeapikey",
  catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({ stripeApikey: process.env.STRIPE_API_KEY });
  })
);

module.exports = router;
