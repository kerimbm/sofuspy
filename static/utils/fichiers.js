/*
Utilitaire pour ouvrir ou sauver des fichiers Blockly.

Instructions pour créer ensuite les boutons (voir demo_fichiers.html par exemple):

	<input type="file" id="fileToLoad" style="display: none" onchange="ouvrirFichier();" />
	<input type="button" value="Ouvrir" onclick="ouvrirClick();"/>
	<button type="button" onclick="sauverFichier()">Sauver</button>
	
Attention : ne pas inclure fichiers.js avant blockly_compressed.js

*/


function ouvrirClick() {
    var fileinput = document.getElementById("fileToLoad");
    fileinput.click();
}
function ouvrirFichier() {
	var fileToLoad = document.getElementById("fileToLoad").files[0];
	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) {
		var textFromFileLoaded = fileLoadedEvent.target.result;
		try {
			Blockly.mainWorkspace.clear();
			Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, Blockly.Xml.textToDom(textFromFileLoaded));
		} catch (e) {
			alert("ce fichier ne semble pas être lisible par Blockly");
		};
	}
	fileReader.readAsText(fileToLoad, "UTF-8");
}
function sauverFichier() {
	var textToWrite = Blockly.Xml.domToPrettyText( Blockly.Xml.workspaceToDom(Blockly.mainWorkspace) );
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = prompt("nom du fichier (sauvé dans le dossier de téléchargements) ?", "fichier.txt");
	if (fileNameToSaveAs==null) {
		return;
	}
	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = function destroyClickedElement(event) {
									document.body.removeChild(event.target);
								};
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}
	downloadLink.click();
}