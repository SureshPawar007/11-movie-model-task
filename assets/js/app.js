const cl = console.log;

const addMovieForm = document.getElementById('addMovieForm');
const addMovieBtn = document.getElementById('addMovieBtn');
const backDrop = document.getElementById('backDrop');
const ourModel = document.getElementById('ourModel');
const closeTab = [...document.querySelectorAll('.closeTab')];
cl(closeTab);






const onAddMovieData = ((eve)=>{
    eve.preventDefault();
    cl('submit');
    backDrop.classList.add('d-none')
    ourModel.classList.add('d-none')

})









addMovieForm.addEventListener('submit',onAddMovieData)