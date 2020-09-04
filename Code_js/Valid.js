let input = document.getElementById("y_param");
let error = document.getElementById("Error");
let value_X = 0;
let value_Y = 0;
let flag = true;

function set_X(id){
	value_X = document.getElementById(id).value;
	document.getElementById('label_x').innerText = "X = " + value_X;
}


function check_input(){
	if(!/^-?\d+(\.|,)?\d*$/i.test(input.value)){
		error.textContent = "Ошибка: Значение \"Y\" не валидно";
		input.value = "";
		flag = false;
	}else{
		error.textContent = "";
		value_Y = input.value.replace(/[,]/,".");
		if(value_Y<-5 && value_Y>5){
			error.textContent = "Ошибка: Выход за пределы, введите число в интервале [-5;5]";
			input.value = "";
			flag = false;
		}else if(Number(value_Y.split(".")[0]) >=5 && Number(value_Y.split(".")[1])>0){
			error.textContent = "Ошибка: Выход за пределы, введите число в интервале [-5;5]";
			input.value = "";
			flag = false;
		}else if(Number(value_Y.split(".")[0]) <=-5 && Number(value_Y.split(".")[1])>0){
			error.textContent = "Ошибка: Выход за пределы, введите число в интервале [-5;5]";
			input.value = "";
			flag = false;
		}else {
			document.getElementById('label_y').innerText = "Y = " + input.value;
			flag = true;
		}
	}

}

let button = document.getElementById("button");

button.onclick = function() {
	check_input();
	if(flag) {
		postData();
	}
}