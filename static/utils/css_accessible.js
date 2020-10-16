/*
Fichier permettant de changer les styles par défaut de Blockly, en particulier :
	- taille du menu principal
	- taille des bulles d'aide
	- taille et couleur des menus contextuels
	
Cet utilitaire évite de modifier directement le fichier css.js des sources de Blockly.

*/


// -------------------------------------- configuration ---------------------------------------
// pas besoin d'être informaticien pour changer les tailles ... 
// --------------------------------------------------------------------------------------------

// bulle d'aide
modifierCss('.blocklyTooltipDiv {', 'font-size:', 'font-size: 15pt;');	// taille de la police : ici 25

// menu contextuel
modifierCss('.blocklyWidgetDiv .goog-menuitem-content {', 'font:', 'font: /*bold*//*kar*/ 17px Arial, sans-serif;');	// taille de la police : ici 15
modifierCss('.blocklyWidgetDiv .goog-menuitem-content {'/*, 'background:', 'background: #0f0;'*//*kar*/); // fond de chaque commande : ici vert
modifierCss('.blocklyWidgetDiv .goog-menuitem {', 'background:', 'background: #e0e0e0;/*#ff0;*//*kar*/'); // fond du menu : ici jaune

// menu principal
//modifierCss('.blocklyTreeLabel {', 'font-size:', 'font-size: 25pt;');	// taille de la police : ici 25
//modifierCss('.blocklyTreeRow {', 'height:', 'height: 28pt;');	// taille du rectangle englobant (un peu supérieure à celle de la police) : ici 28


// ------------------------- ne pas modifier en principe ---------------------------------------
// fonction modifiant le tableau de style Blockly.Css.CONTENT 
// --------------------------------------------------------------------------------------------

function modifierCss(style, attribut, valeur) {
	var content = Blockly.Css.CONTENT
	var pos = content.indexOf(style);
	if (pos<0) return;
	for(var k=pos; k<content.length; k++) {
		if (content[k].indexOf(attribut)==0){
			content[k]=valeur;
			return;
		}
		if (content[k]=='}') {
			content.splice(k,0,valeur);
			return;
		}
	}
}


