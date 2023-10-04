
const arvoresDOM = document.querySelectorAll('.arvore');
const btnCloseDOM = document.querySelector('.btn-close');
const modalDOM = document.querySelector('.modal');
const mapa = document.querySelector('.mapa')

const arvoresLista = [
    {
        id: 'tree1',
        imagem: './images/arvore.jpg',
        totalArrecadado: 20,
        metaTotal: 100,
        positionTop: 50,    
        positionRigth: 50,
    },
    {
        id: 'tree2',
        imagem: './images/arvore2.jfif',
        totalArrecadado: 40,
        metaTotal: 100,
        positionTop: 25,    
        positionRigth: 45,
    },
    {
        id: 'tree3',
        imagem: './images/muda1.jfif',
        totalArrecadado: 70,
        metaTotal: 200,
        positionTop: 65,    
        positionRigth: 55,
    }
]

arvoresDOM.forEach(element => {
    element.addEventListener('click', () => { openModal(element.getAttribute('id'))})
});

window.addEventListener('click', (event) => {
    if(event.target == modalDOM){
        toggleModal();
    }
})

function toggleModal(){
    modalDOM.classList.toggle('hidden')
}

function openModal(id){

    createModal(id);
    modalDOM.classList.toggle('hidden')
}

function createModal(id) {

    console.log(id);

    const arvore = arvoresLista.filter( (arvore) => {
        return arvore.id === id;
    });

    const arvoreSelecionada = arvore[0];

    const modalWrapper = document.querySelector('.modal-wrapper')
    const modalContent = document.querySelector('.modal-content')

    modalContent.innerHTML = ``;

    const modalImage = document.createElement('img');
    modalImage.classList.add('modal-image');
    modalImage.src = `${arvoreSelecionada.imagem}`

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');

    const progress = document.createElement('div');
    progress.classList.add('progress');
    progress.style.width = `${(arvoreSelecionada.totalArrecadado / arvoreSelecionada.metaTotal) * 100}%`

    progressBar.appendChild(progress);

    const progressText = document.createElement('span');
    progressText.classList.add('progress-text')
    progressText.textContent = `R$ ${arvoreSelecionada.totalArrecadado} / ${arvoreSelecionada.metaTotal}`

    modalContent.appendChild(modalImage)
    modalContent.appendChild(progressBar)
    modalContent.appendChild(progressText)

}