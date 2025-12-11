const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const botaoIniciar = document.querySelector('.app__card-primary-button')
const displayTempo = document.querySelector('#timer')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

const tempFoco = 1500
const tempDescansoCurto = 300
const tempDescansoLongo = 900

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    banner.setAttribute('src', '/imagens/foco.png')
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
        banner.setAttribute('src', '/imagens/descanso-curto.png')

})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
        banner.setAttribute('src', '/imagens/descanso-longo.png')

})

timerBt.addEventListener('click', () => {
    const contexto = html.dataset.contexto
    if(contexto === 'foco') {
        console.log('foco')
    }else if (contexto === 'descanso-curto') {
        console.log('descanso curto')
    }else {
        console.log('Descanso longo')
    }
})



