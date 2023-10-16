const config = require("../config");
const axios = require("axios");

const candlestickController = {};

candlestickController.getCandleStickData = async (req, res) => {
  try {
    const { symbol, interval, startTime, endTime, limit } = req.query;

    const query = `${config.API_URL}?symbol=${symbol || "BTCUSDT"}&interval=${
      interval || "1m"
    }&startTime=${startTime || Date.now()}&endTime=${
      endTime || Date.now() + 86400000
    }&limit=${limit || 100}`;

    await axios.get(query).then((response) => {
      if (response.data) {
        return res.status(200).json({ data: response.data });
      } else {
        return res.status(400).json({ message: "Bad request" });
      }
    });
  } catch (error) {
    
    return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};
const { getCandleStickData } = candlestickController;
module.exports = { getCandleStickData };
