
// -----------------------------------------------
// Menu Liste complété
// ------------------------------------------------

/*Blockly.Msg.VECTORS_GET_TITLE = "%1 [ %2 ]";*//*kar*/
Blockly.Msg.VECTORS_GET_TITLE = "obtenir de la liste %1 l'élément n° %2";/*kar*/
Blockly.Msg.VECTORS_GET_TOOLTIP = "renvoie un element d'une liste.";
Blockly.Blocks['vectors_getIndex'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.VECTORS_GET_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Variable"
        },
        {
          "type": "input_value",
          "name": "AT"
        }
      ],
      //"output": 'Number',
      "colour": Blockly.Blocks.lists.HUE
    });
    var thisBlock = this;
	this.setOutput(true);
	this.setInputsInline(true);
    this.getInput('VALUE').setAlign(Blockly.ALIGN_RIGHT);
    this.getInput('AT').setAlign(Blockly.ALIGN_RIGHT);
    this.setTooltip(function() {
		return Blockly.Msg.VECTORS_GET_TOOLTIP;
    });
  }
};

Blockly.Msg.VECTORS_SET_TITLE = "de la liste %1 fixer l'élément n° %2 à %3";
Blockly.Msg.VECTORS_SET_TOOLTIP = "met une valeur dans une liste.";
Blockly.Blocks['vectors_setIndex'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.VECTORS_SET_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Variable"
        },
        {
          "type": "input_value",
          "name": "AT",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "TO"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.lists.HUE
    });
    var thisBlock = this;
	this.setInputsInline(true);
    this.getInput('VALUE').setAlign(Blockly.ALIGN_RIGHT);
    this.getInput('AT').setAlign(Blockly.ALIGN_RIGHT);
    this.getInput('TO').setAlign(Blockly.ALIGN_RIGHT);
    this.setTooltip(function() {
		return Blockly.Msg.VECTORS_SET_TOOLTIP;
    });
  }
};

Blockly.Msg.VECTORS_AUGMENTER_TITLE = "augmenter %1 [ %2 ] de %3";
Blockly.Msg.VECTORS_AUGMENTER_TOOLTIP = "ajoute un nombre à un élément d'une liste.";
Blockly.Blocks['vectors_augmenter'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.VECTORS_AUGMENTER_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Variable"
        },
        {
          "type": "input_value",
          "name": "AT",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "DELTA"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.lists.HUE
    });
    var thisBlock = this;
	this.setInputsInline(true);
    this.getInput('VALUE').setAlign(Blockly.ALIGN_RIGHT);
    this.getInput('AT').setAlign(Blockly.ALIGN_RIGHT);
    this.getInput('DELTA').setAlign(Blockly.ALIGN_RIGHT);
    this.setTooltip(function() {
		return Blockly.Msg.VECTORS_AUGMENTER_TOOLTIP;
    });
  }
};

Blockly.Msg.VECTORS_DIMINUER_TITLE = "diminuer %1 [ %2 ] de %3";
Blockly.Msg.VECTORS_DIMINUER_TOOLTIP = "soustrait un nombre à un élément d'une liste.";
Blockly.Blocks['vectors_diminuer'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.VECTORS_DIMINUER_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Variable"
        },
        {
          "type": "input_value",
          "name": "AT",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "DELTA"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.lists.HUE
    });
    var thisBlock = this;
	this.setInputsInline(true);
    this.getInput('VALUE').setAlign(Blockly.ALIGN_RIGHT);
    this.getInput('AT').setAlign(Blockly.ALIGN_RIGHT);
    this.getInput('DELTA').setAlign(Blockly.ALIGN_RIGHT);
    this.setTooltip(function() {
		return Blockly.Msg.VECTORS_DIMINUER_TOOLTIP;
    });
  }
};


Blockly.Msg.VECTORS_APPEND_TITLE = "en fin de la liste %1 ajouter %2";
Blockly.Msg.VECTORS_APPEND_TOOLTIP = "ajoute une valeur en fin de liste.";
Blockly.Blocks['vectors_append'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.VECTORS_APPEND_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Variable"
        },
        {
          "type": "input_value",
          "name": "TO"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.lists.HUE
    });
    var thisBlock = this;
	this.setInputsInline(true);
    this.getInput('VALUE').setAlign(Blockly.ALIGN_RIGHT);
    this.getInput('TO').setAlign(Blockly.ALIGN_RIGHT);
    this.setTooltip(function() {
		return Blockly.Msg.VECTORS_APPEND_TOOLTIP;
    });
  }
};

