const express = require("express");
const router = express.Router();
const homehot = require("./data/home/homehot");
// const searchData = require("./data/search/index");
const url = require("url");
const Mock = require("mockjs");
const Random = Mock.Random;
const detailsData = require("./data/details/index");
const commentsData = require("./data/comments/index");

/* 主页hot1 */
router.get("/home/hot1", (req, res) => {
  const cityName = url.parse(req.url, true).query.cityName;
  // console.log(cityName);
  res.send({
    status: 200,
    result: homehot.hot1,
    city: cityName,
  });
});

/* 主页hot2 */
router.get("/home/hot2", (req, res) => {
  const cityName = url.parse(req.url, true).query.cityName;
  res.send({
    status: 200,
    result: homehot.hot2,
    city: cityName,
  });
});

/* 搜索 Mock数据 */
// router.get("/search", (req, res) => {
//   // const search=url.parse(req.url,true).query.search
//   // console.log(search);
//   res.send({
//     status: 200,
//     result: searchData,
//   });
// });

// {
//   id: Math.random().toString().slice(2),
//   title: "豪宅 · 使馆壹号院4居室-南",
//   houseType: "17/19层| 4室1厅 - 273.97 ㎡",
//   price: "<h3>130000</h3>",
//   rentType: "整租",
//   img: "http://iwenwiki.com/api/livable/search/1.jpg"
// },

router.get("/search", (req, res) => {
  let data = Mock.mock({
    hasMore: true,
    "data|4": [
      {
        "id|+1": Random.integer(),
        title: Random.csentence(5, 8),
        houseType: "17/19层| 4室1厅 - 273.97 ㎡",
        price: "<h3>130000</h3>",
        rentType: Random.cword(2),
        img: Random.image(
          "200x100",
          Random.color(),
          "#FFF",
          "png",
          Random.cword(2)
        ),
      },
    ],
  });
  res.send({
    status: 200,
    result: data,
  });
});
/* 详情页 */
router.get("/details", (req, res) => {
  res.send({
    status: 200,
    result: detailsData,
  });
});

/* 登录 */
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // console.log(req.body);
  if (username && password) {
    res.send({
      status: 200,
      token: "asefdgfsfvdb.fsafew.sdfsf",
      nick: username,
    });
  } else {
    res.send({
      status: 400,
      msg: "用户密码错误",
    });
  }
});

/* 评论数据 */

router.get("/comments", (req, res) => {
  const id = url.parse(req.url,true).query.id;
  // console.log(req.url);
  console.log(id);
  res.send({
    status: 200,
    result: commentsData,
  });
});

module.exports = router;
