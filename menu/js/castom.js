$(document).ready(function(){								//Проверка документа на загрузку
	var link = $('.menu-link')								//Создаём переменную link в которую записываем класс .menu-link
	var menu = $('.menu')									//Создаём переменную link_active в которую записываем класс .menu

	link.click(function(){          						//Событие при клике на .menu-link
		link.toggleClass('menu-link_active')				//Добавим/удалим у ссылки .menu-link класс .menu-link_active
		menu.toggleClass('menu_active')						//Добавим/удалим у блока .menu класс  .menu_active
	})
	$('.menu a').click(function(){							//Событие при клике на пункт меню
		menu.removeClass('menu_active');					//Удаляем класс .menu_active у блока .menu
		link.toggleClass('menu-link_active');
		event.preventDefault();								//отменяем стандартную обработку нажатия по ссылке
		var id  = $(this).attr('href'),        				//забираем идентификатор бока с атрибута href
		top = $(id).offset().top;							//узнаем высоту от начала страницы до блока на который ссылается якорь
		$('body,html').animate({scrollTop: top}, 1000);		//анимируем переход на расстояние - top за 1500 мс
	})
	
})