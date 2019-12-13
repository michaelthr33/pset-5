window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = rectangle;
    document.getElementById("drawcoloredrectangle").onclick = drawcoloredrectangle;
    document.getElementById("drawtriangle").onclick = drawTriangle;
    document.getElementById("drawsmile").onclick = drawsmile;
    document.getElementById("pyramid").onclick = drawpyramid

}

/*
 * Exercise 1.
 */

const sayHello = function() {
    const canvas = document.getElementById("student-canvas-1");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0, canvas.width, canvas.height);
    do
    {
      var message = prompt ("Message: ")
      if (message.length>50)
      {
        alert ("Your Message is too long. Keep it under 50 charachters.")
      }
    } while(message.length>50);

    ctx.font = "48px sans-serif";
    ctx.strokeText(message,30,70,994);
};

/*
 * Exercise 2.
 */

const rectangle = function() {
  var canvas = document.getElementById("student-canvas-2");
  const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  do
  {
    var width = Number(prompt ("Width: "))
    var height= Number(prompt ("Height: "))
    var x = Number(prompt("X: "))
    var y = Number(prompt("Y: "))

    if (width>=1024||width<=1)
    {
      alert("Your width must be between 1 and 1024.")
    }

    else if (height<=1||height>=512)
    {
      alert("Your height must be between 1 and 512")
    }
    else if (x<=1||x>=1024)
    {
      alert("Your x-coordinate must be between 1 and 1024")
    }
    else if (y<=1||y>=512)
    {
      alert("Your y-coordinate must be between 1 and 512")
    }
  }while(width>=1024||width<=1||width>=1024||height<=1||height>=512||x>=1024||x<=1||y<=1||y>=512)
  ctx.beginPath();
  ctx.rect (x, y, width, height);
  ctx.stroke();
};

/*
 * Exercise 3.
 */

const drawcoloredrectangle = function()
{//
  //
    var canvas = document.getElementById("student-canvas-3");//
    const ctx =canvas.getContext("2d");//
    ctx.clearRect(0,0,canvas.width,canvas.height);//
    do//
    {//
       var color = prompt ("Color: ")
       color=color.toLowerCase()
        if(color=="black")//
        {//
          ctx.fillStyle="black";//
        }//

        else if(color=="blue")//
        {//
          ctx.fillStyle="blue";//
        }//

        else if(color=="green")//
        {//
          ctx.fillStyle="green";//
        }//
        else if(color=="orange")//
        {//
          ctx.fillStyle="orange";//
        }
        else if(color=="purple")
        {
          ctx.fillStyle="purple"
        }
        else if(color=="red")
        {
          ctx.fillStyle="red"
        }
        else if (color=="yellow")
        {
          ctx.fillStyle="yellow"
        }
        else  {alert(""+color+" is not a supported color.");color="invalid";ctx.fillStyle="white";};//
        ctx.beginPath();//
        ctx.fillRect(10,10,100,50);//
        ctx.stroke();//
      } while (color=="invalid")//
    }

/*
 * Exercise 4.
 */

const drawTriangle = function()
{
    var canvas = document.getElementById("student-canvas-4")
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    do
    {
      var sideone = prompt ("Side 1: ")
      var sidetwo = prompt ("Side 2: ")
      var sidethree = prompt ("Side 3: ")

      if (isNaN(sideone)||isNaN(sidetwo)||isNaN(sidethree))
      {
        alert("One of your sides is not a number")
      }


      sideone=Number(sideone);
      sidetwo=Number(sidetwo);
      sidethree=Number(sidethree);

      var hypotenuse=Math.max(sideone,sidetwo,sidethree);
      var height=Math.min(sideone,sidetwo,sidethree);
      var base=sideone+sidetwo+sidethree;
      base=base-hypotenuse-height;
      var test= Math.hypot(base,height);
      if (test>hypotenuse||test<hypotenuse);
      {
        alert("That's not a vaild right triangle.")
      }

    }while(test>hypotenuse||test<hypotenuse);
if (hypotenuse==test)
{
  height=height+25;
  base=base+25;
  ctx.beginPath();
  ctx.moveTo(25,25);
  ctx.lineTo(25, height);
  ctx.lineTo(base,height);
  ctx.lineTo(25,25);
  ctx.stroke();

}
}

/*
 * Exercise 5.
 */

const drawsmile = function()
{
    const canvas = document.getElementById("student-canvas-5");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);

    do
    {
      var radius = prompt("Radius: ")
      if (radius<32)
      {
        alert("Your radius must be at least 32.")
      }
    if (radius>256)
    {
      alert("Your smiley face won't fit on the canvas.")
    }

  } while(radius>256||radius<32)
    var eyes=0.15*radius
    var mouth = 0.7*radius
    ctx.beginPath()
    ctx.arc(512,256,radius,0,2*Math.PI)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.arc (512,256,mouth,0,Math.PI)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath();
    ctx.arc(512 + 0.4*radius, 256-0.4*radius,eyes,0,2*Math.PI);
    ctx.stroke()
    ctx.closePath()
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {}
    // write your exercise 5 code here
;
