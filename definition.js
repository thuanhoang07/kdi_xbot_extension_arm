// Định nghĩa block: Set dimensions
Blockly.Blocks['unoarm_set_dimensions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set dimensions");
    this.appendValueInput("D1")
        .setCheck("Number")
        .appendField("d1");
    this.appendValueInput("D2")
        .setCheck("Number")
        .appendField("d2");
    this.appendValueInput("D3")
        .setCheck("Number")
        .appendField("d3");
    this.appendValueInput("D4")
        .setCheck("Number")
        .appendField("d4");
    this.appendValueInput("D5")
        .setCheck("Number")
        .appendField("d5");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("Set the five dimension parameters d1 to d5");
    this.setHelpUrl("");
  }
};

// Định nghĩa block: Check valid angles S2, S3 (value block)
Blockly.Blocks['unoarm_check_valid'] = {
  init: function() {
    this.appendValueInput("S2")
        .setCheck("Number")
        .appendField("Check valid S2");
    this.appendValueInput("S3")
        .setCheck("Number")
        .appendField("S3");
    // Quan trọng: khai báo là output block và kiểu Boolean
    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip("Returns true if the (S2, S3) angles are within valid range");
    this.setHelpUrl("");
  }
};

// Python generator chung
Blockly.Python.definitions_['import_kdi_unoarm'] =
  'import kdi_unoarm\n' +
  'kdi_unoarm = kdi_unoarm';

// Generator cho block Set dimensions
Blockly.Python['unoarm_set_dimensions'] = function(block) {
  var d1 = Blockly.Python.valueToCode(block, 'D1', Blockly.Python.ORDER_ATOMIC) || '0';
  var d2 = Blockly.Python.valueToCode(block, 'D2', Blockly.Python.ORDER_ATOMIC) || '0';
  var d3 = Blockly.Python.valueToCode(block, 'D3', Blockly.Python.ORDER_ATOMIC) || '0';
  var d4 = Blockly.Python.valueToCode(block, 'D4', Blockly.Python.ORDER_ATOMIC) || '0';
  var d5 = Blockly.Python.valueToCode(block, 'D5', Blockly.Python.ORDER_ATOMIC) || '0';
  return 'kdi_unoarm.set_dimensions(' + d1 + ', ' + d2 + ', ' + d3 + ', ' + d4 + ', ' + d5 + ')\n';
};

// Generator cho block Check valid S2, S3
Blockly.Python['unoarm_check_valid'] = function(block) {
  var s2 = Blockly.Python.valueToCode(block, 'S2', Blockly.Python.ORDER_ATOMIC) || '0';
  var s3 = Blockly.Python.valueToCode(block, 'S3', Blockly.Python.ORDER_ATOMIC) || '0';
  var code = 'kdi_unoarm.kiem_tra_tinh_hop_le(' + s2 + ', ' + s3 + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

// cho phép engine biết biến kdi_unoarm đã được định nghĩa bên import
Blockly.Python.getDeveloperVars = function() {
  return ['kdi_unoarm'];
};
