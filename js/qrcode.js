// Selector do campo input
const inputData = document.querySelector("#form input")
// Selector do button, ao qual irá nos permitir escutar um evento
const buttonEvent = document.querySelector("#form button")
// Selector do encapsulador do qrcode, que nos permite tornar o campo visível.
const containerImage = document.querySelector("#qrcode")
// Campo imagem ao qual receberá os dados advindos da API do google
const image = document.querySelector("#qrcode img")

buttonEvent.addEventListener("click", () => {
    const value = getInput();
    loadingImage(value);
})

// Caso pressionado enter é chamado o método loading.
inputData.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
        const value = getInput();
        loadingImage(value);
    }
})

// Obtém os valores do input
function getInput(){
    const value = inputData.value;
    if (!value) return;
    return value;
}

function showImage(){
    containerImage.classList.add('active');
}

// Faz o reset do campo input e do button
function resetValueInput(){
    inputData.value = '';
    buttonEvent.innerText = 'Gerar novo QRCODE';
}

// Carrega a imagem gerada pela API do google
function loadingImage(value){
    image.src = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${value}`;
    buttonEvent.innerText = 'Aguarde...';

    image.addEventListener('load', ()=>{
        showImage();
        resetValueInput();
    })
}