controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash(list._pickRandom())
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    list.push(randint(-10, 10))
})
let list: number[] = []
list = [-3, 3, 4]
