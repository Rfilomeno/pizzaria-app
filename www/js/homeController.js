angular.module('PizzariaApp')
    .controller('HomeController', function ($scope) {
        var self = this;
        $scope.filtro = '';
        self.pizzaList = [{
            Nome: "Calabresa",
            Ingredientes: "Mussarela, cebola, molho e orégano",
            Img: "img/calabresa.png"
    }, {
            Nome: "Marguerita",
            Ingredientes: "Mussarela, molho, orégano, tomate e manjericão",
            Img: "img/margherita.png"
    }];
        self.bebidaList = [{
            Nome: "Coca-cola",
            Descricao: "Refrigerante 2 litros",
            Img: "img/coca-cola.png"
    }, {
            Nome: "Coca-Zero",
            Descricao: "Refrigerante 2 litros",
            Img: "img/coca-zero.png"
    }, {
            Nome: "Guaraná",
            Descricao: "Refrigerante 2 litros",
            Img: "img/guarana.png"
    }, {
            Nome: "Guaraná Zero",
            Descricao: "Refrigerante 2 litros",
            Img: "img/guarana-zero.png"
    }, {
            Nome: "Sprite",
            Descricao: "Refrigerante 2 litros",
            Img: "img/sprite.png"
    }];
        self.sobremesaList = [{
            Nome: "DIPP'S DE CANELA",
            Descricao: "A deliciosa massa da Domino's coberta de açúcar e canela, acompanhada de doce de leite.",
            Img: "img/dipps.png"
    }, {
            Nome: "CHOCOBREAD",
            Descricao: "Massa finíssima recheada de muito chocolate e cobertura de creme de baunilha com granulado.",
            Img: "img/chocobread.png"
    }];
    });