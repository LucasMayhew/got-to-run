input.onButtonPressed(Button.A, function () {
    hit = game.createSprite(the_sprite.get(LedSpriteProperty.X), the_sprite.get(LedSpriteProperty.Y))
    hit.set(LedSpriteProperty.Brightness, 60)
    hit.set(LedSpriteProperty.Direction, the_sprite.get(LedSpriteProperty.Direction))
    hit.ifOnEdgeBounce()
    for (let index = 0; index < 5; index++) {
        hit.move(1)
        basic.pause(100)
    }
    hit.delete()
})
input.onGesture(Gesture.LogoUp, function () {
	
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
function doSomething () {
    blinker.blink(2, 2, 100)
    basic.pause(300)
    blinker.blink(3, 2, 200)
    blinker.blink(1, 2, 200)
    blinker.blink(2, 1, 200)
    blinker.blink(2, 3, 200)
    basic.pause(300)
    blinker.blink(1, 0, 300)
    blinker.blink(2, 0, 300)
    blinker.blink(3, 0, 300)
    blinker.blink(4, 3, 300)
    blinker.blink(4, 2, 300)
    blinker.blink(4, 1, 300)
    blinker.blink(0, 1, 300)
    blinker.blink(0, 2, 300)
    blinker.blink(0, 3, 300)
    blinker.blink(1, 4, 300)
}
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
	
})
input.onGesture(Gesture.LogoDown, function () {
	
})
let hit: game.LedSprite = null
let the_sprite: game.LedSprite = null
the_sprite = game.createSprite(0, 0)
hit = game.createSprite(0, 0)
let the_wall = game.createSprite(2, 3)
let the_wall2 = game.createSprite(3, 0)
let win = game.createSprite(2, 2)
win.set(LedSpriteProperty.Brightness, 50)
hit.set(LedSpriteProperty.Brightness, 0)
hit.delete()
basic.forever(function () {
    if (the_sprite.isTouching(the_wall)) {
        the_sprite.move(-1)
    } else {
        if (the_sprite.isTouching(the_wall2)) {
            the_sprite.move(-1)
        } else {
            if (the_sprite.isTouching(win)) {
                game.addScore(1)
                win.set(LedSpriteProperty.X, randint(0, 4))
                win.set(LedSpriteProperty.Y, randint(0, 4))
            } else {
                if (!(hit.isDeleted())) {
                    if (hit.isTouching(win)) {
                        game.addScore(1)
                        win.set(LedSpriteProperty.X, randint(0, 4))
                        win.set(LedSpriteProperty.Y, randint(0, 4))
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (!(hit.isDeleted())) {
        if (hit.isTouching(win)) {
            game.addScore(1)
            win.set(LedSpriteProperty.X, randint(0, 4))
            win.set(LedSpriteProperty.Y, randint(0, 4))
        }
        if (!(the_wall.isDeleted())) {
            if (hit.isTouching(the_wall)) {
                the_wall.delete()
            }
        }
        if (!(the_wall2.isDeleted())) {
            if (hit.isTouching(the_wall2)) {
                the_wall2.delete()
            }
        }
    }
})
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.B))) {
        if (input.isGesture(Gesture.TiltLeft)) {
            the_sprite.move(1)
            basic.pause(100)
        } else {
            if (input.isGesture(Gesture.TiltRight)) {
                the_sprite.move(1)
                basic.pause(100)
            } else if (input.isGesture(Gesture.LogoDown)) {
                the_sprite.move(1)
                basic.pause(100)
            } else if (input.isGesture(Gesture.LogoUp)) {
                the_sprite.move(1)
                basic.pause(100)
            }
        }
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        the_sprite.set(LedSpriteProperty.Direction, -90)
    } else {
        if (input.isGesture(Gesture.TiltRight)) {
            the_sprite.set(LedSpriteProperty.Direction, 90)
        } else if (input.isGesture(Gesture.LogoDown)) {
            the_sprite.set(LedSpriteProperty.Direction, 0)
        } else if (input.isGesture(Gesture.LogoUp)) {
            the_sprite.set(LedSpriteProperty.Direction, 180)
        }
    }
})
