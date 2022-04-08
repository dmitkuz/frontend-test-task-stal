const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchNews = async () => {
  await delay(1000);
  const response = await fetch("/news.json");
  const { articles } = await response.json();
  return articles;
};
