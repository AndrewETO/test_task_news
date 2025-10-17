import { articles } from "../assets/static";

export const getData = async (from, to) => {
  try {
    // const response = await fetch(
    //   `https://newsapi.org/v2/everything?q=tesla&from=2025-09-16&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
    // );

    const data = articles.slice(from, to);
    return data;
  } catch (error) {
    console.error("Unexpected error: ", error);
  }
};
