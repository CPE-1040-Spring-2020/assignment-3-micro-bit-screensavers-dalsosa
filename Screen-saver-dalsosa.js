let dot1 = game.createSprite(2, 2)
let dot2 = game.createSprite(1, 2)
let dot3 = game.createSprite(2, 2)
let asleep: boolean = false
input.onButtonPressed(Button.A, function () {
    asleep = true
})

basic.forever(function () {
    if (asleep) {
        led.enable(false)
        asleep = false
    } else {
        input.onButtonPressed(Button.B, function () {
            led.enable(true)
        })
    }
    function dots() {
        dot1.move(1);
        basic.pause(100)
        dot2.move(-1);
        dot2.turn(Direction.Right, 90)
        basic.pause(500)
        dot3.turn(Direction.Right, -45)
        dot3.move(1);
        basic.pause(2000)
        dot1.ifOnEdgeBounce();
        dot1.turn(Direction.Right, 45)
        dot2.ifOnEdgeBounce();
        dot2.turn(Direction.Right, 45)
        dot3.ifOnEdgeBounce();
        dot3.turn(Direction.Right, 45)
    }
    function jump() {
        basic.showLeds(`
            . # # # .
            . # # # .
            # . # . #
            . . # . .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . # # # .
            # # # # #
            . . # . .
            # # # # #
            . . . . .
            `)
        basic.pause(300)

    }
    function wave() {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(300)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . # . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            # # # . .
            . . . # .
            . . # . .
            . # . . .
            . . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
        basic.pause(200)
    }
    function wink() {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(300)
        basic.showLeds(`
            . . . # .
            # # . # .
            . . . . .
            # . . . .
            . # # # .
            `)
        basic.pause(300)
    }


    input.onGesture(Gesture.Shake, function () {
        while (asleep == false)
            dots()

    })
    input.onLogoDown(function () {
        while (asleep == false)
            jump()

    })
    input.onLogoUp(function () {
        while (asleep == false)
            wave()
    })
    input.onButtonPressed(Button.AB, function () {
        while (asleep == false)
            wink()
    })



})

Video upload on [imgur](https://imgur.com/a/AVQ4W4B/) 
