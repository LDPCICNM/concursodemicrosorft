let Distancia = 0
let Linieota = 0
let httpsldpcicnmgithubiomenudocachodeprolanderitoguayqueesunpro = 0
irRemote.connectInfrared(DigitalPin.P16)
basic.forever(function () {
    httpsldpcicnmgithubiomenudocachodeprolanderitoguayqueesunpro = irRemote.returnIrButton()
    Linieota = k_Bit.LineTracking()
    Distancia = k_Bit.ultra()
})
basic.forever(function () {
    if (httpsldpcicnmgithubiomenudocachodeprolanderitoguayqueesunpro == 70) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            `)
        k_Bit.run(DIR.RunForward, 67)
    } else if (httpsldpcicnmgithubiomenudocachodeprolanderitoguayqueesunpro == 64) {
        k_Bit.carStop()
    } else if (httpsldpcicnmgithubiomenudocachodeprolanderitoguayqueesunpro == 64) {
    	
    } else if (httpsldpcicnmgithubiomenudocachodeprolanderitoguayqueesunpro == 67) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # # # #
            . . # . .
            . . . # .
            `)
        k_Bit.run(DIR.TurnRight, 50)
    } else if (httpsldpcicnmgithubiomenudocachodeprolanderitoguayqueesunpro == 68) {
        basic.showLeds(`
            . # . . .
            . . # . .
            # # # # .
            . . # . .
            . # . . .
            `)
        k_Bit.run(DIR.TurnLeft, 50)
    } else if (httpsldpcicnmgithubiomenudocachodeprolanderitoguayqueesunpro == 21) {
        k_Bit.run(DIR.RunBack, 67)
        basic.showLeds(`
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            . . . . .
            `)
    } else if (httpsldpcicnmgithubiomenudocachodeprolanderitoguayqueesunpro == 25) {
        if (httpsldpcicnmgithubiomenudocachodeprolanderitoguayqueesunpro > 15) {
            while (Linieota == 0) {
                k_Bit.run(DIR.RunForward, 50)
            }
        } else {
        	
        }
    } else {
    	
    }
})
