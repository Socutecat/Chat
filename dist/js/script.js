
'use strict';
//Init function toggleClass
function toggleClass(clickTarget, classTarget, className){
	var clickTargetVariable = document.querySelector(clickTarget),
		classTargetVariable = document.querySelector(classTarget);

	function clickListener(){
		event.stopPropagation();
		this.classList.toggle('toggle-active');
		classTargetVariable.classList.toggle(className);
	}

	clickTargetVariable.addEventListener('click', clickListener);

	document.addEventListener('click', function(e){

		if (e.target.closest(classTarget)){
			return;
		}

		if (classTargetVariable.classList.contains(className)){
			classTargetVariable.classList.remove(className);
			clickTargetVariable.classList.remove('toggle-active');
		}
	});
}

// Using function toggleClass
// Show and hide a list of users
toggleClass('.toggle-button', '.sidebar', 'sidebar-open');
// Drop-down menu
toggleClass('.acc-status', '.acc-menu', 'acc-menu-open');
// Theme switcher
toggleClass('.toggle-box', 'body', 'night-mode');
