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
const securityLevel5icon2X = 520; // Icon 的相對背景圖 X 座標
const securityLevel5icon2Y = 240; // Icon 的相對背景圖 Y 座標
const securityLevel5icon3X = 710; //  800 Icon 的相對背景圖 X 座標
const securityLevel5icon3Y = 690; // Icon 的相對背景圖 Y 座標
const securityLevel5icon4X = 510; // 570 Icon 的相對背景圖 X 座標
const securityLevel5icon4Y = 730; // 820 Icon 的相對背景圖 Y 座標
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
const iconWidth = 50;
const iconHeight = 50;

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
