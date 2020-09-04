canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
let R = 5;

function get_R_value(){
    if (document.getElementById('r1').checked) {
        R = document.getElementById('r1').value;
    }else if (document.getElementById('r2').checked) {
        R = document.getElementById('r2').value;
    }else if (document.getElementById('r3').checked) {
        R = document.getElementById('r3').value ;
    }else if (document.getElementById('r4').checked) {
        R = document.getElementById('r4').value;
    }else if (document.getElementById('r5').checked) {
        R = document.getElementById('r5').value;
    }
    document.getElementById('label_r').innerText = "R = " + R;
}

function drawPoint(x,y,r) {
    if(x > r+5 || y > r+5 || x < -1 * r-5 || y < -1 *r-5 ){
        alert('Выход за пределы видимости графика\nНе могу отобразить точку');
        draw();
    }else {
        draw();
        ctx.fillStyle = "rgba(255, 0, 0, 1)";
        ctx.beginPath();
        ctx.moveTo(150, 70);
        ctx.arc(150 + 50 * x / r, 70 - 50 * y / r, 3, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}

function draw(){
    get_R_value();

    ctx.clearRect(0, 0, 1000, 1000);

    ctx.fillStyle = "rgba(91,95,201,1)";
    ctx.beginPath();
    ctx.moveTo(150, 70);
    //отображаем сектор круга
    ctx.arc(150, 70, 50, 0, 7 * Math.PI / 2, true);
    //отображаем прмоугольник
    ctx.fillRect(150, 70, 25, 50);
    //отображаем треугольник
    ctx.moveTo(150,70);
    ctx.lineTo(125,70);
    ctx.lineTo(150,45);
    ctx.fill();

    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.beginPath();
    //отображение линии x
    ctx.moveTo(150,70);
    ctx.lineTo(220,70);
    //отрисовка стрелки
    ctx.lineTo(215,75);
    ctx.moveTo(220,70);
    ctx.lineTo(215,65);
    //
    ctx.fillText('X',220,65);
    ctx.moveTo(150,70);
    ctx.lineTo(80,70);

    //подпись значений x
    ctx.moveTo(175,75);
    ctx.lineTo(175,65);
    ctx.fillText(R/2 ,170,63);
    ctx.moveTo(200,75);
    ctx.lineTo(200,65);
    ctx.fillText(R,197,63);

    ctx.moveTo(125,75);
    ctx.lineTo(125,65);
    ctx.fillText(-1*R/2 ,114,63);
    ctx.moveTo(100,75);
    ctx.lineTo(100,65);
    ctx.fillText(-1*R,96,63);

    //отображение линии y
    ctx.moveTo(150,70);
    ctx.lineTo(150,140);
    ctx.moveTo(150,70);
    ctx.lineTo(150,5);
    //отрисовка стрелки
    ctx.lineTo(155,10);
    ctx.moveTo(150,5);
    ctx.lineTo(145,10);
    //
    ctx.fillText('Y',155,15);

    //подпись значений x
    ctx.moveTo(145,95);
    ctx.lineTo(155,95);
    ctx.fillText(-1*R/2 ,160,100);
    ctx.moveTo(145,120);
    ctx.lineTo(155,120);
    ctx.fillText(-1*R ,160,123);

    ctx.moveTo(145,45);
    ctx.lineTo(155,45);
    ctx.fillText(R/2,160,48);
    ctx.moveTo(145,20);
    ctx.lineTo(155,20);
    ctx.fillText(R,160,25);

    ctx.closePath();
    ctx.stroke();
}

 draw();