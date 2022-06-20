import axios from "../utils/request";

const base = {
  baseUrl: "http://localhost:5566",
  cityUrl: "/api/aj/getcitycode",
  homehot1: "/api/home/hot1",
  homehot2: "/api/home/hot2",
  search: "/api/search",
  details: "/api/details",
  login: "/api/login",
  comments: "/api/comments",
};

const api = {
  // home热门数据一
  getHomeHot1(params) {
    return axios.get(base.baseUrl + base.homehot1, { params });
  },
  // home热门数据二
  getHomeHot2(params) {
    return axios.get(base.baseUrl + base.homehot2, { params });
  },
  // 城市列表
  getCityList() {
    return axios.get(base.cityUrl);
  },
  // 搜索框
  search(params) {
    // console.log(params);
    return axios.get(base.baseUrl + base.search, { params });
  },
  // 详情页
  details(params) {
    return axios.get(base.baseUrl + base.details, { params });
  },
  // 登录
  login(params) {
    return axios.post(base.baseUrl + base.login, params);
  },
  // 商品评论
  getComments(params) {
    return axios.get(base.baseUrl + base.comments, { params });
  },
};

export default api;
