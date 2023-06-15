/* A function abrirMenu será responsevel por transaformar o display none em block
quando tiver click no menu*/
function abrirMenu() {
  Menu.style.display = 'block';
}
/* A function btnfechar será responsevel por transaformar o display block em none
quando tiver click no botton x*/
function btnfechar() {
  Menu.style.display = 'none';
}

let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
  product.onclick = () => {
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      }
    });
  };
});
function sair() {
  preview.classList.remove('active');

}
previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


var radio = document.querySelector('.manual-btn');

var cont = 1;

document.getElementById('radio1').checked = true;

setInterval(() => {
  proximaimg()

}, 5000);

function proximaimg() {
  cont++
  if (cont > 3) {
    cont = 1
  }

  document.getElementById('radio' + cont).checked = true;

}
function fecharMenu() {
  document.getElementById('menuMobile').style.width = '0%'
}
function abrirMenu() {
  document.getElementById('menuMobile').style.width = '100%'
}

//Animação scroll

const target = document.querySelectorAll('[data-anima]'); /*Selecionando todos os elementos que tem data-anima*/
const animationClass =  'animate';

function animeScroll(){ /* O pageYoffSte está riscado por não estar sendo usado. Deixei para complementar o entendimento.*/
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/ 4); /*Estamos pegando a altura com o "InnerHeight", ou seja, pegando a altura da tela, multiplicando por 3 e dividindo por 4 
                                                                            para se ajustar à tela do usuário.*/

    /*Com a var. "window" conseguimos pegar o tamanho da tela (eixo Y).*/
    target.forEach(function(element){ /* "Element" é a relação de distância entre o elemento específico ao topo da window.
                                         "Element pode ser qualquer nome."  */

        if((windowTop) > element.offsetTop){ /*Se o windowTop for maior que o elemento, adicionamos a animation class*/
            element.classList.add(animationClass)
        }
        else /*Caso ao contrário, removemos. Seria o comando inverso.*/
        element.classList.remove(animationClass)
    })
}
animeScroll(); /*Garantindo para que toda vez seja 'rodado' o js. */
if(target.length)
{
window.addEventListener('scroll', function(){    /*Toda vez que o usúario der um scroll, a funcion acima será ativada(conforme às especificações requeridas pelo usuário). */
    animeScroll();
})
}


//DarkMode --------------------

const toggle = document.getElementById('toggleDark'); /*pegando o id do botão */
const body = document.querySelector('body'); /*pegando o body*/

toggle.addEventListener('click', function(){ /*adicionando evento de click*/
    this.classList.toggle('bi-moon'); 
    if(this.classList.toggle('bi-brightness-high-fill')){ /*se a class do botao estiver "sol", será atribuido essas propriedades*/
        body.style.background = 'white';
        body.style.transition = '2s';


        Mais_vendidos.style.background = 'whitesmoke';
        Mais_vendidos.style.transition = '2s';


    }else{ /*caso não tenha, será atribuído essas propriedadess*/          

        body.style.background = 'black';
        body.style.transition = '2s';

         Mais_vendidos.style.background = 'black';
         Mais_vendidos.style.transition = '2s';
    }
});
