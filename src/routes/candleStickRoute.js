const router = require("express").Router();
const { getCandleStickData } = require("./candle.stick.controller");
router.get("/candlestick", getCandleStickData);

module.exports = router;
