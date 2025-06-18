# UnoArm Extension

This extension provides a block to set the physical dimensions of the UnoArm.

## Blocks

- **Set Dimensions (d1, d2, d3, d4, d5)**: Allows inputting numeric values for the five robot arm segments. Generates code `kdi_unoarm.set_dimensions(d1, d2, d3, d4, d5)`.

## Usage

1. Drag the **Set Dimensions** block into your workspace.
2. Enter numeric values for each parameter.
3. Place it before any movement blocks to configure the arm.