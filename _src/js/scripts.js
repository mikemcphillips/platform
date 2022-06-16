function hasClass(el, className) {
	return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function addClass(el, className) {
	if (el.classList) el.classList.add(className);
	else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
	if (el.classList) el.classList.remove(className);
	else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}

function toggleMenu() {
	var appMenu = document.querySelector('.slideout-panel');
	hasClass(appMenu, 'open') ? removeClass(appMenu, 'open') : addClass(appMenu, 'open');
	toggleOverlay();
}

function toggleOverlay() {
	var overlay = document.querySelector('.modal-overlay');
	var body = document.querySelector('body');
	
	if (overlay) {
		body.removeChild(overlay);
	} else {
		overlay = document.createElement('div');
		addClass(overlay, 'modal-overlay');
		body.appendChild(overlay);
		overlay.addEventListener('click', toggleMenu);
		setTimeout(function(){ addClass(overlay, 'show') }, 0);
	}
}

function refresh() {
	console.log('refresh');
}

function init() {
	var platformBtn = document.querySelector('.btn-platform');
	var closeBtn = document.querySelector('.btn-close');
	var refreshBtn = document.querySelector('.btn-refresh');
	
	platformBtn.addEventListener('click', toggleMenu);
	closeBtn.addEventListener('click', toggleMenu);
	refreshBtn.addEventListener('click', refresh);
	
	var compList = document.querySelectorAll('.btn-app');
	for (let i = 0; i < compList.length; i++) {
		compList[i].addEventListener('click', (e) => {
			for (let j = 0; j < compList.length; j++) {
				removeClass(compList[j], 'current-selection');
			}
			let btn = (e.target.tagName === 'BUTTON') ? e.target : e.target.parentNode;
			addClass(btn, 'current-selection');
		});
	}
	
}


document.addEventListener('readystatechange', function() {
	if (document.readyState === 'complete') {
		init();
	}
});