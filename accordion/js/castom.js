$(document).ready(function(){								//Проверка документа на загрузку
	var tab = $('.tab a');
	tab.click(function(){
		var target = $(this).attr('href');
		$(target).slideToggle(200);
	})
	
})