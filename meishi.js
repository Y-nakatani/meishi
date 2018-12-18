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
	var name = document.getElementById("name").value;
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
		data1: "department",
		data2: "team",
		data3: "name",
		data4: "address"
	}
	console.log(datalist);
}
