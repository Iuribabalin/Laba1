let data_cookies="";
let flagErrorX = false;
let saveY
function postData(){
    const xhr = new XMLHttpRequest();

    saveY = value_Y

    analysis_param(delete_Virgule(value_Y),"Y");
    analysis_param(delete_Virgule(value_X),"X");

    if(!flagErrorX) {
        var body = 'x=' + encodeURIComponent(delete_Virgule(value_X)) +
            '&y=' + encodeURIComponent(delete_Virgule(saveY)) +
            '&r=' + encodeURIComponent(delete_Virgule(R)) +
            '&YY=' + encodeURIComponent(delete_Virgule(value_Y));

        xhr.open("POST", 'treatment.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.addEventListener('readystatechange', function () {
            if ((xhr.readyState === 4) && (xhr.status === 200)) {
                if (Cookies.get('data_iurii') !== undefined) {
                    data_cookies = Cookies.get('data_iurii');
                }
                data_cookies += check_good_php(xhr.responseText);
                Cookies.set("data_iurii", data_cookies);
                addToTable();
            }
        });
        xhr.send(body);
    }
}

function check_good_php(param) {
    if(param.split("/")[0].split(";")[0] === '1'){
        alert("Ошибка в отправленных данных");
    }else{
        drawPoint(value_X * 10, saveY * 10, R * 10);
        return param;
    }
}

function delete_Virgule(value){
    if(/,/i.test(value)){
        return(value.replace(/[,]/,"."));
    }else{
        return (value);
    }
}

function analysis_param(analysis, name){
    if(name === "Y") {
        if (Number(analysis.split(".")[0]) == R && Number(analysis.split(".")[1]) > 0) {
            value_Y = Number(value_Y) + 1
        } else if (Number(analysis.split(".")[0]) <= -R && Number(analysis.split(".")[1]) > 0) {
            value_Y = Number(value_Y) + 1
        }
    }else{
        if(analysis === "-3" || analysis === "-2" || analysis === "-1" || analysis === "0" || analysis === "1" || analysis === "2"
            || analysis === "3" || analysis === "4" || analysis === "5"){
            flagErrorX = false;
        }else{
            flagErrorX = true;
            if(analysis === 0){
                flagErrorX = false;
            }else
                alert("Не трогайте, пожалуйста, 'X' он хороший =)")
        }
    }
}