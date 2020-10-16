
// -----------------------------------------------
// Menu Liste complété
// ------------------------------------------------

Blockly.JavaScript['vectors_getIndex'] = function(block) {
  var at = Blockly.JavaScript.valueToCode(block, 'AT',
      Blockly.JavaScript.ORDER_UNARY_NEGATION) || '';
  var list = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_MEMBER) || '';
  var code = list + "[" + at + "]";
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['vectors_setIndex'] = function(block) {
  var at = Blockly.JavaScript.valueToCode(block, 'AT',
      Blockly.JavaScript.ORDER_UNARY_NEGATION) || '';
  var list = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_MEMBER) || 'c()';
  var to = Blockly.JavaScript.valueToCode(block, 'TO',
      Blockly.JavaScript.ORDER_MEMBER) || '0';
  var code = list + "[" + at + "] = " + to + "\n";
  return code;
};

Blockly.JavaScript['vectors_augmenter'] = function(block) {
  var at = Blockly.JavaScript.valueToCode(block, 'AT',
      Blockly.JavaScript.ORDER_UNARY_NEGATION) || '';
  var list = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_MEMBER) || '';
  var delta = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_MEMBER) || '0';
  var code = list + "[" + at + "] = " + list + "[" + at + "] + "+ delta;
  return code + '\n';
};

Blockly.JavaScript['vectors_diminuer'] = function(block) {
  var at = Blockly.JavaScript.valueToCode(block, 'AT',
      Blockly.JavaScript.ORDER_UNARY_NEGATION) || '';
  var list = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_MEMBER) || '';
  var delta = Blockly.JavaScript.valueToCode(block, 'DELTA',
      Blockly.JavaScript.ORDER_MEMBER) || '0';
  var code = list + "[" + at + "] = " + list + "[" + at + "] - "+ delta;
  return code + '\n';
};


Blockly.JavaScript['vectors_append'] = function(block) {
  var list = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_MEMBER) || 'c()';
  var to = Blockly.JavaScript.valueToCode(block, 'TO',
      Blockly.JavaScript.ORDER_MEMBER) || '0';
  var code = list + ".push(" + to + ")" + "\n";
  return code;
};

