'use strict';
//Init function toggleClass
function toggleClass(clickTarget, classTarget, className){
	var clickTarget = document.querySelector(clickTarget),
		classTarget = document.querySelector(classTarget);

		document.onclick = function(e){
			if((e.target !== classTarget) && (e.target !== clickTarget)){
				classTarget.classList.remove(className);
			};
		};

		clickTarget.onclick = function(){
			event.preventDefault();
			classTarget.classList.toggle(className);
		};
};;

// Using function toggleClass
toggleClass('.toggle-button', '.sidebar', 'sidebar-open');

