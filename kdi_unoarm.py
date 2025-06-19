# kdi_unoarm.py
# Python library for UnoArm control

# Default dimensions
d1, d2, d3, d4, d5 = 10.25, 15, 16, 4.64, 7.5

# Function: set physical dimensions
def set_dimensions(_d1, _d2, _d3, _d4, _d5):
    global d1, d2, d3, d4, d5
    d1, d2, d3, d4, d5 = _d1, _d2, _d3, _d4, _d5

# Function: check if angles S2, S3 are valid
def kiem_tra_tinh_hop_le(check_S2, check_S3):
    if check_S3 > 170 or check_S2 > 180:
        return False
    if (15/16)*check_S2 + check_S3 < 129.375:
        return False
    if check_S3 < check_S2/2:
        return False
    if check_S3 > (check_S2*5)/8 + 113.75:
        return False
    return True