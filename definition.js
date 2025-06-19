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

// Generator cho block Set dimensions
Blockly.Python['unoarm_set_dimensions'] = function(block) {
  Blockly.Python.definitions_['import_kdi_unoarm'] = 'import kdi_unoarm';
  var d1 = Blockly.Python.valueToCode(block, 'D1', Blockly.Python.ORDER_ATOMIC) || '0';
  var d2 = Blockly.Python.valueToCode(block, 'D2', Blockly.Python.ORDER_ATOMIC) || '0';
  var d3 = Blockly.Python.valueToCode(block, 'D3', Blockly.Python.ORDER_ATOMIC) || '0';
  var d4 = Blockly.Python.valueToCode(block, 'D4', Blockly.Python.ORDER_ATOMIC) || '0';
  var d5 = Blockly.Python.valueToCode(block, 'D5', Blockly.Python.ORDER_ATOMIC) || '0';
  return 'kdi_unoarm.set_dimensions(' + d1 + ', ' + d2 + ', ' + d3 + ', ' + d4 + ', ' + d5 + ')\n';
};

// Generator cho block Check valid S2, S3
Blockly.Python['unoarm_check_valid'] = function(block) {
  Blockly.Python.definitions_['import_kdi_unoarm'] = 'import kdi_unoarm';
  var s2 = Blockly.Python.valueToCode(block, 'S2', Blockly.Python.ORDER_ATOMIC) || '0';
  var s3 = Blockly.Python.valueToCode(block, 'S3', Blockly.Python.ORDER_ATOMIC) || '0';
  var code = 'kdi_unoarm.kiem_tra_tinh_hop_le(' + s2 + ', ' + s3 + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};


// 1) Block: Go to S2, S3
Blockly.Blocks['unoarm_go_to_s2_s3'] = {
  init: function() {
    this.appendValueInput("TO_S2")
        .setCheck("Number")
        .appendField("Go to S2");
    this.appendValueInput("TO_S3")
        .setCheck("Number")
        .appendField("S3")
        .appendField("to");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("Move the arm to the specified S2 and S3 angles");
    this.setHelpUrl("");
  }
};

// 2) Python generator cho block Go to S2, S3
Blockly.Python['unoarm_go_to_s2_s3'] = function(block) {
  // đảm bảo import module có ở definitions_ (nếu chưa có, thêm vào đầu file)
  Blockly.Python.definitions_['import_kdi_unoarm'] = 'import kdi_unoarm';
  Blockly.Python.definitions_['import_kdi_unoarm'] = 'from remote_control import *';
  var toS2 = Blockly.Python.valueToCode(block, 'TO_S2', Blockly.Python.ORDER_ATOMIC) || '0';
  var toS3 = Blockly.Python.valueToCode(block, 'TO_S3', Blockly.Python.ORDER_ATOMIC) || '0';
  return 'kdi_unoarm.go_to_S2_S3(' + toS2 + ', ' + toS3 + ')\n';
};