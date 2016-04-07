// we need to get the time somehow
// ??? how to draw the clock on the HTML page
// some of kind of loop to redraw clock

// change css using jquery
// $("#txt").css({ color: "blue", fontSize: "25px" });

// 4 / 2 = 2
// 4 / 3 = 1 R1

// 4 % 2 = 0
// 4 % 3 = 1

// 2 % 2 = 0
// 3 % 2 = 1

// if a number is even then % with 2 will return 0
// otherwise if a number is odd then % with 2 will return 1

$(document).ready(function() {
  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      var ampm = isAMorPM(h);
      var fontsize = [ "20px","30px","40px","50px","60px","100px"];
      isEven(m);
      fiver(s);
      h = changeMilitary(h);
      m = checkTime(m);
      s = checkTime(s);
      $('#txt').html(h + ":" + m + ":" + s + ampm);
      setTimeout(startTime, 500);
  }

  function isAMorPM(i) {
    var value;
    if (i >= 12) {
      value = "PM"
    } else {
      value = "AM"
    }
    return value;
  }
  //  this  changes  the  time  to  be  12  hours a  day,  not  24 because if  i>12 then  i=i-12. ex i=13 ~ i=13-12=1 
  function changeMilitary(i) {
    if (i > 12) {
      i = i - 12;
    }
    return i;
  }

  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
  }
// changes  the  color  of  body white  to  blue.  when  min  is even ( i%2 != 0) then  body  will  turn white, otherwise  will  be  blue. 
  
  function isEven(i) {
   if(i % 2 !== 0 ){
        $("body").css({"color":"white"});
        }else{
        $("body").css({"color":"blue"});
        };
} 

 //$("#txt").css({ color: "blue" });
setInterval(function(){fiver()
  },  1000);

function fiver(i){
    var color = Math.floor(Math.random()*16777215).toString(16);

    $("body").css("background-color",'#'+color);

  
}
setInterval(function(){fontsize()
  }, 2000 );  



function fontsize(){

  $("body").css("fontSize",fontsize[Math.floor(Math.random() * fontsize.length)]);
};
startTime();

});
