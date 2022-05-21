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
	const appMenu = document.querySelector('.slideout-panel');
	hasClass(appMenu, 'open') ? removeClass(appMenu, 'open') : addClass(appMenu, 'open');
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
}


document.addEventListener('readystatechange', function() {
	if (document.readyState === 'complete') {
		init();
	}
});