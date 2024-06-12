const cl = console.log;

const addMovieForm = document.getElementById('addMovieForm');
const addMovieBtn = document.getElementById('addMovieBtn');
const backDrop = document.getElementById('backDrop');
const ourModel = document.getElementById('ourModel');
const closeTab = [...document.querySelectorAll('.closeTab')];
cl(closeTab);



const addMovie = ((eve)=>{

    backDrop.classList.add('active')
    ourModel.classList.add('active')
})


const onAddMovieData = ((eve)=>{
    eve.preventDefault();
    cl('submit');
    

})







addMovieBtn.addEventListener('click',addMovie)
addMovieForm.addEventListener('submit',onAddMovieData)