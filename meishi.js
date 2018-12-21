function getDepartment(){
	//部署取得
	var department = document.getElementById("department").value;
	var rd = document.getElementById("resultDepartment");
	rd.innerHTML = department;
}
function getTeam(){
	//所属取得
	var team = document.getElementById("team").value;
	var rt = document.getElementById("resultTeam");
	rt.innerHTML = team;
}
function getName(){
	//氏名取得
	var name = document.getElementById("userName").value;
	var rn = document.getElementById("resultName");
	rn.innerHTML = name;
}
function getAddress(){
	//アドレス取得
	var address = document.getElementById("address").value;
	var ra = document.getElementById("resultAddress");
	ra.innerHTML = address;
}
function viewData(){
	var datalist = {
		data1: department.value, 
		data2: team.value, 
		data3: userName.value,
		data4: address.value,
	}
	localStorage.setItem("datalist", JSON.stringify(datalist));
	console.log(department.value, team.value, userName.value, address.value);
}
