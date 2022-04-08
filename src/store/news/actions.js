import { GET_NEWS, SET_NEWS, SET_IS_LOADING_NEWS } from "./constants";

export const getNews = () => ({ type: GET_NEWS });
export const setIsLoadingNews = (payload) => ({
  type: SET_IS_LOADING_NEWS,
  payload,
});
export const setNews = (payload) => ({ type: SET_NEWS, payload });
