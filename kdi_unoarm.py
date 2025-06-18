# kdi_unoarm.py
# Python library for UnoArm control

# Default dimensions
_d1 = 10.25
_d2 = 15
_d3 = 16
_d4 = 4.64
_d5 = 7.5

def set_dimensions(d1, d2, d3, d4, d5):
    global _d1, _d2, _d3, _d4, _d5
    _d1 = d1
    _d2 = d2
    _d3 = d3
    _d4 = d4
    _d5 = d5