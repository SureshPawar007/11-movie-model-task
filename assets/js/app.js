const cl = console.log;

const addMovieForm = document.getElementById('addMovieForm');
const movieCardContainer = document.getElementById('movieCardContainer')
const addMovieBtn = document.getElementById('addMovieBtn');
const backDrop = document.getElementById('backDrop');
const ourModel = document.getElementById('ourModel');
const closeTab = [...document.querySelectorAll('.closeTab')];
const movieNameControl = document.getElementById('movieNameControl')
const movieUrlControl = document.getElementById('movieUrlControl')
const movieRatingControl = document.getElementById('movieRatingControl')
// cl(closeTab);

let movieArr =[
    {
        title : 'Asur2',
        movieUrl : `https://static.toiimg.com/thumb/msid-100544873,width-400,resizemode-4/100544873.jpg`,
        rating : '5',
    },
    {
        title : 'Mirzapur',
        rating : '5',
        movieUrl : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliVXP8B1j4RnoFH22o6u4NWSUL6DewI0MBg&s`
    }

]


const templating = (arr)=>{
    let result = '';
    arr.forEach((ele)=>{
        result +=  `
                    <div class="col-md-4 mb-5">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="m-0">${ele.title}</h2> <small class="float-right">Rating : ${ele.rating}</small>
                            </div>
                            <div class="card-body">
                                <img class="img-fluid" src="${ele.movieUrl}" alt="" title="">
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-info">Edit</button>
                                <button class="btn btn-danger float-right">Delete</button>
                            </div>
                        </div>
                    </div>
        
                   `
    })
    movieCardContainer.innerHTML = result;
}

templating(movieArr)

const addMovie = ((eve)=>{

    backDrop.classList.toggle('active')
    ourModel.classList.toggle('active')
})

closeTab.forEach((arr)=>{
    arr.addEventListener('click',addMovie)
})


const onAddMovieData = ((eve)=>{
    eve.preventDefault();
    cl('submit');
    let obj ={
        title : movieNameControl.value,
        movieUrl : movieUrlControl.value,
        rating : movieRatingControl.value,
    }
    movieArr.unshift(obj)
    templating(movieArr);
    addMovieForm.reset()
    addMovie()
    cl(movieArr);
})





addMovieForm.addEventListener('submit',onAddMovieData)
// closeTab.addEventListener('click',closeMovieForm)
addMovieBtn.addEventListener('click',addMovie)
