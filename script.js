// Created by Harsh 

window.onload = () =>{
    const cnv = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    cnv.height= window.innerHeight;
    cnv.width = window.innerWidth;
    function par(a,x,y){
        this.a = a;
        this.x = x;
        this.y = y;
        this.update = function(){
 ctx.font = "35px Arial";
         ctx.fillText(this.a,this.x,this.y)
         this.y+=1;
         this.x+=Math.random()*0.4;
         this.x-=Math.random()*0.4;
        }
    }
    let arr = [];
    let p_list = ["🎊","🎉","🎁","🍬🍭","🍫"]
    function Shower(){
           
        arr.push(new par(p_list[Math.floor(Math.random()*p_list.length)],Math.random()*cnv.width,0))
    }
    function Shower2(){
    ctx.clearRect(0,0,cnv.width,cnv.height)
        for(let i=0;i<arr.length;i++){
            arr[i].update();
            if(arr[i].y>= cnv.height){
                arr.splice(1,i)
            }
        }
    }
    setInterval(Shower2,5)
    setInterval(Shower,400)

window.addEventListener("resize",()=>{
cnv.width = innerWidth;
cnv.height = innerHeight;
});
}