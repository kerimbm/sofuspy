/*
Utilitaire pour ouvrir ou sauver des fichiers textes avec l'éditeur.

Instructions pour créer ensuite les boutons (voir demo_fichiers.html par exemple):

	<input type="file" id="fileToLoadEdit" style="display: none" onchange="ouvrirFichierEdit(editor);" />
	<input type="button" value="Ouvrir" onclick="ouvrirClickEdit();"/>
	<button type="button" onclick="sauverFichierEdit(editor)">Sauver</button>
	
Attention : ne pas inclure fichiers_editeur.js avant editeurs.js

*/


function ouvrirClickEdit() {
    var fileinput = document.getElementById("fileToLoadEdit");
    fileinput.click();
}
function ouvrirFichierEdit(editor) {
	var fileToLoad = document.getElementById("fileToLoadEdit").files[0];
	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) {
		var textFromFileLoaded = fileLoadedEvent.target.result;
		try {		
			editor.setValue(textFromFileLoaded,-1);
			editor.focus();
		} catch (e) {
			alert("ce fichier ne semble pas être lisible");
		};
	}
	fileReader.readAsText(fileToLoad, "UTF-8");
}
function sauverFichierEdit(editor) {
	var textToWrite = editor.getValue();
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