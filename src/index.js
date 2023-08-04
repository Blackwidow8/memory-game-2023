document.addEventListener('DOMContentLoaded',() =>{

    const cardArray=[
        {
            name:'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name:'ice-cream',
            img:'src/images/ice-cream.png'
        },
        {
            name:'pizza',
            img:'src/images/pizza.png'
        },
        {
            name:'milkshake',
            img:'src/images/milkshake.png'
        },
        {
            name:'hotdog',
            img: 'src/images/hotdog.png'
        },
        {
            name:'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name:'ice-cream',
            img:'src/images/ice-cream.png'
        },
        {
            name:'pizza',
            img:'src/images/pizza.png'
        },
        {
            name:'milkshake',
            img:'src/images/milkshake.png'
        },
        {
            name:'hotdog',
            img: 'src/images/hotdog.png'
        }
    ]
    cardArray.sort(()=> 0.5-Math.random())
    console.log(cardArray)
    const grid=document.querySelector('.grid')
    let resultsDisplay=document.querySelector('#result')
    let cardsChosen=[]
    let cardsChosenIds=[]
    let cardsWon=[]
function createBoard() {
    for(let i=0; i<cardArray.length; i++){
        const card=document.createElement('img')
        card.setAttribute('src','src/images/blank (1).png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}
function flipCard(){
    let cardId=this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length ===2){
        setTimeout(checkForMatch, 500)
    }
    console.log(cardsChosenIds)
}

function checkForMatch(){
    const cards=document.querySelectorAll('img')
    const optionOneId=cardsChosenIds[0]
    const optionTwoId=cardsChosenIds[1]

    if(optionOneId == optionTwoId){
        alert('You have clicked the same image!')
        cards[optionOneId].setAttribute('src','src/images/blank (1).png')
        cards[optionTwoId].setAttribute('src','src/images/blank (1).png')
    }else if (cardsChosen[0] == cardsChosen[1]){
        alert('You have found a match')
        cards[optionOneId].setAttribute('src','src/images/white.png')
        cards[optionTwoId].setAttribute('src','src/images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
}else{
    cards[optionOneId].setAttribute('src','src/images/blank (1).png')
    cards[optionTwoId].setAttribute('src','src/images/blank (1).png')
    alert('Sorry, try again!')
}
    cardsChosen=[]
    cardsChosenIds=[]


    console.log(cardsChosen)
    console.log(cardsWon)
    resultsDisplay.textContent=cardsWon.length
    if(cardArray.length === cardsWon.length/2){
        resultsDisplay.textContent='Congratulations! You Have Won!'
    }

}
createBoard()
})

