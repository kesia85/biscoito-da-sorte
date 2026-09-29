let mensagens = [ " Você precisa de paciência. Vai entender que tudo tem seu tempo e para isso precisa viver um dia de cada vez, sem pular etapas. Só apreciando um dia de cada vez vai conseguir o rumo que procura." ,
 " Talvez o que você tanto procura está mais perto do que você imagina. " ,
 " Você precisa ser mais ativo/a, tome atitudes, corra riscos. A vida precisa ser vivida e não pensada." ,
 " Continue tentando. Não desita dos seus sonhos, a vida vai te recompensar pela preserverança." , 
 " Não se deixe abater pelas circunstâncias da vida, nem pelas palavras dos outros, lute por você e pelo que acredita." ,
 " Você precisa relaxar e confiar no processo." , 
 " O que não tem remédio, remediado está." , 
 " Não acedite em tudo que ouve, aprenda a dicernir o bem do mal." , 
 " Confie na sua intuição. Para qualquer dúvida da sua mente, seu corpo já tem a resposta." , 
 " Tenha caltela antes de tomar uma decisão precipitada." , 
 " Belas palavras podem esconder péssimas intenções. " ,
 " Lembre-se que mesmo parecendo não ter escolha, você tem uma escolha. " ,
 " Uma oportunidade incrível vai surgir no seu caminho. Se prepare para quando a oportunidade chegar, você estar pronto/a para receber. " , 
 " Modere em seus hábitos e cuide dos excessos. Quando tirar as distrações, perceberá que a resposta que procura está dentro de você. " ,
 " Tenha discrição com seus planos. Nem todo passo precisa ter público. " , " Um pequeno passo hoje, pode mudar seu futuro." , 
 " A verdade é uma constante da qual não podemos fugir. " , 
 " Sempre tem o dia de amanhã, para raiar um novo sol e revelar as belezas escondidas em um dia de tempestade. " , 
 " Reflita sobre suas atitudes e recalcule a rota. " , 
" Desafios são parte de uma trajetória de sucesso. Não desista na primeira, nem na segunda dificuldade. Persista até conseguir. " ] ;
let biscoito = document.getElementById("biscoito");
let mensagem = document.getElementById("mensagem");
let bloqueado = false 
biscoito.addEventListener("click", function ( ) { 
if (bloqueado) { return;
}
bloqueado = true
let numero = Math.floor ( Math.random ( ) *20); 
mensagem.textContent = mensagens[numero];
biscoito.classList.add ("clicado")
setTimeout( function ( ) { biscoito.classList.remove ("clicado"); }, 800);
setTimeout( function ( ) { bloqueado = false ; }, 1800000);
});


