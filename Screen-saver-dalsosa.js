let dot1 = game.createSprite(2, 2)
let dot2 = game.createSprite(2, 2)
let dot3 = game.createSprite(2, 2)
let asleep: boolean = false
let g: Gesture

input.onButtonPressed(Button.A, function () {
    asleep = true
})
input.onButtonPressed(Button.B, function () {
    asleep = false
})
input.onGesture(Gesture.Shake, function () {
    g = Gesture.Shake
})
input.onLogoDown(function () {
    g = Gesture.LogoDown
})
input.onLogoUp(function () {
    g = Gesture.LogoUp
})
input.onGesture(Gesture.TiltLeft, function () {
    g = Gesture.TiltLeft
})
input.onGesture(Gesture.TiltRight, function () {
    g = Gesture.TiltRight
})
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
function FerrisWheel() {
    basic.showLeds(`
            . # # # .
            # . # . #
            # # # # #
            # . # . #
            . # # # .
            `)
    basic.pause(500)
    basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
    basic.pause(500)
    basic.showLeds(`
            . . # . .
            . . . . .
            # . # . #
            . . . . .
            . . # . .
            `)
    basic.pause(500)

}
basic.forever(function () {
    if (asleep) {
       if (g==Gesture.Shake) {
           dots()
       }
       else if (g==Gesture.LogoDown) {
           FerrisWheel()
       }
       else if (g==Gesture.LogoUp){
           wave()
       }
       else if (g==Gesture.TiltLeft){
           jump()
       }
       else if (g==Gesture.TiltRight){
           wink()
       }
    } else {
        basic.showString("Awake")
    }
})


