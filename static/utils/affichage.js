/*
Utilitaire pour grossir les entrées-sorties :
	- les affichages sont redirigés vers la balise "output"
	- la question posée dans une boite de saisie standard est redirigée vers la balise "output"
	
Cet utilitaire permet également de gérer le pliage et le dépliage de Blockly

Instructions (adaptables) pour créer ensuite les balises (voir demo_affichage.html par exemple) :

	<pre id="message" class="message"></pre>
	<pre id="output"  class="output"></pre>
	<style>
		.output { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 20pt ;font-weight:normal; color:blue}
		.message { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 20pt ;font-weight:normal; color:red}
	</style>
	
Attention : ...

*/


function Print(texte) {
	var txt = (typeof texte !== 'undefined') ? texte : '';
	var mypre =document.getElementById("output");
	mypre.innerHTML = mypre.innerHTML + txt;
}
function Println(texte) {
	var txt = (typeof texte !== 'undefined') ? texte : '';
	var mypre =document.getElementById("output");
	mypre.innerHTML = mypre.innerHTML + txt + "\n";
}
function effacerOutput() {
	var mypre =document.getElementById("output");
	mypre.innerHTML = "";
}
function Message(texte) {
	var txt = (typeof texte !== 'undefined') ? texte : '';
	var mypre =document.getElementById("message");
	mypre.innerHTML =  txt;
}
function effacerMessage() {
	var mypre =document.getElementById("message");
	mypre.innerHTML = "";
}

window.alert = function(texte) {
	var txt = (typeof texte !== 'undefined') ? texte : '';
	var mypre =document.getElementById("output");
	mypre.innerHTML = mypre.innerHTML + txt + "\n";
}
/*
prompt_bak = window.prompt;
window.prompt= function(msg) {
	Message("question : " + msg + "\n"+ "---> tapez votre réponse au clavier, puis validez (touche Entrée ou bouton OK)");
	var rep = prompt_bak(msg);
	//if(navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
		effacerMessage();
	//}
	return rep;
}
*/

function plierDeplier() {
	var obj=document.getElementById("blocklyDiv"); 
	try {
		if(obj.style.height != "0px") {
			obj.style.height="0px";
			Blockly.svgResize(Blockly.mainWorkspace);
			obj.style.visibility = 'hidden';
	   	 }  else {
			obj.style.visibility = 'visible';
			obj.style.height="590px";/*(window.innerHeight-200) + "px";*//*kar*/
			Blockly.svgResize(Blockly.mainWorkspace);
		}
	} catch (e) {
		alert(e);
	}
}