(async () => {
    const database = require('./db');
    const Produto = require('./produto');

    try {
        console.log("Criando serviço db");
        const resultado = await database.sync();
        console.log(resultado);
        // await criaProduto(Produto);
        // await listandoProd(Produto);
        // await atualizarProd(Produto);
        // await deleteProd(Produto);

    } catch (error) {
        console.error(error);
    }
})();

async function criaProduto(Produto) {
    console.log("Criando produto")
    const resultadoCreate = await Produto.create({
        nome: 'mouse',
        preco: 10,
        descricao: 'Um teclado USB mouse'
    })
    //console.log(resultadoCreate);
}

async function listandoProd(Produto) {
    const produtos = await Produto.findAll();
    console.log(produtos);

    produtos = await Produto.findByPk(4);
    console.log(produtos)
}

async function atualizarProd(Produto) {
    const produto = await Produto.findByPk(4);
    //console.log(produto);
    produto.nome = "Mouse Top";

    const resultadoSave = await produto.save();
    console.log(resultadoSave);
}

async function deleteProd(Produto) {
    //assim
    Produto.destroy({ where: { id: 4 } });

    //ou assim
    const produto = await Produto.findByPk(5);
    produto.destroy();
}