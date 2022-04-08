import { useDispatch, useSelector } from "react-redux";
import { Skeleton, List, Typography } from "antd";
import { useEffect } from "react";
import { getNews } from "../store/news/actions";

const News = () => {
  const { news, isLoading } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(getNews());
    }
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
