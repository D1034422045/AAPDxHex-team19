import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

window.addEventListener("DOMContentLoaded", function () {
  // 檢查 sessionStorage 中是否有 'loadingAnimationShown' 標記
  if (!sessionStorage.getItem("loadingAnimationShown")) {
    // 如果沒有，顯示 loading 畫面
    document.getElementById("loading").style.display = "flex";
  }
});

window.addEventListener("load", function () {
  // 檢查 sessionStorage 中是否有 'loadingAnimationShown' 標記
  if (!sessionStorage.getItem("loadingAnimationShown")) {
    // 如果沒有，執行動畫並將標記存入 sessionStorage
    setTimeout(function () {
      document.getElementById("loading").style.display = "none";
      sessionStorage.setItem("loadingAnimationShown", "true");
    }, 2000); // 動畫持續 2000 毫秒
  } else {
    // 如果有標記，確保 loading 元素不會顯示
    document.getElementById("loading").style.display = "none";
  }
});

window.onload = function () {
  const mapWrap = document.querySelector(".mapWrap");
  // 確保 mapWrap 先加載完
  if (mapWrap) {
    // 在這裡執行其他程式碼

    const centerArrowWrap = document.querySelector(".centerArrowWrap");
    const specialWarningOffIcon = document.querySelector(
      ".specialWarningOffIcon"
    );
    const securityLevel5OffIcon1 = document.querySelector(
      ".securityLevel5OffIcon1"
    );
    const securityLevel5OffIcon2 = document.querySelector(
      ".securityLevel5OffIcon2"
    );
    const securityLevel5OffIcon3 = document.querySelector(
      ".securityLevel5OffIcon3"
    );
    const securityLevel5OffIcon4 = document.querySelector(
      ".securityLevel5OffIcon4"
    );

    const policeStationOffIcon1 = document.querySelector(
      ".policeStationOffIcon1"
    );

    const policeStationOffIcon2 = document.querySelector(
      ".policeStationOffIcon2"
    );

    const policeStationOffIcon3 = document.querySelector(
      ".policeStationOffIcon3"
    );

    const hospitalOffIcon1 = document.querySelector(".hospitalOffIcon1");
    const hospitalOffIcon2 = document.querySelector(".hospitalOffIcon2");
    const hospitalOffIcon3 = document.querySelector(".hospitalOffIcon3");

    const hotelIcon = document.querySelector(".hotelIcon");

    let isDragging = false;
    let startX, startY;
    let bgPosX = 0,
      bgPosY = 0;

    // // 設置背景圖片的原始尺寸
    const bgWidth = 2000; // 背景圖片寬度
    // const bgHeight = 1800;  背景圖片高度
    const bgHeight = 3200;
    // 背景圖片高度;

    const arrowOffsetX = 980; // 中心位置的 X 偏移
    const arrowOffsetY = 1950; // 中心位置的 Y 偏移

    const specialWarningOffIconOffsetX = 1240; // 黃色危險圖標的 X 偏移
    const specialWarningOffIconOffsetY = 1980; // 黃色危險圖標的 Y 偏移

    const securityLevel5OffIcon1OffsetX = 100; // 紅色危險圖標1的 X 偏移
    const securityLevel5OffIcon1OffsetY = 1000; // 紅色危險圖標1的 Y 偏移

    const securityLevel5OffIcon2OffsetX = 850; // 紅色危險圖標2的 X 偏移
    const securityLevel5OffIcon2OffsetY = 1300; // 紅色危險圖標2的 Y 偏移

    const securityLevel5OffIcon3OffsetX = 1350; // 紅色危險圖標3的 X 偏移
    const securityLevel5OffIcon3OffsetY = 2410; // 紅色危險圖標3的 Y 偏移

    const securityLevel5OffIcon4OffsetX = 840; // 紅色危險圖標3的 X 偏移
    const securityLevel5OffIcon4OffsetY = 2550; // 紅色危險圖標3的 Y 偏移

    const policeStationOffIcon1OffsetX = 70; // 警察圖標1的 X 偏移
    const policeStationOffIcon1OffsetY = 1530; // 警察圖標1的 Y 偏移

    const policeStationOffIcon2OffsetX = 320; // 警察圖標2的 X 偏移
    const policeStationOffIcon2OffsetY = 1580; // 警察圖標2的 Y 偏移

    const policeStationOffIcon3OffsetX = 160; // 警察圖標3的 X 偏移
    const policeStationOffIcon3OffsetY = 1880; // 警察圖標3的 Y 偏移

    const hospitalOffIcon1OffsetX = 20; // 醫院圖標1的 X 偏移
    const hospitalOffIcon1OffsetY = 1800; // 醫院圖標1的 Y 偏移

    const hospitalOffIcon2OffsetX = 210; // 醫院圖標2的 X 偏移
    const hospitalOffIcon2OffsetY = 1590; // 醫院圖標2的 Y 偏移

    const hospitalOffIcon3OffsetX = 40; // 醫院圖標3的 X 偏移
    const hospitalOffIcon3OffsetY = 1650; // 醫院圖標3的 Y 偏移

    const hotelIconOffsetX = 190; // 飯店圖標的 X 偏移
    const hotelIconOffsetY = 1800; // 飯店圖標的 Y 偏移

    // 更新 centerArrowWrap 位置相對於背景位置的函數
    const updateArrowPosition = () => {
      const style = window.getComputedStyle(mapWrap);
      const backgroundPosition = style.backgroundPosition.split(" ");
      const currentPosX = parseFloat(backgroundPosition[0]);
      const currentPosY = parseFloat(backgroundPosition[1]);

      const arrowX = arrowOffsetX + currentPosX;
      const arrowY = arrowOffsetY + currentPosY;

      const specialWarningOffIconX = specialWarningOffIconOffsetX + currentPosX;
      const specialWarningOffIconY = specialWarningOffIconOffsetY + currentPosY;

      const securityLevel5OffIcon1X =
        securityLevel5OffIcon1OffsetX + currentPosX;
      const securityLevel5OffIcon1Y =
        securityLevel5OffIcon1OffsetY + currentPosY;

      const securityLevel5OffIcon2X =
        securityLevel5OffIcon2OffsetX + currentPosX;
      const securityLevel5OffIcon2Y =
        securityLevel5OffIcon2OffsetY + currentPosY;

      const securityLevel5OffIcon3X =
        securityLevel5OffIcon3OffsetX + currentPosX;
      const securityLevel5OffIcon3Y =
        securityLevel5OffIcon3OffsetY + currentPosY;

      const securityLevel5OffIcon4X =
        securityLevel5OffIcon4OffsetX + currentPosX;
      const securityLevel5OffIcon4Y =
        securityLevel5OffIcon4OffsetY + currentPosY;

      const policeStationOffIcon1X = policeStationOffIcon1OffsetX + currentPosX;
      const policeStationOffIcon1Y = policeStationOffIcon1OffsetY + currentPosY;

      const policeStationOffIcon2X = policeStationOffIcon2OffsetX + currentPosX;
      const policeStationOffIcon2Y = policeStationOffIcon2OffsetY + currentPosY;

      const policeStationOffIcon3X = policeStationOffIcon3OffsetX + currentPosX;
      const policeStationOffIcon3Y = policeStationOffIcon3OffsetY + currentPosY;

      const hospitalOffIcon1X = hospitalOffIcon1OffsetX + currentPosX;
      const hospitalOffIcon1Y = hospitalOffIcon1OffsetY + currentPosY;

      const hospitalOffIcon2X = hospitalOffIcon2OffsetX + currentPosX;
      const hospitalOffIcon2Y = hospitalOffIcon2OffsetY + currentPosY;

      const hospitalOffIcon3X = hospitalOffIcon3OffsetX + currentPosX;
      const hospitalOffIcon3Y = hospitalOffIcon3OffsetY + currentPosY;

      const hotelIconX = hotelIconOffsetX + currentPosX;
      const hotelIconY = hotelIconOffsetY + currentPosY;

      centerArrowWrap.style.transform = `translate(${arrowX}px, ${arrowY}px)`;

      specialWarningOffIcon.style.transform = `translate(${specialWarningOffIconX}px, ${specialWarningOffIconY}px)`;

      securityLevel5OffIcon1.style.transform = `translate(${securityLevel5OffIcon1X}px, ${securityLevel5OffIcon1Y}px)`;

      securityLevel5OffIcon2.style.transform = `translate(${securityLevel5OffIcon2X}px, ${securityLevel5OffIcon2Y}px)`;

      securityLevel5OffIcon3.style.transform = `translate(${securityLevel5OffIcon3X}px, ${securityLevel5OffIcon3Y}px)`;

      securityLevel5OffIcon4.style.transform = `translate(${securityLevel5OffIcon4X}px, ${securityLevel5OffIcon4Y}px)`;

      policeStationOffIcon1.style.transform = `translate(${policeStationOffIcon1X}px, ${policeStationOffIcon1Y}px)`;

      policeStationOffIcon2.style.transform = `translate(${policeStationOffIcon2X}px, ${policeStationOffIcon2Y}px)`;

      policeStationOffIcon3.style.transform = `translate(${policeStationOffIcon3X}px, ${policeStationOffIcon3Y}px)`;

      hospitalOffIcon1.style.transform = `translate(${hospitalOffIcon1X}px, ${hospitalOffIcon1Y}px)`;

      hospitalOffIcon2.style.transform = `translate(${hospitalOffIcon2X}px, ${hospitalOffIcon2Y}px)`;

      hospitalOffIcon3.style.transform = `translate(${hospitalOffIcon3X}px, ${hospitalOffIcon3Y}px)`;

      hotelIcon.style.transform = `translate(${hotelIconX}px, ${hotelIconY}px)`;
    };

    // 計算初始背景位置，使 centerArrowWrap 出現在視窗中心
    const centerBackgroundToArrow = () => {
      const containerWidth = mapWrap.clientWidth;
      const containerHeight = mapWrap.clientHeight;

      const centerPosX = containerWidth / 2 - arrowOffsetX;
      const centerPosY = containerHeight / 2 - arrowOffsetY - 50; //-220

      mapWrap.style.backgroundPosition = `${centerPosX}px ${centerPosY}px`;

      // 設定初始的背景位置
      bgPosX = centerPosX;
      bgPosY = centerPosY;

      updateArrowPosition();
    };

    // 開始拖曳的函數
    const startDrag = (e) => {
      isDragging = true;
      mapWrap.style.cursor = "grabbing";
      startX = e.clientX || e.touches[0].clientX; // 獲取X坐標
      startY = e.clientY || e.touches[0].clientY; // 獲取Y坐標

      // 獲取當前背景位置
      const style = window.getComputedStyle(mapWrap);
      const backgroundPosition = style.backgroundPosition.split(" ");
      bgPosX = parseFloat(backgroundPosition[0]);
      bgPosY = parseFloat(backgroundPosition[1]);
    };

    // 更新背景位置的函數
    const dragMove = (e) => {
      if (!isDragging) return;

      const dx = (e.clientX || e.touches[0].clientX) - startX; // 計算X方向的移動距離
      const dy = (e.clientY || e.touches[0].clientY) - startY; // 計算Y方向的移動距離

      // 計算新的背景位置
      let newPosX = bgPosX + dx;
      let newPosY = bgPosY + dy;

      // 取得視窗的寬高
      const containerWidth = mapWrap.clientWidth; // 100vw
      const containerHeight = mapWrap.clientHeight; // 100vh

      // 限制水平拖曳不超過背景圖片的邊緣
      const maxPosX = 0; // 左邊界
      const minPosX = containerWidth - bgWidth; // 右邊界

      // 限制垂直拖曳不超過背景圖片的邊緣
      const maxPosY = 0; // 上邊界
      const minPosY = containerHeight - bgHeight; // 下邊界

      // 限制背景圖片的拖動範圍
      newPosX = Math.max(minPosX, Math.min(newPosX, maxPosX));
      newPosY = Math.max(minPosY, Math.min(newPosY, maxPosY));

      // 更新背景圖片位置
      mapWrap.style.backgroundPosition = `${newPosX}px ${newPosY}px`;

      // 更新 centerArrowWrap 相對於新背景位置的位置
      updateArrowPosition();
    };

    // 停止拖曳的函數
    const stopDrag = () => {
      isDragging = false;
      mapWrap.style.cursor = "grab";
    };

    // 註冊滑鼠事件
    mapWrap.addEventListener("mousedown", startDrag);
    mapWrap.addEventListener("mousemove", dragMove);
    mapWrap.addEventListener("mouseup", stopDrag);

    // 註冊觸控事件
    mapWrap.addEventListener("touchstart", startDrag);
    mapWrap.addEventListener("touchmove", dragMove);
    mapWrap.addEventListener("touchend", stopDrag);

    const preventMapWrapDrag = (e) => {
      e.stopPropagation(); // 阻止事件傳遞到 mapWrap
    };

    // 註冊 scrollable-container 事件

    const inputWrapper = document.querySelector(".input-wrapper");
    const scrollableContainer = document.querySelector(".scrollable-container");
    const specialWarningPreventMapWrapDrag = document.querySelector(
      ".specialWarningPreventMapWrapDrag"
    );
    const policeStationOffIcon1PreventMapWrapDrag = document.querySelector(
      ".policeStationOffIcon1PreventMapWrapDrag"
    );
    const policeStationOffIcon2PreventMapWrapDrag = document.querySelector(
      ".policeStationOffIcon2PreventMapWrapDrag"
    );
    const policeStationOffIcon3PreventMapWrapDrag = document.querySelector(
      ".policeStationOffIcon3PreventMapWrapDrag"
    );
    const hospitalOffIcon1PreventMapWrapDrag = document.querySelector(
      ".hospitalOffIcon1PreventMapWrapDrag"
    );
    const hospitalOffIcon2PreventMapWrapDrag = document.querySelector(
      ".hospitalOffIcon2PreventMapWrapDrag"
    );
    const hospitalOffIcon3PreventMapWrapDrag = document.querySelector(
      ".hospitalOffIcon3PreventMapWrapDrag"
    );
    const hotelIconPreventMapWrapDrag = document.querySelector(
      ".hotelIconPreventMapWrapDrag"
    );
    const countryInfoModalPreventMapWrapDrag = document.querySelector(
      ".countryInfoModalPreventMapWrapDrag"
    );
    inputWrapper.addEventListener("mousedown", preventMapWrapDrag);
    inputWrapper.addEventListener("touchstart", preventMapWrapDrag);
    scrollableContainer.addEventListener("mousedown", preventMapWrapDrag);
    scrollableContainer.addEventListener("touchstart", preventMapWrapDrag);
    specialWarningPreventMapWrapDrag.addEventListener(
      "mousedown",
      preventMapWrapDrag
    );
    specialWarningPreventMapWrapDrag.addEventListener(
      "touchstart",
      preventMapWrapDrag
    );
    policeStationOffIcon1PreventMapWrapDrag.addEventListener(
      "mousedown",
      preventMapWrapDrag
    );
    policeStationOffIcon1PreventMapWrapDrag.addEventListener(
      "touchstart",
      preventMapWrapDrag
    );
    policeStationOffIcon2PreventMapWrapDrag.addEventListener(
      "mousedown",
      preventMapWrapDrag
    );
    policeStationOffIcon2PreventMapWrapDrag.addEventListener(
      "touchstart",
      preventMapWrapDrag
    );
    policeStationOffIcon3PreventMapWrapDrag.addEventListener(
      "mousedown",
      preventMapWrapDrag
    );
    policeStationOffIcon3PreventMapWrapDrag.addEventListener(
      "touchstart",
      preventMapWrapDrag
    );
    hospitalOffIcon1PreventMapWrapDrag.addEventListener(
      "mousedown",
      preventMapWrapDrag
    );
    hospitalOffIcon1PreventMapWrapDrag.addEventListener(
      "touchstart",
      preventMapWrapDrag
    );
    hospitalOffIcon2PreventMapWrapDrag.addEventListener(
      "mousedown",
      preventMapWrapDrag
    );
    hospitalOffIcon2PreventMapWrapDrag.addEventListener(
      "touchstart",
      preventMapWrapDrag
    );
    hospitalOffIcon3PreventMapWrapDrag.addEventListener(
      "mousedown",
      preventMapWrapDrag
    );
    hospitalOffIcon3PreventMapWrapDrag.addEventListener(
      "touchstart",
      preventMapWrapDrag
    );
    hotelIconPreventMapWrapDrag.addEventListener(
      "mousedown",
      preventMapWrapDrag
    );
    hotelIconPreventMapWrapDrag.addEventListener(
      "touchstart",
      preventMapWrapDrag
    );
    countryInfoModalPreventMapWrapDrag.addEventListener(
      "mousedown",
      preventMapWrapDrag
    );
    countryInfoModalPreventMapWrapDrag.addEventListener(
      "touchstart",
      preventMapWrapDrag
    );

    // 確保視窗大小變更時，背景圖片仍然按比例拖曳
    window.addEventListener("resize", centerBackgroundToArrow);

    // 初始化時將背景圖和 centerArrowWrap 放置於視窗中心
    centerBackgroundToArrow();

    // // 選擇所有必要的元素
    const policeStationLabelWrap = document.querySelector(
      ".policeStationLabelWrap"
    );
    const hospitalLabelWrap = document.querySelector(".hospitalLabelWrap");

    const policeStationOffIcons = document.querySelectorAll(
      ".policeStationOffIcon"
    );
    const hospitalOffIcons = document.querySelectorAll(".hospitalOffIcon");
    const specialWarningOffIcons = document.querySelectorAll(
      ".specialWarningOffIcon"
    );
    const securityLevelOffIcons = document.querySelectorAll(
      ".securityLevel5OffIcon"
    );

    const policeStationLabelImg = document.querySelector(
      "#policeStationLabelImg"
    );
    const hospitalLabelImg = document.querySelector("#hospitalLabelImg");
    // const hotelIcon = document.querySelector('.hotelIcon');

    // 切換標籤的狀態追蹤
    let currentLabel = null;

    // Original image sources and styles
    const originalPoliceStationImg = `${
      import.meta.env.BASE_URL
    }assets/images/policeStationLabelIcon.svg`;
    const activePoliceStationImg = `${
      import.meta.env.BASE_URL
    }assets/images/policeStationLabelIconClick.svg`; // Change to the active image path
    const originalHospitalImg = `${
      import.meta.env.BASE_URL
    }assets/images/hopspitalLabelIcon.svg`;
    const activeHospitalImg = `${
      import.meta.env.BASE_URL
    }assets/images/hopspitalLabelIconClick.svg`; // Change to the active image path

    // 隱藏所有圖示的輔助功能
    function hideAllIcons() {
      policeStationOffIcons.forEach((icon) => icon.classList.add("hidden"));
      hospitalOffIcons.forEach((icon) => icon.classList.add("hidden"));
      specialWarningOffIcons.forEach((icon) => icon.classList.add("hidden"));
      securityLevelOffIcons.forEach((icon) => icon.classList.add("hidden"));
      hotelIcon.classList.add("hidden");
    }

    // 顯示所有圖示的輔助功能
    function showAllIcons() {
      policeStationOffIcons.forEach((icon) => icon.classList.remove("hidden"));
      hospitalOffIcons.forEach((icon) => icon.classList.remove("hidden"));
      specialWarningOffIcons.forEach((icon) => icon.classList.remove("hidden"));
      securityLevelOffIcons.forEach((icon) => icon.classList.remove("hidden"));
      hotelIcon.classList.remove("hidden");
    }

    function resetLabels() {
      policeStationLabelImg.src = originalPoliceStationImg;
      hospitalLabelImg.src = originalHospitalImg;
      policeStationLabelWrap.classList.add("bg-white");
      policeStationLabelWrap.classList.remove("labelClickChangeStyle");

      hospitalLabelWrap.classList.add("bg-white");
      hospitalLabelWrap.classList.remove("labelClickChangeStyle");
    }

    // 處理標籤點擊的函數
    function handleLabelClick(label, targetIcons, labelImg, activeImg) {
      if (currentLabel === label) {
        // 如果同一標籤被點擊兩次，則顯示所有圖示
        resetLabels();
        showAllIcons();
        currentLabel = null; // 重置狀態
      } else {
        resetLabels(); // Reset the other label styles and images
        // 如果按一下不同的標籤，請先隱藏所有圖標
        hideAllIcons();
        labelImg.src = activeImg; // Change to the active image
        label.classList.add("labelClickChangeStyle");
        label.classList.remove("bg-white");
        // 顯示與單擊的標籤相關的圖標
        targetIcons.forEach((icon) => icon.classList.remove("hidden"));
        currentLabel = label; // 將目前標籤設定為按一下的標籤
      }
    }

    // 為標籤新增事件監聽器
    policeStationLabelWrap.addEventListener("click", function () {
      handleLabelClick(
        policeStationLabelWrap,
        policeStationOffIcons,
        policeStationLabelImg,
        activePoliceStationImg
      );
    });

    hospitalLabelWrap.addEventListener("click", function () {
      handleLabelClick(
        hospitalLabelWrap,
        hospitalOffIcons,
        hospitalLabelImg,
        activeHospitalImg
      );
    });

    // 曼谷最新資訊展開
    const myDiv = document.getElementById("myDiv");
    const closeBtn = document.getElementById("closeBtn");
    const closeBar = document.getElementById("closeBar");
    const countryInfoWrap = document.querySelector(".countryInfoWrap");
    const walkAndCenterAimWrapContainer = document.querySelector(
      ".walkAndCenterAimWrapContainer"
    );
    let isExpanded = false;

    myDiv.addEventListener("click", () => {
      if (!isExpanded) {
        // 展開 div
        myDiv.classList.add("expanded");
        myDiv.classList.remove("collapsed");

        isExpanded = true;
        closeBar.classList.remove("d-none");
      }
      countryInfoWrap.classList.add("d-none");
      walkAndCenterAimWrapContainer.classList.add("d-none");
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
      countryInfoWrap.classList.remove("d-none");
      walkAndCenterAimWrapContainer.classList.remove("d-none");
      countryInfoWrap.classList.add("infoAndFloatWrapLeftChangePosition");
      walkAndCenterAimWrapContainer.classList.add(
        "infoAndFloatWrapRightChangePosition"
      );
    });

    // 點擊圖片時，改變圖片的 src
    const clickChangeIcons = document.querySelectorAll(".clickChangeIcon");
    let currentClickedImg = null;
    let originalSrc = "";

    clickChangeIcons.forEach((img) => {
      img.addEventListener("click", (e) => {
        e.stopPropagation();
        if (currentClickedImg === img) {
          img.src = originalSrc;
          img.classList.add("iconOriginWidthHeight");
          img.classList.remove("iconChangeWidthHeight");
          currentClickedImg = null;
        } else {
          if (currentClickedImg) {
            currentClickedImg.src = originalSrc;
            currentClickedImg.classList.add("iconOriginWidthHeight");
            currentClickedImg.classList.remove("iconChangeWidthHeight");
          }
          currentClickedImg = img;
          originalSrc = img.src;
          img.src = `${import.meta.env.BASE_URL}assets/images/${img.alt}On.svg`;
          img.classList.remove("iconOriginWidthHeight");
          img.classList.add("iconChangeWidthHeight");
        }
      });
    });

    // 點擊腳印及準心
    const centerAimIcon = document.querySelector(".centerAimIcon");
    const walkIcon = document.querySelector(".walkIcon");
    const circleOriginal = document.querySelector(".circleOriginal");
    const circleSmall = document.querySelector(".circleSmall");
    const circleBig = document.querySelector(".circleBig");
    let walkIconClick = false;
    let centerAimIconClick = false;
    const originalcenterAimIconUrl = centerAimIcon.src;
    const newcenterAimIconUrl = `${
      import.meta.env.BASE_URL
    }assets/images/centerAimBlue.svg`;
    const originalwalkIconUrl = walkIcon.src;
    const newwalkIconUrl = `${
      import.meta.env.BASE_URL
    }assets/images/walkBlue.svg`;

    centerAimIcon.addEventListener("click", function () {
      if (centerAimIconClick) {
        // Revert to original state when clicked again
        centerAimIcon.src = originalcenterAimIconUrl;
        circleSmall.classList.add("d-none");
        circleBig.classList.add("d-none");
        circleOriginal.classList.remove("d-none");
      } else {
        // Change to new state when clicked for the first time
        centerAimIcon.src = newcenterAimIconUrl;
        walkIcon.src = originalwalkIconUrl;
        circleSmall.classList.add("d-none");
        circleBig.classList.add("d-none");
        circleOriginal.classList.remove("d-none");

        // 點擊時觸發滾動到 centerArrowWrap
      }
      // Toggle the state
      centerAimIconClick = !centerAimIconClick;
      walkIconClick = false; // Reset walkIconClick
    });

    walkIcon.addEventListener("click", function () {
      if (walkIconClick) {
        // Revert to original state when clicked again
        walkIcon.src = originalwalkIconUrl;
        circleSmall.classList.add("d-none");
        circleBig.classList.add("d-none");
        circleOriginal.classList.remove("d-none");
      } else {
        // Change to new state when clicked for the first time
        walkIcon.src = newwalkIconUrl;
        centerAimIcon.src = originalcenterAimIconUrl;
        circleSmall.classList.remove("d-none");
        circleBig.classList.remove("d-none");
        circleOriginal.classList.add("d-none");
      }
      // Toggle the state
      walkIconClick = !walkIconClick;
      centerAimIconClick = false; // Reset centerAimIconClick
    });

    // 我的安全評論 icon點擊

    const myselfSafeComment = document.querySelector(".myselfSafeComment");
    const myselfSafeCommentIcon = document.querySelector(
      ".myselfSafeCommentIcon"
    );
    const myselfNormalComment = document.querySelector(".myselfNormalComment");
    const myselfNormalCommentIcon = document.querySelector(
      ".myselfNormalCommentIcon"
    );
    const myselfTakecareComment = document.querySelector(
      ".myselfTakecareComment"
    );
    const myselfTakecareCommentIcon = document.querySelector(
      ".myselfTakecareCommentIcon"
    );

    myselfSafeComment.addEventListener("click", function (event) {
      event.stopPropagation(); // 防止全局點擊事件觸發

      myselfSafeComment.classList.add("myselfSafeStyle");
      myselfSafeComment.classList.remove("border");
      myselfSafeCommentIcon.src = `${
        import.meta.env.BASE_URL
      }assets/images/emojiHappyBlue.svg`;

      myselfNormalComment.classList.remove("myselfNormalStyle");
      myselfNormalComment.classList.add("border");
      myselfNormalCommentIcon.src = `${
        import.meta.env.BASE_URL
      }assets/images/emojiNormalGray.svg`;

      myselfTakecareComment.classList.remove("myselfTakecareStyle");
      myselfTakecareComment.classList.add("border");
      myselfTakecareCommentIcon.src = `${
        import.meta.env.BASE_URL
      }assets/images/emojiSadGray.svg`;
    });

    myselfNormalComment.addEventListener("click", function (event) {
      event.stopPropagation(); // 防止全局點擊事件觸發
      myselfNormalComment.classList.add("myselfNormalStyle");
      myselfNormalComment.classList.remove("border");
      myselfNormalCommentIcon.src = `${
        import.meta.env.BASE_URL
      }assets/images/emojiNormalGreen.svg`;

      myselfSafeComment.classList.remove("myselfSafeStyle");
      myselfSafeComment.classList.add("border");
      myselfSafeCommentIcon.src = `${
        import.meta.env.BASE_URL
      }assets/images/emojiHappyGray.svg`;

      myselfTakecareComment.classList.remove("myselfTakecareStyle");
      myselfTakecareComment.classList.add("border");
      myselfTakecareCommentIcon.src = `${
        import.meta.env.BASE_URL
      }assets/images/emojiSadGray.svg`;
    });

    myselfTakecareComment.addEventListener("click", function (event) {
      event.stopPropagation(); // 防止全局點擊事件觸發
      myselfTakecareComment.classList.add("myselfTakecareStyle");
      myselfTakecareComment.classList.remove("border");
      myselfTakecareCommentIcon.src = `${
        import.meta.env.BASE_URL
      }assets/images/emojiSadRed.svg`;

      myselfSafeComment.classList.remove("myselfSafeStyle");
      myselfSafeComment.classList.add("border");
      myselfSafeCommentIcon.src = `${
        import.meta.env.BASE_URL
      }assets/images/emojiHappyGray.svg`;

      myselfNormalComment.classList.remove("myselfNormalStyle");
      myselfNormalComment.classList.add("border");
      myselfNormalCommentIcon.src = `${
        import.meta.env.BASE_URL
      }assets/images/emojiNormalGray.svg`;
    });

    document.addEventListener("click", function () {
      myselfSafeComment.classList.remove("myselfSafeStyle");
      myselfSafeComment.classList.add("border");
      myselfSafeCommentIcon.src = `${
        import.meta.env.BASE_URL
      }assets/images/emojiHappyGray.svg`;

      myselfNormalComment.classList.remove("myselfNormalStyle");
      myselfNormalComment.classList.add("border");
      myselfNormalCommentIcon.src = `${
        import.meta.env.BASE_URL
      }assets/images/emojiNormalGray.svg`;

      myselfTakecareComment.classList.remove("myselfTakecareStyle");
      myselfTakecareComment.classList.add("border");
      myselfTakecareCommentIcon.src = `${
        import.meta.env.BASE_URL
      }assets/images/emojiSadGray.svg`;
    });

    // 旅客安全評論 icon點擊
    const travelerSafeComment = document.querySelector(".travelerSafeComment");
    const travelerSafeCommentSpan = document.querySelector(
      ".travelerSafeCommentSpan"
    );
    const travelerNormalComment = document.querySelector(
      ".travelerNormalComment"
    );
    const travelerNormalCommentSpan = document.querySelector(
      ".travelerNormalCommentSpan"
    );
    const travelertakecareComment = document.querySelector(
      ".travelertakecareComment"
    );
    const travelertakecareCommentSpan = document.querySelector(
      ".travelertakecareCommentSpan"
    );

    travelerSafeComment.addEventListener("click", function (event) {
      event.stopPropagation(); // 防止全局點擊事件觸發
      travelerSafeComment.classList.add("travelerCommentChangeStyle");
      travelerSafeCommentSpan.classList.remove("text-neutrals-400");

      travelerNormalComment.classList.remove("travelerCommentChangeStyle");
      travelerNormalCommentSpan.classList.add("text-neutrals-400");

      travelertakecareComment.classList.remove("travelerCommentChangeStyle");
      travelertakecareCommentSpan.classList.add("text-neutrals-400");
    });

    travelerNormalComment.addEventListener("click", function (event) {
      event.stopPropagation(); // 防止全局點擊事件觸發
      travelerNormalComment.classList.add("travelerCommentChangeStyle");
      travelerNormalCommentSpan.classList.remove("text-neutrals-400");

      travelerSafeComment.classList.remove("travelerCommentChangeStyle");
      travelerSafeCommentSpan.classList.add("text-neutrals-400");

      travelertakecareComment.classList.remove("travelerCommentChangeStyle");
      travelertakecareCommentSpan.classList.add("text-neutrals-400");
    });

    travelertakecareComment.addEventListener("click", function (event) {
      event.stopPropagation(); // 防止全局點擊事件觸發
      travelertakecareComment.classList.add("travelerCommentChangeStyle");
      travelertakecareCommentSpan.classList.remove("text-neutrals-400");

      travelerSafeComment.classList.remove("travelerCommentChangeStyle");
      travelerSafeCommentSpan.classList.add("text-neutrals-400");

      travelerNormalComment.classList.remove("travelerCommentChangeStyle");
      travelerNormalCommentSpan.classList.add("text-neutrals-400");
    });

    document.addEventListener("click", function () {
      travelerSafeComment.classList.remove("travelerCommentChangeStyle");
      travelerSafeCommentSpan.classList.add("text-neutrals-400");

      travelerNormalComment.classList.remove("travelerCommentChangeStyle");
      travelerNormalCommentSpan.classList.add("text-neutrals-400");

      travelertakecareComment.classList.remove("travelerCommentChangeStyle");
      travelertakecareCommentSpan.classList.add("text-neutrals-400");
    });

    // 選擇所有具有 clickLocationTextTOSearch 類的圖片
    const clickableIcons = document.querySelectorAll(
      ".clickLocationTextTOSearch"
    );

    // 監聽每個圖標的點擊事件
    clickableIcons.forEach((icon) => {
      icon.addEventListener("click", function () {
        // 找到觸發這個 img 對應的 offcanvas
        const offcanvasID = this.getAttribute("data-bs-target");
        const offcanvas = document.querySelector(offcanvasID);

        // 在對應的 offcanvas 中找到 locationTextTOSearch 的 p 標籤
        const locationText = offcanvas.querySelector(
          ".locationTextTOSearch"
        ).innerText;

        // 將該文本設置為 input 輸入框的值
        const inputField = document.querySelector(
          ".locationTextTOSearch-input"
        );
        inputField.value = locationText;
      });
    });

    document
      .querySelector(".locationTextTOSearch-input")
      .addEventListener("change", function () {
        if (this.value.trim() === "") {
          centerBackgroundToArrow();
        }
      });
  }
};

// // 收藏
// // const favorite = document.querySelector(".favorite");
// // const favoriteHotel = document.querySelector(".favoriteHotel");
// // let isFavoriteClick = false;
// // let isFavoriteClickHotelIconImg = false;

// // // 保存原始圖片的 URL
// // const originalFavoriteImg = `${
// //   import.meta.env.BASE_URL
// // }assets/images/bookMark.svg`; //MarkA
// // const clickedFavoriteImg = `${
// //   import.meta.env.BASE_URL
// // }assets/images/bookMarkClick.svg`; //MarkB
// // const originalHotelIconImg = `${
// //   import.meta.env.BASE_URL
// // }assets/images/type=normal(selectedOn), selected=on.svg`; // FavA
// // const originalFavoriteHotelImg = `${
// //   import.meta.env.BASE_URL
// // }assets/images/favoriteHotel.svg`; // FavB
// // const clickedFavoriteHotelImg = `${
// //   import.meta.env.BASE_URL
// // }assets/images/favoriteHotelClick.svg`; // FavC

// // // 點擊 favorite 時更換圖片或恢復原圖片
// // favorite.addEventListener("click", function (event) {
// //   event.stopPropagation(); // 防止事件冒泡到 document 上

// //   if (isFavoriteClick) {
// //     // 如果已經被點擊，恢復原本的圖片
// //     favorite.src = originalFavoriteImg;
// //     favoriteHotel.src = originalHotelIconImg;
// //     isFavoriteClickHotelIconImg = false;
// //   } else {
// //     // 如果未被點擊，則更換圖片
// //     favorite.src = clickedFavoriteImg;
// //     favoriteHotel.src = originalFavoriteHotelImg;
// //   }

// //   // 切換點擊狀態
// //   isFavoriteClick = !isFavoriteClick;
// // });

// // // Click event for favoriteHotel
// // favoriteHotel.addEventListener("click", function (event) {
// //   event.stopPropagation();

// //   if (favoriteHotel.src.includes("favoriteHotel.svg")) {
// //     // If favoriteHotel is in imgFavB, switch to imgFavC
// //     favoriteHotel.src = clickedFavoriteHotelImg;
// //     isFavoriteClickHotelIconImg = true; // Set the flag indicating imgFavC is active
// //   } else if (favoriteHotel.src.includes("favoriteHotelClick.svg")) {
// //     // If favoriteHotel is in imgFavC, revert to imgFavB
// //     favoriteHotel.src = originalFavoriteHotelImg;
// //     isFavoriteClickHotelIconImg = false;
// //   }
// // });

// // // Ensure clicking outside won't affect favoriteHotel's state
// // document.addEventListener("click", function () {
// //   if (isFavoriteClick && !isFavoriteClickHotelIconImg) {
// //     // favoriteHotel remains in imgFavB if favorite is selected and not in imgFavC state
// //     favoriteHotel.src = originalFavoriteHotelImg;
// //   }
// // });
