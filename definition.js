Blockly.Blocks['oled_create'] = {
  init: function() {
    this.jsonInit(
      {
        type: "oled_create",
        message0: "%2 tạo màn hình oled cổng %1 ",
        args0: [
          {
            type: "field_dropdown",
            name: "port",
            options: [
              ["1", "0"],
              ["2", "1"],
              ["3", "2"],
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          },
          {
            type: "field_image",
            src: "https://i.ibb.co/Qv42LGX/Oled.png",
            width: 20,
            height: 20,
            alt: "*",
            flipRtl: false
          }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: "#ff3399",
        tooltip: "Khởi tạo màn hình OLED với chiều dài, chiều cao và địa chỉ được chọn",
        helpUrl: ""
      }
    );
  }
};

Blockly.Blocks['oled_text'] = {
  init: function() {
    this.jsonInit(
      {
        type: "oled_text",
        message0: "%5 màn hình oled in ra %1 tại x %2 y %3 %4",
        args0: [
          {
            type: "input_value",
            name: "TEXT",
            check: "String"
          },
          {
            type: "input_value",
            name: "X",
            check: "Number"
          },
          {
            type: "input_value",
            name: "Y",
            check: "Number"
          },
          {
            type: "input_dummy"
          },
          {
            type: "field_image",
            src: "https://i.ibb.co/Qv42LGX/Oled.png",
            width: 20,
            height: 20,
            alt: "*",
            flipRtl: false
          }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: "#ff3399",
        tooltip: "In ra dòng chữ tại vị trí được chọn",
        helpUrl: ""
      }
    );
  }
};

Blockly.Blocks['oled_clear'] = {
  init: function() {
    this.jsonInit(
      {
        type: "oled_fill",
        message0: "%1 xóa màn hình oled",
        args0: [
          {
            type: "field_image",
            src: "https://i.ibb.co/Qv42LGX/Oled.png",
            width: 20,
            height: 20,
            alt: "*",
            flipRtl: false
          }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: "#ff3399",
        tooltip: "Xóa toàn màn hình oled",
        helpUrl: ""
      }
    );
  }
};

Blockly.Python['oled_create'] = function(block) {
  var port = block.getFieldValue('port');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_oledI2C'] = 'from oled_i2c import OledI2C';
  // oled = SSD1306_I2C(oled_width, oled_height, i2c)
  var code = 'oled = OledI2C(' + port + ')\n';
  return code;
};

Blockly.Python['oled_text'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  //oled.text('Hello, World 1!', 0, 0, col); oled.show()
  var code = 'oled.text(' + value_text + ', ' + value_x + ', ' + value_y + ');\n' +
  'oled.show()\n';
  return code;
};

Blockly.Python['oled_clear'] = function(block) {
  var code = 'oled.fill(0);\n' + 
  'oled.show()\n';
  return code;
};