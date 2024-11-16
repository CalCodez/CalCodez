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

const navLinks = getClass('nav-link');
const [aboutLink, projectLink, trainingLink, mediumLink, contactLink] =
	navLinks;

//??About toggle Function

const calImg = {
	calvin1: { src: './assets/photos/Calvin/CalvinC_One.jpg', alt: 'Calvin One' },
	calvin2: {
		src: './assets/photos/Calvin/Calvin_Three.jpg',
		alt: 'Calvin Two',
	},
};

const { calvin1, calvin2 } = calImg;
const mainTitleWrapper = select('.main-title-wrapper');
const aboutTitleWrapper = select('.about-title-wrapper');

const aboutContainerToggle = (
	toggler,
	container1 = mainTitleWrapper,
	container2 = aboutTitleWrapper
) => {
	const click = 'click';
	const inactive = 'main-title-container-inactive';
	const active = 'about-title-wrapper-active';
	const imageContainer = select('.portfolio-image-container');
	const img = createElement('img');
	const profileImage = getId('profileImage');

	toggler.addEventListener(click, function () {
		if (!container1.classList.contains(inactive)) {
			toggleClass(container1, inactive);
			toggleClass(container2, active);
			appendChild(imageContainer, img);

			img.src = calvin2.src;
			img.alt = calvin2.alt;
		} else {
			toggleClass(container1, inactive);
			toggleClass(container2, active);
			img.src = calvin1.src;
			appendChild(imageContainer, img);
		}
	});
};

aboutContainerToggle(userIcon);
aboutContainerToggle(aboutLink);

const icons = {
	facebook: 'fa-facebook-active',
	instagram: 'fa-instagram-active',
	snapchat: 'fa-snapchat-active',
	threads: 'fa-threads-active',
};

const iconToggler = getId('icon-toggler');
const socialIcons = getClass('fa-brands');
const [fb, ig, sc, threads] = socialIcons;

const contactToggle = (toggler) => {
	const click = 'click';
	toggler.addEventListener(click, function () {
		toggleClass(fb, icons.facebook);
		toggleClass(ig, icons.instagram);
		toggleClass(sc, icons.snapchat);
		toggleClass(threads, icons.threads);
	});
};

contactToggle(contactLink);
contactToggle(iconToggler);

const sectionToggle = getClass('section-toggle');
const [projectSectionToggle, trainingSectionToggle] = sectionToggle;

const sections = selectAll('section');

const [projectSection, trainingSection] = sections;

//** Needs to be grouped in an object (maybe?)*/
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

const sectionLabels = getClass('section-label');
const [projectLabel, trainingLabel] = sectionLabels;
const spanContainer = getId('spanContainer');
//??About Section Function here

//??Project Section Toggle Function
const toggleProjectSection = (toggler, section = projectSection) => {
	const click = 'click';
	toggler.addEventListener(click, function () {
		if (!section.classList.contains(sectionActive)) {
			toggleClass(section, sectionActive);
			removeClass(projectSectionToggle, toggleDown);
			addClass(projectSectionToggle, toggleUp);
			toggleClass(spanContainer, 'span-container-active');
			projectLabel.style.display = 'none';
		} else {
			toggleClass(section, sectionActive);
			toggleClass(spanContainer, 'span-container-active');
			removeClass(projectSectionToggle, toggleUp);
			addClass(projectSectionToggle, toggleDown);
			projectLabel.style.display = 'block';
		}
	});
};

toggleProjectSection(projectSectionToggle);
toggleProjectSection(projectLink);

const cardToggles = getClass('card-toggles');
const [
	saasToggler,
	pokemonToggler,
	caltubeToggler,
	responsiveToggler,
	socialToggler,
	favzToggler,
	tributeToggler,
	googleToggler,
] = cardToggles;
const cardWrapper = getId('cardWrapper');
const projectCard = getId('projectCard');

const source = {
	saas: { src: './assets/project_card_images/SaaS.png', alt: 'SaaS' },
	pokemon: {
		src: './assets/project_card_images/Pokemon.png',
		alt: 'Pokemon Card Collection',
	},
	calTube: { src: './assets/project_card_images/Caltube.png', alt: 'CalTube' },
	responsive: {
		src: './assets/project_card_images/Responsive_website.png',
		alt: 'Responsive Website',
	},

	social: {
		src: './assets/project_card_images/Social_Media.png',
		alt: 'Social Media Logins',
	},

	favz: { src: './assets/project_card_images/My_Favz.png', alt: 'My Favz' },
	tribute: {
		src: './assets/project_card_images/Aaliyah_tribute.png',
		alt: 'Aaliyah Tribute Page',
	},
	google: {
		src: './assets/project_card_images/Google.png',
		alt: 'Google Home Page',
	},
	snapchat: {
		src: './assets/snapcode/Snapchat-206999597.jpg',
		alt: 'SnapCode',
	},
};

const {
	saas,
	pokemon,
	calTube,
	responsive,
	social,
	favz,
	tribute,
	google,
	snapchat,
} = source;

//++Project-Card Toggle Variables */

let imageContainer = getId('imageContainer');
let projectTitleContainer = getId('projectTitleContainer');
let img = createElement('img');

//??Project-Card Toggle Function
const toggleProjectCards = (toggler, imageSrc, imageAlt, projectTitle) => {
	const click = 'click';
	const active = 'flex-active';
	toggler.addEventListener(click, function () {
		if (!cardWrapper.classList.contains(active)) {
			toggleClass(cardWrapper, active);
			appendChild(imageContainer, img);
			img.src = imageSrc;
			img.alt = imageAlt;
			textContent(projectTitleContainer, projectTitle);
		}
	});
};

toggleProjectCards(saasToggler, saas.src, saas.alt, saas.alt);
toggleProjectCards(pokemonToggler, pokemon.src, pokemon.alt, pokemon.alt);
toggleProjectCards(caltubeToggler, calTube.src, calTube.alt, calTube.alt);
toggleProjectCards(
	responsiveToggler,
	responsive.src,
	responsive.alt,
	responsive.alt
);
toggleProjectCards(socialToggler, social.src, social.alt, social.alt);
toggleProjectCards(favzToggler, favz.src, favz.alt, favz.alt);
toggleProjectCards(tributeToggler, tribute.src, tribute.alt, tribute.alt);
toggleProjectCards(googleToggler, google.src, google.alt, google.alt);

//**Close Card Wrapper function */
const wrapperExit = getId('wrapperExit');
wrapperExit.addEventListener('click', function () {
	toggleClass(cardWrapper, 'flex-active');
	img.removeAttribute('src');
	img.removeAttribute('alt');

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			toggleClass(cardWrapper, 'flex-active');
		}
	});
});

//??SnapCode Variable/Function
const snapChatToggler = getId('snapCode');

snapChatToggler.addEventListener('click', function () {
	const snapCodeContainer = createElement('div');
	const snapExit = createElement('i');
	const parent = select('body');
	addClass(snapCodeContainer, 'snapCode');
	addClass(snapCodeContainer, 'container');
	addClass(snapExit, 'fa-x');
	addClass(snapExit, 'snapCode-close');
	appendChild(parent, snapCodeContainer);
	appendChild(snapCodeContainer, snapExit);
	appendChild(snapCodeContainer, img);

	img.src = snapchat.src;
	img.alt = snapchat.alt;

	snapExit.addEventListener('click', function () {
		snapCodeContainer.style.display = 'none';
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			snapCodeContainer.style.display = 'none';
		}
	});
});

//?? Training Section function

const toggleTrainingSection = (toggler, section = trainingSection) => {
	const devslopesWrapper = getId('devslopes-wrapper');
	const click = 'click';
	const devslopesActive = 'devslopes-wrapper-active';

	toggler.addEventListener(click, function () {
		if (!section.classList.contains(sectionActive)) {
			toggleClass(trainingSection, sectionActive);
			removeClass(trainingSectionToggle, toggleDown);
			addClass(trainingSectionToggle, toggleUp);
			trainingLabel.style.display = 'none';
			trainingSectionToggle.style.color = 'var(--devslopes-logo-red)';
			toggleClass(devslopesWrapper, devslopesActive);
		} else {
			toggleClass(trainingSection, sectionActive);
			toggleClass(devslopesWrapper, devslopesActive);
			removeClass(trainingSectionToggle, toggleUp);
			addClass(trainingSectionToggle, toggleDown);
			trainingLabel.style.display = 'block';
			trainingSectionToggle.style.color = 'var(--cream-dark)';
		}
	});
};

toggleTrainingSection(trainingSectionToggle);
toggleTrainingSection(trainingLink);
