const config = require("../config");


function generateRandomCandlesticks(numCandles) {
  const candlesticks = [];

  for (let i = 0; i < numCandles; i++) {
    // Generate random open, high, low, and close prices
    const open = getRandomPrice(100, 200); // Replace with appropriate range
    const high = open + getRandomPrice(5, 20); // Example: High is usually slightly higher than open
    const low = open - getRandomPrice(5, 20);  // Example: Low is usually slightly lower than open
    const close = getRandomPrice(low, high); // Close price within the high and low

    // Create a timestamp for the candlestick (e.g., in milliseconds)
    const timestamp = new Date().getTime() - numCandles * 60000 + i * 60000;

    candlesticks.push({
      timestamp,
      open,
      high,
      low,
      close,
    });
  }

  return candlesticks;
}

function getRandomPrice(min, max) {
  return Math.random() * (max - min) + min;
}

const numCandles = 50; // Number of candlesticks you want to generate




const candlestickController = {};

candlestickController.getCandleStickData = async (req, res) => {
  
  try {
   let limit=req.query.limit;
   if(limit===undefined || limit ==='')  limit=50;
    const data=generateRandomCandlesticks(limit)
    return res.status(200).json({data})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

const { getCandleStickData } = candlestickController;
module.exports = { getCandleStickData };
