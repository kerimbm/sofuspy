// -----------------------------------------------
// Menu Sofus
// ------------------------------------------------

Blockly.Python['sophus_angle'] = function(block) {
  var angledeg;
  return angledeg = block.getFieldValue('angle');
};

Blockly.Python['sophus_carre'] = function(block) {
  var dropdown_pow, varName;
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  dropdown_pow = block.getFieldValue('POW');
  return varName + ' = pow(' + varName + ',' + dropdown_pow + ')\n';
};

Blockly.Python['sophus_doubler'] = function(block) {
  var choix, varName;
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  choix = block.getFieldValue('CHOIX');
  return varName + ' = ' + varName + ' * ' + choix + '\n';
};

Blockly.Python['sophus_augmenter'] = function(block) {
  var argument0, varName;
  argument0 = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_ADDITION) || '0';
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName + ' + ' + argument0 + '\n';
};

Blockly.Python['sophus_diminuer'] = function(block) {
  var argument0, varName;
  argument0 = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_ADDITION) || '0';
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName + ' - ' + argument0 + '\n';
};

Blockly.Python['sophus_augmenter_fract'] = function(block) {
  var argument0, dropdown_denom, varName;
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  argument0 = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_ADDITION) || '0';
  dropdown_denom = block.getFieldValue('DENOM');
  dropdown_denom = "float(" + dropdown_denom +" )";
  return varName + ' = ' + varName + ' + ' + varName + ' * ' + argument0 + ' / ' + dropdown_denom + '\n';
};

Blockly.Python['sophus_augmenter_pct'] = function(block) {
  var argument0, varName;
  argument0 = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_ADDITION) || '0';
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName + ' * (1 + ' + argument0 + ' / 100.0)' + '\n';
};

Blockly.Python['sophus_diminuer_fract'] = function(block) {
  var argument0, dropdown_denom, varName;
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  argument0 = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_ADDITION) || '0';
  dropdown_denom = block.getFieldValue('DENOM');
  dropdown_denom = "float(" + dropdown_denom +" )";
  return varName + ' = ' + varName + ' - ' + varName + ' * ' + argument0 + ' / ' + dropdown_denom + '\n';
};

Blockly.Python['sophus_diminuer_pct'] = function(block) {
  var argument0, varName;
  argument0 = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_ADDITION) || '0';
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName + ' * (1 - ' + argument0 + ' / 100.0)' + '\n';
};

Blockly.Python['sophus_multiplier'] = function(block) {
  var argument0, varName;
  argument0 = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_ADDITION) || '0';
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName + ' * ' + argument0 + '\n';
};

Blockly.Python['sophus_diviser'] = function(block) {
  var argument0, varName;
  argument0 = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_ADDITION) || '0';
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName + ' / ' + argument0 + '\n';
};

Blockly.Python['sophus_multiplier_fract'] = function(block) {
  var argument0, dropdown_denom, varName;
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  argument0 = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_ADDITION) || '0';
  dropdown_denom = block.getFieldValue('DENOM');
  return varName + ' = ' + varName + ' * ' + argument0 + ' / ' + dropdown_denom + '\n';
};

Blockly.Python['sophus_diviser_fract'] = function(block) {
  var argument0, dropdown_denom, varName;
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  argument0 = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_ADDITION) || '0';
  dropdown_denom = block.getFieldValue('DENOM');
  return varName + ' = ' + varName + ' * ' + dropdown_denom + ' / ' + argument0 + '\n';
};

Blockly.Python['sophus_arrondir'] = function(block) {
  var argument0, dropdown_grad, varName;
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  argument0 = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_ADDITION) || '0';
  dropdown_grad = block.getFieldValue('GRAD');
  return varName + ' = round(' + varName + ' / ' + dropdown_grad + argument0 + ') * ' + dropdown_grad + argument0 + '\n';
};

Blockly.Python['sophus_tronquer'] = function(block) {
  var argument0, dropdown_grad, varName;
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  argument0 = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_ADDITION) || '0';
  dropdown_grad = block.getFieldValue('GRAD');
  return varName + ' = (int)(' + varName + ' / ' + dropdown_grad + argument0 + ') * ' + dropdown_grad + argument0 + '\n';
};

Blockly.Python['sophus_puissance'] = function(block) {
  var argument0, varName;
  argument0 = Blockly.Python.valueToCode(block, 'POW', Blockly.Python.ORDER_ADDITION) || '0';
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = pow(' + varName + ' , ' + argument0 + ')\n';
};

Blockly.Python['sophus_inverser'] = function(block) {
  var varName;
  varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + ' 1.0 / ' + varName + '\n';
};

// -----------------------------------------------
// Menu Tortues
// ------------------------------------------------

function tortueActive() {
	return "tortues[\"active\"]";
}

function prefixer(code) {
	if (Blockly.Python.tortues == 2) {
		return tortueActive() + "." + code;
	}
	else {
		return code;
	}
}

Blockly.Python['tortue_x'] = function(block) {
  var code = "xcor()";
  // code = 'totos[toto].x-320';
  return [prefixer(code), Blockly.Python.ORDER_NONE];
};

Blockly.Python['tortue_y'] = function(block) {
  var code = "ycor()";
  //code = '240-totos[toto].y';
  return [prefixer(code), Blockly.Python.ORDER_NONE];
};

Blockly.Python['tortue_t'] = function(block) {
  var code;
  code = 'heading()';
  return [prefixer(code), Blockly.Python.ORDER_NONE];
};

Blockly.Python['tortue_c'] = function(block) {
  var code;
  code = '# couleur pas implementé';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['avancer'] = function(block) {
  var code, value_name;
  value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // return code = "totos[toto].av(" + value_name + ");\n";
  code = "forward(" + value_name + ")\n";
  return prefixer(code);
};

Blockly.Python['reculer'] = function(block) {
  var code, value_name;
  value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // return code = 'totos[toto].re(' + value_name + ')\n';
  code = "backward(" + value_name + ")\n";
  return prefixer(code);
};

Blockly.Python['tortue_gauche'] = function(block) {
  var angle_name, code;
  angle_name = block.getFieldValue('NAME');
  // return code = 'totos[toto].tg(' + angle_name + ')\n';
  code = "left(" + value_name + ")\n";
  return prefixer(code);
};

Blockly.Python['tortue_droite'] = function(block) {
  var angle_name, code;
  angle_name = block.getFieldValue('NAME');
  // return code = 'totos[toto].td(' + angle_name + ')\n';
  code = "right(" + value_name + ")\n";
  return prefixer(code);
};

Blockly.Python['var_gauche'] = function(block) {
  var code, value_angle;
  value_angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  // return code = 'totos[toto].tg(' + value_angle + ')\n';
  code = "left(" + value_angle + ")\n";
  return prefixer(code);
};

Blockly.Python['var_droite'] = function(block) {
  var code, value_angle;
  value_angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  // return code = 'totos[toto].td(' + value_angle + ')\n';
  code = "right(" + value_angle + ")\n";
  return prefixer(code);
};

Blockly.Python['mettre_angle'] = function(block) {
  var code, value_angle;
  value_angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
  //return code = 'totos[toto].orient(' + value_angle + ')\n';
  code = 'setheading(' + value_angle + ')\n';
  return prefixer(code);
};

Blockly.Python['teleport'] = function(block) {
  var code, text_x, text_y;
  text_x = block.getFieldValue('X');
  text_y = block.getFieldValue('Y');
  // return code = 'totos[toto].teleport(' + text_x + '+320,240-(' + text_y + '))\n';
  code = 'setposition(' + text_x + ', ' + text_y + ')\n';
  return prefixer(code);
};

Blockly.Python['tortue_teleport'] = function(block) {
  var code, value_abs, value_ord;
  value_abs = Blockly.Python.valueToCode(block, 'ABS', Blockly.Python.ORDER_ATOMIC);
  value_ord = Blockly.Python.valueToCode(block, 'ORD', Blockly.Python.ORDER_ATOMIC);
  // code = 'totos[toto].teleport(' + value_abs + '+320' + ',240-(' + value_ord + '))\n';
  /*code = 'setposition(' + value_abs + ', ' + value_ord + ')\n';*//*kar*/
  code = 'goto(' + value_abs + ', ' + value_ord + ')\n';
  return prefixer(code);
};

Blockly.Python['teleport_var'] = function(block) {
  var code, variable_x, variable_y;
  variable_x = Blockly.Python.variableDB_.getName(block.getFieldValue('X'), Blockly.Variables.NAME_TYPE);
  variable_y = Blockly.Python.variableDB_.getName(block.getFieldValue('Y'), Blockly.Variables.NAME_TYPE);
  // return code = 'totos[toto].teleport(' + variable_x + '+320' + ',240-(' + variable_y + '))\n';
  code = 'setposition(' + variable_x + ', ' + variable_y + ')\n';
  return prefixer(code);
};

Blockly.Python['cacher_tortue'] = function(block) {
  var code;
  //return code = 'totos[toto].hide()\n';
  code = "hideturtle()\n";
  return prefixer(code);
};

Blockly.Python['montrer_tortue'] = function(block) {
  var code;
  //return code = 'totos[toto].show()\n';
  code = "showturtle()\n";
  return prefixer(code);
};

Blockly.Python['lever_stylo'] = function(block) {
  var code;
  // return code = 'totos[toto].penup()\n';
  code = "penup()\n";
  return prefixer(code);
};

Blockly.Python['baisser_stylo'] = function(block) {
  var code;
  //return code = 'totos[toto].pendown()\n';
  code = "pendown()\n";
  return prefixer(code);
};

Blockly.Python['scribe'] = function(block) {
  var code, value_texte;
  value_texte = Blockly.Python.valueToCode(block, 'texte', Blockly.Python.ORDER_ATOMIC);
  // return code = "totos[toto].write('" + value_texte + "');\n";
  code = "write(" + value_texte + ")\n";
  return prefixer(code);
};

Blockly.Python['tampon'] = function(block) {
  var code;
  //return code = 'totos[toto].cercle()\n';
  code = "dot(10,'red')\n";
  return prefixer(code);
};

Blockly.Python['couleur_stylo'] = function(block) {
  var code, colour_colstyle;
  colour_colstyle = block.getFieldValue('colstyle');
  // return code = "totos[toto].c = '" + colour_colstyle + "';\n";
  code = "pencolor('" + colour_colstyle + "')\n";/*kar*/
  return code;
};

Blockly.Python['eff_svg'] = function(block) {
  var code;
  // return code = 'effaceDessin()\n';
  code = "clear()\n";
  return code;
};

Blockly.Python['reset'] = function(block) {
  var code;
  // return code = 'effaceDessin();' + 'totos[toto].t = 0;' + 'totos[toto].teleport(320,240)\n';
  code = "reset()\n";
  return code;
};

Blockly.Python['axeX'] = function(block) {
  var code;
  //return code = 'axeX()\n';
  code = "# axeX pas implémenté\n";
  return code;
};

Blockly.Python['axeY'] = function(block) {
  var code;
  // return code = 'axeY()\n';
  code = "# axeY pas implémenté\n";
  return code;
};

Blockly.Python['axes'] = function(block) {
  var code;
  // return code = 'axes()\n';
  code = "# axes pas implémenté\n";
  return code;
};

Blockly.Python['grille'] = function(block) {
  var code;
  // return code = 'grille()\n';
  code = "# grille pas implémenté\n";
  return code;
};

Blockly.Python['creer_tortue'] = function(block) {
  var code, text_n;
  text_n = block.getFieldValue('N');
  // return code = "totos['" + text_n + "'] = new Tortue(" + value_name + ");\n";
  code = "# creer_tortues pas implémenté\n";
  return code;
};

Blockly.Python['creer_tortue_var'] = function(block) {
  var code, value_name;
  value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  //return code = "totos[" + value_name + "] = new Tortue(" + value_name + ");\n";
  code = tortueActive() + " = Turtle() ; ";
  code = code + "tortues[" + value_name + "] = " + tortueActive() + "\n";
  return code;
};

Blockly.Python['choisir_tortue'] = function(block) {
  var code, statements, text_n;
  text_n = block.getFieldValue('N');
  statements = Blockly.Python.statementToCode(block, 'DO');
  // return code = "toto = " + text_n + ";\n" + statements;
  code = "# choisir_tortue pas implémenté\n";
  return code;
};

Blockly.Python['choisir_tortue_var'] = function(block) {
  var code, statements, value_name;
  value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  statements = Blockly.Python.statementToCode(block, 'DO');
  // return code = "toto = " + value_name + "\n" + statements;
  code = "  " + tortueActive() + " = tortues[" + value_name + "]\n" + statements;
  return code;
};

Blockly.Python['distance_avec_tortue_var'] = function(block) {
  var code, value_name;
  value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  //return code = "totos[toto].distance(totos[" + value_name + "]);\n";
  code = "# distance_avec_tortue pas implémenté\n";
  return code;
};

Blockly.Python['tourner_vers_tortue_var'] = function(block) {
  var code, value_name;
  value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // return code = 'totos[toto].azimuth(totos[' + value_name + '])\n';
  code = "# tourner_vers_tortue pas implémenté\n";
  return code;
};

Blockly.Python['repeter_doucement'] = function(block) {
  var code, statements, times;
  times = Blockly.Python.valueToCode(block, 'TIMES', Blockly.Python.ORDER_ATOMIC);
  statements = Blockly.Python.statementToCode(block, 'DO');
  // return code = "for (i = 1; i < " + times + "; i++) { setTimeout(function(){" + statements + "}, 200);}\n";
  code = "# répéter_doucement pas implémenté\n";
  return code;
};

// -----------------------------------------------
// Autres
// ------------------------------------------------

Blockly.Python['controls_for'] = function(block) {
  // For loop.
  var variable0 = Blockly.Python.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.Python.valueToCode(block, 'FROM',
      Blockly.Python.ORDER_NONE) || '0';
  var argument1 = Blockly.Python.valueToCode(block, 'TO',
      Blockly.Python.ORDER_NONE) || '0';
  var increment = Blockly.Python.valueToCode(block, 'BY',
      Blockly.Python.ORDER_NONE) || '1';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  var code = '';
  var range = '';
  if (Blockly.isNumber(increment)) {
    increment = parseFloat(increment);
	if (Blockly.isNumber(argument1)) {
		argument1 = parseFloat(argument1);
		if (increment>0) {
			argument1 = argument1 + 1;
		}
		else if (increment<0) {
			argument1 = argument1 - 1;
		}
	}
	else {
		if (argument1.endsWith("- 1")) {
			argument1 = argument1.substring(0,argument1.length-3);
		}
		else if (argument1.endsWith("-1")) {
			argument1 = argument1.substring(0,argument1.length-2);
		}
		else {	
			argument1 = argument1 + " + 1";
		}
	}
	if (increment==1) {
		range = "range(" + argument0 + "," + argument1 + ")";
	}
	else {
		range = "range(" + argument0 + "," + argument1 + "," + increment + ")";
	}
  }
  else { // increment n'est pas un nombre
	if (Blockly.isNumber(argument1)) {
		argument1 = parseFloat(argument1);
		argument1 = argument1 + 1;
	}
	else {	
		if (argument1.endsWith("- 1")) {
			argument1 = argument1.substring(0,argument1.length-3);
		}
		else if (argument1.endsWith("-1")) {
			argument1 = argument1.substring(0,argument1.length-2);
		}
		else {	
			argument1 = argument1 + " + 1";
		}
	}
	range ="range(" + argument0 + "," + argument1 + "," + increment + ")";
  }
  code = 'for ' + variable0 + ' in ' + range + ':\n' + branch;
  return code;
};

Blockly.Python['text_prompt'] = function(block) {
  var msg, code;
  if (block.getField('TEXT')) {
    msg = Blockly.Python.quote_(block.getFieldValue('TEXT'));
  } else {
    msg = Blockly.Python.valueToCode(block, 'TEXT',
        Blockly.Python.ORDER_NONE) || '\'\'';
  }
  var toNumber = block.getFieldValue('TYPE') == 'NUMBER';
  msg = msg.substring(0,msg.length-1) + '\\n\'';/*kar*/
  if (toNumber) {
    code = 'float(input(' + msg + '))';
    
  }
  else {
    code = 'input(' + msg + ')';
  }
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['math_quotient'] = function(block) {
  var argument0 = Blockly.Python.valueToCode(block, 'DIVIDEND',
      Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
  var argument1 = Blockly.Python.valueToCode(block, 'DIVISOR',
      Blockly.Python.ORDER_MULTIPLICATIVE) || '1';
  var code = argument0 + ' // ' + argument1;
  return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

/*kar*/
Blockly.Python['mycircle'] = function(block) {
  var code;
  var value_myvalue = Blockly.Python.valueToCode(block, 'myvalue', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  if(value_myvalue)
    code = 'circle('+value_myvalue+')\n';
  else
    code = 'circle(0)\n';
  return code;
};

/*kar*/
Blockly.Python['myshape'] = function(block) {
  var dropdown_myoptions = block.getFieldValue('myoptions');
  // TODO: Assemble Python into code variable.
  var code = 'shape(\''+dropdown_myoptions+'\')\n';
  return code;
};

/*kar*/
Blockly.Python['myarc'] = function(block) {
  var value_myrayon = Blockly.Python.valueToCode(block, 'myrayon', Blockly.Python.ORDER_ATOMIC);
  var value_myangle = Blockly.Python.valueToCode(block, 'myangle', Blockly.Python.ORDER_ATOMIC);
  var myrayon;
  var myangle;
  // TODO: Assemble Python into code variable.
  if(value_myrayon)
    myrayon = value_myrayon;
  else
    myrayon = 0;
  if(value_myangle)
    myangle = value_myangle;
  else
    myangle = 0;
  var code = 'circle('+myrayon+', '+myangle+')\n';
  return code;
};

/*kar*/
Blockly.Python['mylist'] = function(block) {
  var value_myfirst = Blockly.Python.valueToCode(block, 'myfirst', Blockly.Python.ORDER_ATOMIC);
  var value_mylast = Blockly.Python.valueToCode(block, 'mylast', Blockly.Python.ORDER_ATOMIC);
  var value_mystep = Blockly.Python.valueToCode(block, 'mystep', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  if(!value_myfirst)
    value_myfirst = 0;
  if(!value_mylast)
    value_mylast = 1;
  last = Number(value_mylast)+1;
  if(!value_mystep)
  value_mystep = 1;
  var code = 'list(range('+value_myfirst+', '+last+', '+value_mystep+'))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};