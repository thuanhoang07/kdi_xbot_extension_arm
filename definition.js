// Import library
Blockly.Python.definitions_['import_kdi_unoarm'] = 'import kdi_unoarm';

// 1. Set dimensions
Blockly.Blocks['unoarm_set_dimensions'] = {
  init: function() {
    this.appendDummyInput().appendField("Set UnoArm dimensions:");
    this.appendValueInput("D1").setCheck("Number").appendField("d1");
    this.appendValueInput("D2").setCheck("Number").appendField("d2");
    this.appendValueInput("D3").setCheck("Number").appendField("d3");
    this.appendValueInput("D4").setCheck("Number").appendField("d4");
    this.appendValueInput("D5").setCheck("Number").appendField("d5");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("Configure the five physical dimensions of UnoArm");
  }
};
Blockly.Python['unoarm_set_dimensions'] = function(block) {
  var d1 = Blockly.Python.valueToCode(block, 'D1', Blockly.Python.ORDER_ATOMIC) || '0';
  var d2 = Blockly.Python.valueToCode(block, 'D2', Blockly.Python.ORDER_ATOMIC) || '0';
  var d3 = Blockly.Python.valueToCode(block, 'D3', Blockly.Python.ORDER_ATOMIC) || '0';
  var d4 = Blockly.Python.valueToCode(block, 'D4', Blockly.Python.ORDER_ATOMIC) || '0';
  var d5 = Blockly.Python.valueToCode(block, 'D5', Blockly.Python.ORDER_ATOMIC) || '0';
  return `kdi_unoarm.set_dimensions(${d1}, ${d2}, ${d3}, ${d4}, ${d5})\n`;
};

// 2. Check valid angles
Blockly.Blocks['unoarm_check_valid'] = {
  init: function() {
    this.appendValueInput("S2").setCheck("Number").appendField("Check valid for S2");
    this.appendValueInput("S3").setCheck("Number").appendField("S3");
    this.setOutput(true, "Boolean");
    this.setColour(210);
    this.setTooltip("Return true if angles S2 and S3 are within valid range");
  }
};
Blockly.Python['unoarm_check_valid'] = function(block) {
  var s2 = Blockly.Python.valueToCode(block, 'S2', Blockly.Python.ORDER_ATOMIC) || '0';
  var s3 = Blockly.Python.valueToCode(block, 'S3', Blockly.Python.ORDER_ATOMIC) || '0';
  return [`kdi_unoarm.kiem_tra_tinh_hop_le(${s2}, ${s3})`, Blockly.Python.ORDER_FUNCTION_CALL];
};

// 3. Move to angles S2, S3
Blockly.Blocks['unoarm_move_angles'] = {
  init: function() {
    this.appendValueInput("TO_S2").setCheck("Number").appendField("Move to angle S2");
    this.appendValueInput("TO_S3").setCheck("Number").appendField("S3");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip("Move servo joints S2 and S3 to specified angles");
  }
};
Blockly.Python['unoarm_move_angles'] = function(block) {
  var toS2 = Blockly.Python.valueToCode(block, 'TO_S2', Blockly.Python.ORDER_ATOMIC) || '0';
  var toS3 = Blockly.Python.valueToCode(block, 'TO_S3', Blockly.Python.ORDER_ATOMIC) || '0';
  return `kdi_unoarm.go_to_S2_S3(${toS2}, ${toS3})\n`;
};

// 4. Move to position r, h
Blockly.Blocks['unoarm_move_r_h'] = {
  init: function() {
    this.appendValueInput("R").setCheck("Number").appendField("Move to r");
    this.appendValueInput("H").setCheck("Number").appendField("h");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip("Move arm to radial (r) and height (h) position");
  }
};
Blockly.Python['unoarm_move_r_h'] = function(block) {
  var r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC) || '0';
  var h = Blockly.Python.valueToCode(block, 'H', Blockly.Python.ORDER_ATOMIC) || '0';
  return `kdi_unoarm.go_to_r_h(${r}, ${h})\n`;
};

// 5. Rotate base
Blockly.Blocks['unoarm_rotate_base'] = {
  init: function() {
    this.appendValueInput("ANGLE").setCheck("Number").appendField("Rotate base to");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
    this.setTooltip("Rotate base joint S1 to specified angle");
  }
};
Blockly.Python['unoarm_rotate_base'] = function(block) {
  var angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC) || '0';
  return `kdi_unoarm.quay_ve_goc(${angle})\n`;
};