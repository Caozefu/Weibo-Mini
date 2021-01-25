document.addEventListener("DOMContentLoaded", function () {
  const jBody = $("body");
  let isShow = false;

  const button = $(
    `<div class="hover-button">
    <img src='data:img/jpg;base64,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
    RK5CYII='/>
    </div>`
  );

  // 内容
  const jContainer = $(
    `<div class="weibo-container">
      <iframe src="https://m.weibo.cn/" frameborder="0" width="400" height="100%"></iframe>
    </div>`
  );

  jBody.append(button);
  jBody.append(jContainer);

  // 内容显示/隐藏
  const show = () => {
    jBody.css({ width: "calc(100% - 400px)", "margin-left": "400px" });
    $(".weibo-container").css({ display: "block" });
  };

  const hide = () => {
    jBody.css({ width: "100%", margin: 0 });
    $(".weibo-container").css({ display: "none" });
  };

  button.on("click", (e) => {
    !isShow ? show() : hide();
    isShow = !isShow;
  });

  // 快捷键
  $(document).keypress(function (e) {
    if (e.ctrlKey && e.which == 9) {
      !isShow ? show() : hide();
      isShow = !isShow;
    }
  });

  // 小图标可拖动
  let dragging; //是否激活拖拽状态
  let tLeft, tTop; //鼠标按下时相对于选中元素的位移

  //监听鼠标按下事件
  document.addEventListener('mousedown', function (e) {
    console.log(button.left);
    if (e.target == button[0]) {
      dragging = true; //激活拖拽状态
      const moveElemRect = moveElem.getBoundingClientRect();
      tLeft = e.clientX - moveElemRect.left; //鼠标按下时和选中元素的坐标偏移:x坐标
      tTop = e.clientY - moveElemRect.top; //鼠标按下时和选中元素的坐标偏移:y坐标
    }
  });

  //监听鼠标放开事件
  document.addEventListener('mouseup', function (e) {
    dragging = false;
  });

  //监听鼠标移动事件
  document.addEventListener('mousemove', function (e) {
    if (dragging) {
      let moveX = e.clientX - tLeft;
      let moveY = e.clientY - tTop;

      button.css({ left: moveX + 'px' });
      button.css({ top: moveY + 'px' });
    }
  });
});
