const goTopDom = document.createElement("template");
goTopDom.innerHTML = `<div class="goTop"><i class="fas fa-chevron-up"></i></div>`;

document.body.appendChild(goTopDom.content);

// 點擊上滑
$(".goTop").on("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 偵測視窗位置改變出現效果
const handleBtnByScroll = () => {
  // console.log('i am scrolling')
  // console.log(window.pageYOffset)
  // window.pageYOffset > 500 && console.log(window.pageYOffset)
  if (window.pageYOffset > 100) {
    document.querySelector(".goTop").style.right = `5vw`;
  }
  if (window.pageYOffset <= 100) {
    document.querySelector(".goTop").style.right = `-100px`;
  }
};

window.addEventListener("scroll", handleBtnByScroll);
