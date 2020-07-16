input.onButtonPressed(Button.A, function () {
    led.unplot(postx, posty)
    postx += -1
    if (postx < 0) {
        postx = 4
        posty += -1
        if (posty < 0) {
            posty = 4
        }
    }
    led.plot(postx, posty)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(postx, posty)
    postx += 1
    if (postx > 4) {
        postx = 0
        posty += 1
        if (posty > 4) {
            posty = 0
        }
    }
    led.plot(postx, posty)
})
let posty = 0
let postx = 0
postx = 2
posty = 2
led.plot(postx, posty)
