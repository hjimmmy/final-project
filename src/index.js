import React from "react";
import ReactDOM from "react-dom";
import Player from "./app.js";
import "./styles.css";
const playlist = [
  {
    url:
      "https://res.cloudinary.com/dktrhzslf/video/upload/v1621786764/%E5%91%A8%E6%9D%B0%E5%80%AB-%E5%8F%AF%E6%84%9B%E5%A5%B3%E4%BA%BA_aycb15.mp3",
    cover: "https://i.kfs.io/album/tw/18651,1v3/fit/500x500.jpg",
    title: "可愛女人",
    artist: ["Jay Chou"]
  },
  {
    url:
      "https://res.cloudinary.com/dktrhzslf/video/upload/v1621786789/%E5%91%A8%E6%9D%B0%E5%80%AB-%E5%AE%89%E9%9D%9C_aumdd7.mp3",
    cover: "https://i.kfs.io/album/tw/18854,2v1/fit/500x500.jpg",
    title: "安靜",
    artist: ["Jay Chou"]
  },
  {
    url:
      "https://res.cloudinary.com/dktrhzslf/video/upload/v1621786804/%E5%91%A8%E6%9D%B0%E5%80%AB-%E4%B8%80%E8%B7%AF%E5%90%91%E5%8C%97_bar1dx.mp3",
    cover:
      "https://res.cloudinary.com/dktrhzslf/image/upload/v1621874386/500x500_omtizg.jpg",
    title: "一路向北",
    artist: ["Jay Chou"]
  },
  {
    url:
      "https://res.cloudinary.com/dktrhzslf/video/upload/v1621786767/%E5%91%A8%E6%9D%B0%E5%80%AB-%E5%A5%B9%E7%9A%84%E7%9D%AB%E6%AF%9B_zwrbkv.mp3",
    cover: "https://i.kfs.io/album/global/23212,1v1/fit/500x500.jpg",
    title: "她的睫毛",
    artist: ["Jay Chou"]
  },
  {
    url:
      "https://res.cloudinary.com/dktrhzslf/video/upload/v1621786754/%E5%91%A8%E6%9D%B0%E5%80%AB-%E4%B8%83%E9%87%8C%E9%A6%99_aekcep.mp3",
    cover: "https://i.kfs.io/album/tw/52025,1v3/fit/500x500.jpg",
    title: "七里香",
    artist: ["Jay Chou"]
  },
  {
    url:
      "https://res.cloudinary.com/dktrhzslf/video/upload/v1621786805/%E5%91%A8%E6%9D%B0%E5%80%AB-%E5%A4%9C%E6%9B%B2_zdu2od.mp3",
    cover:
      "https://res.cloudinary.com/dktrhzslf/image/upload/v1621874386/500x500_omtizg.jpg",
    title: "夜曲",
    artist: ["Jay Chou"]
  },
  {
    url:
      "https://res.cloudinary.com/dktrhzslf/video/upload/v1621786784/%E5%91%A8%E6%9D%B0%E5%80%AB-%E6%93%B1%E6%B7%BA_lm1npx.mp3",
    cover: "https://i.kfs.io/album/tw/52025,1v3/fit/500x500.jpg",
    title: "擱淺",
    artist: ["Jay Chou"]
  },
  {
    url:
      "https://res.cloudinary.com/dktrhzslf/video/upload/v1621786780/%E5%91%A8%E6%9D%B0%E5%80%AB-%E9%96%8B%E4%B8%8D%E4%BA%86%E5%8F%A3_cbsyhw.mp3",
    cover: "https://i.kfs.io/album/tw/18854,2v1/fit/500x500.jpg",
    title: "開不了口",
    artist: ["Jay Chou"]
  },

  {
    url:
      "https://res.cloudinary.com/dktrhzslf/video/upload/v1621786727/%E5%91%A8%E6%9D%B0%E5%80%AB-%E5%9C%92%E9%81%8A%E6%9C%83_sjp3na.mp3",
    cover: "https://i.kfs.io/album/tw/52025,1v3/fit/500x500.jpg",
    title: "園遊會",
    artist: ["Jay Chou"]
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<Player playlist={playlist} />, rootElement);
