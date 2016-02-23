function  draw() {
  var color1 = document.getElementById("color1").value;
  var color2 = document.getElementById("color2").value;
  var color3 = document.getElementById("color3").value;
  
  // draw the main flag
  var canvas = document.getElementById('mainFlag');
  drawFlag(canvas, color1, color2, color3, canvas.dataset.style);
}

function drawMiniFlags() {
  var ind, canvas;
  
  // draw the mini flags
  var buttonFlags = document.getElementsByClassName("buttonFlag");
  for (ind = 0; ind < buttonFlags.length; ind++) {
    canvas = document.getElementById("miniFlag" + ind.toString());
    drawFlag(canvas, "#FFFFFF", "#7F7F7F", "#000000", ind.toString());
  }
}

function drawFlag(canvas, color1, color2, color3, style) {
  var width = canvas.width;
  var height = canvas.height;
  var ctx = canvas.getContext("2d");
  
  switch(style) {
  case "0":
    // draw the top rectangle
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height / 3);
    // draw the center rectangle
    ctx.fillStyle = color2;
    ctx.fillRect(0, height / 3, width, height / 3);
    // draw the bottom rectangle
    ctx.fillStyle = color3;
    ctx.fillRect(0, 2 * height / 3, width, height / 3);
    break;
  case "1":
    // draw the left rectangle
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width / 3, height);
    // draw the center rectangle
    ctx.fillStyle = color2;
    ctx.fillRect(width / 3, 0, width / 3, height);
    // draw the right rectangle
    ctx.fillStyle = color3;
    ctx.fillRect(2 * width / 3, 0, width / 3, height);
    break;
  case "2":
    // draw the top rectangle
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height / 2);
    // draw the bottom rectangle
    ctx.fillStyle = color3;
    ctx.fillRect(0, height / 2, width, height / 2);
    // draw a circle
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, height / 4, 0, 2 * Math.PI, false);
    ctx.fillStyle = color2;
    ctx.fill();
    break;
  case "3":
    // draw a rectangle
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    // draw a polygon
    ctx.beginPath();
    ctx.moveTo(width / 2, height / 10);
    ctx.lineTo(width / 10, height / 2);
    ctx.lineTo(width / 2, 9 * height / 10);
    ctx.lineTo(9 * width / 10, height / 2);
    ctx.fillStyle = color2;
    ctx.fill();
    // draw a circle
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, height / 4, 0, 2 * Math.PI, false);
    ctx.fillStyle = color3;
    ctx.fill();
    break;
  case "4":
    // draw a rectangle
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    // draw a rectangle
    ctx.fillStyle = color2;
    ctx.fillRect(0, height / 3, width, height / 3);
    // draw a polygon
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width / 2, height / 2);
    ctx.lineTo(0, height);
    ctx.fillStyle = color3;
    ctx.fill();
    break;
  case "5":
    // draw a rectangle
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height/2);
    // draw a rectangle
    ctx.fillStyle = color2;
    ctx.fillRect(0, height/2, width, height/2);
    // draw a polygon
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(width/2,height/2);
    ctx.lineTo(0,height);
    ctx.fillStyle = color3;
    ctx.fill();
    break;
  case "6":
    // draw a rectangle
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height/2);
    // draw a rectangle
    ctx.fillStyle = color2;
    ctx.fillRect(0, height/2, width, height/2);
    // draw a rectangle
    ctx.fillStyle = color3;
    ctx.fillRect(0, 0, width/3, height/2);
    break;
  case "7":
    // draw a polygon
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(width,0);
    ctx.lineTo(0,height);
    ctx.fillStyle = color1;
    ctx.fill();
    // draw a polygon
    ctx.beginPath();
    ctx.moveTo(width,height);
    ctx.lineTo(0,height);
    ctx.lineTo(width,0);
    ctx.fillStyle = color2;
    ctx.fill();
    // draw a polygon
    ctx.beginPath();
    ctx.moveTo(0,height);
    ctx.lineTo(width/7,height);
    ctx.lineTo(width,height/7);
    ctx.lineTo(width,0);
    ctx.lineTo(6*width/7,0);
    ctx.lineTo(0,6*height/7);
    ctx.fillStyle = color3;
    ctx.fill();
    break;
  case "8":
    // draw a rectangle
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
	  // draw a polygon
    ctx.beginPath();
    ctx.moveTo(0,height);
    ctx.lineTo(width/7,height);
    ctx.lineTo(width,height/7);
    ctx.lineTo(width,0);
    ctx.lineTo(6*width/7,0);
    ctx.lineTo(0,6*height/7);
    ctx.fillStyle = color2;
    ctx.fill();
    // draw a polygon
    ctx.beginPath();
    ctx.moveTo(0,height);
    ctx.lineTo(width/10,height);
    ctx.lineTo(width,height/10);
    ctx.lineTo(width,0);
    ctx.lineTo(9*width/10,0);
    ctx.lineTo(0,9*height/10);
    ctx.fillStyle = color3;
    ctx.fill();
    break;
  case "9":
    // draw a polygon
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,height);
    ctx.lineTo(width,height);
    ctx.fillStyle = color1;
    ctx.fill();
    // draw a polygon
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(width,0);
    ctx.lineTo(width,height);
    ctx.fillStyle = color2;
    ctx.fill();
    // draw a polygon
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(width/7,0);
    ctx.lineTo(width,6*height/7);
    ctx.lineTo(width,height);
    ctx.lineTo(6*width/7,height);
    ctx.lineTo(0,height/7);
    ctx.fillStyle = color3;
    ctx.fill();
    break;
  case "10":
	  // draw a rectangle
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
	  // draw a polygon
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(width/7,0);
    ctx.lineTo(width,6*height/7);
    ctx.lineTo(width,height);
    ctx.lineTo(6*width/7,height);
    ctx.lineTo(0,height/7);
    ctx.fillStyle = color2;
    ctx.fill();
    // draw a polygon
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(width/10,0);
    ctx.lineTo(width,9*height/10);
    ctx.lineTo(width,height);
    ctx.lineTo(9*width/10,height);
    ctx.lineTo(0,height/10);
    ctx.fillStyle = color3;
    ctx.fill();
    break;
  case "11":
    // draw a rectangle
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    // draw a rectangle
    ctx.fillStyle = color2;
    ctx.fillRect(0, height/6, width, height/1.5);
    // draw a rectangle
    ctx.fillStyle = color3;
    ctx.fillRect(0, 2*height/6, width, height/3);
    break;
  case "12":
    // draw a rectangle
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height/2);
    // draw a rectangle
    ctx.fillStyle = color2;
    ctx.fillRect(0, height/2, width, height/2);
    // draw a rectangle
    ctx.fillStyle = color3;
    ctx.fillRect(0, 0, width/3, height);
    break;
  case "13":
    // draw a rectangle
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height/2);
    // draw a rectangle
    ctx.fillStyle = color2;
    ctx.fillRect(0, height/2, width, height/2);
    // draw a polygon
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(width,height/2);
    ctx.lineTo(0,height);
    ctx.fillStyle = color3;
    ctx.fill();
    break;
  case "14":
    // draw a rectangle
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    // draw a polygon
    ctx.beginPath();
    ctx.moveTo(0,height);
    ctx.lineTo(width,0);
    ctx.lineTo(width,height/5);
    ctx.fillStyle = color2;
    ctx.fill();
    // draw a polygon
    ctx.beginPath();
    ctx.moveTo(0,height);
    ctx.lineTo(width,height/5);
    ctx.lineTo(width,2*height/5);
    ctx.fillStyle = color3;
    ctx.fill();
    break;
  case "15":
      // draw a rectangle
      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, width, height);
	  // draw a polygon
	  ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(width/2,4*height/10);
	  ctx.lineTo(width,0);
      ctx.lineTo(width,height);
	  ctx.lineTo(width/2,6*height/10);
	  ctx.lineTo(0,height);
	  ctx.fillStyle = color2;
      ctx.fill();
	  // draw a polygon
	  ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(width/10,0);
      ctx.lineTo(width/2,4*height/10);
	  ctx.lineTo(9*width/10,0);
      ctx.lineTo(width,0);
	  ctx.lineTo(width,height/10);
      ctx.lineTo(6*width/10,height/2);
	  ctx.lineTo(width,9*height/10);
      ctx.lineTo(width,height);
      ctx.lineTo(9*width/10,height);
	  ctx.lineTo(width/2,6*height/10);
	  ctx.lineTo(width/10,height);
	  ctx.lineTo(0,height);
	  ctx.lineTo(0,9*height/10);
	  ctx.lineTo(4*width/10,height/2);
	  ctx.lineTo(0,height/10);
	  ctx.fillStyle = color3;
      ctx.fill();
	  break;
    case "16":
      // draw a rectangle
      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, width, height);
	  // draw a polygon
	  ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(width/10,0);
      ctx.lineTo(width/2,4*height/10);
	  ctx.lineTo(9*width/10,0);
      ctx.lineTo(width,0);
	  ctx.lineTo(width,height/10);
      ctx.lineTo(6*width/10,height/2);
	  ctx.lineTo(width,9*height/10);
      ctx.lineTo(width,height);
      ctx.lineTo(9*width/10,height);
	  ctx.lineTo(width/2,6*height/10);
	  ctx.lineTo(width/10,height);
	  ctx.lineTo(0,height);
	  ctx.lineTo(0,9*height/10);
	  ctx.lineTo(4*width/10,height/2);
	  ctx.lineTo(0,height/10);
	  ctx.fillStyle = color2;
      ctx.fill();
	  // draw a polygon
	  ctx.beginPath();
      ctx.moveTo(5*width/12,0);
      ctx.lineTo(7*width/12,0);
      ctx.lineTo(7*width/12,5*height/12);
	  ctx.lineTo(width,5*height/12);
      ctx.lineTo(width,7*height/12);
	  ctx.lineTo(7*width/12,7*height/12);
      ctx.lineTo(7*width/12,height);
	  ctx.lineTo(5*width/12,height);
      ctx.lineTo(5*width/12,7*height/12);
      ctx.lineTo(0,7*height/12);
	  ctx.lineTo(0,5*height/12);
	  ctx.lineTo(5*width/12,5*height/12);
	  ctx.fillStyle = color3;
      ctx.fill();
	  break;
    case "17":
	  // draw a rectangle
      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, width, height);
	  // draw a polygon
	  ctx.beginPath();
	  ctx.moveTo(0,0);
      ctx.lineTo(5*width/12,0);
	  ctx.lineTo(7*width/12,5*height/12);
	  ctx.lineTo(width,7*height/12);
	  ctx.lineTo(width,height);
	  ctx.lineTo(7*width/12,height);
	  ctx.lineTo(5*width/12,7*height/12);
	  ctx.lineTo(0,5*height/12);
	  ctx.fillStyle = color2;
      ctx.fill();
	  // draw a polygon
	  ctx.beginPath();
      ctx.moveTo(5*width/12,0);
      ctx.lineTo(7*width/12,0);
      ctx.lineTo(7*width/12,5*height/12);
	  ctx.lineTo(width,5*height/12);
      ctx.lineTo(width,7*height/12);
	  ctx.lineTo(7*width/12,7*height/12);
      ctx.lineTo(7*width/12,height);
	  ctx.lineTo(5*width/12,height);
      ctx.lineTo(5*width/12,7*height/12);
      ctx.lineTo(0,7*height/12);
	  ctx.lineTo(0,5*height/12);
	  ctx.lineTo(5*width/12,5*height/12);
	  ctx.fillStyle = color3;
      ctx.fill();
	  break;
    case "18":
	  // draw a rectangle
      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, width, height);
	  // draw a polygon
	  ctx.beginPath();
      ctx.moveTo(2*width/10,0);
      ctx.lineTo(4.75*width/10,0);
      ctx.lineTo(4.75*width/10,3.5*height/10);
	  ctx.lineTo(width,3.5*height/10);
      ctx.lineTo(width,6.5*height/10);
	  ctx.lineTo(4.75*width/10,6.5*height/10);
      ctx.lineTo(4.75*width/10,height);
	  ctx.lineTo(2*width/10,height);
      ctx.lineTo(2*width/10,6.5*height/10);
      ctx.lineTo(0,6.5*height/10);
	  ctx.lineTo(0,3.5*height/10);
	  ctx.lineTo(2*width/10,3.5*height/10);
	  ctx.fillStyle = color2;
      ctx.fill();
	  // draw a polygon
	  ctx.beginPath();
      ctx.moveTo(3*width/12,0);
      ctx.lineTo(5*width/12,0);
      ctx.lineTo(5*width/12,5*height/12);
	  ctx.lineTo(width,5*height/12);
      ctx.lineTo(width,7*height/12);
	  ctx.lineTo(5*width/12,7*height/12);
      ctx.lineTo(5*width/12,height);
	  ctx.lineTo(3*width/12,height);
      ctx.lineTo(3*width/12,7*height/12);
      ctx.lineTo(0,7*height/12);
	  ctx.lineTo(0,5*height/12);
	  ctx.lineTo(3*width/12,5*height/12);
	  ctx.fillStyle = color3;
      ctx.fill();
	  break;
    case "19":
      // draw a rectangle
      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, width, height);
	  // draw a rectangle
      ctx.fillStyle = color2;
	  ctx.fillRect(0, 2*height/3, width, height/3);
	  // draw a rectangle
      ctx.fillStyle = color3;
	  ctx.fillRect(0, 0, width/6, height);
	  break;
    case "20":
	  // draw a rectangle
      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, width, height/5);
	  // draw a rectangle
      ctx.fillStyle = color2;
      ctx.fillRect(0, height/5, width, height/5);
	  // draw a rectangle
      ctx.fillStyle = color1;
      ctx.fillRect(0, 2*height/5, width, height/5);
	  // draw a rectangle
      ctx.fillStyle = color2;
      ctx.fillRect(0, 3*height/5, width, height/5);
	  // draw a rectangle
      ctx.fillStyle = color1;
      ctx.fillRect(0, 4*height/5, width, height/5);
	  // draw a rectangle
      ctx.fillStyle = color3;
	  ctx.fillRect(0, 0, 2.25*width/5, 3*height/5);
	  break;
    case "21":
	  // draw a rectangle
      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, width, height);
	  // draw a rectangle
      ctx.fillStyle = color2;
      ctx.fillRect(0, 0, width/2, height/2);
	  // draw a rectangle
      ctx.fillStyle = color3;
      ctx.fillRect(width/2, height/2, width/2, height/2);
	  break;
    case "22":
	  // draw a rectangle
	  ctx.fillStyle = color1;
	  ctx.fillRect(0, 0, width, height);
	  // draw a polygon
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(width/2,height/2);
      ctx.lineTo(0,height);
	  ctx.fillStyle = color2;
      ctx.fill();
	  // draw a polygon
	  ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(width/10,0);
      ctx.lineTo(width/2,4*height/10);
	  ctx.lineTo(width,4*height/10);
      ctx.lineTo(width,6*height/10);
	  ctx.lineTo(width/2,6*height/10);
	  ctx.lineTo(width/10,height);
	  ctx.lineTo(0,height);
	  ctx.lineTo(0,9*height/10);
	  ctx.lineTo(4*width/10,height/2);
	  ctx.lineTo(0,height/10);
	  ctx.fillStyle = color3;
      ctx.fill();
	  break;
    case "23":
      // draw a rectangle
      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, width, height);
	  // draw a rectangle
      ctx.fillStyle = color2;
      ctx.fillRect(0, height/6, width, height/1.5);
	  // draw a rectangle
      ctx.fillStyle = color3;
      ctx.fillRect(0, height/4, width, height/2);
	  break;
    case "24":
      // draw a rectangle
      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, width, height);
	  // draw a rectangle
      ctx.fillStyle = color2;
      ctx.fillRect(0, height/4, width, height/2);
	  // draw a rectangle
      ctx.fillStyle = color3;
      ctx.fillRect(0, 2*height/6, width, height/3);
	  break;
    case "25":
      // draw a rectangle
      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, width, height/2);
	  // draw a rectangle
      ctx.fillStyle = color2;
      ctx.fillRect(0, 2*height/4, width, height/4);
	  // draw a rectangle
      ctx.fillStyle = color3;
      ctx.fillRect(0, 3*height/4, width, height / 4);
	  break;
    case "26":
      // draw a rectangle
      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, width, height);
	  // draw a polygon
      ctx.beginPath();
      ctx.moveTo(0,height);
	  ctx.lineTo(width,3*height/5);
	  ctx.lineTo(width,0);
      ctx.lineTo(2*width/5,0);
	  ctx.fillStyle = color2;
      ctx.fill();
	  // draw a polygon
      ctx.beginPath();
      ctx.moveTo(0,height);
      ctx.lineTo(4*width/5,0);
	  ctx.lineTo(width,0);
      ctx.lineTo(width,height/5);
	  ctx.fillStyle = color3;
      ctx.fill();
	  break;
    case "27":
	  // draw a polygon
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(width,0);
      ctx.lineTo(0,height);
	  ctx.fillStyle = color1;
      ctx.fill();
	  // draw a polygon
      ctx.beginPath();
      ctx.moveTo(width,height);
      ctx.lineTo(0,height);
      ctx.lineTo(width,0);
	  ctx.fillStyle = color2;
      ctx.fill();
	  // draw a polygon
      ctx.beginPath();
      ctx.moveTo(0,height);
      ctx.lineTo(width/4,height);
      ctx.lineTo(width,height/4);
	  ctx.lineTo(width,0);
      ctx.lineTo(3*width/4,0);
	  ctx.lineTo(0,3*height/4);
	  ctx.fillStyle = color3;
      ctx.fill();
	  break;
    case "28":
	  // draw a polygon
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(width,0);
      ctx.lineTo(width,height);
	  ctx.fillStyle = color1;
      ctx.fill();
	  // draw a polygon
      ctx.beginPath();
      ctx.moveTo(width,height);
      ctx.lineTo(0,height);
      ctx.lineTo(0,0);
	  ctx.fillStyle = color2;
      ctx.fill();
	  // draw a polygon
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(width/4,0);
      ctx.lineTo(width,3*height/4);
	  ctx.lineTo(width,height);
      ctx.lineTo(3*width/4,height);
	  ctx.lineTo(0,height/4);
	  ctx.fillStyle = color3;
      ctx.fill();
    break;
  case "29":
    // draw a rectangle
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width / 3, height);
    // draw a rectangle
    ctx.fillStyle = color2;
    ctx.fillRect(width / 5, 0, 2 * width / 3, height);
    // draw a rectangle
    ctx.fillStyle = color3;
    ctx.fillRect(4 * width / 5, 0, width / 5, height);
  }
}

function styleSelect(buttonName) {
  document.getElementById("debug").innerHTML = buttonName;
}
