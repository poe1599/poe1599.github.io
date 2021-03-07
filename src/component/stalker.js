const stalker = document.createElement("template");
stalker.innerHTML = `<div class="stalker"></div>`;

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
});
