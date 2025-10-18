import { dateParcer } from "../utils/dateParcer";

export const getData = async (from, to, searchString, category) => {
  const setCategory = (articles) => {
    return articles.map((article) => {
      const { seconds } = dateParcer(article.publishedAt);
      if (seconds < 20) {
        return { ...article, category: "sport" };
      } else if (20 < seconds && seconds < 40) {
        return { ...article, category: "technology" };
      } else {
        return { ...article, category: "politic" };
      }
    });
  };

  const chooseCategody = (articles, topic) => {
    if (category != "")
      return articles.filter((article) => (article.category == topic));
    else return articles;
  };

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
    );
    const articlesResponse = await response.json();
    const allArticles = chooseCategody(setCategory(articlesResponse.articles), category);
    if (searchString) {
      const data = allArticles.filter((article) => {
        return (
          article.content &&
          article.content.toLowerCase().includes(searchString.toLowerCase())
        );
      });
      return data.slice(from, to);
    } else {
      const data = allArticles;
      return data.slice(from, to);
    }
  } catch (error) {
    console.error("Unexpected error: ", error);
  }
};
