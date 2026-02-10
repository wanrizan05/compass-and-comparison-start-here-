let Compass = 0
input.onGesture(Gesture.Shake, function () {
    if (randint(1, 2) == randint(1, 2)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (randint(1, 2) == randint(1, 2)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (randint(1, 2) == randint(1, 2)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    Compass = input.compassHeading()
})
