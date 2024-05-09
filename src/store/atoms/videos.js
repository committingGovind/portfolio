import { atom } from "recoil";

export const videoatom = atom({
  key: "videoatom",
  default: [
    {
      key: 1,
      url: "https://videos.pexels.com/video-files/853969/853969-hd_1920_1080_25fps.mp4",
    },
    {
      key: 2,
      url: "https://videos.pexels.com/video-files/2692693/2692693-hd_1920_1080_25fps.mp4",
    },
    {
      key: 3,
      url: "https://videos.pexels.com/video-files/2871918/2871918-hd_1920_1080_30fps.mp4",
    },
    {
      key: 4,
      url: "https://videos.pexels.com/video-files/17823998/17823998-uhd_3840_2026_60fps.mp4",
    },
    {
      key: 5,
      url: "https://videos.pexels.com/video-files/11892851/11892851-hd_1280_720_24fps.mp4",
    },
  ],
});
