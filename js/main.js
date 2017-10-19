/**
 * Inicializamos o angular.module com o mesmo nome que definimos na diretiva ng-app
 * E inclu�mos a depend�ncia do ngRoute
 */
var app = angular.module('website',[
    'ngRoute'
]);

/**
 * Como possu�mos a variavel app definida acima com a inicializa��o do Angular
 * atrav�s do app.config conseguimos criar as configura��es
 * definimos que essa configura��o depende do $routeProvider e usamos na function($routeProvider)
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        // aqui dizemos quando estivernos na url / vamos carregar o conte�do da pagina inicila a home
        // no segundo parametro definimos um objeto contendo o templateUrl da nossa pagina home e o controller que ir�
        // preparar o conteudo e processar outros eventos da p�gina que veremos posteriormente
        .when("/", {templateUrl: "templates/home.html", controller: "HomeCtrl"})
        // configura��o das rotas bem parecidas para as outras paginas
        .when("/sobre", {templateUrl: "templates/sobre.html", controller: "SobreCtrl"})
        .when("/servicos", {templateUrl: "templates/servicos.html", controller: "ServicosCtrl"})
        .when("/contato", {templateUrl: "templates/contato.html", controller: "ContatoCtrl"})
        /* aqui voc� pode adicionar rotas para outras paginas que desejar criar */
        // por �ltimo dizemos se nenhuma url digitada for encontrada mostramos a p�gina 404 que n�o existe no nosso servidor
        .when('/404', {templateUrl: "templates/404.html"})
        .otherwise("/404");
}]);

/*
 * Controllers
 */
app.controller('HomeCtrl', function ($scope, $location) {

});

app.controller('SobreCtrl', function ($scope, $location) {

});

app.controller('ServicosCtrl', function ($scope, $location) {

});

app.controller('ContatoCtrl', function ($scope, $location) {

});