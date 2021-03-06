/* Configura Links */
function configuraLinks(angular) {

	angular.element(".link_venda").click(function () {
		angular.element(".txt-selected").html("Venda");
		angular.element(".operation-mode").css("display", "none");
		angular.element(".cart-clean").css("display", "block");
		angular.element(".cart-clean .btn-sim").attr("href", "#!/new_pedido");
	});

	angular.element(".link_venda_promo").click(function () {
		angular.element(".txt-selected").html("Venda");
		angular.element(".operation-mode").css("display", "none");
		angular.element(".cart-clean").css("display", "block");
		angular.element(".cart-clean .btn-sim").attr("href", "#!/new_pedido");
	});

	angular.element(".link_new_pedido").click(function () {
		angular.element(".txt-selected").html("Consignação");
		angular.element(".operation-mode").css("display", "none");
		angular.element(".cart-clean").css("display", "block");
		angular.element(".cart-clean .btn-sim").attr("href", "#!/new_pedido");
	});

	angular.element(".link_troca").click(function () {
		angular.element(".txt-selected").html("Troca");
		angular.element(".operation-mode").css("display", "none");
		angular.element(".cart-clean").css("display", "block");
		angular.element(".cart-clean .btn-sim").attr("href", "#!/troca");
	});

	angular.element(".link_comodato").click(function () {
		angular.element(".txt-selected").html("Comodato sem venda");
		angular.element(".operation-mode").css("display", "none");
		angular.element(".cart-clean").css("display", "block");
		angular.element(".cart-clean .btn-sim").attr("href", "#!/comodato");
	});

	angular.element(".link_comodato_regularizacao").click(function () {
		angular.element(".txt-selected").html("Comodato de regularização");
		angular.element(".operation-mode").css("display", "none");
		angular.element(".cart-clean").css("display", "block");
		angular.element(".cart-clean .btn-sim").attr("href", "#!/comodato_regularizacao");

	});

	angular.element(".link_bonificacao").click(function () {
		angular.element(".txt-selected").html("Bonificação de Marketing");
		angular.element(".operation-mode").css("display", "none");
		angular.element(".cart-clean").css("display", "block");
		angular.element(".cart-clean .btn-sim").attr("href", "#!/bonificacao");
	});

	angular.element(".link_bonificacao_avarias").click(function () {
		angular.element(".txt-selected").html("Bonificação para Avarias");
		angular.element(".operation-mode").css("display", "none");
		angular.element(".cart-clean").css("display", "block");
		angular.element(".cart-clean .btn-sim").attr("href", "#!/bonificacao_avarias");
	});

	angular.element(".link_venda_promo").click(function () {
		angular.element(".txt-selected").html("Venda");
		angular.element(".operation-mode").css("display", "none");
		angular.element(".cart-clean").css("display", "block");
		angular.element(".cart-clean .btn-sim").attr("href", "#!/venda_material_promo");
	});

	angular.element("#btn-operation").click(function () {
		angular.element(".operation-mode").css("display", "block");
	});
};

/* More Less Controller */
function moreLess(angular) {

	angular.element(".remove1").click(function () {
		if (angular.element("#exampleInputAmount1").val() == "1") {

		} else {
			angular.element("#exampleInputAmount1").val(angular.element("#exampleInputAmount1").val() - 1);
		}
	});

	angular.element(".adc1").click(function () {
		angular.element("#exampleInputAmount1").val(parseInt(angular.element("#exampleInputAmount1").val()) + 1);
	});

	angular.element(".remove2").click(function () {
		if (angular.element("#exampleInputAmount2").val() == "1") {

		} else {
			angular.element("#exampleInputAmount2").val(angular.element("#exampleInputAmount2").val() - 1);
		}
	});

	angular.element(".adc2").click(function () {
		angular.element("#exampleInputAmount2").val(parseInt(angular.element("#exampleInputAmount2").val()) + 1);
	});

	angular.element(".remove3").click(function () {
		if (angular.element("#exampleInputAmount3").val() == "1") {

		} else {
			angular.element("#exampleInputAmount3").val(angular.element("#exampleInputAmount3").val() - 1);
		}
	});

	angular.element(".adc3").click(function () {
		angular.element("#exampleInputAmount3").val(parseInt(angular.element("#exampleInputAmount3").val()) + 1);
	});

	angular.element(".remove4").click(function () {
		if (angular.element("#exampleInputAmount4").val() == "1") {

		} else {
			angular.element("#exampleInputAmount4").val(angular.element("#exampleInputAmount4").val() - 1);
		}
	});

	angular.element(".adc4").click(function () {
		angular.element("#exampleInputAmount4").val(parseInt(angular.element("#exampleInputAmount4").val()) + 1);
	});

	angular.element(".remove5").click(function () {
		if (angular.element("#exampleInputAmount5").val() == "1") {

		} else {
			angular.element("#exampleInputAmount5").val(angular.element("#exampleInputAmount5").val() - 1);
		}
	});

	angular.element(".adc5").click(function () {
		angular.element("#exampleInputAmount5").val(parseInt(angular.element("#exampleInputAmount5").val()) + 1);
	});

}


/* default Controller */
app.controller("defaultController", function ($scope) {

	$scope.titulo = "Home"
	angular.element(".title-app").html("Home");
	angular.element(".open-modal-clientes").click(function () {
		angular.element(".overlay-add-customer").css("display", "block");
		angular.element(this).css("z-index", "999");
		angular.element("body").css("overflow-y", "hidden");
	});

	angular.element(".overlay-add-customer").click(function () {
		angular.element(this).css("display", "none");
		angular.element(".open-modal-clientes").css("z-index", "2");
		angular.element("body").css("overflow-y", "auto");
	});

	angular.element(".sync").addClass("sync");
	angular.element(".sync").css("display", "block");
	angular.element(".cart").css("display", "none");
	angular.element(".search").css("display", "none");
	angular.element(".bar-customer-back").css("display", "none");

	angular.element(".btn-novo-pedido").click(function () {
		angular.element(".overlay-modal").css("display", "block");
	});

	angular.element(".close-modal").click(function () {
		angular.element(".overlay-modal").css("display", "none");
	});

	angular.element(".close-alert").click(function () {
		angular.element(".alerta-home").hide();
	});

	angular.element("a.carousel-control").click(function (e) {
		e.preventDefault();
		$(this).parent().carousel($(this).data("slide"));
	});
})

	/* minha Rota Controller */
	.controller("minhaRotaController", function ($scope) {

		$scope.titulo = "Minha Rota"
		angular.element(".title-app").html("Minha Rota");
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".search").addClass("search");
		angular.element(".search").css("display", "block");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");
		angular.element(".menu-request").css("display", "none");
	})

	/* meus Pedidos Controller */
	.controller("meusPedidosController", function ($scope) {

		$scope.titulo = "Meus Pedidos"
		angular.element(".title-app").html("Meus Pedidos");
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".search").addClass("search");
		angular.element(".search").css("display", "block");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");
		angular.element("#mySidenav").css("display", "block");
		angular.element("#mySidenav").css("left", "-310");
		angular.element(".back-menu").css("display", "none");
		angular.element(".back-menu").css("left", "-310");
		angular.element(".back-menu").css("background", "#000000b3");

		angular.element(".add-product").click(function () {
			angular.element(".overlay-modal").css("display", "block");
		});

		angular.element(".button-pedidos").click(function () {
			angular.element(".overlay-modal").css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});

		$scope.tab1 = function () {
			angular.element(".tab-hist-1").addClass("active_hist");
			angular.element(".tab-hist-1").css("display", "inline-block");
			angular.element(".tab-hist-2").removeClass("active_hist");
			angular.element(".tab-page-hist-2").css("display", "none");
			angular.element(".tab-page-hist-1").css("display", "block");
		}

		$scope.tab2 = function () {
			angular.element(".tab-hist-2").addClass("active_hist");
			angular.element(".tab-hist-2").css("display", "inline-block");
			angular.element(".tab-hist-1").removeClass("active_hist");
			angular.element(".tab-page-hist-1").css("display", "none");
			angular.element(".tab-page-hist-2").css("display", "block");
		}

		/*
		angular.element(".tab-hist-1").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element("#tab-hist-2").removeClass("active");
			angular.element(".tab-page-hist-2").css("display", "none");
			angular.element(".tab-page-hist-1").css("display", "block");
		});

		angular.element(".tab-hist-2").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element("#tab-hist-1").removeClass("active");
			angular.element(".tab-page-hist-1").css("display", "none");
			angular.element(".tab-page-hist-2").css("display", "block");
		});
		*/

		angular.element(".tab-1").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-2,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-content > div").css("display", "none");
			angular.element(".tab-page-1").css("display", "block");
		});

		angular.element(".tab-2").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-content > div").css("display", "none");
			angular.element(".tab-page-2").css("display", "block");
			angular.element(".tab-page-2 .pedido-01 .status-pedido").html("DEVOLVIDO <img src=images/left-arrow.svg>");
			angular.element(".tab-page-2 .pedido-02 .status-pedido").html("EM TRANSITO <img src=images/delivery-truck.svg>");
			angular.element(".tab-page-2 .pedido-03 .status-pedido").html("EM TRANSITO <img src=images/delivery-truck.svg>");
			angular.element(".tab-page-2 .pedido-04 .status-pedido").html("ENTREGUE <img src=images/thumbs-up.svg>");
			angular.element(".tab-page-2 .pedido-05 .status-pedido").html("ENTREGUE <img src=images/thumbs-up.svg>");
			angular.element(".tab-page-2 .pedido-06 .status-pedido").html("ENTREGUE <img src=images/thumbs-up.svg>");
		});

		angular.element(".tab-3").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2").removeClass("active");
			angular.element(".tab-content > div").css("display", "none");
			angular.element(".tab-page-3").css("display", "block");
			angular.element(".tab-page-3 .box-pedidos").removeClass("status-pago");
			angular.element(".tab-page-3 .box-pedidos .status-pedido").removeClass("status-pendente");
			angular.element(".tab-page-3 .box-pedidos .status-pedido").removeClass("status-nao-pago");
			angular.element(".tab-page-3 .box-pedidos").addClass("status-nao");
			angular.element(".tab-page-3 .box-pedidos .status-pedido").addClass("bg-gray");

			angular.element(".tab-page-3 .box-pedidos").css("position", "relative");
			angular.element(".tab-page-3 .box-pedidos .status-pedido").html("PENDENTE <img src=images/clock.svg>");
		});



	})

	/* Detalhes Pedido Controller */
	.controller("DetalhesPedidoController", function ($scope) {

		$scope.titulo = "Detalhes Pedido"
		angular.element(".title-app").html("Detalhes do Pedido");
		angular.element(".bar-customer-back").css("display", "block");
	})

	/* Detalhes Pedido Bloqueado Controller */
	.controller("DetalhesPedidoBloqueadoController", function ($scope) {

		$scope.titulo = "Detalhes Pedido"
		angular.element(".title-app").html("Pedido Bloqueado");
		angular.element(".bar-customer-back").css("display", "block");
	})

	/* Histórico Pedidos Controller */
	.controller("HistoricoPedidosController", function ($scope) {

		$scope.titulo = "Histórico de pedidos"
		angular.element(".title-app").html("Histórico de Pedidos");
		angular.element(".bar-customer-back").css("display", "block");

		angular.element(".tab-1").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-2,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-content > div").css("display", "none");
			angular.element(".tab-page-1").css("display", "block");
		});

		angular.element(".tab-2").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-content > div").css("display", "none");
			angular.element(".tab-page-2").css("display", "block");
		});

		angular.element(".tab-3").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2").removeClass("active");
			angular.element(".tab-content > div").css("display", "none");
			angular.element(".tab-page-3").css("display", "block");
		});


		$scope.tab1 = function () {
			angular.element(".tab-hist-1").addClass("active_hist");
			angular.element(".tab-hist-1").css("display", "inline-block");
			angular.element(".tab-hist-2").removeClass("active_hist");
			angular.element(".tab-page-hist-2").css("display", "none");
			angular.element(".tab-page-hist-1").css("display", "block");
		}

		$scope.tab2 = function () {
			angular.element(".tab-hist-2").addClass("active_hist");
			angular.element(".tab-hist-2").css("display", "inline-block");
			angular.element(".tab-hist-1").removeClass("active_hist");
			angular.element(".tab-page-hist-1").css("display", "none");
			angular.element(".tab-page-hist-2").css("display", "block");
		}

		angular.element(".menu-requests").click(function () {
			angular.element(".overlay-requests").css("display", "block");
			angular.element(".buttons-request").css("display", "block");
		});

		angular.element(".overlay-requests").click(function () {
			angular.element(this).css("display", "none");
			angular.element(".buttons-request").css("display", "none");
		});
	})

	/* Lista de Comodatos Controller */
	.controller("ComodatosController", function ($scope) {

		$scope.titulo = "Lista de Comodatos"
		angular.element(".title-app").html("Lista de Comodatos");
		angular.element(".bar-customer-back").css("display", "block");


		$scope.tab1 = function () {
			angular.element(".tab-hist-1").addClass("active_hist");
			angular.element(".tab-hist-1").css("display", "inline-block");
			angular.element(".tab-hist-2").removeClass("active_hist");
			angular.element(".tab-page-hist-2").css("display", "none");
			angular.element(".tab-page-hist-1").css("display", "block");
		}

		$scope.tab2 = function () {
			angular.element(".tab-hist-2").addClass("active_hist");
			angular.element(".tab-hist-2").css("display", "inline-block");
			angular.element(".tab-hist-1").removeClass("active_hist");
			angular.element(".tab-page-hist-1").css("display", "none");
			angular.element(".tab-page-hist-2").css("display", "block");
		}

		angular.element(".menu-requests").click(function () {
			angular.element(".overlay-requests").css("display", "block");
			angular.element(".buttons-request").css("display", "block");
		});

		angular.element(".overlay-requests").click(function () {
			angular.element(this).css("display", "none");
			angular.element(".buttons-request").css("display", "none");
		});

		$scope.contratocomodatos = function () {
			window.location.href = "#!/comodatos_contrato";
		}
	})


	/* Gerar Pedidos Controller */
	.controller("newPedidoController", function ($scope) {

		$scope.titulo = "Gerar Pedidos New"
		angular.element(".title-app").html("Gerar Pedido");
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".cart").addClass("cart");
		angular.element(".cart").css("display", "block");
		angular.element(".sync").css("display", "none");
		angular.element(".search").css("display", "none");
		angular.element(".cart").attr("href", "#!carrinho");
		angular.element("#mySidenav").css("display", "block");
		angular.element(".back-menu").css("background", "#000000b3");
		angular.element(".overlay-quest").css("display", "block");

		angular.element(".cam-produto").click(function () {
			angular.element(".overlay-quest .img-produto-photo").attr("src", "images/cupom.jpeg").css("display", "block").css("width", "100%").css("margin", "auto");
		});

		angular.element(".btn-sim").click(function () {
			angular.element(this).addClass("active");
			angular.element(".btn-nao").removeClass("active");
		});

		angular.element(".btn-comprovante").click(function () {
			angular.element(this).addClass("active");
			angular.element(".overlay-quest").css("display", "none");
		});

		angular.element(".btn-nao").click(function () {
			angular.element(this).addClass("active");
			angular.element(".btn-sim").removeClass("active");
		});

		angular.element(".add-product").click(function () {
			angular.element(".overlay-product").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element(".overlay-product").css("overflow-y", "scroll");
			angular.element(".tabela-valores").css("display", "none");
			angular.element(".accordion.comodato").css("display", "block");
			angular.element(".txt-min2").css("display", "block");
		});

		angular.element(".ex-price").click(function () {
			angular.element(".overlay-product").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element(".overlay-product").css("overflow-y", "scroll");
			angular.element(".tabela-valores").css("display", "block");
			angular.element(".accordion.comodato").css("display", "none");
			angular.element(".accordion-comodato").css("display", "none");
			angular.element(".txt-min2").css("display", "none");

		});

		angular.element(".add-product-sum").click(function () {
			angular.element(".overlay-product").css("display", "none");
			angular.element(".ind-number").css("display", "block");
			angular.element(".ind-number").addClass("anima-circle");
			//angular.element(".total-box").css("bottom", "60px");
			//angular.element(".overlay-total").css("display", "block");
			angular.element("body").css("overflow-y", "auto");
			//angular.element("body").addClass("close-total-sales");
			setTimeout(function () {
				angular.element(".ind-number").removeClass("anima-circle");
			}, 3000);
		});

		angular.element(".overlay-total").click(function () {
			angular.element(this).css("display", "none");
			angular.element("body").addClass("close-total-sales");
			angular.element(".total-box").css("bottom", "-178px");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".total-box").addClass("open-total");
		});

		angular.element(".open-total").click(function () {
			angular.element(".total-box").css("bottom", "0px");
			angular.element(".total-box").removeClass("open-total");
		});

		angular.element(".btn-filter").click(function () {
			angular.element(".filter-products").css("right", "0");
			angular.element(".overlay-filter").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element(".filter-products .col-xs-6:nth-child(15)").css("margin-bottom", "100px");
			angular.element(".total-box").css("z-index", "9");
			angular.element(".brand-itaipava").removeAttr("href", "");
		});

		angular.element(".overlay-filter").click(function () {
			angular.element(".filter-products").css("right", "-250px");
			angular.element(this).css("display", "none");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".filter-products .col-xs-6:last-child").css("margin-bottom", "initial");
			angular.element(".total-box").css("z-index", "999");
			angular.element(".brand-itaipava").attr("href", "#!lp_itaipava");
		});

		angular.element(".bonificacao").click(function () {
			if (angular.element(".accordion-bonificacao").css("display") == "block") {
				angular.element(".img-bonificacao").addClass("animation-select-close");
				angular.element(".accordion-bonificacao").css("display", "none");
				setTimeout(function () {
					angular.element(".img-bonificacao").removeClass("animation-select-open");
				}, 500);
			} else {
				angular.element(".img-bonificacao").addClass("animation-select-open");
				angular.element(".accordion-bonificacao").css("display", "block");
				setTimeout(function () {
					angular.element(".img-bonificacao").removeClass("animation-select-close");
				}, 500);
			}
		});

		angular.element(".comodato").click(function () {
			if (angular.element(".accordion-comodato").css("display") == "block") {
				angular.element(".img-comodato").addClass("animation-select-close");
				angular.element(".accordion-comodato").css("display", "none");
				setTimeout(function () {
					angular.element(".img-comodato").removeClass("animation-select-open");
				}, 500);
			} else {
				angular.element(".img-comodato").addClass("animation-select-open");
				angular.element(".accordion-comodato").css("display", "block");
				setTimeout(function () {
					angular.element(".img-comodato").removeClass("animation-select-close");
				}, 500);
			}
		});

		configuraLinks(angular);

		angular.element(".cart-clean .btn-nao").click(function () {
			angular.element(".cart-clean").css("display", "none");
			angular.element(this).removeClass("active");
		});

		angular.element(".cart-clean .btn-sim").click(function () {
			angular.element(".cart-clean").css("display", "none");
			angular.element(this).removeClass("active");
		});

		angular.element(".link_1").click(function () {
			angular.element(".txt-selected-comodato").html("1");
			angular.element(".result1").css("display", "block");
			angular.element(".result2, .result3, .result4, .result5").css("display", "none");
		});

		angular.element(".link_2").click(function () {
			angular.element(".txt-selected-comodato").html("2");
			angular.element(".result1, .result2").css("display", "block");
			angular.element(".result3, .result4, .result5").css("display", "none");
		});

		angular.element(".link_3").click(function () {
			angular.element(".txt-selected-comodato").html("3");
			angular.element(".result1, .result2, .result3").css("display", "block");
			angular.element(".result4, .result5").css("display", "none");
		});

		angular.element(".link_4").click(function () {
			angular.element(".txt-selected-comodato").html("4");
			angular.element(".result1, .result2, .result3, .result4").css("display", "block");
			angular.element(".result5").css("display", "none");

		});

		angular.element(".link_5").click(function () {
			angular.element(".txt-selected-comodato").html("5");
			angular.element(".result1, .result2, .result3, .result4, .result5").css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-product").css("display", "none");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".result1, .result2, .result3, .result4, .result5").css("display", "none");

		});

		angular.element(".img-sync").click(function () {
			$(this).attr("src", "images/loading.gif");
			setTimeout(function () {
				angular.element(".img-sync").attr("src", "images/cloud_b.svg");
				angular.element(".txt-estoque span").html("Disponibilidade de estoque: 58724");
			}, 3000);

		});

		angular.element(".close-modal").click(function(){
			angular.element(".overlay-modal").css("display","none");
		});

	})

	/* Tab Bonificação Controller */
	.controller("tabBonificacaoController", function ($scope) {

		$scope.titulo = "Bonificação"
		angular.element(".title-app").html("Bonificação");
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".search img, .sync img").attr("src", "images/cart_w.svg");
		angular.element(".search, .sync").addClass("cart");
		angular.element(".cart").removeClass("search, sync");
		angular.element(".cart").attr("href", "#!carrinho");


		angular.element(".add-product").click(function () {
			angular.element(".overlay-modal").not('.cart-clean').css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});

		angular.element(".add-product-sum").click(function () {
			angular.element(".overlay-modal").css("display", "none");
			angular.element(".ind-number").css("display", "block");
			angular.element(".ind-number").addClass("anima-circle");
			//angular.element(".total-box").css("bottom", "60px");
			//angular.element(".overlay-total").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element("body").addClass("close-total-sales");

			setTimeout(function () {
				angular.element(".ind-number").removeClass("anima-circle");
			}, 3000);

		});

		angular.element(".overlay-total").click(function () {
			angular.element(this).css("display", "none");
			angular.element("body").addClass("close-total-sales");
			angular.element(".total-box").css("bottom", "-178px");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".total-box").addClass("open-total");
		});

		angular.element(".open-total").click(function () {
			angular.element(".total-box").css("bottom", "0px");
			angular.element(".total-box").removeClass("open-total");
		});

		angular.element(".btn-filter").click(function () {
			angular.element(".filter-products").css("right", "0");
			angular.element(".overlay-filter").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element(".filter-products .col-xs-6:nth-child(13)").css("margin-bottom", "100px");
			angular.element(".total-box").css("z-index", "9");
			angular.element(".brand-itaipava").removeAttr("href", "");


		});

		angular.element(".overlay-filter").click(function () {
			angular.element(".filter-products").css("right", "-250px");
			angular.element(this).css("display", "none");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".filter-products .col-xs-6:last-child").css("margin-bottom", "initial");
			angular.element(".total-box").css("z-index", "999");
			angular.element(".brand-itaipava").attr("href", "#!lp_itaipava");
		});

		configuraLinks(angular);

		angular.element(".cart-clean .btn-nao").click(function () {
			angular.element(".cart-clean").css("display", "none");
			angular.element(this).removeClass("active");
		});

		angular.element(".cart-clean .btn-sim").click(function () {
			angular.element(".cart-clean").css("display", "none");
			angular.element(this).removeClass("active");
		});

		angular.element(".img-sync").click(function () {
			$(this).attr("src", "images/loading.gif");
			setTimeout(function () {
				angular.element(".img-sync").attr("src", "images/cloud_b.svg");
				angular.element(".txt-estoque span").html("Disponibilidade de estoque: 58724");
			}, 3000);

		});

	})


	/* Tab Bonificação Controller */
	.controller("tabBonificacaoAvariasController", function ($scope) {

		$scope.titulo = "Bonificação para Avarias"
		angular.element(".title-app").html("Bonificação");
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".search img, .sync img").attr("src", "images/cart_w.svg");
		angular.element(".search, .sync").addClass("cart");
		angular.element(".cart").removeClass("search, sync");
		angular.element(".cart").attr("href", "#!carrinho");


		angular.element(".add-product").click(function () {
			angular.element(".overlay-modal").not('.cart-clean').css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});

		angular.element(".add-product-sum").click(function () {
			angular.element(".overlay-modal").css("display", "none");
			angular.element(".ind-number").css("display", "block");
			angular.element(".ind-number").addClass("anima-circle");
			//angular.element(".total-box").css("bottom", "60px");
			//angular.element(".overlay-total").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element("body").addClass("close-total-sales");

			setTimeout(function () {
				angular.element(".ind-number").removeClass("anima-circle");
			}, 3000);

		});

		angular.element(".overlay-total").click(function () {
			angular.element(this).css("display", "none");
			angular.element("body").addClass("close-total-sales");
			angular.element(".total-box").css("bottom", "-178px");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".total-box").addClass("open-total");
		});

		angular.element(".open-total").click(function () {
			angular.element(".total-box").css("bottom", "0px");
			angular.element(".total-box").removeClass("open-total");
		});

		angular.element(".btn-filter").click(function () {
			angular.element(".filter-products").css("right", "0");
			angular.element(".overlay-filter").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element(".filter-products .col-xs-6:nth-child(13)").css("margin-bottom", "100px");
			angular.element(".total-box").css("z-index", "9");
			angular.element(".brand-itaipava").removeAttr("href", "");


		});

		angular.element(".overlay-filter").click(function () {
			angular.element(".filter-products").css("right", "-250px");
			angular.element(this).css("display", "none");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".filter-products .col-xs-6:last-child").css("margin-bottom", "initial");
			angular.element(".total-box").css("z-index", "999");
			angular.element(".brand-itaipava").attr("href", "#!lp_itaipava");
		});

		configuraLinks(angular);

		angular.element(".cart-clean .btn-nao").click(function () {
			angular.element(".cart-clean").css("display", "none");
			angular.element(this).removeClass("active");
		});

		angular.element(".cart-clean .btn-sim").click(function () {
			angular.element(".cart-clean").css("display", "none");
			angular.element(this).removeClass("active");
		});

		angular.element(".img-sync").click(function () {
			$(this).attr("src", "images/loading.gif");
			setTimeout(function () {
				angular.element(".img-sync").attr("src", "images/cloud_b.svg");
				angular.element(".txt-estoque span").html("Disponibilidade de estoque: 58724");
			}, 3000);

		});

	})

	/* Tab Venda Promo */
	.controller("tabVendaPromoController", function ($scope) {

		$scope.titulo = "Venda Material Promocional"
		angular.element(".title-app").html("Venda Material Promocional");
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".search img, .sync img").attr("src", "images/cart_w.svg");
		angular.element(".search, .sync").addClass("cart");
		angular.element(".cart").removeClass("search, sync");
		angular.element(".cart").attr("href", "#!carrinho");

		angular.element(".add-product").click(function () {
			angular.element(".overlay-modal").css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});

		angular.element(".add-product-sum").click(function () {
			angular.element(".overlay-modal").css("display", "none");
			angular.element(".ind-number").css("display", "block");
			angular.element(".ind-number").addClass("anima-circle");
			//angular.element(".total-box").css("bottom", "60px");
			//angular.element(".overlay-total").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element("body").addClass("close-total-sales");

			setTimeout(function () {
				angular.element(".ind-number").removeClass("anima-circle");
			}, 3000);

		});

		angular.element(".overlay-total").click(function () {
			angular.element(this).css("display", "none");
			angular.element("body").addClass("close-total-sales");
			angular.element(".total-box").css("bottom", "-178px");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".total-box").addClass("open-total");
		});

		angular.element(".open-total").click(function () {
			angular.element(".total-box").css("bottom", "0px");
			angular.element(".total-box").removeClass("open-total");
		});

		angular.element(".btn-filter").click(function () {
			angular.element(".filter-products").css("right", "0");
			angular.element(".overlay-filter").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element(".filter-products .col-xs-6:nth-child(13)").css("margin-bottom", "100px");
			angular.element(".total-box").css("z-index", "9");
			angular.element(".brand-itaipava").removeAttr("href", "");


		});

		angular.element(".overlay-filter").click(function () {
			angular.element(".filter-products").css("right", "-250px");
			angular.element(this).css("display", "none");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".filter-products .col-xs-6:last-child").css("margin-bottom", "initial");
			angular.element(".total-box").css("z-index", "999");
			angular.element(".brand-itaipava").attr("href", "#!lp_itaipava");
		});

		angular.element(".img-sync").click(function () {
			$(this).attr("src", "images/loading.gif");
			setTimeout(function () {
				angular.element(".img-sync").attr("src", "images/cloud_b.svg");
				angular.element(".txt-estoque span").html("Disponibilidade de estoque: 58724");
			}, 3000);

		});

		angular.element(".link_venda").click(function () {
			angular.element(".txt-selected").html("Venda");
			angular.element(".cart-clean").css("display", "block");
			angular.element(".cart-clean .btn-sim").attr("href", "#!/new_pedido");
		});

		angular.element(".link_venda_promo").click(function () {
			angular.element(".txt-selected").html("Venda");
			angular.element(".cart-clean").css("display", "block");
			angular.element(".cart-clean .btn-sim").attr("href", "#!/venda_material_promo");
		});

		angular.element(".link_new_pedido").click(function () {
			angular.element(".txt-selected").html("Consignação");
			angular.element(".cart-clean").css("display", "block");
			angular.element(".cart-clean .btn-sim").attr("href", "#!/new_pedido");
		});

		angular.element(".link_troca").click(function () {
			angular.element(".txt-selected").html("Troca");
			angular.element(".cart-clean").css("display", "block");
			angular.element(".cart-clean .btn-sim").attr("href", "#!/new_pedido");
		});

		angular.element(".link_comodato").click(function () {
			angular.element(".txt-selected").html("Comodato sem venda");
			angular.element(".cart-clean").css("display", "block");
			angular.element(".cart-clean .btn-sim").attr("href", "#!/comodato");

		});

		angular.element(".link_bonificacao").click(function () {
			angular.element(".txt-selected").html("Bonificação sem venda");
			angular.element(".cart-clean").css("display", "block");
			angular.element(".cart-clean .btn-sim").attr("href", "#!/bonificacao");
		});

		angular.element(".link_bonificacao_avarias").click(function () {
			angular.element(".txt-selected").html("Bonificação sem venda");
			angular.element(".cart-clean").css("display", "block");
			angular.element(".cart-clean .btn-sim").attr("href", "#!/bonificacao");
		});

	})


	/* Tab Combos Controller */
	.controller("tabCombosController", function ($scope) {

		$scope.titulo = "Combos"
		angular.element(".title-app").html("Combos");
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".search img, .sync img").attr("src", "images/cart_w.svg");
		angular.element(".search, .sync").addClass("cart");
		angular.element(".cart").removeClass("search, sync");
		angular.element(".cart").attr("href", "#!carrinho");


		angular.element(".add-product").click(function () {
			angular.element(".overlay-modal").not('.cart-clean').css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});

		angular.element(".add-product-sum").click(function () {
			angular.element(".overlay-modal").css("display", "none");
			angular.element(".ind-number").css("display", "block");
			angular.element(".ind-number").addClass("anima-circle");
			//angular.element(".total-box").css("bottom", "60px");
			//angular.element(".overlay-total").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element("body").addClass("close-total-sales");

			setTimeout(function () {
				angular.element(".ind-number").removeClass("anima-circle");
			}, 3000);

		});

		angular.element(".overlay-total").click(function () {
			angular.element(this).css("display", "none");
			angular.element("body").addClass("close-total-sales");
			angular.element(".total-box").css("bottom", "-178px");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".total-box").addClass("open-total");
		});

		angular.element(".open-total").click(function () {
			angular.element(".total-box").css("bottom", "0px");
			angular.element(".total-box").removeClass("open-total");
		});

		angular.element(".btn-filter").click(function () {
			angular.element(".filter-products").css("right", "0");
			angular.element(".overlay-filter").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element(".filter-products .col-xs-6:nth-child(13)").css("margin-bottom", "100px");
			angular.element(".total-box").css("z-index", "9");
			angular.element(".brand-itaipava").removeAttr("href", "");


		});

		angular.element(".overlay-filter").click(function () {
			angular.element(".filter-products").css("right", "-250px");
			angular.element(this).css("display", "none");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".filter-products .col-xs-6:last-child").css("margin-bottom", "initial");
			angular.element(".total-box").css("z-index", "999");
			angular.element(".brand-itaipava").attr("href", "#!lp_itaipava");
		});

		angular.element(".img-sync").click(function () {
			$(this).attr("src", "images/loading.gif");
			setTimeout(function () {
				angular.element(".img-sync").attr("src", "images/cloud_b.svg");
				angular.element(".txt-estoque span").html("Disponibilidade de estoque: 58724");
			}, 3000);

		});

		configuraLinks(angular);
	})

	/* Tab Comodato Controller */
	.controller("tabComodatoController", function ($scope) {

		$scope.titulo = "Comodato"
		angular.element(".title-app").html("Comodato");
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".search img, .sync img").attr("src", "images/cart_w.svg");
		angular.element(".search, .sync").addClass("cart");
		angular.element(".cart").removeClass("search, sync");
		angular.element(".cart").attr("href", "#!carrinho_comodato");


		angular.element(".add-product").click(function () {
			angular.element(".modal-selecao").css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});

		angular.element(".add-product-sum").click(function () {
			angular.element(".overlay-modal").css("display", "none");
			angular.element(".ind-number").css("display", "block");
			angular.element(".ind-number").addClass("anima-circle");
			//angular.element(".total-box").css("bottom", "60px");
			//angular.element(".overlay-total").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element("body").addClass("close-total-sales");

			setTimeout(function () {
				angular.element(".ind-number").removeClass("anima-circle");
			}, 3000);

		});

		angular.element(".overlay-total").click(function () {
			angular.element(this).css("display", "none");
			angular.element("body").addClass("close-total-sales");
			angular.element(".total-box").css("bottom", "-178px");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".total-box").addClass("open-total");
		});

		angular.element(".open-total").click(function () {
			angular.element(".total-box").css("bottom", "0px");
			angular.element(".total-box").removeClass("open-total");
		});

		angular.element(".btn-filter").click(function () {
			angular.element(".filter-products").css("right", "0");
			angular.element(".overlay-filter").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element(".filter-products .col-xs-6:nth-child(13)").css("margin-bottom", "100px");
			angular.element(".total-box").css("z-index", "9");
			angular.element(".brand-itaipava").removeAttr("href", "");


		});

		angular.element(".overlay-filter").click(function () {
			angular.element(".filter-products").css("right", "-250px");
			angular.element(this).css("display", "none");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".filter-products .col-xs-6:last-child").css("margin-bottom", "initial");
			angular.element(".total-box").css("z-index", "999");
			angular.element(".brand-itaipava").attr("href", "#!lp_itaipava");
		});

		configuraLinks(angular);

		angular.element(".cart-clean .btn-nao").click(function () {
			angular.element(".cart-clean").css("display", "none");
			angular.element(this).removeClass("active");
		});

		angular.element(".cart-clean .btn-sim").click(function () {
			angular.element(".cart-clean").css("display", "none");
			angular.element(this).removeClass("active");
		});

		angular.element(".img-sync").click(function () {
			$(this).attr("src", "images/loading.gif");
			setTimeout(function () {
				angular.element(".img-sync").attr("src", "images/cloud_b.svg");
				angular.element(".txt-estoque span").html("Disponibilidade de estoque: 58724");
			}, 3000);

		});

		angular.element(".btn-ped-sim").click(function () {
			angular.element(this).addClass("active");
			angular.element(".btn-ped-nao").removeClass("active");
			angular.element(".num-pedido").css("display", "block");
		});

		angular.element(".btn-ped-nao").click(function () {
			angular.element(this).addClass("active");
			angular.element(".btn-ped-sim").removeClass("active");
			angular.element(".num-pedido").css("display", "none");
		});

	})

	/* Tab Comodato Controller */
	.controller("tabComodatoRegularizacaoController", function ($scope) {

		$scope.titulo = "Comodato de regularização"
		angular.element(".title-app").html("Comodato de regularização");
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".search img, .sync img").attr("src", "images/cart_w.svg");
		angular.element(".search, .sync").addClass("cart");
		angular.element(".cart").removeClass("search, sync");
		angular.element(".cart").attr("href", "#!carrinho");


		angular.element(".add-product").click(function () {
			angular.element(".modal-selecao").css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});

		angular.element(".add-product-sum").click(function () {
			angular.element(".overlay-modal").css("display", "none");
			angular.element(".ind-number").css("display", "block");
			angular.element(".ind-number").addClass("anima-circle");
			//angular.element(".total-box").css("bottom", "60px");
			//angular.element(".overlay-total").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element("body").addClass("close-total-sales");

			setTimeout(function () {
				angular.element(".ind-number").removeClass("anima-circle");
			}, 3000);

		});

		angular.element(".overlay-total").click(function () {
			angular.element(this).css("display", "none");
			angular.element("body").addClass("close-total-sales");
			angular.element(".total-box").css("bottom", "-178px");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".total-box").addClass("open-total");
		});

		angular.element(".open-total").click(function () {
			angular.element(".total-box").css("bottom", "0px");
			angular.element(".total-box").removeClass("open-total");
		});

		angular.element(".btn-filter").click(function () {
			angular.element(".filter-products").css("right", "0");
			angular.element(".overlay-filter").css("display", "block");
			angular.element("body").css("overflow-y", "hidden");
			angular.element(".filter-products .col-xs-6:nth-child(13)").css("margin-bottom", "100px");
			angular.element(".total-box").css("z-index", "9");
			angular.element(".brand-itaipava").removeAttr("href", "");


		});

		angular.element(".overlay-filter").click(function () {
			angular.element(".filter-products").css("right", "-250px");
			angular.element(this).css("display", "none");
			angular.element("body").css("overflow-y", "auto");
			angular.element(".filter-products .col-xs-6:last-child").css("margin-bottom", "initial");
			angular.element(".total-box").css("z-index", "999");
			angular.element(".brand-itaipava").attr("href", "#!lp_itaipava");
		});

		configuraLinks(angular);

		angular.element(".cart-clean .btn-nao").click(function () {
			angular.element(".cart-clean").css("display", "none");
			angular.element(this).removeClass("active");
		});

		angular.element(".cart-clean .btn-sim").click(function () {
			angular.element(".cart-clean").css("display", "none");
			angular.element(this).removeClass("active");
		});

		angular.element(".img-sync").click(function () {
			$(this).attr("src", "images/loading.gif");
			setTimeout(function () {
				angular.element(".img-sync").attr("src", "images/cloud_b.svg");
				angular.element(".txt-estoque span").html("Disponibilidade de estoque: 58724");
			}, 3000);

		});

		angular.element(".btn-ped-sim").click(function () {
			angular.element(this).addClass("active");
			angular.element(".btn-ped-nao").removeClass("active");
			angular.element(".num-pedido").css("display", "block");
		});

		angular.element(".btn-ped-nao").click(function () {
			angular.element(this).addClass("active");
			angular.element(".btn-ped-sim").removeClass("active");
			angular.element(".num-pedido").css("display", "none");
		});

	})

	/* Comodato Barril Controller */
	.controller("ComodatosBarrilController", function ($scope) {

		$scope.titulo = "Comodato Barril"
		angular.element(".title-app").html("Comodato Barril");
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".search img, .sync img").attr("src", "images/cart_w.svg");
		angular.element(".search, .sync").addClass("cart");
		angular.element(".cart").removeClass("search, sync");
		angular.element(".cart").attr("href", "#!carrinho");

		angular.element(".close-faturar").click(function () {
			angular.element(".modal-faturar").css("display", "none");
		});

		angular.element(".btn-consignados-faturar").click(function () {
			angular.element(".modal-faturar").css("display", "block");
		})

		angular.element(".close-recolher").click(function () {
			angular.element(".modal-recolher").css("display", "none");
		});

		angular.element(".btn-consignados-recolher").click(function () {
			angular.element(".modal-recolher").css("display", "block");
		});

		angular.element(".btn-recolher").click(function () {
			angular.element(".modal-recolher").css("display", "none");
			angular.element(".overlay-finalizar").css("display", "block");
			angular.element(".overlay-finalizar .header-modal").html("Recolha Solicitada com Sucesso!");
		});

	})


	/* Comodato Item Notes Controller */
	.controller("comodatoItemNotesController", function ($scope) {

		$scope.titulo = "comodato Item Notes Controller"
		angular.element(".title-app").html("Avaliação dos Comodatos");
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".search img, .sync img").attr("src", "images/cart_w.svg");
		angular.element(".search, .sync").addClass("cart");
		angular.element(".cart").removeClass("search, sync");
		angular.element(".cart").attr("href", "#!carrinho");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".search").css("display", "none");
		angular.element(".menu-requests").css("display", "none");

		angular.element(".accordeon-01").addClass("no-active");
		angular.element(".accordeon-02").addClass("no-active");
		angular.element(".accordeon-03").addClass("no-active");
		angular.element(".accordeon-04").addClass("no-active");

		angular.element(".action-accordeon-01").click(function () {
			angular.element(".accordeon-01").toggleClass("active");
			angular.element(".accordeon-01 .acc-arrow-down").toggleClass("deg-180");
			

		});

		angular.element(".action-accordeon-02").click(function () {
			angular.element(".accordeon-02").toggleClass("active");
			angular.element(".accordeon-02 .acc-arrow-down").toggleClass("deg-180");
		});

		angular.element(".action-accordeon-03").click(function () {
			angular.element(".accordeon-03").toggleClass("active");
			angular.element(".accordeon-03 .acc-arrow-down").toggleClass("deg-180");
		});

		angular.element(".action-accordeon-04").click(function () {
			angular.element(".accordeon-04").toggleClass("active");
			angular.element(".accordeon-04 .acc-arrow-down").toggleClass("deg-180");
		});

		angular.element(".add-product").click(function () {
			angular.element(".overlay-modal").css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});

		angular.element(".accordeon-01 .input-sum").change(function () {
			var total = 0;
			angular.element(".accordeon-01 .input-sum").each(function (index, element) {
				if (angular.element(element).val()) {
					total += parseInt(angular.element(element).val());
				}
			});
			angular.element(".accordeon-01 .lbl-total").text(total);
		});

		angular.element(".accordeon-02 .input-sum").change(function () {
			var total = 0;
			angular.element(".accordeon-02 .input-sum").each(function (index, element) {
				if (angular.element(element).val()) {
					total += parseInt(angular.element(element).val());
				}
			});
			angular.element(".accordeon-02 .lbl-total").text(total);
		});

		angular.element(".accordeon-03 .input-sum").change(function () {
			var total = 0;
			angular.element(".accordeon-03 .input-sum").each(function (index, element) {
				if (angular.element(element).val()) {
					total += parseInt(angular.element(element).val());
				}
			});
			angular.element(".accordeon-03 .lbl-total").text(total);
		});

		angular.element(".accordeon-04 .input-sum").change(function () {
			var total = 0;
			angular.element(".accordeon-04 .input-sum").each(function (index, element) {
				if (angular.element(element).val()) {
					total += parseInt(angular.element(element).val());
				}
			});
			angular.element(".accordeon-04 .lbl-total").text(total);
		});


		angular.element(".accordeon-01 .btn-remove").click(function () {
			if (angular.element(".accordeon-01 .input-value").val() == "0") {

			} else {
				angular.element(".accordeon-01 .input-value").val(angular.element(".accordeon-01 .input-value").val() - 1);
				angular.element(".accordeon-01 .input-value").trigger("change");
			}
		});

		angular.element(".accordeon-01 .btn-add").click(function () {
			angular.element(".accordeon-01 .input-value").val(parseInt(angular.element(".accordeon-01 .input-value").val()) + 1);
			angular.element(".accordeon-01 .input-value").trigger("change");
		});

		angular.element(".accordeon-01 .btn-remove2").click(function () {
			if (angular.element(".accordeon-01 .input-value2").val() == "0") {

			} else {
				angular.element(".accordeon-01 .input-value2").val(angular.element(".accordeon-01 .input-value2").val() - 1);
				angular.element(".accordeon-01 .input-value2").trigger("change");
			}
		});

		angular.element(".accordeon-01 .btn-add2").click(function () {
			angular.element(".accordeon-01 .input-value2").val(parseInt(angular.element(".accordeon-01 .input-value2").val()) + 1);
			angular.element(".accordeon-01 .input-value2").trigger("change");
		});


		angular.element(".accordeon-01 .btn-remove3").click(function () {
			if (angular.element(".accordeon-01 .input-value3").val() == "0") {

			} else {
				angular.element(".accordeon-01 .input-value3").val(angular.element(".accordeon-01 .input-value3").val() - 1);
				angular.element(".accordeon-01 .input-value3").trigger("change");
			}
		});

		angular.element(".accordeon-01 .btn-add3").click(function () {
			angular.element(".accordeon-01 .input-value3").val(parseInt(angular.element(".accordeon-01 .input-value3").val()) + 1);
			angular.element(".accordeon-01 .input-value3").trigger("change");
		});


		angular.element(".accordeon-01.btn-remove4").click(function () {
			if (angular.element(".accordeon-01 .input-value4").val() == "0") {

			} else {
				angular.element(".accordeon-01 .input-value4").val(angular.element(".accordeon-01 .input-value4").val() - 1);
				angular.element(".accordeon-01 .input-value4").trigger("change");
			}
		});

		angular.element(".accordeon-01 .btn-add4").click(function () {
			angular.element(".accordeon-01 .input-value4").val(parseInt(angular.element(".accordeon-01 .input-value4").val()) + 1);
			angular.element(".accordeon-01 .input-value4").trigger("change");
		});


		angular.element(".accordeon-01 .btn-remove5").click(function () {
			if (angular.element(".accordeon-01 .input-value5").val() == "0") {

			} else {
				angular.element(".accordeon-01 .input-value5").val(angular.element(".accordeon-01 .input-value5").val() - 1);
				angular.element(".accordeon-01 .input-value5").trigger("change");
			}
		});

		angular.element(".accordeon-01 .btn-add5").click(function () {
			angular.element(".accordeon-01 .input-value5").val(parseInt(angular.element(".accordeon-01 .input-value5").val()) + 1);
			angular.element(".accordeon-01 .input-value5").trigger("change");
		});

		angular.element(".accordeon-02 .btn-remove").click(function () {
			if (angular.element(".accordeon-02 .input-value").val() == "0") {

			} else {
				angular.element(".accordeon-02 .input-value").val(angular.element(".accordeon-02 .input-value").val() - 1);
				angular.element(".accordeon-02 .input-value").trigger("change");
			}
		});

		angular.element(".accordeon-02 .btn-add").click(function () {
			angular.element(".accordeon-02 .input-value").val(parseInt(angular.element(".accordeon-02 .input-value").val()) + 1);
			angular.element(".accordeon-02 .input-value").trigger("change");
		});

		angular.element(".accordeon-02 .btn-remove2").click(function () {
			if (angular.element(".accordeon-02 .input-value2").val() == "0") {

			} else {
				angular.element(".accordeon-02 .input-value2").val(angular.element(".accordeon-02 .input-value2").val() - 1);
				angular.element(".accordeon-02 .input-value2").trigger("change");
			}
		});

		angular.element(".accordeon-02 .btn-add2").click(function () {
			angular.element(".accordeon-02 .input-value2").val(parseInt(angular.element(".accordeon-02 .input-value2").val()) + 1);
			angular.element(".accordeon-02 .input-value2").trigger("change");
		});


		angular.element(".accordeon-02 .btn-remove3").click(function () {
			if (angular.element(".accordeon-02 .input-value3").val() == "0") {

			} else {
				angular.element(".accordeon-02 .input-value3").val(angular.element(".accordeon-02 .input-value3").val() - 1);
				angular.element(".accordeon-02 .input-value3").trigger("change");
			}
		});

		angular.element(".accordeon-02 .btn-add3").click(function () {
			angular.element(".accordeon-02 .input-value3").val(parseInt(angular.element(".accordeon-02 .input-value3").val()) + 1);
			angular.element(".accordeon-02 .input-value3").trigger("change");
		});


		angular.element(".accordeon-02.btn-remove4").click(function () {
			if (angular.element(".accordeon-02 .input-value4").val() == "0") {

			} else {
				angular.element(".accordeon-02 .input-value4").val(angular.element(".accordeon-02 .input-value4").val() - 1);
				angular.element(".accordeon-02 .input-value4").trigger("change");
			}
		});

		angular.element(".accordeon-02 .btn-add4").click(function () {
			angular.element(".accordeon-02 .input-value4").val(parseInt(angular.element(".accordeon-02 .input-value4").val()) + 1);
			angular.element(".accordeon-02 .input-value4").trigger("change");
		});


		angular.element(".accordeon-02 .btn-remove5").click(function () {
			if (angular.element(".accordeon-02 .input-value5").val() == "0") {

			} else {
				angular.element(".accordeon-02 .input-value5").val(angular.element(".accordeon-02 .input-value5").val() - 1);
				angular.element(".accordeon-02 .input-value5").trigger("change");
			}
		});

		angular.element(".accordeon-02 .btn-add5").click(function () {
			angular.element(".accordeon-02 .input-value5").val(parseInt(angular.element(".accordeon-02 .input-value5").val()) + 1);
			angular.element(".accordeon-02 .input-value5").trigger("change");
		});

		angular.element(".accordeon-03 .btn-remove").click(function () {
			if (angular.element(".accordeon-03 .input-value").val() == "0") {

			} else {
				angular.element(".accordeon-03 .input-value").val(angular.element(".accordeon-03 .input-value").val() - 1);
				angular.element(".accordeon-03 .input-value").trigger("change");
			}
		});

		angular.element(".accordeon-03 .btn-add").click(function () {
			angular.element(".accordeon-03 .input-value").val(parseInt(angular.element(".accordeon-03 .input-value").val()) + 1);
			angular.element(".accordeon-03 .input-value").trigger("change");
		});

		angular.element(".accordeon-03 .btn-remove2").click(function () {
			if (angular.element(".accordeon-03 .input-value2").val() == "0") {

			} else {
				angular.element(".accordeon-03 .input-value2").val(angular.element(".accordeon-03 .input-value2").val() - 1);
				angular.element(".accordeon-03 .input-value2").trigger("change");
			}
		});

		angular.element(".accordeon-03 .btn-add2").click(function () {
			angular.element(".accordeon-03 .input-value2").val(parseInt(angular.element(".accordeon-03 .input-value2").val()) + 1);
			angular.element(".accordeon-03 .input-value2").trigger("change");
		});


		angular.element(".accordeon-03 .btn-remove3").click(function () {
			if (angular.element(".accordeon-03 .input-value3").val() == "0") {

			} else {
				angular.element(".accordeon-03 .input-value3").val(angular.element(".accordeon-03 .input-value3").val() - 1);
				angular.element(".accordeon-03 .input-value3").trigger("change");
			}
		});

		angular.element(".accordeon-03 .btn-add3").click(function () {
			angular.element(".accordeon-03 .input-value3").val(parseInt(angular.element(".accordeon-03 .input-value3").val()) + 1);
			angular.element(".accordeon-03 .input-value3").trigger("change");
		});


		angular.element(".accordeon-03.btn-remove4").click(function () {
			if (angular.element(".accordeon-03 .input-value4").val() == "0") {

			} else {
				angular.element(".accordeon-03 .input-value4").val(angular.element(".accordeon-03 .input-value4").val() - 1);
				angular.element(".accordeon-03 .input-value4").trigger("change");
			}
		});

		angular.element(".accordeon-03 .btn-add4").click(function () {
			angular.element(".accordeon-03 .input-value4").val(parseInt(angular.element(".accordeon-03 .input-value4").val()) + 1);
			angular.element(".accordeon-03 .input-value4").trigger("change");
		});


		angular.element(".accordeon-03 .btn-remove5").click(function () {
			if (angular.element(".accordeon-03 .input-value5").val() == "0") {

			} else {
				angular.element(".accordeon-03 .input-value5").val(angular.element(".accordeon-03 .input-value5").val() - 1);
				angular.element(".accordeon-03 .input-value5").trigger("change");
			}
		});

		angular.element(".accordeon-03 .btn-add5").click(function () {
			angular.element(".accordeon-03 .input-value5").val(parseInt(angular.element(".accordeon-03 .input-value5").val()) + 1);
			angular.element(".accordeon-03 .input-value5").trigger("change");
		});

		angular.element(".accordeon-04 .btn-remove").click(function () {
			if (angular.element(".accordeon-04 .input-value").val() == "0") {

			} else {
				angular.element(".accordeon-04 .input-value").val(angular.element(".accordeon-04 .input-value").val() - 1);
				angular.element(".accordeon-04 .input-value").trigger("change");
			}
		});

		angular.element(".accordeon-04 .btn-add").click(function () {
			angular.element(".accordeon-04 .input-value").val(parseInt(angular.element(".accordeon-04 .input-value").val()) + 1);
			angular.element(".accordeon-04 .input-value").trigger("change");
		});

		angular.element(".accordeon-04 .btn-remove2").click(function () {
			if (angular.element(".accordeon-04 .input-value2").val() == "0") {

			} else {
				angular.element(".accordeon-04 .input-value2").val(angular.element(".accordeon-04 .input-value2").val() - 1);
				angular.element(".accordeon-04 .input-value2").trigger("change");
			}
		});

		angular.element(".accordeon-04 .btn-add2").click(function () {
			angular.element(".accordeon-04 .input-value2").val(parseInt(angular.element(".accordeon-04 .input-value2").val()) + 1);
			angular.element(".accordeon-04 .input-value2").trigger("change");
		});


		angular.element(".accordeon-04 .btn-remove3").click(function () {
			if (angular.element(".accordeon-04 .input-value3").val() == "0") {

			} else {
				angular.element(".accordeon-04 .input-value3").val(angular.element(".accordeon-04 .input-value3").val() - 1);
				angular.element(".accordeon-04 .input-value3").trigger("change");
			}
		});

		angular.element(".accordeon-04 .btn-add3").click(function () {
			angular.element(".accordeon-04 .input-value3").val(parseInt(angular.element(".accordeon-04 .input-value3").val()) + 1);
			angular.element(".accordeon-04 .input-value3").trigger("change");
		});


		angular.element(".accordeon-04.btn-remove4").click(function () {
			if (angular.element(".accordeon-04 .input-value4").val() == "0") {

			} else {
				angular.element(".accordeon-04 .input-value4").val(angular.element(".accordeon-04 .input-value4").val() - 1);
				angular.element(".accordeon-04 .input-value4").trigger("change");
			}
		});

		angular.element(".accordeon-04 .btn-add4").click(function () {
			angular.element(".accordeon-04 .input-value4").val(parseInt(angular.element(".accordeon-04 .input-value4").val()) + 1);
			angular.element(".accordeon-04 .input-value4").trigger("change");
		});


		angular.element(".accordeon-04 .btn-remove5").click(function () {
			if (angular.element(".accordeon-04 .input-value5").val() == "0") {

			} else {
				angular.element(".accordeon-04 .input-value5").val(angular.element(".accordeon-04 .input-value5").val() - 1);
				angular.element(".accordeon-04 .input-value5").trigger("change");
			}
		});

		angular.element(".accordeon-04 .btn-add5").click(function () {
			angular.element(".accordeon-04 .input-value5").val(parseInt(angular.element(".accordeon-04 .input-value5").val()) + 1);
			angular.element(".accordeon-04 .input-value5").trigger("change");
		});

	})

	/* Meus Clientes Controller */
	.controller("meusClientesController", function ($scope) {

		$scope.titulo = "Meus Clientes"
		angular.element(".title-app").html("Meus Clientes");
		angular.element("#mySidenav").css("display", "block");
		angular.element("#mySidenav").css("left", "-310");
		angular.element(".back-menu").css("display", "block");
		angular.element(".back-menu").hide();
		angular.element(".back-menu").css("background", "#000000b3");

		angular.element(".tab-1").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-2,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-content > div").css("display", "none");
			angular.element(".tab-page-1").css("display", "block");
		});

		angular.element(".tab-2").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-content > div").css("display", "none");
			angular.element(".tab-page-2").css("display", "block");
		});

		angular.element(".tab-3").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
			angular.element(".tab-content > div").css("display", "none");
			angular.element(".tab-page-3").css("display", "block");
		});

		angular.element(".tab-page-2 .card-customer").addClass("customer-pend");

		angular.element(".open-modal-clientes").click(function () {
			angular.element(".overlay-add-customer").css("display", "block");
			angular.element(this).css("z-index", "999");
			angular.element("body").css("overflow-y", "hidden");
		});

		angular.element(".overlay-add-customer").click(function () {
			angular.element(this).css("display", "none");
			angular.element(".open-modal-clientes").css("z-index", "2");
			angular.element("body").css("overflow-y", "auto");
		});

		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".search").addClass("search");
		angular.element(".search").css("display", "block");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");

		angular.element(".btn-novo-pedido").click(function () {
			angular.element(".overlay-modal").css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});
	})



	/* Acompanhar Pedido Controller */
	.controller("AcompanharPedidoController", function ($scope) {
		$scope.titulo = "Acompanhar Pedido"
		angular.element(".title-app").html("Acompanhar Pedido");

	})

	/* cep Cadastro Clientes Controller */
	.controller("cepCadastroClientesController", function ($scope) {
		$scope.titulo = "CEP Cadastro de Clientes"
		angular.element(".title-app").html("CEP Cadastro de Clientes");
		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".sync img").attr("src", "images/search_w.svg");
		angular.element(".sync").addClass("search");
		angular.element(".sync").removeClass("sync");
		//angular.element(".search img").removeAttr("src");
	})

	/* Comodatos Cotrato Controller */
	.controller("ComodatosContratoController", function ($scope) {
		$scope.titulo = "Contrato Comodatos"
		angular.element(".title-app").html("Contrato de Comodatos");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".menu-requests").css("display", "none");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");

		angular.element(".btn-recolha").click(function () {
			angular.element(".overlay-comodato").css("display", "block");
			angular.element(".buttons-comodato").css("display", "block");
		});

		angular.element(".btn-sim-contrato").click(function () {
			//angular.element(".overlay-comodato").css("display","block");
			angular.element(".buttons-comodato").css("display", "none");
			angular.element(".modal-custom").css("display", "block");
		});

		angular.element(".btn-nao-contrato").click(function () {
			angular.element(".overlay-comodato").css("display", "none");
			angular.element(".buttons-comodato").css("display", "none");
		});
	})

	/* Comodatos Pendentes Controller */
	.controller("ComodatosPendentesController", function ($scope) {
		$scope.titulo = "Comodatos Pendentes"
		angular.element(".title-app").html("Comodatos Pendentes");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".menu-requests").css("display", "none");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");

		$scope.comodatopendente = function () {
			window.location.href = "#!/comodatos_contrato_pend";
		}
	})

	/* Comodatos Contrato Pendentes Controller */
	.controller("ComodatosContratoPendentesController", function ($scope) {
		$scope.titulo = "Comodatos Contrato Pendentes"
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".menu-requests").css("display", "none");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");

		angular.element(".card-product").click(function () {
			window.location.href = "#!/comodato_item_notes";
		});
	})

	/* detalhe Clientes Controller */
	.controller("detalheClientesController", function ($scope) {

		$scope.titulo = "Detalhe do Cliente"
		angular.element(".title-app").html("Detalhe de Clientes");

		angular.element(".tab-1").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-2,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-page-1").css("display", "block");
			angular.element(".tab-page-2, .tab-page-3, .tab-page-4").css("display", "none");
		});

		angular.element(".tab-2").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-page-2").css("display", "block");
			angular.element(".tab-page-1, .tab-page-3, .tab-page-4").css("display", "none");
		});

		angular.element(".tab-3").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
			angular.element(".tab-page-3").css("display", "block");
			angular.element(".tab-page-1, .tab-page-2, .tab-page-4").css("display", "none");
		});

		angular.element(".tab-4").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2,.tab-3").removeClass("active");
			angular.element(".tab-page-4").css("display", "block");
			angular.element(".tab-page-1, .tab-page-2, .tab-page-3").css("display", "none");
		});

		$scope.tab1 = function () {
			angular.element(".tab-hist-1").addClass("active_hist");
			angular.element(".tab-hist-1").css("display", "inline-block");
			angular.element(".tab-hist-2").removeClass("active_hist");
			angular.element(".tab-page-hist-2").css("display", "none");
			angular.element(".tab-page-hist-1").css("display", "block");
		}

		$scope.tab2 = function () {
			angular.element(".tab-hist-2").addClass("active_hist");
			angular.element(".tab-hist-2").css("display", "inline-block");
			angular.element(".tab-hist-1").removeClass("active_hist");
			angular.element(".tab-page-hist-1").css("display", "none");
			angular.element(".tab-page-hist-2").css("display", "block");
		}

		/*
		angular.element("#tab-hist-1").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element("#tab-hist-2").removeClass("active");
			angular.element(".tab-page-hist-2").css("display", "none");
			angular.element(".tab-page-hist-1").css("display", "block");
		});

		angular.element("#tab-hist-2").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element("#tab-hist-1").removeClass("active");
			angular.element(".tab-page-hist-1").css("display", "none");
			angular.element(".tab-page-hist-2").css("display", "block");
		});
		*/

		angular.element(".menu-requests").click(function () {
			angular.element(".overlay-requests").css("display", "block");
			angular.element(".buttons-request").css("display", "block");
		});

		angular.element(".overlay-requests").click(function () {
			angular.element(this).css("display", "none");
			angular.element(".buttons-request").css("display", "none");
		});

		angular.element(".button-pedidos").click(function () {
			angular.element(".back-menu").css("display", "block");
			angular.element(".back-menu").css("left", "0px");
		});

		angular.element(".close-alert").click(function () {
			angular.element(".alerta-home").hide();
		});

		angular.element(".alerta-home").click(function () {
			window.location.href = "#!/comodatos_pendentes";
		});



		$scope.contratocomodatos = function () {
			window.location.href = "#!/comodatos_contrato";
		}

		angular.element("#mySidenav").css("display", "none");
		angular.element("#mySidenav").css("left", "-310px");
		angular.element(".back-menu").css("display", "none");
		angular.element(".back-menu").css("left", "-310px");
		angular.element(".back-menu").css("background", "none");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");
		angular.element(".menu-requests img").attr("src", "images/dot_menu_w.svg");
		angular.element(".menu-requests img").removeClass("link-photo");
		angular.element(".menu-requests").css("display", "block");
		angular.element(".button-pedidos").attr("href", "#!/new_pedido");

		angular.element(".button-feedback").click(function () {
			angular.element(".modal-justificativa").css("display", "block");
		});

		angular.element(".close-justificar").click(function () {
			angular.element(".modal-justificativa").css("display", "none");
		});

		angular.element(".btn-justificar-ok").click(function () {
			angular.element(".modal-justificativa").css("display", "none");
			angular.element(".overlay-finalizar").css("display", "block");
		});

		angular.element(".close-finalizar").click(function () {
			angular.element(".overlay-finalizar").css("display", "none");
		});

	})

	/* Solicitar alteração financeira Controller */
	.controller("alteracaoFinancController", function ($scope) {

		$scope.titulo = "Solicitar Alteração Financeira"
		angular.element(".title-app").html("Solicitar Alt. Financeira");
		angular.element("overlay-alteracao-financ").css("display", "none");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");

		angular.element(".btn-default-concluir").click(function () {
			angular.element(".overlay-alteracao-financ").css("display", "block");
		});

		angular.element(".menu-requests").click(function () {
			angular.element(".overlay-requests").css("display", "block");
			angular.element(".buttons-request").css("display", "block");
		});

		angular.element(".overlay-requests").click(function () {
			angular.element(this).css("display", "none");
			angular.element(".buttons-request").css("display", "none");
		});

	})

	/* Solicitar inativação Controller */
	.controller("inativacaoController", function ($scope) {

		$scope.titulo = "Solicitar Inativação"
		angular.element(".title-app").html("Solicitar Inativação");
		angular.element("overlay-inativacao").css("display", "none");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");

		angular.element(".btn-default-inativar").click(function () {
			angular.element(".overlay-inativacao").css("display", "block");
		});

		angular.element(".menu-requests").click(function () {
			angular.element(".overlay-requests").css("display", "block");
			angular.element(".buttons-request").css("display", "block");
		});

		angular.element(".overlay-requests").click(function () {
			angular.element(this).css("display", "none");
			angular.element(".buttons-request").css("display", "none");
		});

		angular.element(".combo-inativacao").change(function () {
			angular.element(".btn-default-inativar").removeAttr("disabled");
		});

	})


	/* cadastro Clientes Controller */
	.controller("cadastroClientesController", function ($scope) {

		$scope.titulo = "Cadastro de Clientes"
		angular.element(".title-app").html("Cadastro de Clientes");

		angular.element(".tab-1").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-2,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-page-1").css("display", "block");
			angular.element(".tab-page-2, .tab-page-3, .tab-page-4").css("display", "none");
		});

		angular.element(".tab-2").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-page-2").css("display", "block");
			angular.element(".tab-page-1, .tab-page-3, .tab-page-4").css("display", "none");
		});

		angular.element(".tab-3").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
			angular.element(".tab-page-3").css("display", "block");
			angular.element(".tab-page-1, .tab-page-2, .tab-page-4").css("display", "none");
		});

		angular.element(".tab-4").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).css("display", "inline-block");
			angular.element(".tab-1,.tab-2,.tab-3").removeClass("active");
			angular.element(".tab-page-4").css("display", "block");
			angular.element(".tab-page-1, .tab-page-2, .tab-page-3").css("display", "none");
		});

		angular.element(".link-btn-tab2").click(function () {
			angular.element(".tab-1,.tab-3,.tab-4").removeClass("active");
			angular.element(".tab-2").addClass("active");
			angular.element(".tab-page-2").css("display", "block");
			angular.element(".tab-page-1, .tab-page-3, .tab-page-4").css("display", "none");
			if (angular.element("#pdv").val() == "1") {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(loc, error);
				} else {
					angular.element(".lat").val("Sem suporte a geolocalização");
					angular.element(".long").val("Sem suporte a geolocalização");
				}
			}
			function loc(pos) {
				var la = pos.coords.latitude;
				var lo = pos.coords.longitude;
				angular.element(".lat").val(la);
				angular.element(".long").val(lo);
			}
			function error(errorCode) {
				if (errorCode.code == 1) {
					angular.element(".lat").val("Sem permissão para buscar sua localização");
					angular.element(".long").val("Sem permissão para buscar sua localização");
				} else if (errorCode.code == 2) {
					angular.element(".lat").val("Posição não disponivel");
					angular.element(".long").val("Posição não disponivel");
				} else {
					angular.element(".lat").val("Erro");
					angular.element(".long").val("Erro");
				}
			}
		});

		angular.element(".link-btn-tab3").click(function () {
			if (angular.element("#inp-email").val() == "") {
				angular.element("#warning").css("display", "block");
			} else {
				angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
				angular.element(".tab-3").addClass("active");
				angular.element(".tab-page-3").css("display", "block");
				angular.element(".tab-page-2, .tab-page-1, .tab-page-4").css("display", "none");
			}
		});

		angular.element(".link-btn-tab3-accept").click(function () {
			angular.element(".tab-1,.tab-2,.tab-4").removeClass("active");
			angular.element(".tab-3").addClass("active");
			angular.element(".tab-page-3").css("display", "block");
			angular.element(".tab-page-2, .tab-page-1, .tab-page-4").css("display", "none");
		});

		angular.element(".input-pj").click(function () {
			angular.element("body").addClass("pessoa-juridica");
			angular.element(this).addClass("active");
			angular.element(".input-pf").removeClass("active");
			angular.element("body").removeClass("pessoa-fisica");
			angular.element(".pessoa-juridica .tab-page-2 .link-btn-tab3").css("display", "none");
			angular.element(".pessoa-juridica .tab-page-2 .btn-finalizar").css("display", "block");
			angular.element(".txt-cnpj-cpf").text("CNPJ");
			angular.element(".container-nome-cliente").hide();
			angular.element(".inscri-rg").text("Inscrição Estadual");
			angular.element(".tab-3").css("display", "none");
			angular.element(".lbl-description-doc").html("<strong> Cliente Pessoa Jurídica:</strong> <br> Contrato Social, Comprovante de endereço e CPF, Comprovante de Endereço e RG do Fiel Depositário");
		});

		angular.element(".input-pf").click(function () {
			angular.element("body").addClass("pessoa-fisica");
			angular.element(this).addClass("active");
			angular.element(".input-pj").removeClass("active");
			angular.element("body").removeClass("pessoa-juridica");
			angular.element(".pessoa-fisica .tab-page-2 .link-btn-tab3").css("display", "block");
			angular.element(".pessoa-fisica .tab-page-2 .btn-finalizar").css("display", "none");
			angular.element(".txt-cnpj-cpf").text("CPF");
			angular.element(".container-nome-cliente").show();
			angular.element(".inscri-rg").text("RG");
			angular.element(".tab-3").css("display", "inline-block");
			angular.element(".lbl-description-doc").html("<strong> Cliente Pessoa Física:</strong> <br> CPF, Comprovante de Endereço e RG");
		});

		angular.element(".btn-finalizar").click(function () {
			angular.element(".overlay").css("display", "block");
		});

		angular.element(".overlay-modal").click(function () {
			angular.element(this).css("display", "none");
		});

		angular.element("#warning").click(function () {
			angular.element(this).css("display", "none");
		});

		angular.element("#mySidenav").css("display", "none");
		angular.element("#mySidenav").css("left", "-310px");
		angular.element(".back-menu").css("display", "none");
		angular.element(".back-menu").css("left", "-310px");
		angular.element(".back-menu").css("background", "none");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".menu-requests").css("display", "block");
		angular.element(".menu-requests img").attr("src", "images/camera_w.svg");
		angular.element(".menu-requests img").addClass("link-photo");

		angular.element(".link-photo").click(function(){
			angular.element(".screen-photo").css("display", "block");
		});

		angular.element(".close-screen-photo").click(function(){
			angular.element(".screen-photo").css("display", "none");
		});

		

	})


	/* catalogo Produtos Controller */
	.controller("catalogoProdutosController", function ($scope) {

		$scope.titulo = "Catalogo de Produtos"
		angular.element(".title-app").html("Catálogo de Produtos");
		angular.element(".search").addClass("search");
		angular.element(".search").css("display", "block");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");

		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".float-button-grid").addClass("image-grid");

		angular.element(".float-button-grid").click(function () {
			angular.element(this).toggleClass("image-list");
			angular.element(".box-product").toggleClass("product-grid");
		});

	})


	/* estoque Precos Controller */
	.controller("estoquePrecosController", function ($scope) {

		$scope.titulo = "Estoque Preços"
		angular.element(".title-app").html("Consulta de Estoque");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");
		angular.element(".menu-request").css("display", "none");

	})

	/* Carrinho Controller */
	.controller("carrinhoController", function ($scope) {

		$scope.titulo = "Carrinho de Compras"
		angular.element(".title-app").html("Carrinho de Compras");
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");
		angular.element(".cart").append("<span class='ind-number'></span>");
		angular.element("#mySidenav").css("display", "none");
		angular.element("#mySidenav").css("left", "-310px");
		angular.element(".back-menu").css("display", "none");
		angular.element(".back-menu").css("left", "-310px");
		angular.element(".back-menu").css("background", "none");
		angular.element(".menu-requests").css("display", "none");

		angular.element(".delete-product").click(function () {
			angular.element(".overlay-modal-delete").css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});

		angular.element(".btn-actions a").click(function () {
			angular.element(".overlay-modal-delete").css("display", "none");
		});

		moreLess(angular);

	})

	/* Carrinho Controller */
	.controller("carrinhoComodatoController", function ($scope) {

		$scope.titulo = "Carrinho Comodato"
		angular.element(".title-app").html("Carrinho Comodato");
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");
		angular.element(".cart").append("<span class='ind-number'></span>");
		angular.element("#mySidenav").css("display", "none");
		angular.element("#mySidenav").css("left", "-310px");
		angular.element(".back-menu").css("display", "none");
		angular.element(".back-menu").css("left", "-310px");
		angular.element(".back-menu").css("background", "none");
		angular.element(".menu-requests").css("display", "none");

		angular.element(".delete-product").click(function () {
			angular.element(".overlay-modal-delete").css("display", "block");
		});

		angular.element(".close-modal").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		});

		angular.element(".btn-actions a").click(function () {
			angular.element(".overlay-modal-delete").css("display", "none");
		});

		moreLess(angular);

	})

	/* Formas de Pagamento Controller */
	.controller("formasPagamentoController", function ($scope) {

		$scope.titulo = "Formas de Pagamento"
		angular.element(".title-app").html("Formas de Pagamento");
		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");
		angular.element(".cart").append("<span class='ind-number'></span>");
		angular.element(".menu-requests").css("display", "none");
		angular.element("#mySidenav").css("display", "none");
		angular.element("#mySidenav").css("left", "-310");
		angular.element(".back-menu").css("display", "none");
		angular.element(".back-menu").css("left", "-310px");
		angular.element(".back-menu").css("background", "none");

		angular.element(".lbl-pedido-cliente").click(function () {
			angular.element(".form-pedido-cliente").toggle();
		});

		angular.element(".entrega-imediata").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).append("<img class=img-verify src=images/check-mark.svg />");
		});

	})

	/* Detalhes Fechamento Pedido Controller */
	.controller("detalhesFechamentoPedidoController", function ($scope) {

		$scope.titulo = "Detalhes Fechamento Pedido"
		angular.element(".title-app").html("Detalhe Fechamento - Pedido");

		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".cart").addClass("cart");
		angular.element(".cart").css("display", "block");
		angular.element(".sync").css("display", "none");
		angular.element(".search").css("display", "none");
		angular.element(".cart").append("<span class='ind-number'></span>");
		angular.element("#mySidenav").css("display", "none");
		angular.element("#mySidenav").css("left", "-310px");
		angular.element(".back-menu").css("display", "none");
		angular.element(".back-menu").css("left", "-310px");
		angular.element(".back-menu").css("background", "none");

		angular.element(".btn-finalizar-pedido").click(function () {
			angular.element(".overlay-finalizar-pedido").css("display", "block");
		});

		angular.element(".overlay-finalizar-pedido").click(function () {
			angular.element(this).css("display", "none");
		});

	})

	/* relatorios Controller */
	.controller("relatoriosController", function ($scope) {

		$scope.titulo = "Relatórios"
		angular.element(".title-app").html("Relatórios");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");
		angular.element(".menu-request").css("display", "none");

	})

	/* Pesquisa Controller */
	.controller("pesquisaController", function ($scope) {

		$scope.titulo = "questionario"
		angular.element(".title-app").html("Questionário");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");
		angular.element(".bar-customer-back").css("display", "block");

		angular.element(".menu-requests").css("display", "none");

		angular.element(".btn-sim").click(function () {
			angular.element(this).addClass("active");
			angular.element(".btn-nao").removeClass("active");
		});

		angular.element(".btn-nao").click(function () {
			angular.element(this).addClass("active");
			angular.element(".btn-sim").removeClass("active");
		});

		angular.element(".page-pesquisa01 .btn-resposta").click(function () {
			angular.element(".page-pesquisa01 .btn-default").removeAttr("disabled");
		});

		angular.element(".page-pesquisa02 .btn-resposta").click(function () {
			angular.element(".page-pesquisa02 .btn-default").removeAttr("disabled");
		});

		angular.element(".page-pesquisa03 .btn-resposta").click(function () {
			angular.element(".page-pesquisa03 .btn-default").removeAttr("disabled");
		});


		angular.element(".page-pesquisa01 .cam-produto").click(function () {
			angular.element(".page-pesquisa01 .img-produto-photo").attr("src", "images/caixa-itaipava.jpg").css("display", "block").css("width", "50%").css("margin", "auto");
		});

		angular.element(".page-pesquisa02 .cam-produto").click(function () {
			angular.element(".page-pesquisa02 .img-produto-photo").attr("src", "images/caixa-itaipava.jpg").css("display", "block").css("width", "50%").css("margin", "auto");
		});

		angular.element(".page-pesquisa03 .cam-produto").click(function () {
			angular.element(".page-pesquisa03 .img-produto-photo").attr("src", "images/caixa-itaipava.jpg").css("display", "block").css("width", "50%").css("margin", "auto");
		});

		angular.element(".page-pesquisa01 .btn-default").click(function () {
			angular.element(".page-pesquisa02").css("display", "block");
			angular.element(".page-pesquisa01, .page-pesquisa03").css("display", "none");
		});

		angular.element(".page-pesquisa02 .btn-default").click(function () {
			angular.element(".page-pesquisa03").css("display", "block");
			angular.element(".page-pesquisa02, .page-pesquisa01").css("display", "none");
		});

		angular.element(".page-pesquisa03 .btn-default").click(function () {
			angular.element(".page-pesquisa03").css("display", "block");
			angular.element(".page-pesquisa01, .page-pesquisa02").css("display", "none");
		});

		angular.element(".finalizar-questionario").click(function () {
			angular.element(".overlay-finalizar-questionario").css("display", "block");
		});

		angular.element(".overlay-finalizar-questionario").click(function () {
			angular.element(this).css("display", "none");
		});

		angular.element(".btn-nao").click(function () {
			angular.element(".overlay-modal").css("display", "none");
		})

		angular.element(".btn-add-01").click(function () {
			angular.element(".add-new-pack-01").css("display", "block");
		});

		angular.element(".modal-btn-add-01").click(function () {
			var valorPack1 = angular.element(".valor-pack1").val();
			angular.element("#prod-itaipava tbody").append("<tr><td>" + valorPack1 + "</td><td><input type=text></td><td><input type=text>	</td><td><input type=text></td> <td> <img class=delete-line src=images/delete.svg width=25px> </td></tr>");
			angular.element(".add-new-pack-01").css("display", "none");
			angular.element(".valor-pack1").val("");
		});

		angular.element(".btn-add-02").click(function () {
			angular.element(".add-new-pack-02").css("display", "block");
		});

		angular.element(".modal-btn-add-02").click(function () {
			var valorPack2 = angular.element(".valor-pack2").val();
			angular.element("#prod-crystal tbody").append("<tr><td>" + valorPack2 + "</td><td><input type=text></td><td><input type=text>	</td><td><input type=text></td><td> <img class=delete-line src=images/delete.svg width=25px> </td></tr>");
			angular.element(".add-new-pack-02").css("display", "none");
			angular.element(".valor-pack2").val("");
		});


		angular.element(".btn-add-03").click(function () {
			angular.element(".add-new-pack-03").css("display", "block");
		});

		angular.element(".modal-btn-add-03").click(function () {
			var valorPack3 = angular.element(".valor-pack3").val();
			angular.element("#prod-go-draft tbody").append("<tr><td>" + valorPack3 + "</td><td><input type=text></td><td><input type=text>	</td><td><input type=text></td><td> <img class=delete-line src=images/delete.svg width=25px> </td></tr>");
			angular.element(".add-new-pack-03").css("display", "none");
			angular.element(".valor-pack3").val("");
		});

		angular.element(".btn-add-04").click(function () {
			angular.element(".add-new-pack-04").css("display", "block");
		});

		angular.element(".modal-btn-add-04").click(function () {
			var valorPack4 = angular.element(".valor-pack4").val();
			angular.element("#prod-premium tbody").append("<tr><td>" + valorPack4 + "</td><td><input type=text></td><td><input type=text>	</td><td><input type=text></td><td> <img class=delete-line src=images/delete.svg width=25px> </td></tr>");
			angular.element(".add-new-pack-04").css("display", "none");
			angular.element(".valor-pack4").val("");
		});

	})

	/* Qustionário Controller */
	.controller("questionarioController", function ($scope) {

		$scope.titulo = "Pesquisa"
		angular.element(".title-app").html("Pesquisa");
		angular.element(".sync img, .menu-photo img").attr("src", "");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".menu-requests").css("display", "none");

	})

	/* agendar Quest Detalhe Controller */
	.controller("questDetalheController", function ($scope) {

		$scope.titulo = "quest_detalhe"
		angular.element(".title-app").html("Detalhe da Pesquisa");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".vendedor").click(function () {
			angular.element(this).addClass("active-link");
			angular.element(".externo").removeClass("active-link");
		});

		angular.element(".externo").click(function () {
			angular.element(this).addClass("active-link");
			angular.element(".vendedor").removeClass("active-link");
		});

		angular.element(".menu-requests").css("display", "none");

	})

	/* agendar Quest Detalhe 2 Controller */
	.controller("questDetalhe2Controller", function ($scope) {

		$scope.titulo = "quest_detalhe_2"
		angular.element(".title-app").html("Detalhe da Pesquisa");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".vendedor").click(function () {
			angular.element(this).addClass("active-link");
			angular.element(".externo").removeClass("active-link");
		});

		angular.element(".externo").click(function () {
			angular.element(this).addClass("active-link");
			angular.element(".vendedor").removeClass("active-link");
		});

		angular.element(".menu-requests").css("display", "none");

	})

	/* agendar Visita Controller */
	.controller("agendarVisitaController", function ($scope) {

		$scope.titulo = "Agendar Visita"
		angular.element(".title-app").html("Agendar Visita");
		angular.element(".search").css("display", "none");
		angular.element(".sync").css("display", "none");
		angular.element(".cart").css("display", "none");
		angular.element(".menu-request").css("display", "none");

		angular.element(".enviar-solicitacao").click(function () {
			angular.element(".overlay-solicitacao-enviada").css("display", "block");
		});

		angular.element(".solicitacao-voltar").click(function () {
			angular.element(".overlay-solicitacao-enviada").css("display", "none");
		});

	})

	/* Splash Controller */
	.controller("splashController", function ($scope) {

		$scope.titulo = "Splash"

	})

	/* Login Controller */
	.controller("loginController", function ($scope) {

		$scope.titulo = "Login"

	})

	/* lp Itaipava Controller */
	.controller("lpItaipavaController", function ($scope) {

		$scope.titulo = "lp Itaipava Controller"
		angular.element(".title-app").html("Itaipava");
		angular.element(".sync img").attr("src", "images/search_w.svg");
		angular.element(".sync").addClass("search");
		angular.element(".sync").removeClass("sync");

		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".float-button-grid").addClass("image-grid");
		angular.element(".float-button-grid").css('display', 'none');

		angular.element(".float-button-grid").click(function () {
			angular.element(this).toggleClass("image-list");
			angular.element(".box-product").toggleClass("product-grid");
		})

		angular.element(function () {
			var floatbutton = $(".float-button-grid");
			angular.element(window).scroll(function () {
				var scroll = angular.element(window).scrollTop();

				if (scroll >= 1100) {
					floatbutton.css('display', 'block');
				} else {
					floatbutton.css('display', 'none');
				}
			});
		});
	})

	/* lp Crystal Controller */
	.controller("lpCrystalController", function ($scope) {

		$scope.titulo = "lp Crystal Controller"
		angular.element(".title-app").html("Crystal");
		angular.element(".sync img").attr("src", "images/search_w.svg");
		angular.element(".sync").addClass("search");
		angular.element(".sync").removeClass("sync");

		angular.element(".bar-customer-back").css("display", "none");
		angular.element(".float-button-grid2").addClass("image-grid2");
		angular.element(".float-button-grid2").css('display', 'none');

		angular.element(".float-button-grid2").click(function () {
			angular.element(this).toggleClass("image-list-2");
			angular.element(".box-product").toggleClass("product-grid2");

		})

		angular.element(function () {
			var floatbutton = $(".float-button-grid2");
			angular.element(window).scroll(function () {
				var scroll = angular.element(window).scrollTop();

				if (scroll >= 400) {
					floatbutton.css('display', 'block');
				} else {
					floatbutton.css('display', 'none');
				}
			});
		});
	})

	/* Trocas Controller */
	.controller("trocaController", function ($scope) {

		$scope.titulo = "Trocas"
		angular.element(".title-app").html("Trocas");
		angular.element(".sync img").attr("src", "images/search_w.svg");
		angular.element(".sync").addClass("search");
		angular.element(".sync").removeClass("sync");
		angular.element(".back-menu").css("display", "none");


		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".float-button-grid2").addClass("image-grid2");
		angular.element(".float-button-grid2").css('display', 'none');

		angular.element(".menu-requests").click(function () {
			angular.element(".overlay-requests").css("display", "block");
			angular.element(".buttons-request").css("display", "block");
		});

		angular.element(".overlay-requests").click(function () {
			angular.element(this).css("display", "none");
			angular.element(".buttons-request").css("display", "none");
		});

		configuraLinks(angular);

	})

	/* Consignações Controller */
	.controller("consignacoesController", function ($scope) {

		$scope.titulo = "Consignações"
		angular.element(".title-app").html("Consignações");
		angular.element(".sync img").attr("src", "images/search_w.svg");
		angular.element(".sync").addClass("search");
		angular.element(".sync").removeClass("sync");
		angular.element(".back-menu").css("display", "none");


		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".float-button-grid2").addClass("image-grid2");
		angular.element(".float-button-grid2").css('display', 'none');

		angular.element(".menu-requests").click(function () {
			angular.element(".overlay-requests").css("display", "block");
			angular.element(".buttons-request").css("display", "block");
		});

		angular.element(".overlay-requests").click(function () {
			angular.element(this).css("display", "none");
			angular.element(".buttons-request").css("display", "none");
		});


	})

	/* Lista de Consignações Controller */
	.controller("listaConsignacoesController", function ($scope) {

		$scope.titulo = "Remessas - Consignados"
		angular.element(".title-app").html("Remessas - Consignados");
		angular.element(".sync img").attr("src", "images/search_w.svg");
		angular.element(".sync").addClass("search");
		angular.element(".sync").removeClass("sync");
		angular.element("#mySidenav").css("display", "none");
		angular.element(".back-menu").css("display", "none");

		angular.element(".bar-customer-back").css("display", "block");

		angular.element(".menu-requests").click(function () {
			angular.element(".overlay-requests").css("display", "block");
			angular.element(".buttons-request").css("display", "block");
		});

		angular.element(".overlay-requests").click(function () {
			angular.element(this).css("display", "none");
			angular.element(".buttons-request").css("display", "none");
		});

	})

	/* Detalhe Consignados Controller */
	.controller("detalheConsignadosController", function ($scope) {

		$scope.titulo = "Detalhe Consignados"
		angular.element(".title-app").html("Detalhe Consignados");
		angular.element(".sync img").attr("src", "images/search_w.svg");
		angular.element(".sync").addClass("search");
		angular.element(".sync").removeClass("sync");

		angular.element(".bar-customer-back").css("display", "block");

		angular.element(".menu-requests").click(function () {
			angular.element(".overlay-requests").css("display", "block");
			angular.element(".buttons-request").css("display", "block");
		});

		angular.element(".overlay-requests").click(function () {
			angular.element(this).css("display", "none");
			angular.element(".buttons-request").css("display", "none");
		});

		angular.element(".close-faturar").click(function () {
			angular.element(".modal-faturar").css("display", "none");
		});

		angular.element(".btn-consignados-faturar").click(function () {
			angular.element(".modal-faturar").css("display", "block");
		})

		angular.element(".close-recolher").click(function () {
			angular.element(".modal-recolher").css("display", "none");
		});

		angular.element(".btn-consignados-recolher").click(function () {
			angular.element(".modal-recolher").css("display", "block");
		});

		angular.element(".btn-recolher").click(function () {
			angular.element(".modal-recolher").css("display", "none");
			angular.element(".overlay-finalizar").css("display", "block");
			angular.element(".overlay-finalizar .header-modal").html("Recolha Solicitada com Sucesso!");
		});

		angular.element(".btn-faturar").click(function () {
			angular.element(".modal-faturar").css("display", "none");
			angular.element(".overlay-finalizar").css("display", "block");
			angular.element(".overlay-finalizar .header-modal").html("Fatura realizada com Sucesso!");
		});


	})

	/* Fechamento Comodato Controller */
	.controller("fechamentoComodatoController", function ($scope) {

		$scope.titulo = "Fechamento Comodato"
		angular.element(".title-app").html("Fechamento Comodato");

		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".cart").addClass("cart");
		angular.element(".cart").css("display", "block");
		angular.element(".sync").css("display", "none");
		angular.element(".search").css("display", "none");
		angular.element(".cart").append("<span class='ind-number'></span>");
		angular.element("#mySidenav").css("display", "none");
		angular.element("#mySidenav").css("left", "-310px");
		angular.element(".back-menu").css("display", "none");
		angular.element(".back-menu").css("left", "-310px");
		angular.element(".back-menu").css("background", "none");
		angular.element(".menu-requests").css("display", "none");

		angular.element(".lbl-pedido-cliente").click(function () {
			angular.element(".form-pedido-cliente").toggle();
		});

		angular.element(".entrega-imediata").click(function () {
			angular.element(this).addClass("active");
			angular.element(this).append("<img class=img-verify src=images/check-mark.svg />");
		});


		angular.element(".btn-finalizar-pedido").click(function () {
			angular.element(".overlay-finalizar-pedido").css("display", "block");
		});

		angular.element(".overlay-finalizar-pedido").click(function () {
			angular.element(this).css("display", "none");
		});

	})

	/* Remuneração Variavel Controller */
	.controller("remuneracaoVariavelController", function ($scope) {

		$scope.titulo = "Remuneração Variável"
		angular.element(".title-app").html("Remuneração Variável");

		angular.element("body").css("overflow-y", "auto");
		angular.element(".bar-customer-back").css("display", "block");
		angular.element(".cart").addClass("cart");
		angular.element(".cart").css("display", "block");
		angular.element(".sync").css("display", "none");
		angular.element(".search").css("display", "none");
		angular.element(".cart").append("<span class='ind-number'></span>");
		angular.element("#mySidenav").css("display", "none");
		angular.element("#mySidenav").css("left", "-310px");
		angular.element(".back-menu").css("display", "none");
		angular.element(".back-menu").css("left", "-310px");
		angular.element(".back-menu").css("background", "none");
		angular.element(".menu-requests").css("display", "none");

		angular.element("#btn-competencia").click(function(){
			angular.element(".competencia-mode").css("display","block");
			angular.element(".txt-selected").html("02/2019");
		});

		angular.element(".btn-sele-competencia").click(function(){
			angular.element(".competencia-mode").css("display","none");
		});

		angular.element(".modal-custom .close-modal").click(function(){
			angular.element(".competencia-mode").css("display","none");
		});

		angular.element(".link-clientes-ruptura").click(function(){
			angular.element(".ruptura-mode").css("display","block");
			angular.element("body").css("overflow-y", "hidden");
		});

		angular.element(".link-minha-variavel").click(function(){
			angular.element(".minha-variavel-mode").css("display","block");
			angular.element("body").css("overflow-y", "hidden");
		});

		angular.element(".link-faturamento-meta").click(function(){
			angular.element(".faturamento-meta-mode").css("display","block");
			angular.element("body").css("overflow-y", "hidden");
		});

		angular.element(".link-inadimplencia").click(function(){
			angular.element(".inadimplencia-mode").css("display","block");
			angular.element("body").css("overflow-y", "hidden");
		});

		angular.element(".link-giro-material-pesado").click(function(){
			angular.element(".giro-material-pesado-mode").css("display","block");
			angular.element("body").css("overflow-y", "hidden");
		});

		angular.element(".link-giro-vasilhame").click(function(){
			angular.element(".giro-vasilhame-mode").css("display","block");
			angular.element("body").css("overflow-y", "hidden");
		});

		angular.element(".link-comissao-recebida").click(function(){
			angular.element(".comissao-recebida-mode").css("display","block");
			angular.element("body").css("overflow-y", "hidden");
		});

		
		angular.element(".close-modal").click(function(){
			angular.element(".ruptura-mode").css("display","none");
			angular.element("body").css("overflow-y", "auto");
		});

		angular.element(".btn-fechar-modal").click(function(){
			angular.element(".modal-remuneracao-variavel").css("display","none");
			angular.element("body").css("overflow-y", "auto");
		});

		angular.element(".giro-material-pesado-mode .tile-modal").append("<img class=img-thumb-like src=images/thumb-down.svg>");
		angular.element(".giro-material-pesado-mode ul li:nth-child(3) .img-thumb-like").attr("src","images/thumbs-up2.svg");
		angular.element(".giro-material-pesado-mode ul li:nth-child(8) .img-thumb-like").attr("src","images/thumbs-up2.svg");

		angular.element(".giro-vasilhame-mode .tile-modal").append("<img class=img-thumb-like src=images/thumbs-up2.svg>");
		angular.element(".giro-vasilhame-mode ul li:nth-child(3) .img-thumb-like").attr("src","images/thumb-down.svg");
		angular.element(".giro-vasilhame-mode ul li:nth-child(5) .img-thumb-like").attr("src","images/thumb-down.svg");

		angular.element(".faturamento-meta-mode .tile-modal").append("<img class=img-thumb-like src=images/thumbs-up2.svg>");
		angular.element(".faturamento-meta-mode ul li:nth-child(3) .img-thumb-like").attr("src","images/thumb-down.svg");
		angular.element(".faturamento-meta-mode ul li:nth-child(5) .img-thumb-like").attr("src","images/thumb-down.svg");

		angular.element(".minha-variavel-mode .tile-modal").append("<img class=img-thumb-like src=images/thumbs-up2.svg>");
		angular.element(".minha-variavel-mode ul li:nth-child(3) .img-thumb-like").attr("src","images/thumb-down.svg");
		angular.element(".minha-variavel-mode ul li:nth-child(5) .img-thumb-like").attr("src","images/thumb-down.svg");

		angular.element(".tile-modal").click(function(){
			angular.element(this).toggleClass("tile-142");
		});
		
	})