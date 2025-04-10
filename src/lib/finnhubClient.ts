import axiosInstance from "./axiosClient";

export interface FinnhubQuoteResponse {
  c?: number; // Current price
  d?: number; // Change
  dp?: number; // Percent change
  h?: number; // High price of the day
  l?: number; // Low price of the day
  o?: number; // Open price of the day
  pc?: number; // Previous close price
  t?: number; // Timestamp
}

const FINNHUB_BASE_URL = "https://finnhub.io/api/v1";
const apiKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

if (!apiKey) {
  console.warn(
    "Finnhub API key is missing. Please set NEXT_PUBLIC_FINNHUB_API_KEY in your .env.local file. Some features might not work."
  );
}

const finnhubClient = {
  getQuote: async (symbol: string): Promise<FinnhubQuoteResponse> => {
    if (!apiKey) {
      throw new Error("Finnhub API key is missing.");
    }
    try {
      const url = `${FINNHUB_BASE_URL}/quote`;
      const response = await axiosInstance.get<FinnhubQuoteResponse>(url, {
        params: {
          symbol,
          token: apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching quote for ${symbol}:`, error);
      throw error;
    }
  },
};

export default finnhubClient;
