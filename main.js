import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// 等待網頁內容和資源完全載入
window.addEventListener("load", function () {
  // 模擬延遲，例如動畫需要 3 秒，這裡使用 setTimeout
  setTimeout(function () {
    // 移除 loading 畫面
    document.getElementById("loading").style.display = "none";
  }, 7000); // 延遲 7 秒
});

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// 設置畫布大小
canvas.width = 250;
canvas.height = 160;

ctx.beginPath();
ctx.moveTo(0, 0); // 設置起點
ctx.lineTo(250, 0); // 畫一條線到(150, 300)
ctx.lineTo(250, 160); // 畫一條線到(50, 300)
ctx.lineTo(100, 160); // 畫一條線到(50, 300)
ctx.lineTo(100, 110); // 畫一條線到(50, 300)
ctx.lineTo(0, 110); // 畫一條線到(50, 300)
ctx.closePath(); // 關閉路徑
ctx.stroke(); // 繪製線條

// 設置填充顏色
ctx.fillStyle = "#fad200"; // 橙色
ctx.fill(); // 填充圖形

// 設置邊框樣式並繪製邊框
ctx.strokeStyle = "#cc9f00"; // 黑色邊框
ctx.lineWidth = 3; // 邊框寬度
ctx.stroke(); // 繪製邊框

//
const div = document.querySelector(".draggable-background");
const securityLevel5icon1 = document.querySelector(".securityLevel5icon1");
const securityLevel5icon2 = document.querySelector(".securityLevel5icon2");
const securityLevel5icon3 = document.querySelector(".securityLevel5icon3");
const securityLevel5icon4 = document.querySelector(".securityLevel5icon4");
const specialWarningIcon = document.querySelector(".specialWarningIcon");
const policeStationiconIcon1 = document.querySelector(
  ".policeStationiconIcon1"
);
const policeStationiconIcon2 = document.querySelector(
  ".policeStationiconIcon2"
);
const policeStationiconIcon3 = document.querySelector(
  ".policeStationiconIcon3"
);
const hospitalIcon1 = document.querySelector(".hospitalIcon1");
const hospitalIcon2 = document.querySelector(".hospitalIcon2");
const hospitalIcon3 = document.querySelector(".hospitalIcon3");
const hotelIcon = document.querySelector(".hotelIcon");
const centerIcon = document.querySelector(".centerIcon");
const bgBigCircle = document.querySelector(".bg-bigCircle");
const bgSmallCircle = document.querySelector(".bg-smallCircle");
const originalCircle = document.querySelector(".originalCircle");

let isDragging = false;
let startX,
  startY,
  backgroundPosX = -430,
  backgroundPosY = 0;

const divWidth = 870;
const divHeight = 875;
const imageWidth = 1290;
const imageHeight = 875;

const securityLevel5icon1X = 230; // Icon 的相對背景圖 X 座標
const securityLevel5icon1Y = 150; // Icon 的相對背景圖 Y 座標
const securityLevel5icon2X = 500; // Icon 的相對背景圖 X 座標
const securityLevel5icon2Y = 240; // Icon 的相對背景圖 Y 座標
const securityLevel5icon3X = 710; // Icon 的相對背景圖 X 座標
const securityLevel5icon3Y = 390; // 原始為 690 Icon 的相對背景圖 Y 座標
const securityLevel5icon4X = 510; //  Icon 的相對背景圖 X 座標
const securityLevel5icon4Y = 430; // 原始為 730 Icon 的相對背景圖 Y 座標
const specialWarningX = 660; // Icon 的相對背景圖 X 座標
const specialWarningY = 510; // Icon 的相對背景圖 Y 座標
const policeStationiconX = 230; // Icon 的相對背景圖 X 座標
const policeStationiconY = 380; // Icon 的相對背景圖 Y 座標
const policeStationicon2X = 340; // Icon 的相對背景圖 X 座標
const policeStationicon2Y = 400; // Icon 的相對背景圖 Y 座標
const policeStationicon3X = 260; // Icon 的相對背景圖 X 座標
const policeStationicon3Y = 530; // Icon 的相對背景圖 Y 座標
const hospitalIcon1X = 90; // Icon 的相對背景圖 X 座標
const hospitalIcon1Y = 560; // Icon 的相對背景圖 Y 座標
const hospitalIcon2X = 140; // Icon 的相對背景圖 X 座標
const hospitalIcon2Y = 420; // Icon 的相對背景圖 Y 座標
const hospitalIcon3X = 290; // Icon 的相對背景圖 X 座標
const hospitalIcon3Y = 410; // Icon 的相對背景圖 Y 座標
const hotelIconX = 280; // Icon 的相對背景圖 X 座標
const hotelIconY = 490; // Icon 的相對背景圖 Y 座標
const centerIconX = 560; // Icon 的相對背景圖 X 座標
const centerIconY = 510; // Icon 的相對背景圖 Y 座標
const bgBigCircleX = 275; // Icon 的相對背景圖 X 座標
const bgBigCircleY = 235; // Icon 的相對背景圖 Y 座標
const bgSmallCircleX = 435; // Icon 的相對背景圖 X 座標
const bgSmallCircleY = 385; // Icon 的相對背景圖 Y 座標
const originalCircleX = 510; // Icon 的相對背景圖 X 座標
const originalCircleY = 455; // Icon 的相對背景圖 Y 座標

const canvasX = 550; // Icon 的相對背景圖 X 座標
const canvasY = 480; // Icon 的相對背景圖 Y 座標
const iconWidth = 50;
const iconHeight = 50;
const bgBigCircleWidth = 600;
const bgBigCircleHeight = 600;
const bgSmallCircleWidth = 300;
const bgSmallCircleHeight = 300;
const originalCircleWidth = 150;
const originalCircleHeight = 150;
const hexagonWidth = 280;
const hexagonHeight = 180;

// 計算並設置 icon 位置的函數
function updateIconPosition() {
  const visiblesecurityLevel5icon1X = securityLevel5icon1X + backgroundPosX;
  const visiblesecurityLevel5icon1Y = securityLevel5icon1Y + backgroundPosY;
  const visiblesecurityLevel5icon2X = securityLevel5icon2X + backgroundPosX;
  const visiblesecurityLevel5icon2Y = securityLevel5icon2Y + backgroundPosY;
  const visiblesecurityLevel5icon3X = securityLevel5icon3X + backgroundPosX;
  const visiblesecurityLevel5icon3Y = securityLevel5icon3Y + backgroundPosY;
  const visiblesecurityLevel5icon4X = securityLevel5icon4X + backgroundPosX;
  const visiblesecurityLevel5icon4Y = securityLevel5icon4Y + backgroundPosY;
  const visiblespecialWarningX = specialWarningX + backgroundPosX;
  const visiblespecialWarningY = specialWarningY + backgroundPosY;
  const visiblepoliceStationiconX = policeStationiconX + backgroundPosX;
  const visiblepoliceStationiconY = policeStationiconY + backgroundPosY;
  const visiblepoliceStationicon2X = policeStationicon2X + backgroundPosX;
  const visiblepoliceStationicon2Y = policeStationicon2Y + backgroundPosY;
  const visiblepoliceStationicon3X = policeStationicon3X + backgroundPosX;
  const visiblepoliceStationicon3Y = policeStationicon3Y + backgroundPosY;
  const visiblehospitalIcon1X = hospitalIcon1X + backgroundPosX;
  const visiblehospitalIcon1Y = hospitalIcon1Y + backgroundPosY;
  const visiblehospitalIcon2X = hospitalIcon2X + backgroundPosX;
  const visiblehospitalIcon2Y = hospitalIcon2Y + backgroundPosY;
  const visiblehospitalIcon3X = hospitalIcon3X + backgroundPosX;
  const visiblehospitalIcon3Y = hospitalIcon3Y + backgroundPosY;
  const visiblehotelIconX = hotelIconX + backgroundPosX;
  const visiblehotelIconY = hotelIconY + backgroundPosY;
  const visiblecenterIconX = centerIconX + backgroundPosX;
  const visiblecenterIconY = centerIconY + backgroundPosY;
  const visiblebgBigCircleX = bgBigCircleX + backgroundPosX;
  const visiblebgBigCircleY = bgBigCircleY + backgroundPosY;
  const visiblebgSmallCircleX = bgSmallCircleX + backgroundPosX;
  const visiblebgSmallCircleY = bgSmallCircleY + backgroundPosY;
  const visibleoriginalCircleX = originalCircleX + backgroundPosX;
  const visibleoriginalCircleY = originalCircleY + backgroundPosY;

  const visiblecanvasX = canvasX + backgroundPosX;
  const visiblecanvasY = canvasY + backgroundPosY;

  if (
    visiblesecurityLevel5icon1X >= 0 &&
    visiblesecurityLevel5icon1X + iconWidth <= divWidth &&
    visiblesecurityLevel5icon1Y >= 0 &&
    visiblesecurityLevel5icon1Y + iconHeight <= divHeight
  ) {
    securityLevel5icon1.style.left = `${visiblesecurityLevel5icon1X}px`;
    securityLevel5icon1.style.top = `${visiblesecurityLevel5icon1Y}px`;
    securityLevel5icon1.style.display = "block";
  } else {
    securityLevel5icon1.style.display = "none";
  }

  if (
    visiblesecurityLevel5icon2X >= 0 &&
    visiblesecurityLevel5icon2X + iconWidth <= divWidth &&
    visiblesecurityLevel5icon2Y >= 0 &&
    visiblesecurityLevel5icon2Y + iconHeight <= divHeight
  ) {
    securityLevel5icon2.style.left = `${visiblesecurityLevel5icon2X}px`;
    securityLevel5icon2.style.top = `${visiblesecurityLevel5icon2Y}px`;
    securityLevel5icon2.style.display = "block";
  } else {
    securityLevel5icon2.style.display = "none";
  }

  if (
    visiblesecurityLevel5icon3X >= 0 &&
    visiblesecurityLevel5icon3X + iconWidth <= divWidth &&
    visiblesecurityLevel5icon3Y >= 0 &&
    visiblesecurityLevel5icon3Y + iconHeight <= divHeight
  ) {
    securityLevel5icon3.style.left = `${visiblesecurityLevel5icon3X}px`;
    securityLevel5icon3.style.top = `${visiblesecurityLevel5icon3Y}px`;
    securityLevel5icon3.style.display = "block";
  } else {
    securityLevel5icon3.style.display = "none";
  }

  if (
    visiblesecurityLevel5icon4X >= 0 &&
    visiblesecurityLevel5icon4X + iconWidth <= divWidth &&
    visiblesecurityLevel5icon4Y >= 0 &&
    visiblesecurityLevel5icon4Y + iconHeight <= divHeight
  ) {
    securityLevel5icon4.style.left = `${visiblesecurityLevel5icon4X}px`;
    securityLevel5icon4.style.top = `${visiblesecurityLevel5icon4Y}px`;
    securityLevel5icon4.style.display = "block";
  } else {
    securityLevel5icon4.style.display = "none";
  }

  if (
    visiblespecialWarningX >= 0 &&
    visiblespecialWarningX + iconWidth <= divWidth &&
    visiblespecialWarningY >= 0 &&
    visiblespecialWarningY + iconHeight <= divHeight
  ) {
    specialWarningIcon.style.left = `${visiblespecialWarningX}px`;
    specialWarningIcon.style.top = `${visiblespecialWarningY}px`;
    specialWarningIcon.style.display = "block";
  } else {
    specialWarningIcon.style.display = "none";
  }

  if (
    visiblepoliceStationiconX >= 0 &&
    visiblepoliceStationiconX + iconWidth <= divWidth &&
    visiblepoliceStationiconY >= 0 &&
    visiblepoliceStationiconY + iconHeight <= divHeight
  ) {
    policeStationiconIcon1.style.left = `${visiblepoliceStationiconX}px`;
    policeStationiconIcon1.style.top = `${visiblepoliceStationiconY}px`;
    policeStationiconIcon1.style.display = "block";
  } else {
    policeStationiconIcon1.style.display = "none";
  }

  if (
    visiblepoliceStationicon2X >= 0 &&
    visiblepoliceStationicon2X + iconWidth <= divWidth &&
    visiblepoliceStationicon2Y >= 0 &&
    visiblepoliceStationicon2Y + iconHeight <= divHeight
  ) {
    policeStationiconIcon2.style.left = `${visiblepoliceStationicon2X}px`;
    policeStationiconIcon2.style.top = `${visiblepoliceStationicon2Y}px`;
    policeStationiconIcon2.style.display = "block";
  } else {
    policeStationiconIcon2.style.display = "none";
  }

  if (
    visiblepoliceStationicon3X >= 0 &&
    visiblepoliceStationicon3X + iconWidth <= divWidth &&
    visiblepoliceStationicon3Y >= 0 &&
    visiblepoliceStationicon3Y + iconHeight <= divHeight
  ) {
    policeStationiconIcon3.style.left = `${visiblepoliceStationicon3X}px`;
    policeStationiconIcon3.style.top = `${visiblepoliceStationicon3Y}px`;
    policeStationiconIcon3.style.display = "block";
  } else {
    policeStationiconIcon3.style.display = "none";
  }

  if (
    visiblehospitalIcon1X >= 0 &&
    visiblehospitalIcon1X + iconWidth <= divWidth &&
    visiblehospitalIcon1Y >= 0 &&
    visiblehospitalIcon1Y + iconHeight <= divHeight
  ) {
    hospitalIcon1.style.left = `${visiblehospitalIcon1X}px`;
    hospitalIcon1.style.top = `${visiblehospitalIcon1Y}px`;
    hospitalIcon1.style.display = "block";
  } else {
    hospitalIcon1.style.display = "none";
  }

  if (
    visiblehospitalIcon2X >= 0 &&
    visiblehospitalIcon2X + iconWidth <= divWidth &&
    visiblehospitalIcon2Y >= 0 &&
    visiblehospitalIcon2Y + iconHeight <= divHeight
  ) {
    hospitalIcon2.style.left = `${visiblehospitalIcon2X}px`;
    hospitalIcon2.style.top = `${visiblehospitalIcon2Y}px`;
    hospitalIcon2.style.display = "block";
  } else {
    hospitalIcon2.style.display = "none";
  }

  if (
    visiblehospitalIcon3X >= 0 &&
    visiblehospitalIcon3X + iconWidth <= divWidth &&
    visiblehospitalIcon3Y >= 0 &&
    visiblehospitalIcon3Y + iconHeight <= divHeight
  ) {
    hospitalIcon3.style.left = `${visiblehospitalIcon3X}px`;
    hospitalIcon3.style.top = `${visiblehospitalIcon3Y}px`;
    hospitalIcon3.style.display = "block";
  } else {
    hospitalIcon3.style.display = "none";
  }

  if (
    visiblehotelIconX >= 0 &&
    visiblehotelIconX + iconWidth <= divWidth &&
    visiblehotelIconY >= 0 &&
    visiblehotelIconY + iconHeight <= divHeight
  ) {
    hotelIcon.style.left = `${visiblehotelIconX}px`;
    hotelIcon.style.top = `${visiblehotelIconY}px`;
    hotelIcon.style.display = "block";
  } else {
    hotelIcon.style.display = "none";
  }

  if (
    visiblecenterIconX >= 0 &&
    visiblecenterIconX + iconWidth <= divWidth &&
    visiblecenterIconY >= 0 &&
    visiblecenterIconY + iconHeight <= divHeight
  ) {
    centerIcon.style.left = `${visiblecenterIconX}px`;
    centerIcon.style.top = `${visiblecenterIconY}px`;
    centerIcon.style.display = "block";
  } else {
    centerIcon.style.display = "none";
  }

  if (
    visiblebgBigCircleX >= 0 &&
    visiblebgBigCircleX + bgBigCircleWidth <= divWidth &&
    visiblebgBigCircleY >= 0 &&
    visiblebgBigCircleY + bgBigCircleHeight <= divHeight
  ) {
    bgBigCircle.style.left = `${visiblebgBigCircleX}px`;
    bgBigCircle.style.top = `${visiblebgBigCircleY}px`;
    bgBigCircle.style.display = "block";
  } else {
    bgBigCircle.style.display = "none";
  }

  if (
    visiblebgSmallCircleX >= 0 &&
    visiblebgSmallCircleX + bgSmallCircleWidth <= divWidth &&
    visiblebgSmallCircleY >= 0 &&
    visiblebgSmallCircleY + bgSmallCircleHeight <= divHeight
  ) {
    bgSmallCircle.style.left = `${visiblebgSmallCircleX}px`;
    bgSmallCircle.style.top = `${visiblebgSmallCircleY}px`;
    bgSmallCircle.style.display = "block";
  } else {
    bgSmallCircle.style.display = "none";
  }

  if (
    visiblecanvasX >= 0 &&
    visiblecanvasX + hexagonWidth <= divWidth &&
    visiblecanvasY >= 0 &&
    visiblecanvasY + hexagonHeight <= divHeight
  ) {
    canvas.style.left = `${visiblecanvasX}px`;
    canvas.style.top = `${visiblecanvasY}px`;
    canvas.style.display = "block";
  } else {
    canvas.style.display = "none";
  }

  if (
    visibleoriginalCircleX >= 0 &&
    visibleoriginalCircleX + originalCircleWidth <= divWidth &&
    visibleoriginalCircleY >= 0 &&
    visibleoriginalCircleY + originalCircleHeight <= divHeight
  ) {
    originalCircle.style.left = `${visibleoriginalCircleX}px`;
    originalCircle.style.top = `${visibleoriginalCircleY}px`;
    originalCircle.style.display = "block";
  } else {
    originalCircle.style.display = "none";
  }
}

// 初始化時直接設置 icon 位置
updateIconPosition();

div.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  div.style.cursor = "grabbing";
});

div.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    backgroundPosX += deltaX;
    backgroundPosY += deltaY;

    const minPosX = divWidth - imageWidth;
    const minPosY = divHeight - imageHeight;

    if (backgroundPosX > 0) backgroundPosX = 0;
    if (backgroundPosY > 0) backgroundPosY = 0;
    if (backgroundPosX < minPosX) backgroundPosX = minPosX;
    if (backgroundPosY < minPosY) backgroundPosY = minPosY;

    // 更新背景圖片位置
    div.style.backgroundPosition = `${backgroundPosX}px ${backgroundPosY}px`;

    startX = e.clientX;
    startY = e.clientY;

    // 拖動後更新 icon 位置
    updateIconPosition();
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  div.style.cursor = "grab";
});

// 兼容觸控設備
div.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) {
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    div.style.cursor = "grabbing";
  }
});

div.addEventListener("touchmove", (e) => {
  if (isDragging && e.touches.length === 1) {
    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;

    backgroundPosX += deltaX;
    backgroundPosY += deltaY;

    const minPosX = divWidth - imageWidth;
    const minPosY = divHeight - imageHeight;

    if (backgroundPosX > 0) backgroundPosX = 0;
    if (backgroundPosY > 0) backgroundPosY = 0;
    if (backgroundPosX < minPosX) backgroundPosX = minPosX;
    if (backgroundPosY < minPosY) backgroundPosY = minPosY;

    div.style.backgroundPosition = `${backgroundPosX}px ${backgroundPosY}px`;

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;

    updateIconPosition();
  }
});

document.addEventListener("touchend", () => {
  if (isDragging) {
    isDragging = false;
    div.style.cursor = "grab";
  }
});

// 點擊標籤顯示相對應的icon
const policeStationLabelWrap = document.querySelector(
  ".policeStationLabelWrap"
);
const hospitalLabelWrap = document.querySelector(".hospitalLabelWrap");
const policeStationLabelImg = document.querySelector("#policeStationLabelImg");
const hospitalLabelImg = document.querySelector("#hospitalLabelImg");

const allImages = document.querySelectorAll(".clickDisplayIcon"); // 取得所有 img 元素

// 記錄圖片是否已經被點擊
let policeStationLabelImgIsClicked = false;
let hospitalLabelImgIsClicked = false;

policeStationLabelWrap.addEventListener("click", function (event) {
  if (!policeStationLabelImgIsClicked) {
    // 如果還沒有被點擊，切換為新的圖片
    policeStationLabelImg.src = `${
      import.meta.env.BASE_URL
    }assets/images/policeStationLabelClick.png`;
    policeStationLabelImgIsClicked = true; // 更新狀態為已點擊
  }

  // 隱藏其他圖片，顯示 policeStation 的圖片
  allImages.forEach((img) => {
    if (img.alt.includes("policeStation")) {
      img.style.display = "block"; // 顯示 policeStation 的圖片
    } else {
      img.style.display = "none"; // 隱藏其他圖片
    }
  });

  // 同時將 hospitalLabelWrap 的圖片恢復到原本的狀態
  if (hospitalLabelImgIsClicked) {
    hospitalLabelImg.src = `${
      import.meta.env.BASE_URL
    }assets/images/hospitalLabel.png`;
    hospitalLabelImgIsClicked = false;
  }

  // 防止點擊 .policeStationLabelWrap 時觸發全局點擊事件
  event.stopPropagation();
});

hospitalLabelWrap.addEventListener("click", function (event) {
  if (!hospitalLabelImgIsClicked) {
    // 如果還沒有被點擊，切換為新的圖片
    hospitalLabelImg.src = "../assets/images/hospitalLabelClick.png";
    hospitalLabelImgIsClicked = true; // 更新狀態為已點擊
  }

  allImages.forEach((img) => {
    if (img.alt.includes("hospital")) {
      img.style.display = "block"; // 顯示 hospital 的圖片
    } else {
      img.style.display = "none"; // 隱藏其他圖片
    }
  });

  // 同時將 policeStationLabelWrap 的圖片恢復到原本的狀態
  if (policeStationLabelImgIsClicked) {
    policeStationLabelImg.src = "../assets/images/policeStationLabel.png";
    policeStationLabelImgIsClicked = false;
  }

  // 防止點擊 .policeStationLabelWrap 時觸發全局點擊事件
  event.stopPropagation();
});

// 全局監聽點擊事件（點擊任何地方恢復圖片）
document.addEventListener("click", function () {
  if (policeStationLabelImgIsClicked) {
    // 如果已經點擊，恢復原本的圖片
    policeStationLabelImg.src = "../assets/images/policeStationLabel.png";
    policeStationLabelImgIsClicked = false; // 更新狀態為未點擊
  }

  if (hospitalLabelImgIsClicked) {
    // 如果已經點擊，恢復原本的圖片
    hospitalLabelImg.src = "../assets/images/hospitalLabel.png";
    hospitalLabelImgIsClicked = false; // 更新狀態為未點擊
  }

  // 恢復所有圖片的顯示
  allImages.forEach((img) => {
    img.style.display = "block";
  });
});

// 左右移動標籤
const scrollableContainer = document.querySelector(".scrollable-container");

let isDown = false;
let scrollbarStartX;
let scrollLeft;

scrollableContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  scrollableContainer.classList.add("active");
  scrollbarStartX = e.pageX - scrollableContainer.offsetLeft;
  scrollLeft = scrollableContainer.scrollLeft;
});

scrollableContainer.addEventListener("mouseleave", () => {
  isDown = false;
  scrollableContainer.classList.remove("active");
});

scrollableContainer.addEventListener("mouseup", () => {
  isDown = false;
  scrollableContainer.classList.remove("active");
});

scrollableContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();

  const x = e.pageX - scrollableContainer.offsetLeft;
  const walk = (x - scrollbarStartX) * 2; // 移動的距離
  scrollableContainer.scrollLeft = scrollLeft - walk;
});

//
const myDiv = document.getElementById("myDiv");
const closeBtn = document.getElementById("closeBtn");
const closeBar = document.getElementById("closeBar");
const infoAndFloatWrapLeft = document.querySelector(".infoAndFloatWrapLeft");
const infoAndFloatWrapRight = document.querySelector(".infoAndFloatWrapRight");
let isExpanded = false;

myDiv.addEventListener("click", () => {
  if (!isExpanded) {
    // 展開 div
    myDiv.classList.add("expanded");
    myDiv.classList.remove("collapsed");

    isExpanded = true;
    closeBar.classList.remove("d-none");
  }
  infoAndFloatWrapLeft.classList.add("d-none");
  infoAndFloatWrapRight.classList.add("d-none");
});

closeBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // 防止點擊關閉按鈕時觸發 div 的點擊事件
  if (isExpanded) {
    // 收起 div
    myDiv.classList.add("collapsed");
    myDiv.classList.remove("expanded");
    isExpanded = false;
    closeBar.classList.add("d-none");
  }
  infoAndFloatWrapLeft.classList.remove("d-none");
  infoAndFloatWrapRight.classList.remove("d-none");
  infoAndFloatWrapLeft.classList.add("infoAndFloatWrapLeftChangePosition");
  infoAndFloatWrapRight.classList.add("infoAndFloatWrapRightChangePosition");
});

//
// const iconArrAll = document.querySelectorAll(".clickChangeIcon");

//所有圖檔抓進來
// console.log(iconArrAll);

// for (let i = 0; i < iconArrAll.length; i++) {
//   console.log(iconArrAll[i].attributes[0].nodeValue);

//   iconArrAll[i].addEventListener("click", function () {
// if (
//   iconArrAll[i].attributes[0].nodeValue ===
//   "../assets/images/pin/type=securityLevel 5, selected=off.svg"
// ) {
//   iconArrAll[i].attributes[0].nodeValue =
//     "../assets/images/pin/type=securityLevel 5, selected=on.svg";
// } else if (
//   iconArrAll[i].attributes[0].nodeValue ===
//   "../assets/images/pin/type=specialWarning, selected=off.svg"
// ) {
//   iconArrAll[i].attributes[0].nodeValue =
//     "../assets/images/pin/type=specialWarning, selected=on.svg";
// } else if (
//   iconArrAll[i].attributes[0].nodeValue ===
//   "../assets/images/pin/type=policeStation, selected=off.svg"
// ) {
//   iconArrAll[i].attributes[0].nodeValue =
//     "../assets/images/pin/type=policeStation, selected=on.svg";
// } else if (
//   iconArrAll[i].attributes[0].nodeValue ===
//   "../assets/images/pin/type=hospital, selected=off.svg"
// ) {
//   iconArrAll[i].attributes[0].nodeValue =
//     "../assets/images/pin/type=hospital, selected=on.svg";
// }

//     if (
//       iconArrAll[i].attributes[0].nodeValue ===
//       "../assets/images/pin/type=securityLevel 5, selected=off.svg"
//     ) {
//       iconArrAll[i].attributes[0].nodeValue =
//         "../assets/images/pin/type=securityLevel 5, selected=on.svg";
//     } else {
//       iconArrAll[i].attributes[0].nodeValue =
//         "../assets/images/pin/type=securityLevel 5, selected=off.svg";
//     }
//   });
// }

// 圖檔路徑
// console.log(iconArrAll[0].attributes[0].nodeValue);

// iconArrAll.forEach((element) => {
//   element.addEventListener("click", function () {
//     console.log(element.attributes[0].nodeValue);
//   });
// });

// iconArrAll.addEventListener("click", function () {
//   console.log();
// });

// 點擊圖標時，跳出相關資訊
// const royalThaiPoliceHeadquartersIcon = document.getElementById(
//   "royalThaiPoliceHeadquartersIcon"
// );

// const labelDetailWrapAll = document.querySelectorAll(".labelDetailWrap");

// const royalThaiPoliceHeadquarters = document.getElementById(
//   "Royal Thai Police Headquarters"
// );

// royalThaiPoliceHeadquartersIcon.addEventListener("click", function () {
//   royalThaiPoliceHeadquarters.classList.remove("d-none");
// });

// document.addEventListener("click", () => {
//   royalThaiPoliceHeadquarters.classList.add("d-none");
// });

// console.log(labelDetailWrapAll);
// console.log(royalThaiPoliceHeadquarters);

// 點擊圖片時，改變圖片的 src
const clickChangeIcons = document.querySelectorAll(".clickChangeIcon");
let currentClickedImg = null; // 保存當前被點擊的圖片
let originalSrc = ""; // 保存原始圖片的 src

clickChangeIcons.forEach((img) => {
  img.addEventListener("click", (e) => {
    // 如果當前已經有被點擊的圖片，恢復該圖片的原始 src
    if (currentClickedImg && currentClickedImg !== img) {
      currentClickedImg.src = originalSrc;
    }

    // 保存當前點擊的圖片及其原始 src
    currentClickedImg = img;
    originalSrc = img.src;

    // 改變圖片的 src 為新圖片
    img.src = "../assets/images/pin/type=" + img.alt + ", selected=on.svg";
    console.log(img.src);

    // 停止事件冒泡，防止點擊事件傳遞到其他元素
    e.stopPropagation();
  });
});

// 當點擊其他地方時，恢復當前被選中的圖片為原始狀態
document.addEventListener("click", () => {
  if (currentClickedImg) {
    currentClickedImg.src = originalSrc;

    currentClickedImg = null; // 重置當前點擊的圖片
  }
});

//

// const centerAimImg = document.querySelector(".centerAimImg");
// const floatImg = document.querySelector(".floatImg");
// let floatImgClick = false;
// let centerAimClick = false;

//  console.log(floatImg);

// floatImg.addEventListener("click", function () {
//   if (!floatImgClick) {
//     floatImg.src = "../assets/images/floatClick.png";
//     floatImgClick = true;
//   }
// });

// document.addEventListener("click", function () {
//   if (floatImgClick) {
//      如果已經點擊，恢復原本的圖片
//     floatImg.src = "../assets/images/float.png";
//     floatImgClick = false;  更新狀態為未點擊
//   }

//   if (hospitalLabelImgIsClicked) {
//      如果已經點擊，恢復原本的圖片
//     hospitalLabelImg.src = "../assets/images/hospitalLabel.png";
//     hospitalLabelImgIsClicked = false;  更新狀態為未點擊
//   }
// });

//
const centerAimImg = document.querySelector(".centerAimImg");
const floatImg = document.querySelector(".floatImg");
let floatImgClick = false;
let centerAimClick = false;

// 保存圖片的原始URL
const originalCenterAimImgUrl = centerAimImg.src;
const newCenterAimImgUrl = "../assets/images/centerAimClick.png"; // 當點擊 centerAimImg 時要更改的圖片 URL
const originalfloatImgUrl = floatImg.src;
const newfloatImgUrl = "../assets/images/floatClick.png"; // 當點擊 floatImgImg 時要更改的圖片 URL

// 點擊 centerAimImg 時改變圖片 URL
centerAimImg.addEventListener("click", function () {
  centerAimClick = true;
  floatImgClick = false; // 重置 floatImg 的點擊狀態
  centerAimImg.src = newCenterAimImgUrl; // 更改圖片
  floatImg.src = originalfloatImgUrl; // 更改圖片
  bgSmallCircle.classList.add("d-none");
  bgBigCircle.classList.add("d-none");
  originalCircle.classList.remove("d-none");
});

// 點擊 floatImg 時恢復 centerAimImg 的圖片
floatImg.addEventListener("click", function () {
  floatImgClick = true;
  centerAimClick = false; // 重置 centerAimImg 的點擊狀態
  centerAimImg.src = originalCenterAimImgUrl; // 恢復原來的圖片
  floatImg.src = newfloatImgUrl; // 更改圖片

  bgSmallCircle.classList.remove("d-none");
  bgBigCircle.classList.remove("d-none");
  originalCircle.classList.add("d-none");
});

// 點擊其他地方時，也恢復 centerAimImg 的圖片
document.addEventListener("click", function (event) {
  // 確保點擊的不是 centerAimImg 或 floatImg
  if (
    !centerAimImg.contains(event.target) &&
    !floatImg.contains(event.target)
  ) {
    floatImgClick = false;
    centerAimClick = false;
    centerAimImg.src = originalCenterAimImgUrl; // 恢復原來的圖片
    floatImg.src = originalfloatImgUrl; // 恢復原來的圖片

    bgSmallCircle.classList.add("d-none");
    bgBigCircle.classList.add("d-none");
    originalCircle.classList.remove("d-none");
  }
});
// const bgBigCircle = document.querySelector(".bg-bigCircle");
// const bgSmallCircle = document.querySelector(".bg-smallCircle");
// const originalCircle = document.querySelector(".originalCircle");

const favorite = document.querySelector(".favorite");
const favoriteHotel = document.querySelector(".favoriteHotel");
let isFavoriteClick = false;
let isFavoriteClickHotelIconImg = false;

// 保存原始圖片的 URL
const originalFavoriteImg = "../assets/images/bookMark.svg"; //MarkA
const clickedFavoriteImg = "../assets/images/_bookMark.png"; //MarkB
const originalHotelIconImg =
  "../assets/images/pin/type=normal(selectedOn), selected=on.svg"; // FavA
const originalFavoriteHotelImg = "../assets/images/favoriteHotel.png"; // FavB
const clickedFavoriteHotelImg = "../assets/images/favoriteHotelClick.png"; // FavC

// 點擊 favorite 時更換圖片或恢復原圖片
favorite.addEventListener("click", function (event) {
  event.stopPropagation(); // 防止事件冒泡到 document 上

  if (isFavoriteClick) {
    // 如果已經被點擊，恢復原本的圖片
    favorite.src = originalFavoriteImg;
    favoriteHotel.src = originalHotelIconImg;
    isFavoriteClickHotelIconImg = false;
  } else {
    // 如果未被點擊，則更換圖片
    favorite.src = clickedFavoriteImg;
    favoriteHotel.src = originalFavoriteHotelImg;
  }

  // 切換點擊狀態
  isFavoriteClick = !isFavoriteClick;
});

// Click event for favoriteHotel
favoriteHotel.addEventListener("click", function (event) {
  event.stopPropagation();

  if (favoriteHotel.src.includes("favoriteHotel.png")) {
    // If favoriteHotel is in imgFavB, switch to imgFavC
    favoriteHotel.src = clickedFavoriteHotelImg;
    isFavoriteClickHotelIconImg = true; // Set the flag indicating imgFavC is active
  } else if (favoriteHotel.src.includes("favoriteHotelClick.png")) {
    // If favoriteHotel is in imgFavC, revert to imgFavB
    favoriteHotel.src = originalFavoriteHotelImg;
    isFavoriteClickHotelIconImg = false;
  }
});

// Ensure clicking outside won't affect favoriteHotel's state
document.addEventListener("click", function () {
  if (isFavoriteClick && !isFavoriteClickHotelIconImg) {
    // favoriteHotel remains in imgFavB if favorite is selected and not in imgFavC state
    favoriteHotel.src = originalFavoriteHotelImg;
  }
});

// 點擊 favorite 時更換圖片
// favorite.addEventListener("click", function (event) {
//   event.stopPropagation(); // 防止點擊事件冒泡到 document 上
//   isFavoriteClick = true;
//   favorite.src = "../assets/images/_bookMark.png";
//   favoriteHotel.src = "../assets/images/favoriteHotel.png";
// });

// 點擊圖片以外的地方時恢復原來的圖片
// document.addEventListener("click", function (event) {
//   if (!favorite.contains(event.target)) {
//      如果點擊的不是圖片
//     isFavoriteClick = false;
//     favorite.src = "../assets/images/bookMark.svg";
//   }
// });

// 點擊 centerAimImg 時移動背景中心到 centerIcon
centerAimImg.addEventListener("click", () => {
  // 計算中心 Icon 應該出現在背景圖片容器的中間位置
  const targetBackgroundPosX = -(centerIconX - divWidth / 2) - 430;
  const targetBackgroundPosY = -(centerIconY - divHeight / 2);

  // 確保背景圖片不會移動超出範圍
  const minPosX = divWidth - imageWidth;
  const minPosY = divHeight - imageHeight;

  backgroundPosX = Math.max(minPosX, Math.min(0, targetBackgroundPosX));
  backgroundPosY = Math.max(minPosY, Math.min(0, targetBackgroundPosY));

  // 更新背景圖片的位置
  div.style.backgroundPosition = `${backgroundPosX}px ${backgroundPosY}px`;
  centerIcon.classList.add("searchAnimation");

  centerIcon.addEventListener("animationend", function () {
    centerIcon.classList.remove("searchAnimation");
  });
  // 更新圖標的位置
  updateIconPosition();
});
