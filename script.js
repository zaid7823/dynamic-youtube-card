function createCard(videoTitle, imgUrl, channel, duration, monthsOld, views) {
  document.getElementById("thumbnail").setAttribute("src", imgUrl);
  document.getElementsByClassName("duration").innerHTML = duration;

  document.getElementById("title").innerHTML = videoTitle;
  let data =
    channel +
    " • " +
    convertViews(views) +
    " views • " +
    monthsOld +
    " months ago";
  // console.log(data);

  document.querySelector(".metadata").innerHTML = data;
  document.querySelector(".duration").innerHTML = duration;
}
// =======================================
function convertViews(views) {
  let viewCount = views;
  if (views >= 1000 && views <= 999999) {
    // 765,124 / 1000 = 765.124 * 10 = 7651.24 => round = 7651 / 10 = 765.1
    viewCount = (Math.round((views / 1000) * 10) / 10).toString() + "K";
  } else if (views >= 1000000 && views <= 999999999) {
    viewCount = (Math.round((views / 1000000) * 10) / 10).toString() + "M";
  } else if (views >= 1000000000) {
    viewCount = (Math.round((views / 1000000000) * 10) / 10).toString() + "B";
  }
  return viewCount;
}
// =======================================
createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "./thumbnail.webp",
  "CodeWithHarry",
  "31:22",
  "8",
  1800000
);
