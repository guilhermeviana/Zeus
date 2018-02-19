$(function(){	
	$("#palavra").keyup(function(){		
		var pesquisa = $(this).val();		
		if(pesquisa != ''){
			var dados = {
				palavra : pesquisa
			}		
			$.post('http://127.0.0.1/zeus/site/examples/site/index.php', dados, function(retorna){				
				$("#resultado").html(retorna);
			});
		}else{
			$("#resultado").html('');
		}		
	});
});