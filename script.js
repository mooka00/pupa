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
let list = [
    { game: 'Каркассон', player: '4', name: null },
    { game: 'Доббль', player: '6', name: 'Анна' },
    { game: 'Шахматы', player: '2', name: null }
]
addbutton.addEventListener('click', () => {
    const mes = { game, player, name: null }
    mes.game = game.value
    mes.player = player.value
    list.push(mes)
    console.log(mes)
    render()
})

borbutton.addEventListener('click', () => {
    if (gamesel.value === '0' && list[0].name == null) {
        list[0].name = borname.value
        message.textContent = 'игру ' + list[0].game + ' забрал ' + borname.value
    } else if (gamesel.value === '1' && list[1].name == null) {
        list[1].name = borname.value
        message.textContent = 'игру ' + list[1].game + ' забрал ' + borname.value
    } else if (gamesel.value === '2' && list[2].name == null) {
        list[2].name = borname.value
        message.textContent = 'игру ' + list[2].game + ' забрал ' + borname.value
    } else {
        message.textContent = 'error'
    }
    render()
})
retbutton.addEventListener('click', () => {
    if (gamesel.value === '0' && list[0].name != null) {
        list[0].name = null
        message.textContent = 'игра ' + list[0].game + ' возвращена'
    } else if (gamesel.value === '1' && list[1].name != null) {
        list[1].name = null
        message.textContent = 'игра ' + list[1].game + ' возвращена'
    } else if (gamesel.value === '2' && list[2].name != null) {
        list[2].name = null
        message.textContent = 'игра ' + list[2].game + ' возвращена'
    } else {
        message.textContent = 'error'
    }
    render()
})


filter.addEventListener('change', () => {
    render()
});

function render() {
    gamelist.textContent = ""
    list.forEach((el) => {
        const item = document.createElement('li')
        if (filter.checked) {
            if (el.name === null) {
                item.append(el.game + ' ', el.player + ' игрока(ов) ' + ' ', 'свободно')
                gamelist.append(item)
            }

        } else {

            if (el.name === null) {
                item.append(el.game + ' ', el.player  + ' игрока(ов) ', 'свободно')
            } else {
                item.append(el.game + ' ', el.player + ' игрока(ов) ', 'взял(а) ' + el.name)
            }
            gamelist.append(item)
        }


        console.log(item)
    });


}
render()