
// -----------------------------------------------
// Menu Liste complété
// ------------------------------------------------

Blockly.Python['vectors_getIndex'] = function(block) {
  var at = Blockly.Python.valueToCode(block, 'AT',
      Blockly.Python.ORDER_UNARY_NEGATION) || '';
  var list = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_MEMBER) || '';
  at = Number(at)-1;
  var code = list + "[" + at + "]";
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['vectors_setIndex'] = function(block) {
  var at = Blockly.Python.valueToCode(block, 'AT',
      Blockly.Python.ORDER_UNARY_NEGATION) || '';
  var list = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_MEMBER) || 'c()';
  var to = Blockly.Python.valueToCode(block, 'TO',
      Blockly.Python.ORDER_MEMBER) || '0';
  at = Number(at)-1;
  var code = list + "[" + at + "] = " + to + "\n";
  return code;
};

Blockly.Python['vectors_augmenter'] = function(block) {
  var at = Blockly.Python.valueToCode(block, 'AT',
      Blockly.Python.ORDER_UNARY_NEGATION) || '';
  var list = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_MEMBER) || '';
  var delta = Blockly.Python.valueToCode(block, 'DELTA',
      Blockly.Python.ORDER_MEMBER) || '0';
  var code = list + "[" + at + "] = " + list + "[" + at + "] + "+ delta;
  return code + '\n';
};

Blockly.Python['vectors_diminuer'] = function(block) {
  var at = Blockly.Python.valueToCode(block, 'AT',
      Blockly.Python.ORDER_UNARY_NEGATION) || '';
  var list = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_MEMBER) || '';
  var delta = Blockly.Python.valueToCode(block, 'DELTA',
      Blockly.Python.ORDER_MEMBER) || '0';
  var code = list + "[" + at + "] = " + list + "[" + at + "] - "+ delta;
  return code + '\n';
};


Blockly.Python['vectors_append'] = function(block) {
  var list = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_MEMBER) || 'c()';
  var to = Blockly.Python.valueToCode(block, 'TO',
      Blockly.Python.ORDER_MEMBER) || '0';
  var code = list + ".append(" + to + ")" + "\n";
  return code;
};

