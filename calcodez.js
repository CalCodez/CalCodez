//!!Default Functions

const appendChild = (arg1, arg2) => arg1.appendChild(arg2);
const getId = (arg1) => document.getElementById(arg1);
const getClass = (arg) => document.getElementsByClassName(arg);
const addClass = (arg1, arg2) => arg1.classList.add(arg2);
const removeClass = (arg1, arg2) => arg1.classList.remove(arg2);
const toggleClass = (arg1, arg2) => arg1.classList.toggle(arg2);
const createElement = (arg1) => document.createElement(arg1);
const selectAll = (arg) => document.querySelectorAll(arg);
const select = (arg) => document.querySelector(arg);

const textDisplay = {
	user: 'About',
	project: 'Projects',
	medium: 'Medium',
	training: 'Training',
};

const menuToggler = getId('main-toggler');
const mainMenu = getId('menu');
const sideBarIcons = getClass('side-bar-icons');
const activeIcons = getClass('active-icons');
const click = 'click';
const active = 'active-menu';
const [userIcon, projectIcon, mediumIcon, trainingIcon] = sideBarIcons;

menuToggler.addEventListener(click, function () {
	if (!menuToggler.classList.contains(active)) {
		toggleClass(mainMenu, active);
	} else {
		toggleClass(mainMenu, active);
	}
});
