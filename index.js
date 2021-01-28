var chf_eur = '{"eur": 0.93, "chf": 1.08 }';
var chf_usd = '{"usd": 1.12, "chf": 0.89 }';

function convertChfEur(){
	var json_obj = JSON.parse(chf_eur);
	if (document.getElementById('title_chf_eur').innerHTML == "CHF - EUR"){
		if (document.getElementById('convert_chf_eur').value == "" || document.getElementById('convert_chf_eur').value <= 0){
			alert('Sie müssen eine Zahl die grösser als 0 ist eingeben.');
		}
		else{
			document.getElementById('title_chf_eur').innerHTML = "EUR - CHF";
			document.getElementById('convert_chf_eur').value = document.getElementById('convert_chf_eur').value * json_obj.eur;
		}
	}
	else{
		if (document.getElementById('convert_chf_eur').value == "" || document.getElementById('convert_chf_eur').value <= 0){
		alert('Sie müssen eine Zahl die grösser als 0 ist eingeben.');
		}
		else{
			document.getElementById('title_chf_eur').innerHTML = "CHF - EUR";
			document.getElementById('convert_chf_eur').value = document.getElementById('convert_chf_eur').value * json_obj.chf;
		}
	}
};

function convertChfUsd(){
	var json_obj = JSON.parse(chf_usd)
	if (document.getElementById('title_chf_usd').innerHTML == "CHF - USD"){
		if(document.getElementById('convert_chf_usd').value == "" || document.getElementById('convert_chf_usd').value <= 0){
			alert('Sie müssen eine Zahl die grösser als 0 ist eingeben.');
		}
		else{
			document.getElementById('title_chf_usd').innerHTML = "USD - CHF";
			document.getElementById('convert_chf_usd').value = document.getElementById('convert_chf_usd').value * json_obj.usd;
		}
	}
	else{
		if(document.getElementById('convert_chf_usd').value == "" || document.getElementById('convert_chf_usd').value <= 0){
			alert('Sie müssen eine Zahl die grösser als 0 ist eingeben.');
		}
		else{
			document.getElementById('title_chf_usd').innerHTML = "CHF - USD";
			document.getElementById('convert_chf_usd').value = document.getElementById('convert_chf_usd').value * json_obj.chf;
		}
	}
};

function randomBgColor(){
	let rgb = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
	var bg_color = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
	document.body.style.backgroundColor = bg_color;
};