Blockly.Blocks['delay'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("delay");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Delay processing in miliseconds");
 this.setHelpUrl("http://www.bipes.net.br/");
  }
};

Blockly.Blocks['reset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("reset");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Reset Device");
 this.setHelpUrl("www.bipes.net.br");
  }
};

Blockly.Blocks['gpio_set'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("set pin");
    this.appendValueInput("value")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Write to GPIO digital pin");
 this.setHelpUrl("bipes.net.br");
  }
};

Blockly.Blocks['exec_python'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Execute Python Code");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("Execute custom Python Code");
 this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['neopixel_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fill NeoPixel");
    this.appendValueInput("color")
        .setCheck(null)
        .appendField("Color");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("Fill all NeoPixels with one color (use Write NeoPixel after)");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['neopixel_xy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set NeoPixel 8x8");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("X (col)");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("Y (row)");
    this.appendValueInput("color")
        .setCheck(null)
        .appendField("Color");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip("Set NeoPixel on 8x8 grid using X/Y coordinate with vertical serpentine addressing");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};

Blockly.Blocks['neopixel_8x8'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("NeoPixel 8x8 Grid");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "R0C0")
        .appendField(new Blockly.FieldColour("#000000"), "R0C1")
        .appendField(new Blockly.FieldColour("#000000"), "R0C2")
        .appendField(new Blockly.FieldColour("#000000"), "R0C3")
        .appendField(new Blockly.FieldColour("#000000"), "R0C4")
        .appendField(new Blockly.FieldColour("#000000"), "R0C5")
        .appendField(new Blockly.FieldColour("#000000"), "R0C6")
        .appendField(new Blockly.FieldColour("#000000"), "R0C7");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "R1C0")
        .appendField(new Blockly.FieldColour("#000000"), "R1C1")
        .appendField(new Blockly.FieldColour("#000000"), "R1C2")
        .appendField(new Blockly.FieldColour("#000000"), "R1C3")
        .appendField(new Blockly.FieldColour("#000000"), "R1C4")
        .appendField(new Blockly.FieldColour("#000000"), "R1C5")
        .appendField(new Blockly.FieldColour("#000000"), "R1C6")
        .appendField(new Blockly.FieldColour("#000000"), "R1C7");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "R2C0")
        .appendField(new Blockly.FieldColour("#000000"), "R2C1")
        .appendField(new Blockly.FieldColour("#000000"), "R2C2")
        .appendField(new Blockly.FieldColour("#000000"), "R2C3")
        .appendField(new Blockly.FieldColour("#000000"), "R2C4")
        .appendField(new Blockly.FieldColour("#000000"), "R2C5")
        .appendField(new Blockly.FieldColour("#000000"), "R2C6")
        .appendField(new Blockly.FieldColour("#000000"), "R2C7");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "R3C0")
        .appendField(new Blockly.FieldColour("#000000"), "R3C1")
        .appendField(new Blockly.FieldColour("#000000"), "R3C2")
        .appendField(new Blockly.FieldColour("#000000"), "R3C3")
        .appendField(new Blockly.FieldColour("#000000"), "R3C4")
        .appendField(new Blockly.FieldColour("#000000"), "R3C5")
        .appendField(new Blockly.FieldColour("#000000"), "R3C6")
        .appendField(new Blockly.FieldColour("#000000"), "R3C7");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "R4C0")
        .appendField(new Blockly.FieldColour("#000000"), "R4C1")
        .appendField(new Blockly.FieldColour("#000000"), "R4C2")
        .appendField(new Blockly.FieldColour("#000000"), "R4C3")
        .appendField(new Blockly.FieldColour("#000000"), "R4C4")
        .appendField(new Blockly.FieldColour("#000000"), "R4C5")
        .appendField(new Blockly.FieldColour("#000000"), "R4C6")
        .appendField(new Blockly.FieldColour("#000000"), "R4C7");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "R5C0")
        .appendField(new Blockly.FieldColour("#000000"), "R5C1")
        .appendField(new Blockly.FieldColour("#000000"), "R5C2")
        .appendField(new Blockly.FieldColour("#000000"), "R5C3")
        .appendField(new Blockly.FieldColour("#000000"), "R5C4")
        .appendField(new Blockly.FieldColour("#000000"), "R5C5")
        .appendField(new Blockly.FieldColour("#000000"), "R5C6")
        .appendField(new Blockly.FieldColour("#000000"), "R5C7");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "R6C0")
        .appendField(new Blockly.FieldColour("#000000"), "R6C1")
        .appendField(new Blockly.FieldColour("#000000"), "R6C2")
        .appendField(new Blockly.FieldColour("#000000"), "R6C3")
        .appendField(new Blockly.FieldColour("#000000"), "R6C4")
        .appendField(new Blockly.FieldColour("#000000"), "R6C5")
        .appendField(new Blockly.FieldColour("#000000"), "R6C6")
        .appendField(new Blockly.FieldColour("#000000"), "R6C7");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#000000"), "R7C0")
        .appendField(new Blockly.FieldColour("#000000"), "R7C1")
        .appendField(new Blockly.FieldColour("#000000"), "R7C2")
        .appendField(new Blockly.FieldColour("#000000"), "R7C3")
        .appendField(new Blockly.FieldColour("#000000"), "R7C4")
        .appendField(new Blockly.FieldColour("#000000"), "R7C5")
        .appendField(new Blockly.FieldColour("#000000"), "R7C6")
        .appendField(new Blockly.FieldColour("#000000"), "R7C7");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Set all 64 NeoPixels on 8x8 grid (includes write)");
    this.setHelpUrl("http://www.bipes.net.br");
  }
};