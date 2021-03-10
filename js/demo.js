window.onload = () => {
  // 搜索框设置
  const srch=document.querySelector('.srch');
  srch.onfocus=()=>{
    srch.className='srch newsr';
  }
  srch.onblur=()=>{
    srch.className='srch';
  }
  // 轮播图设置
  let startX;
  let stopX;
  let images = ['images/china2.jpg', 'images/cheer2.jpg', 'images/sport2.jpg'];
  let num = 0;
  //每隔一秒切换
  let act=setInterval(()=>{
    num++;
    if(num>2){
      num=0;
    }
    img.setAttribute('src', images[num]);
    src();
  },1000);
  let flag
  const img = document.getElementById('img');
  // 监听手指开始位置
  img.addEventListener('touchstart', function (e) {
    clearInterval(act);
    startX = e.targetTouches[0].pageX;
    flag = true;
  })
  
  // img.addEventListener('mouseup',function(){
  //   act();
  // })
  // 监听手指移动距离
  img.addEventListener('touchmove', function (e) {
    stopX = e.targetTouches[0].pageX - startX;
    //  在stopX大于或小于150的时候只执行一次
    function fl() {
      if (flag) {
        num++;
        flag = false;
        if (num > 2) {
          num = 0;
        }
      }
    };
    function fl1() {
      if (flag) {
        num--;
        flag = false;
        if (num < 0) {
          num = 2;
        }
      }
    };
    // 大于150向左
    if (stopX >= 150) {
      fl1();
      src();
      img.setAttribute('src', images[num]);
    }
    // 小于-150向右
    else if (stopX <= -150) {
      fl();
      src();
      img.setAttribute('src', images[num]);
    }
  });
  img.addEventListener('touchend',function(){
    act=setInterval(()=>{
      num++;
      if(num>2){
        num=0;
      }
      img.setAttribute('src', images[num]);
      src();
    },1000);
  })
  // 小圆点点击事件绑定
  const lis=document.querySelector('#ul').querySelectorAll('li');
  // console.log(lis.length)
  function src(){
    for(let i=0;i<lis.length;i++){
      lis[i].className='';
      lis[num].className='newli';
    }
  };
  for(let i=0;i<lis.length;i++){
    lis[i].addEventListener('click',function(){
      // 点中的圆圈改变样式其他的不变
      num=i;
      src();
      img.setAttribute('src', images[num]);
    })
  }
}