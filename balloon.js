const balloonCont = {
variable:{
    balloonContainer : document.getElementById("balloon-container"),
},
method:{
    random: function(num) {
        return Math.floor(Math.random() * num);
      },
      getRandomStyles: function() {
        var r = balloonCont.method.random(255);
        var g = balloonCont.method.random(255);
        var b = balloonCont.method.random(255);
        var mt = balloonCont.method.random(200);
        var ml = balloonCont.method.random(50);
        var dur = balloonCont.method.random(5) + 5;
        return `
        background-color: rgba(${r},${g},${b},0.7);
        color: rgba(${r},${g},${b},0.7); 
        box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
        margin: ${mt}px 0 0 ${ml}px;
        animation: float ${dur}s ease-in infinite
        `;
      },
      createBalloons:function(num) {
        for (var i = num; i > 0; i--) {
          var balloon = document.createElement("div");
          balloon.className = "balloon";
          balloon.style.cssText = balloonCont.method.getRandomStyles();
          balloonCont.variable.balloonContainer.append(balloon);
        }
      },
      removeBalloons:function() {
        balloonCont.variable.balloonContainer.style.opacity = 0;
        setTimeout(() => {
            balloonCont.variable.balloonContainer.remove()
        }, 500)
      },
      init:function(){
        window.addEventListener("load", () => {
            balloonCont.method.createBalloons(30)
          });
          
          window.addEventListener("click", () => {
            balloonCont.method.removeBalloons();
          });
      }
}
}
export default balloonCont;