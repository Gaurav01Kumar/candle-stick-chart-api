const config=require("../config")
const axios = require("axios");

const candlestickController = {};

candlestickController.getCandleStickData = async (req, res) => {
  try {
  
    const [dataResponse, schemaResponse] = await Promise.all([
      axios.get(
        `${config.API_URL}`
      ),
      axios.get(
        "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/candlestick-chart-schema.json"
      ),
    ]);

    const data = dataResponse.data;
    const convertedData = data.map((item) => ({
      Date: item[0],
      Open: item[1],
      High: item[2],
      Low: item[3],
      Close: item[4],
      Volume: item[5],
    }));
    return res.status(200).json({data:convertedData})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

const { getCandleStickData } = candlestickController;
module.exports = { getCandleStickData };
