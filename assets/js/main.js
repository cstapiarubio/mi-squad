
function MiembroSquad(nombre, apellido, edad, hobbies){
	this.nombre =nombre;
	this.apellido=apellido;
	this.edad= edad;
	this.hobbies = hobbies;
}
var cami=new MiembroSquad("Camila", "Saez",24,"Origami");
var anto=new MiembroSquad("Antonia", "Cerda",23,"Diseñar");
var fran=new MiembroSquad("Francisca", "Ojeda",28,"Roller Derby");
var cote=new MiembroSquad("María José", "Rodríguez",32,"Ver series");
var mariajo=new MiembroSquad("María José", "Pozo",31,"Bailar");
var val=new MiembroSquad("Valentina", "Saavedra",26,"Medicina autogestiva");
var marion=new MiembroSquad("Marion", "Castillo",29,"Caminar");
var caro=new MiembroSquad("Carolina", "Tapia",27,"Hacer trekking");
var bel=new MiembroSquad("Belén", "Recabal",18,"Andar en bici");


// Muestra el primer nombre de persona1
alert ('persona1 es ' + persona1.primerNombre); // muestra "persona1 es Alicia"
alert ('persona2 es ' + persona2.primerNombre); // muestra "persona2 es Sebastian"

/*function recorrer(){
	var compañeraCami = document.getElementById("cami").value;
	var  compañeraAnto= document.getElementById("anto").value;
	var  compañeraFran= document.getElementById("fran").value;
    var compañeraCote = document.getElementById("cote").value;
    var compañeraMariajo = document.getElementById("mariajo").value;
	var  compañeraVal= document.getElementById("val").value;
	var  compañeraMarion= document.getElementById("marion").value;
    var  compañeraCaro= document.getElementById("caro").value;
	var  compañeraBel= document.getElementById("bel").value;*/

	//function recorrerSquad(){ 

		var espacioPelea= document.getElementById("espacio");
		var mensaje = (peleador1.nombre + " atacó a " + peleador2.nombre + " y solo le queda " + peleador2.vida + " puntos de vida");
		espacioPelea.innerHTML =mensaje;
