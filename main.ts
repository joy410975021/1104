basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= i; j++) {
            if (j == 0) {
                led.toggle(4 - i, i)
            } else {
                led.toggle(4 - (i - j), i)
                led.toggle(4 - i, i - j)
            }
        }
        basic.pause(500)
    }
    basic.clearScreen()
})
