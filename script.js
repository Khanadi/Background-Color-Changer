document.getElementById('btn').addEventListener("click", function (){
    var a = Math.floor(Math.random()*100);
    var b = Math.floor(Math.random()*100);
    var c = Math.floor(Math.random()*100);
    document.body.style.backgroundColor = "rgb("+a+","+b+","+c+")";
})