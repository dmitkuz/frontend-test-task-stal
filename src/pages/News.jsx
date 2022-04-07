import { Skeleton, List, Typography } from "antd";
import { useState, useEffect } from "react";

const News = () => {
  const [news, setNews] = useState(Array(4).fill({}));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      fetch("/news.json")
        .then((response) => response.json())
        .then(({ articles }) => {
          setIsLoading(false);
          setNews(articles);
        });
    }, 3000);
  }, []);

  return (
    <>
      <Typography.Title>Новости</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={news}
        renderItem={(item) => (
          <List.Item>
            <Skeleton loading={isLoading} active>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};

export default News;
