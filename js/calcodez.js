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
const [userIcon, projectIcon, mediumIcon, trainingIcon, contactIcon] =
	sideBarIcons;

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

const socialIcons = getClass('social-icons');

const toggleSocialIcons = (toggler) => {
	const click = 'click';
	const activeIcons = 'social-icons-active';

	toggler.addEventListener(click, function () {
		for (let i of socialIcons) {
			if (!i.classList.contains(activeIcons)) {
				toggleClass(i, activeIcons);
			} else {
				toggleClass(i, activeIcons);
			}
		}
	});
};

toggleSocialIcons(contactLink);
toggleSocialIcons(contactIcon);

//??Contact Toggle Function

//??About toggle Function

const calImg = {
	calvin1: { src: './assets/photos/Calvin/CalvinC_One.jpg', alt: 'Calvin One' },
	calvin2: {
		src: './assets/photos/Calvin/Calvin_Three.jpg',
		alt: 'Calvin Two',
		text: `I specialize in designing user-friendly websites that are visually appealing and optimized for
performance.
My approach
to web design is to blend creativity with technical expertise, ensuring that each site I create is
unique,
engaging, and
effective. Whether you need a brand-new website or a redesign of your existing one, I am dedicated to
delivering
high-quality results that align with your vision and goals.Currently, I am studying Web Development at
DevSlopes Academy, where I am honing my skills to offer
professional website
design services. My goal is to help businesses and individuals create stunning, functional websites that
not
only meet
their needs but also captivate their audiences.`,
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
	const profileImage = getId('profileImage');
	const aboutText = getId('about-text');

	toggler.addEventListener(click, function () {
		if (!container1.classList.contains(inactive)) {
			toggleClass(container1, inactive);
			toggleClass(container2, active);
			textContent(aboutText, calvin2.text);
			console.log(aboutText);

			profileImage.src = calvin2.src;
			profileImage.alt = calvin2.alt;
		} else {
			toggleClass(container1, inactive);
			toggleClass(container2, active);
			profileImage.src = calvin1.src;
			profileImage.alt = calvin1.alt;
		}
	});
};

aboutContainerToggle(userIcon);
aboutContainerToggle(aboutLink);

//??SnapCode Variable/Function
const snapChatToggler = getId('snapCode');
snapChatToggler.addEventListener('click', function () {
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
