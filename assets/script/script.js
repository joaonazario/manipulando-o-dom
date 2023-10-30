var body = document.querySelector('body');

let titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = `Qual é o iPad ideal para você?`;

let produto = document.createElement('div');
produto.className = 'produto-container';

let produtoNome = document.createElement('h2');
produtoNome.textContent = `iPad Pro - M2`;

let produtoImg = document.createElement('img')
produtoImg.src = './assets/img/ipad-pro.jpg';
produtoImg.alt = 'Ipad Pro - M2'

let produtoDescricao = document.createElement('p');
produtoDescricao.textContent = `
Desempenho impressionante, telas avançadas, conexões sem fio ultrarrápidas,
Apple Pencil com uma outra dimensão de funcionalidades e novos recursos poderosos do iPadOS 16.
Descubra a experiência definitiva em iPad.
`;

let produtoPreco = document.createElement('span');
produtoPreco.textContent = `A partir de R$ 816,58/mês ou R$ 9.799*`;

let produtoBtnComprar = document.createElement('button');
produtoBtnComprar.textContent = `Comprar`;

let produtoLink = document.createElement('a');
produtoLink.href = 'https://www.apple.com/br/ipad-pro/';
produtoLink.textContent = `Saiba mais >`;



produto.appendChild(produtoNome);
produto.appendChild(produtoImg);
produto.appendChild(produtoDescricao);
produto.appendChild(produtoPreco);
produto.appendChild(produtoBtnComprar);
produto.appendChild(produtoLink);
body.appendChild(titulo);
body.appendChild(produto);