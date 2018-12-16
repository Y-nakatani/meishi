function getDepartment(){
	//部署取得
	var department = document.getElementById("department").value;
	console.log(department);
}
function getTeam(){
	//所属取得
	var team = document.getElementById("team").value;
	console.log(team);
}
function getName(){
	//氏名取得
	var name = document.getElementById("name").value;
	console.log(name);
}
function getAddress(){
	//アドレス取得
	var address = document.getElementById("address").value;
	console.log(address);
}
function viewData(){
	//取得したものをviewに表示
	getDepartment();
	getTeam();
	getName();
	getAddress();
}
