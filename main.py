Distancia = 0
Linieota = 0
Guay = 0
irRemote.connect_infrared(DigitalPin.P16)

def on_forever():
    global Guay, Linieota, Distancia
    Guay = irRemote.return_ir_button()
    Linieota = k_Bit.line_tracking()
    Distancia = k_Bit.ultra()
basic.forever(on_forever)

def on_forever2():
    if Guay == 70:
        basic.show_leds("""
            . . . . .
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            """)
        k_Bit.run(DIR.RUN_FORWARD, 67)
    elif Guay == 64:
        k_Bit.car_stop()
    elif Guay == 64:
        pass
    elif Guay == 67:
        basic.show_leds("""
            . . . # .
            . . # . .
            . # # # #
            . . # . .
            . . . # .
            """)
        k_Bit.run(DIR.TURN_RIGHT, 50)
    elif Guay == 68:
        basic.show_leds("""
            . # . . .
            . . # . .
            # # # # .
            . . # . .
            . # . . .
            """)
        k_Bit.run(DIR.TURN_LEFT, 50)
    elif Guay == 21:
        k_Bit.run(DIR.RUN_BACK, 67)
        basic.show_leds("""
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            . . . . .
            """)
    elif Guay == 25:
        if Guay > 15:
            while Linieota == 0:
                k_Bit.run(DIR.RUN_FORWARD, 50)
        else:
            pass
    else:
        pass
basic.forever(on_forever2)
