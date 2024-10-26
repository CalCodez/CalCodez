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

const menuToggler = getId('main-toggler');
const mainMenu = getId('menu');
const sideBarIcons = getClass('side-bar-icons');
const activeIcons = getClass('active-icons');
const [userIcon, projectIcon, mediumIcon, trainingIcon] = sideBarIcons;

menuToggler.addEventListener('click', function () {
	const active = 'active-menu';
	const iconsActive = 'side-bar-icons-active';

	if (!mainMenu.classList.contains(active)) {
		toggleClass(mainMenu, active);
		menuToggler.style.color = 'var(--gold)';

		for (let links of sideBarIcons) {
			toggleClass(links, iconsActive);
		}
	} else {
		toggleClass(mainMenu, active);
		menuToggler.style.color = 'var(--cranberry-dark)';

		for (let links of sideBarIcons) {
			toggleClass(links, iconsActive);
		}
	}
});

const sectionToggle = getClass('section-toggle');
const [aboutToggle, projectToggle, trainingToggle] = sectionToggle;

const sections = selectAll('section');

const [aboutSection, projectSection, trainingSection] = sections;

const sectionActive = 'section-active';
const toggleUp = 'fa-caret-up';
const toggleDown = 'fa-caret-down';

const toggleSection = (button, section) => {
	button.addEventListener('click', function () {
		if (!section.classList.contains(sectionActive)) {
			toggleClass(section, sectionActive);
			removeClass(button, toggleDown);
			addClass(button, toggleUp);
		} else {
			toggleClass(section, sectionActive);
			removeClass(button, toggleUp);
			addClass(button, toggleDown);
		}
	});
};

toggleSection(aboutToggle, aboutSection);
toggleSection(trainingToggle, trainingSection);

const sectionLabels = getClass('section-label');
const [aboutLabel, projectLabel, trainingLabel] = sectionLabels;

const cardContainer = getId('cardContainer');

projectToggle.addEventListener('click', function () {
	if (!projectSection.classList.contains(sectionActive)) {
		toggleClass(projectSection, sectionActive);
		removeClass(projectToggle, toggleDown);
		addClass(projectToggle, toggleUp);
		toggleClass(cardContainer, 'card-container-active');
		projectLabel.style.display = 'none';
	} else {
		toggleClass(projectSection, sectionActive);
		toggleClass(cardContainer, 'card-container-active');
		removeClass(projectToggle, toggleUp);
		addClass(projectToggle, toggleDown);
		projectLabel.style.display = 'block';
	}
});
