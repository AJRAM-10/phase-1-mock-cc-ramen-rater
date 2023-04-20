// As a user, I can:

// - See all ramen images in the `div` with the id of `ramen-menu`. When the page
// loads, request the data from the server to get all the ramen objects. Then,
// display the image for each of the ramen using an `img` tag inside the
// `#ramen-menu` div.

// 1. get div
// 2. get data
// 3. append img to #ramen-menu
let ramen
const url = ('http://localhost:3000/ramens')
const ramenList = document.getElementById('ramen-menu')
const detail = document.querySelector('#ramen-detail')
const ramenPic = document.querySelector('.detail-image')
const nameId = document.querySelector('.name')
const restaurantId = document.querySelector('.restaurant')
const ratingId = document.querySelector('#rating-display')
const commentId = document.querySelector('#comment-display')
const newRamen = document.getElementById('new-ramen')

function getRamen() {
    return fetch(url)
    .then(resp => resp.json())
    .then((ramens) => { 
        ramens.map((ramen) => getRamenImg(ramen))
    });
}
//console.log(ramenData)

function getRamenImg(ramen){
    const ramenImg = document.createElement('img')
    ramenImg.src = ramen.image
    ramenList.append(ramenImg)

        ramenImg.addEventListener('click', () => {
            handleClick(ramen)
        })
}

function handleClick(ramen){
    const {id, name, restaurant, image, rating, comment} = ramen
   ramenPic.src = image
   nameId.textContent = name
   restaurantId.textContent = restaurant
   ratingId.textContent = rating
   commentId.textContent = comment
}

newRamen.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault() 
    let new_ramen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    }
    getRamenImg(new_ramen)
}


getRamen()



// - Click on an image from the `#ramen-menu` div and see all the info about that
// ramen displayed inside the `#ramen-detail` div and where it says
// `insert comment here` and `insert rating here`.


// - Create a new ramen after submitting the `new-ramen` form. The new ramen should
// be added to the`#ramen-menu` div. The new ramen does not need to persist; in
// other words, if you refresh the page, it's okay that the new ramen is no
// longer on the page.
