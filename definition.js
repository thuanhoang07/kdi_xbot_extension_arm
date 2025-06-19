// UnoArm - JSON block definitions mimicking MQTT example
Blockly.Blocks['unoarm_set_dimensions'] = {
  init: function() {
    this.jsonInit({
      "type": "unoarm_set_dimensions",
      "message0": "Set dimensions d1 %1 d2 %2 d3 %3 d4 %4 d5 %5",
      "args0": [
        {"type": "field_number", "name": "D1", "value": 10.25},
        {"type": "field_number", "name": "D2", "value": 15},
        {"type": "field_number", "name": "D3", "value": 16},
        {"type": "field_number", "name": "D4", "value": 4.64},
        {"type": "field_number", "name": "D5", "value": 7.5}
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#5CA699",
      "tooltip": "Set the five dimension parameters d1 to d5",
      "helpUrl": ""
    });
  }
};
Blockly.Python.definitions_['import_kdi_unoarm'] = 'import kdi_unoarm';
Blockly.Python['unoarm_set_dimensions'] = function(block) {
  var d1 = block.getFieldValue('D1');
  var d2 = block.getFieldValue('D2');
  var d3 = block.getFieldValue('D3');
  var d4 = block.getFieldValue('D4');
  var d5 = block.getFieldValue('D5');
  return 'kdi_unoarm.set_dimensions(' + d1 + ', ' + d2 + ', ' + d3 + ', ' + d4 + ', ' + d5 + ')\n';
};

Blockly.Blocks['unoarm_check_valid'] = {
  init: function() {
    this.jsonInit({
      "type": "unoarm_check_valid",
      "message0": "Check valid S2 %1 S3 %2",
      "args0": [
        {"type": "field_number", "name": "S2", "value": 0},
        {"type": "field_number", "name": "S3", "value": 0}
      ],
      "output": "Boolean",
      "colour": "#5CA699",
      "tooltip": "Returns true if the (S2, S3) angles are within valid range",
      "helpUrl": ""
    });
  }
};
Blockly.Python['unoarm_check_valid'] = function(block) {
  var s2 = block.getFieldValue('S2');
  var s3 = block.getFieldValue('S3');
  var code = 'kdi_unoarm.kiem_tra_tinh_hop_le(' + s2 + ', ' + s3 + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};