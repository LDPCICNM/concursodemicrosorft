let Giro = 0
let Distancia = 0
let Linieota = 0
let Orden = 0
irRemote.connectInfrared(DigitalPin.P16)
basic.forever(function () {
    Orden = irRemote.returnIrButton()
    Linieota = k_Bit.LineTracking()
    Distancia = k_Bit.ultra()
})
basic.forever(function () {
    if (Distancia < 15 && Distancia != 0) {
        k_Bit.carStop()
    } else {
        if (Orden == 70) {
            k_Bit.run(DIR.RunForward, 67)
        } else if (Orden == 64) {
            k_Bit.carStop()
        } else if (Orden == 67) {
            k_Bit.run(DIR.TurnRight, 50)
        } else if (Orden == 68) {
            k_Bit.run(DIR.TurnLeft, 50)
        } else if (Orden == 21) {
            k_Bit.run(DIR.RunBack, 67)
        } else if (Orden == 22) {
            Giro = 0
            if (Linieota != 0) {
                if (Giro == 0) {
                    music.playMelody("C5 B A G F E D C ", 120)
                    k_Bit.Led(COLOR.blue)
                    Giro = 1
                    k_Bit.carStop()
                    basic.pause(1000)
                    k_Bit.run(DIR.TurnRight, 60)
                    basic.pause(500)
                    k_Bit.run(DIR.RunForward, 60)
                    basic.pause(500)
                    k_Bit.run(DIR.TurnRight, 60)
                    basic.pause(500)
                    k_Bit.carStop()
                } else {
                    music.playMelody("C D E F G A B C5 ", 120)
                    k_Bit.Led(COLOR.red)
                    Giro = 0
                    k_Bit.carStop()
                    basic.pause(1000)
                    k_Bit.run(DIR.TurnLeft, 60)
                    basic.pause(500)
                    k_Bit.run(DIR.RunForward, 60)
                    basic.pause(500)
                    k_Bit.run(DIR.TurnLeft, 60)
                    basic.pause(500)
                    k_Bit.carStop()
                }
            } else {
                k_Bit.run(DIR.RunForward, 60)
            }
        }
    }
})
