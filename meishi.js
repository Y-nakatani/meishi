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
function viewData(count){
	var str = JSON.stringify({
		"部署": department.value,
		"所属": team.value,
		"氏名": userName.value,
		"mail": address.value,
	});
	//todo: クリックされるたびにユニークkeyが設定される
	localStorage.setItem("key", str);
	var dataViewContent = document.getElementById("data1");
	var tmp = localStorage.getItem("key");
	var obj = JSON.parse(tmp);
	for (let i = 0; i<localStorage.length; i++){
		dataViewContent.innerHTML = "<div class='col2__inner_data' onclick='popData()'> data1:"+ tmp + "</div>";
	}
	console.log(localStorage.length);
	console.log(department.value, team.value, userName.value, address.value);
}
function popData(){
	console.log("ok");
}
function countUp(countUpValue){
	var countUpValue = 0;
	return countUpValue++;
}
