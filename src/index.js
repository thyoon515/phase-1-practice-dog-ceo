let breeds = []

function getBreedsImg(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
        .then(res => res.json())
        .then(response => {
            const dogImgContainer = document.querySelector('#dog-image-container')
            response.message.forEach(url => {
                const img = document.createElement('img')
                img.src = url
                dogImgContainer.append(img)
            })
        })
}
getBreedsImg()

function getBreedsName(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(res => res.json())
    .then(response => {
        breeds = Object.keys(response.message)
        addBreedsToDom(breeds)
    })
}
getBreedsName()

function addBreedsToDom(breeds){
    const ul = document.querySelector('#dog-breeds')
    breeds.map(breed => {
        const li = document.createElement('li')
        li.innerHTML = breed
        ul.append(li)
    })
}

document.addEventListener('click', e => {
    if(e.target.matches('li')){
        e.target.style.color = 'red'
    }
})

document.addEventListener('change', event => {
    if(event.target.matches('#breed-dropdown')){
    const ul = document.querySelector('#dog-breeds')
    ul.innerHTML = ""
    const filteredBreeds = breeds.filter(breed => breed[0] === event.target.value)
    addBreedsToDom(filteredBreeds)
    }
})