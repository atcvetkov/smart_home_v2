function steam_Sensor () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        return 1
    } else {
        return 0
    }
}
function servo_motor_door (angle: number) {
    pins.servoWritePin(AnalogPin.P8, angle)
}
function gas_sensor () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        return true
    } else {
        return false
    }
}
function lcd_display (text: string) {
    I2C_LCD1602.ShowString(text, 0, 0)
}
function motion_sensor () {
    if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        return true
    } else {
        return false
    }
}
function rgb_led (color: string) {
    strip = neopixel.create(DigitalPin.P14, 4, NeoPixelMode.RGB)
    if (color == "red") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (color == "green") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (color == "blue") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (color == "black") {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
}
function motor_module (direction: string) {
    if (direction == "left") {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else if (direction == "right") {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else if (direction == "off") {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
}
function servo_motor_window (angle: number) {
    pins.servoWritePin(AnalogPin.P9, angle)
}
let strip: neopixel.Strip = null
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.clear()
basic.forever(function () {
	
})
basic.forever(function () {
    steam_Sensor()
    if (steam_Sensor() == 1) {
        music.setVolume(255)
        music.ringTone(262)
        music.setVolume(0)
    } else {
        music.setVolume(0)
    }
})
