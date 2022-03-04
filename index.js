var w = window.innerWidth;
var h = window.innerHeight;
var side = 50;


var x1,x2,x3,x4,y1,y2,y3,y4;

var ran = [];
var ys1=[];
var ys2=[];

for(var i = 0; i < 10; i++){
    ran.push(i);
    ran.push(i*-1);
}

var colors=["green","cyan","blue","yellow","olive","red","violet",
"orange","brown","pink","purple","grey","teal","aquamarine"];

function setup(){
    createCanvas(w,h);
    noLoop();
    strokeWeight(1);
}

function draw(){

    y1 = 1;
    
    for(var j = 1;j<=12;j++){
        x4 = 1;
        y4 = y1+side;
        x1 = 1;
        for(var i = 0;i<=24;i++){
            let a = random(ran);  
            fill(random(colors));
            x2 = x1+side+a;
            if(j==1){
                y1=1;
                y2=1;
            }else if(j%2==1) {
                y1=ys2[i];
                y2=ys2[i+1];
            } else if(j%2==0){
                y1=ys1[i];
                y2=ys1[i+1];
            }
            x3=x1+side-a;
            y3=y1+side+a;
            quad(x1,y1,x2,y2,x3,y3,x4,y4);
            if(j%2==1){
                ys1[i]=y4;
                ys1[i+1]=y3;    
            }else if(j%2==0){
                ys2[i]=y4;
                ys2[i+1]=y3;
            }
            x1 = x2;
            y1=y2;
            x4=x3;
            y4=y3;

        }
        i=0;
        if(j%2==1){
            ys1[i]=y4;
            ys1[i+1]=y3;    
        }else if(j%2==0){
            ys2[i]=y4;
            ys2[i+1]=y3;
        }
    }
}

