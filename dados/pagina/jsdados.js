
    function jogaDado(num) {
        var resp=document.getElementById("resultado");
        resp.innerHTML="";
        quant=Number(prompt('qual a quantidade de dados?<br>'))
        for(var cont=1;cont<=quant;cont++){
            dado=Math.ceil(Math.random()*num)
            finval=finval+dado
            resp.innerHTML += (`valor do dado d${num}: ${dado}<br>`)           
        }
        resp.innerHTML += (`valor final ${finval}`)
    }


document.getElementById('hideFOR').addEventListener('click', function(){
    var periciascomfor=document.getElementById('periciasFOR');
    periciascomfor.classList.toggle("invisible");
});

document.getElementById('hideDES').addEventListener('click', function(){
    var periciascomdes=document.getElementById('periciasDES');
    periciascomdes.classList.toggle("invisible");
});

document.getElementById('hideCON').addEventListener('click', function(){
    var periciascomcon=document.getElementById('periciasCON');
    periciascomcon.classList.toggle("invisible");
});

document.getElementById('hideINT').addEventListener('click', function(){
    var periciascomint=document.getElementById('periciasINT');
    periciascomint.classList.toggle("invisible");
});

document.getElementById('hideSAB').addEventListener('click', function(){
    var periciascomsab=document.getElementById('periciasSAB');
    periciascomsab.classList.toggle("invisible");
});

document.getElementById('hideCAR').addEventListener('click', function(){
    var periciascomcar=document.getElementById('periciasCAR');
    periciascomcar.classList.toggle("invisible");
});



var bot1,bot2,bot3,quant,finval,dado
finval=0
document.getElementById("but1").addEventListener("click",function(){
    jogaDado(2);
});

document.getElementById("but2").addEventListener("click", function() {
    jogaDado(4);
});
document.getElementById("but3").addEventListener("click", function() {
    jogaDado(6);
});
document.getElementById("but4").addEventListener("click", function() {
    jogaDado(8);
});
document.getElementById("but5").addEventListener("click", function() {
    jogaDado(10);
});
document.getElementById("but6").addEventListener("click", function() {
    jogaDado(12);
});
document.getElementById("but7").addEventListener("click", function() {
    jogaDado(20);
});
document.getElementById("but8").addEventListener("click", function() {
    jogaDado(100);
});


// set atributos


var level,str,dex,con,int,kno,car


document.getElementById('lv').addEventListener('click',function(){
    level=Number(prompt('qual seu lv'))
});

document.getElementById('str').addEventListener('click',function(){
    str=Number(prompt('qual sua FOR'))
});

document.getElementById('dex').addEventListener('click',function(){
    dex=Number(prompt('qual sua DES'))
});

document.getElementById('con').addEventListener('click',function(){
    con=Number(prompt('qual sua CON'))
});

document.getElementById('int').addEventListener('click',function(){
    int=Number(prompt('qual sua INT'))
});

document.getElementById('kno').addEventListener('click',function(){
    kno=Number(prompt('qual sua SAB'))
});

document.getElementById('car').addEventListener('click',function(){
    car=Number(prompt('qual seu CAR'))
});