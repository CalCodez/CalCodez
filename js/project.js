//!!Default Functions

const appendChild = (arg1, arg2) => arg1.appendChild(arg2);
const removeChild = (arg1, arg2) => arg1.removeChild(arg2);
const getId = (arg1) => document.getElementById(arg1);
const getClass = (arg) => document.getElementsByClassName(arg);
const addClass = (arg1, arg2) => arg1.classList.add(arg2);
const removeClass = (arg1, arg2) => arg1.classList.remove(arg2);
const toggleClass = (arg1, arg2) => arg1.classList.toggle(arg2);
const createElement = (arg1) => document.createElement(arg1);
const selectAll = (arg) => document.querySelectorAll(arg);
const select = (arg) => document.querySelector(arg);
const textContent = (arg1, arg2) => (arg1.textContent = arg2);

//??Contact Link Toggler Vars
const click = 'click';
const contactToggler = getId('contact-link');
const contactContainer = getId('project-contact-container');

//?? Mobile Menu Link Vars
const menuToggler = getId('main-toggler');
const mainMenu = getId('menu');
const sideBarIcons = getClass('side-bar-icons');
const activeIcons = getClass('active-icons');
const [homeIcon, contactIcon, mediumIcon, trainingIcon] = sideBarIcons;
const iconsActive = 'side-bar-icons-active';
const activeContact = 'project-contact-container-active';
const activeMenu = 'active-menu';

const toggleContactContainer = (toggler, container = contactContainer) => {
	toggler.addEventListener(click, function () {
		if (
			!container.classList.contains(activeContact) &&
			!mainMenu.classList.contains('active-menu')
		) {
			toggleClass(container, activeContact);
		} else if (
			!container.classList.contains(activeContact) &&
			mainMenu.classList.contains(activeMenu)
		) {
			toggleClass(container, activeContact);
			toggleClass(mainMenu, activeMenu);
			for (let links of sideBarIcons) {
				toggleClass(links, iconsActive);
			}
			menuToggler.style.color = 'var(--cranberry-dark)';
		} else {
			toggleClass(container, activeContact);
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' && container.classList.contains(activeContact)) {
			toggleClass(container, active);
		}
		{
		}
	});
};

//~~Toggle Mobile Main Menu
menuToggler.addEventListener(click, function () {
	if (!mainMenu.classList.contains(activeMenu)) {
		toggleClass(mainMenu, activeMenu);
		menuToggler.style.color = 'var(--gold)';

		for (let links of sideBarIcons) {
			toggleClass(links, iconsActive);
		}
	} else {
		toggleClass(mainMenu, activeMenu);
		menuToggler.style.color = 'var(--cranberry-dark)';

		for (let links of sideBarIcons) {
			toggleClass(links, iconsActive);
		}
	}

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' && mainMenu.classList.contains(activeMenu)) {
			toggleClass(mainMenu, activeMenu);

			for (let links of sideBarIcons) {
				toggleClass(links, iconsActive);
				menuToggler.style.color = 'var(--cranberry-dark)';
			}
		}
	});
});
toggleContactContainer(contactToggler);
toggleContactContainer(contactIcon);

//??SnapCode Variable/Function
const snapChatToggler = getId('snapCode');
snapChatToggler.addEventListener(click, function () {
	const snapChat = ['./assets/snapcode/Snapchat-206999597.jpg', 'SnapCode'];
	const snapCodeContainer = createElement('div');
	const snapExit = createElement('i');
	const parent = select('body');
	const img = createElement('img');
	addClass(snapCodeContainer, 'snapCode');
	addClass(snapCodeContainer, 'container');
	addClass(snapExit, 'fa-x');
	addClass(snapExit, 'snapCode-close');
	appendChild(parent, snapCodeContainer);
	appendChild(snapCodeContainer, snapExit);
	appendChild(snapCodeContainer, img);
	toggleClass(contactContainer, activeContact);

	img.src = snapChat[0];
	img.alt = snapChat[1];

	snapExit.addEventListener('click', function () {
		snapCodeContainer.style.display = 'none';
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			snapCodeContainer.style.display = 'none';
		}
	});
});
