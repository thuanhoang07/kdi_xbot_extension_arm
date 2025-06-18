Blockly.Blocks['unoarm_set_dimensions'] = {
  init: function() {
    this.appendDummyInput().appendField("Set dimensions");
    this.appendValueInput("D1").setCheck("Number").appendField("d1");
    this.appendValueInput("D2").setCheck("Number").appendField("d2");
    this.appendValueInput("D3").setCheck("Number").appendField("d3");
    this.appendValueInput("D4").setCheck("Number").appendField("d4");
    this.appendValueInput("D5").setCheck("Number").appendField("d5");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("Set the five dimension parameters d1 to d5");
    this.setHelpUrl("");
  }
};

Blockly.Python.definitions_['import_kdi_unoarm'] = 'import kdi_unoarm';
Blockly.Python['unoarm_set_dimensions'] = function(block) {
  var d1 = Blockly.Python.valueToCode(block, 'D1', Blockly.Python.ORDER_ATOMIC) || '0';
  var d2 = Blockly.Python.valueToCode(block, 'D2', Blockly.Python.ORDER_ATOMIC) || '0';
  var d3 = Blockly.Python.valueToCode(block, 'D3', Blockly.Python.ORDER_ATOMIC) || '0';
  var d4 = Blockly.Python.valueToCode(block, 'D4', Blockly.Python.ORDER_ATOMIC) || '0';
  var d5 = Blockly.Python.valueToCode(block, 'D5', Blockly.Python.ORDER_ATOMIC) || '0';
  var code = 'kdi_unoarm.set_dimensions(' + d1 + ', ' + d2 + ', ' + d3 + ', ' + d4 + ', ' + d5 + ')\n';
  return code;
};