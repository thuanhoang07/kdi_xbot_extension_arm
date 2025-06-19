# kdi_unoarm.py
# Python library for UnoArm control

# Default dimensions
_d1 = 10.25
_d2 = 15
_d3 = 16
_d4 = 4.64
_d5 = 7.5

#khai bao vi tri ban dau
y_now = 28 #tam xa
z_now = 9 #tam cao
phi_now = 90 #goc
topic_hut = None
step = 0.1
#khai bao cac hang so khac
pause = 0.01
pause2 = 0.01
cong_suat_hut = 100

def set_dimensions(d1, d2, d3, d4, d5):
    global _d1, _d2, _d3, _d4, _d5
    _d1 = d1
    _d2 = d2
    _d3 = d3
    _d4 = d4
    _d5 = d5
    
def kiem_tra_tinh_hop_le(check_S2, check_S3):
  hop_le = True
  if check_S3 > 170:
    hop_le = False
  elif check_S2 > 180:
    hop_le = False
  elif (15 / 16) * check_S2 + check_S3 < 129.375:
    hop_le = False
  elif check_S3 < check_S2 / 2:
    hop_le = False
  elif check_S3 > (check_S2 * 5) / 8 + 113.75:
    hop_le = False
  return hop_le