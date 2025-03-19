document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao=document.getElementById('aumentar-fonte')
    const diminuiFonteBotao=document.getElementById('diminuir-fonte')
    
    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -=0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    })
    const botaoDeAcessibilidade = document.getElementById('botao-aacessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('totacao-botao');
        botaoDeAcessibilidade.classList.toggle('apresenta-lista')
    })
    
});