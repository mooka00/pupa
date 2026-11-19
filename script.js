const gamesel = document.getElementById('gameSelect')
const message = document.getElementById('message')
const borbutton = document.getElementById('borrowButton')
const retbutton = document.getElementById('returnButton')
const gamelist = document.getElementById('gameList')
const borname = document.getElementById('borrowerName')
const filter = document.getElementById('filter')
const hint = document.getElementById('hint');
const player = document.getElementById('player')
const game = document.getElementById('game')
const addbutton = document.getElementById('add')
const cop = document.getElementById('copies')
let list = [
    { game: 'Каркассон', player: '4', name: [], cop: 4 },
    { game: 'Доббль', player: '6', name: [], cop: 3 },
    { game: 'Шахматы', player: '2', name: [], cop: 2 }
]
addbutton.addEventListener('click', () => {
    if (game.value != "" && player.value != 0  && cop.value != 0 ){
        const mes = { game, player, name: [], cop: 0 }
        mes.game = game.value
        mes.player = player.value
        mes.cop = cop.value
        list.push(mes)
        console.log(mes)
        render()
        renderoption()
    }
    else{
        message.textContent = " вы ввели некоректные данные"
    }
})

borbutton.addEventListener('click', () => {
    const ind = Number(gamesel.value)
    if (list[ind].cop < 1) {
        message.textContent = 'эта игра уже занята'
        return
    }
    if (list[ind].name.includes(borname.value)){
        message.textContent = borname.value + " уже занял(а) эту игру"
        return
    }
    list[ind].name.push(borname.value)
    list[ind].cop -= 1
    const p = list[ind].game
    message.textContent = `игра ${p} отданна ${borname.value}`
    render()

})
retbutton.addEventListener('click', () => {
    const ind = Number(gamesel.value)
    const i = list[ind].name.indexOf(borname.value)
    if (i === -1) {
        message.textContent = borname.value + ' не брал(а) эту игру'
        return
    }
    if (list[ind].name.includes(borname.value)){
        
        const p = list[ind].game
        list[ind].name.splice(i, 1)
        list[ind].cop += 1
        message.textContent = `игра ${p} возвращенна`
        render()
    }
})


filter.addEventListener('change', () => {
    render()
});
function renderoption() {
    gamesel.textContent = ""
    list.forEach((el, i) => {
        const pull = document.createElement('option')
        pull.append(el.game)
        pull.value = i
        gamesel.append(pull)

    });
}
function render() {
    gamelist.textContent = ""
    list.forEach((el) => {
        const item = document.createElement('li')
        if (filter.checked) {
            if (el.cop > 0) {
                item.append(el.game + ' ', el.player + ' игрока(ов) ' + ' ', 'свободно ', el.cop)
                gamelist.append(item)
            }

        } else {
            item.append(el.game + ' ', el.player + ' игрока(ов) ', 'свободно ', el.cop, ' игру заняли( ', el.name, " )")
            gamelist.append(item)
        }


        console.log(item)
    });


}
renderoption()
render()