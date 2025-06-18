# kdi_unoarm.py
# Python library for UnoArm control
import math
from remote_control import *
rc_mode = RemoteControlMode(4)

# Default dimensions
_d1 = 10.25
_d2 = 15
_d3 = 16
_d4 = 4.64
_d5 = 7.5

def set_dimensions(d1, d2, d3, d4, d5):
    global _d1, _d2, _d3, _d4, _d5
    _d1, _d2, _d3, _d4, _d5 = d1, d2, d3, d4, d5


def kiem_tra_tinh_hop_le(check_S2, check_S3):
    hop_le = True
    if check_S3 > 170 or check_S2 > 180:
        hop_le = False
    elif (15/16)*check_S2 + check_S3 < 129.375:
        hop_le = False
    elif check_S3 < check_S2/2:
        hop_le = False
    elif check_S3 > (check_S2*5)/8 + 113.75:
        hop_le = False
    return hop_le


def go_to_S2_S3(to_S2, to_S3):
    print(f"Moving to angles S2={to_S2}, S3={to_S3}")
    if kiem_tra_tinh_hop_le(to_S2, to_S3):
        init_S2 = servo.position(1)
        init_S3 = servo.position(2)
        current_S2, current_S3 = init_S2, init_S3
        q = math.hypot(init_S2-to_S2, init_S3-to_S3)
        if q:
            buoc_S2 = 2*((to_S2-init_S2)/q)
            buoc_S3 = 2*((to_S3-init_S3)/q)
            while (init_S2 < to_S2 and current_S2 <= to_S2) or (init_S2 >= to_S2 and current_S2 >= to_S2):
                current_S2 += buoc_S2
                current_S3 += buoc_S3
                servo.position(1, round(current_S2))
                time.sleep(pause)
                servo.position(2, round(current_S3))
                time.sleep(pause)
            print(f"Updated S2={servo.position(1)}, S3={servo.position(2)}")
    else:
        print("Invalid angle combination")


def go_to_r_h(r, h):
    global _d1, _d2, _d3, _d4, _d5
    # radial-offset and height mapping to S2/S3
    y1 = r - _d4
    z1 = h + _d5
    d6 = math.hypot(y1, z1-_d1)
    phi2 = math.degrees(math.acos((_d2**2 + (_d3**2 - d6**2))/(2*_d2*_d3)))
    phi3 = math.degrees(math.acos((_d2**2 + (d6**2 - _d3**2))/(2*_d2*d6)))
    phi4 = 180 - math.degrees(math.asin(y1/d6)) if z1>_d1 else math.degrees(math.asin(y1/d6))
    phi1 = phi3 + phi4
    to_S2 = 2*phi1 - 190
    to_S3 = phi2 + to_S2/2 - 25
    go_to_S2_S3(to_S2, to_S3)
    print(f"Position r={r}, h={h}")


def quay_ve_goc(goc_S1):
    servo.position(0, int(goc_S1))
    print(f"Base rotated to {goc_S1}")
    