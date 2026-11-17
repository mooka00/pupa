const gamesel = document.getElementById('gameSelect')
const message = document.getElementById('message')
const borbutton = document.getElementById('borrowButton')
const retbutton = document.getElementById('returnButton')
const gamelist = document.getElementById('gameList')
let list = [
    { game: 'Каркассон', player: ' 4 игрока ', name: null },
    { game: 'Доббль', player: ' 6 игроков ', name: 'Анна' },
    { game: 'Шахматы', player: ' 2 игрока ', name: null }
]




borbutton.addEventListener('click',() =>{
    if (gamesel.value === '1' && list[1].name == null){

    }
})
retbutton.addEventListener('click',() =>{
    
})








function render() {
    gamelist.textContent = ""
    list.forEach((el) => {
        const item = document.createElement('li')
        if (el.name === null){
            item.append(el.game, el.player, 'свободно')
        } else{
            item.append(el.game, el.player, el.name)
        }
        
        gamelist.append(item)
        console.log(item)
    });


}
render()