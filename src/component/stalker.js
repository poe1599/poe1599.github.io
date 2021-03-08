const stalker = document.createElement("template");
stalker.innerHTML = `<div class="stalker"></div><div class="rotateBall"><div class="ball"></div></div>`;

document.body.appendChild(stalker.content);

// 滑鼠跟蹤圈(JQ)
//  $(document).mousemove(function (event) {
//     // console.log(event);
//     // console.log(event.clientX,event.clientY);
//     $('.stalker').css({ "top": event.clientY, "left": event.clientX });
// });

// 滑鼠跟蹤圈(原生JS)
document.addEventListener("mousemove", function (event) {
  document.querySelector(".stalker").style.top = `${event.clientY}px`;
  document.querySelector(".stalker").style.left = `${event.clientX}px`;
  // 公轉圈
  document.querySelector(".rotateBall").style.top = `${event.clientY-5}px`;
  document.querySelector(".rotateBall").style.left = `${event.clientX-40}px`;
});
