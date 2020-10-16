/*
Utilitaire pour gérer un éditeur Python :
	- reprend editeur.js en prenant en compte des zones de dessin pour les tortues si elles existent
	- gère l'exécution d'un programme Python avec Skulpt
*/

function plierDeplierEditeur() {
	var obj=document.getElementById("editor"); 
	if(obj.style.height != "0px") {
		obj.style.height="0px";
		obj.style.visibility = 'hidden';
	}  else {
		obj.style.visibility = 'visible';
		obj.style.height="588px";/*(window.innerHeight-200) + "px";*//*kar*/
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
	document.getElementById("editor").style.height = "588px"/*kar*/;/*(window.innerHeight-200) + "px";*//*kar*/
	editor.resize();
	editor.setValue(tabuler(texte),-1);
	editor.focus();
	document.getElementById("boutons_editor").style.visibility = 'visible';
	document.getElementById("boutons_editor").style.height = '30px';
	/*if (document.getElementById("mycanvas")) {	// le graphique tortue de Python
		document.getElementById("mycanvas").style.visibility = 'visible';
		document.getElementById("mycanvas").style.height = '480px';
	}*//*kar*/
// masquer Blockly
	document.getElementById("blocklyDiv").style.visibility = 'hidden';
	document.getElementById("blocklyDiv").style.height="0px";
	Blockly.svgResize(Blockly.mainWorkspace);
	document.getElementById("boutons_blockly").style.visibility = 'hidden';
	document.getElementById("boutons_blockly").style.height = '0px';
	/*if (document.getElementById("mycanvas")) {	// le graphique tortue de Blockly 
		document.getElementById("graphique").style.visibility = 'hidden';
		document.getElementById("graphique").style.height = '0px';
	}*//*kar*/
}

function editeurToBlockly() {
// masquer editeur
	document.getElementById("editor").style.visibility = 'hidden';
	document.getElementById("editor").style.height="0px";
	document.getElementById("boutons_editor").style.visibility = 'hidden';
	document.getElementById("boutons_editor").style.height = '0px';
	/*if (document.getElementById("mycanvas")) {	// le graphique tortue de Python
		document.getElementById("mycanvas").style.visibility = 'hidden';
		document.getElementById("mycanvas").style.height = '0px';
	}*/
// montrer Blockly
	document.getElementById("blocklyDiv").style.visibility = 'visible';
	document.getElementById("blocklyDiv").style.height="590px"/*kar*/;/*(window.innerHeight-200) + "px";*//*kar*/
	Blockly.svgResize(Blockly.mainWorkspace);
	document.getElementById("boutons_blockly").style.visibility = 'visible';
	document.getElementById("boutons_blockly").style.height = '30px';
	/*if (document.getElementById("graphique")) {	// le graphique tortue de Blockly
		document.getElementById("graphique").style.visibility = 'visible';
		document.getElementById("graphique").style.height = '480px';
	}*//**kar*/
}

// ---------------------------------------------------------------------------
// Exécution de programmes Python
// ---------------------------------------------------------------------------

/*
	function outf(text) {
		var mypre = document.getElementById("output");
		mypre.innerHTML = mypre.innerHTML + text;
	}
	function builtinRead(x) {
		if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
		throw "File not found: '" + x + "'";
		return Sk.builtinFiles["files"][x];
	}
	function runPython(editor) {
		effacerOutput();
		prog = editor.getValue();
		var mypre = document.getElementById("output");
		mypre.innerHTML = '';
		Sk.canvas = "mycanvas";
		Sk.pre = "output";
		Sk.configure({output:outf, read:builtinRead});
		try {
			eval(Sk.importMainWithBody("<stdin>",false,prog));
		}
		catch(e) {
			Println(e.toString());
			try {
				var lig = e.lineno;
				Println("erreur ligne " + lig);
				editor.gotoLine(lig);
			}
			catch(e1) {
			}
		}
	}
*/
function outf(text)/*kar*/ { 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 
function builtinRead(x) /*kar*/{
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runPython(editor, code) /*kar*/{ 
   effacerOutput();
   if(code)
			prog = code;
		else
			prog = editor.getValue();
   var mypre = document.getElementById("output"); 
   mypre.innerHTML = ''; 
   Sk.pre = "output";

   Sk.configure({output:outf, read:builtinRead, __future__: Sk.python3/*kar*/}); 
   (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
   /*Sk.TurtleGraphics = {'target': 'mycanvas',
                         'width': 890,
						 'height': 500};
	*/
	Sk.TurtleGraphics.width = 890; /*kar*/
	Sk.TurtleGraphics.height = 400;/*kar*/
   var myPromise = Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>", false, prog, true);
   });
   myPromise.then(function(mod) {
       console.log('success');
   },
       function(err) {
       console.log(err.toString());
   });
} 