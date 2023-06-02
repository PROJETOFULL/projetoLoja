let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
product.onclick = () =>{
 preveiwContainer.style.display = 'flex';
 let name = product.getAttribute('data-name');
 previewBox.forEach(preview =>{
   let target = preview.getAttribute('data-target');
   if(name == target){
     preview.classList.add('active');
   }
 });
};
});
function sair()
{
   preview.classList.remove('active');
  
}
previewBox.forEach(close =>{
close.querySelector('.fa-times').onclick = () =>{
 close.classList.remove('active');
 preveiwContainer.style.display = 'none';
};
});


var radio = document.querySelector('.manual-btn');

var cont = 1;

document.getElementById('radio1').checked = true;

setInterval(()=> {
  proximaimg()
    
},5000);

function proximaimg()
{
  cont++
  if(cont > 3){
    cont = 1
  }

  document.getElementById('radio'+cont).checked = true;

}
function fecharMenu()
{
  document.getElementById('menuMobile').style.width = '0%'
}
function abrirMenu()
{
  document.getElementById('menuMobile').style.width = '100%'
}