let Distancia = 0
let Linieota = 0
let Guay = 0
irRemote.connectInfrared(DigitalPin.P16)
basic.forever(function () {
    if (Guay < 15) {
        k_Bit.carStop()
    } else {
        if (Guay == 70) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                `)
            k_Bit.run(DIR.RunForward, 67)
        } else if (Guay == 64) {
            k_Bit.carStop()
        } else if (Guay == 67) {
            basic.showLeds(`
                . . . # .
                . . # . .
                . # # # #
                . . # . .
                . . . # .
                `)
            k_Bit.run(DIR.TurnRight, 50)
        } else if (Guay == 68) {
            basic.showLeds(`
                . # . . .
                . . # . .
                # # # # .
                . . # . .
                . # . . .
                `)
            k_Bit.run(DIR.TurnLeft, 50)
        } else if (Guay == 21) {
            k_Bit.run(DIR.RunBack, 67)
            basic.showLeds(`
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                . . . . .
                `)
        }
    }
})
basic.forever(function () {
    Guay = irRemote.returnIrButton()
    Linieota = k_Bit.LineTracking()
    Distancia = k_Bit.ultra()
})
