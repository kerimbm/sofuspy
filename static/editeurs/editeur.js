/*
Utilitaire pour gerer un editeur
*/

function plierDeplierEditeur() {
	var obj=document.getElementById("editor"); 
	if(obj.style.height != "0px") {
		obj.style.height="0px";
		obj.style.visibility = 'hidden';
	}  else {
		obj.style.visibility = 'visible';
		obj.style.height=(window.innerHeight-200) + "px";
		editor.resize();
	}
}

function tabuler(code) {
	tabus="";
	for(k=1; k<=10; k++) {
		code = code.split("\n" + tabus + "  ").join("\n" + tabus + "\t");
		tabus += "\t";
	}
	return code;
}

function blocklyToEditor(editor, texte) {
// montrer editeur
	document.getElementById("editor").style.visibility = 'visible';
	document.getElementById("editor").style.height = (window.innerHeight-200) + "px";
	editor.resize();
	editor.setValue(tabuler(texte),-1);
	editor.focus();
	document.getElementById("boutons_editor").style.visibility = 'visible';
	document.getElementById("boutons_editor").style.height = '30px';
// masquer Blockly
	document.getElementById("blocklyDiv").style.visibility = 'hidden';
	document.getElementById("blocklyDiv").style.height="0px";
	Blockly.svgResize(Blockly.mainWorkspace);
	document.getElementById("boutons_blockly").style.visibility = 'hidden';
	document.getElementById("boutons_blockly").style.height = '0px';
}

function editeurToBlockly() {
// masquer editeur
	document.getElementById("editor").style.visibility = 'hidden';
	document.getElementById("editor").style.height="0px";
	document.getElementById("boutons_editor").style.visibility = 'hidden';
	document.getElementById("boutons_editor").style.height = '0px';
// montrer Blockly
	document.getElementById("blocklyDiv").style.visibility = 'visible';
	document.getElementById("blocklyDiv").style.height=(window.innerHeight-200) + "px";
	Blockly.svgResize(Blockly.mainWorkspace);
	document.getElementById("boutons_blockly").style.visibility = 'visible';
	document.getElementById("boutons_blockly").style.height = '30px';
}