var toggle = document.querySelector('input[name="toggle"]');
var socialImg = document.querySelector("#social_img");
var themeStyle = document.getElementById("theme-style");

const darkThemeFile = "blue.css";
const lightThemeFile = "default.css";
const darkImgUrl =
  "https://github-readme-stats.vercel.app/api?username=kk-007&&show_icons=true&title_color=eeeeee&icon_color=fff&text_color=eeeeee&bg_color=164d56";
const lightImgUrl =
  "https://github-readme-stats.vercel.app/api?username=kk-007&&show_icons=true&title_color=000000&icon_color=000000&text_color=000000&bg_color=eaeaea";

const changeTheme = () => {
  themeStyle.href = toggle.checked ? darkThemeFile : lightThemeFile;
  socialImg.src = toggle.checked ? darkImgUrl : lightImgUrl;
};
themeStyle.href = darkThemeFile;
socialImg.src = darkImgUrl;
