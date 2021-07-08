
peri=0;
area=0;
function cal(){
    length=document.getElementById("side").value;
a=length*length;
console.log(area);
p=length*4;
console.log(peri);
document.getElementById("area").innerHTML=a;
document.getElementById("fence").innerHTML=p;
}