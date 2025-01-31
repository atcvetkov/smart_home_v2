def motion_sensor():
    if pins.digital_read_pin(DigitalPin.P15) == 1:
        return True
    else:
        return False