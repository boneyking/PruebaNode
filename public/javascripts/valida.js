function valida(){
	try{
		if($.trim($('#nombre').val()) == ''){
			$('#error_nombre').fadeIn(1).html("<span style='color:red; font-weight:bold;'>* Indica nombre</span>");
			$('#nombre').focus();
			return false;
		}
	}catch(err){
		alert(err);
	}

	try{
		if($.trim($('#descripcion').val()) == ''){
			$('#error_descripcion').fadeIn(1).html("<span style='color:red; font-weight:bold;'>* Indica descripción</span>");
			$('#descripcion').focus();
			return false;
		}
	}catch(err){
		alert(err);
	}

	try{
		if($.trim($('#precio').val()) == ''){
			$('#error_precio').fadeIn(1).html("<span style='color:red; font-weight:bold;'>* Indica precio</span>");
			$('#precio').focus();
			return false;
		}
	}catch(err){
		alert(err);
	}

	return true;
}

$(document).on('ready', function(){
	$("#nombre").on('keyup', function(){
		if($.trim($('#nombre').val()) == ''){
			$('#error_nombre').fadeIn(1).html("<span style='color:red; font-weight:bold;'>* Indica nombre</span>");
		}else{
			$('#error_nombre').fadeOut(100);
		}
	});

	$("#descripcion").on('keyup', function(){
		if($.trim($('#descripcion').val()) == ''){
			$('#error_descripcion').fadeIn(1).html("<span style='color:red; font-weight:bold;'>* Indica descripción</span>");
		}else{
			$('#error_descripcion').fadeOut(100);
		}
	});

	$("#precio").on('keyup', function(){
		if($.trim($('#precio').val()) == ''){
			$('#error_precio').fadeIn(1).html("<span style='color:red; font-weight:bold;'>* Indica precio</span>");
		}else{
			$('#error_precio').fadeOut(100);
		}
	});
});