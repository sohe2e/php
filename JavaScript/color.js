var Links = {
  setColor:function (color){
    // var alist = document.querySelectorAll('a'); /*querySelector과 querySelectorAll 차이 파악*/
    // var i = 0;
    // while(i<alist.length){
    //    alist[i].style.color = color;
    //     i = i+1;
    //   }
    $('a').css("color",color);
  }
}
var Body = {
  setColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body').css("color",color);
  },
  SetBackgroundColor:function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css("backgroundColor",color);
  }
}

function nightDayHandler(self){
  var target = document.querySelector('body'); /*target을 변수로 지정함으로써 중복되어 사용되는 코드를 줄임*/
  if(self.value=='night'){
    Body.SetBackgroundColor("black");
    Body.setColor("white");
    self.value = 'day';

    Links.setColor("powderblue");

  }else{
    Body.SetBackgroundColor("white");
    Body.setColor("black");
    self.value = 'night';

    Links.setColor("blue");
  }
}

//클릭시 색변경
