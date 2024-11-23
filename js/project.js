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
			toggleClass(container, activeContact);
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

//**Project Disaply Var and Functions */
const projects = {
	saas: {
		src: './assets/project_card_images/SaaS.png',
		alt: 'SaaS',
		description: `A fully featured website landing page. This was my first project that tested all my skills in HTML and
            CSS. I learned
            to apply elements using advanced HTML, CSS positioning, forms, inputs, and sizing to achieve a
            professional-looking
            website.`,
		href: '#',
	},
	pokemon: {
		src: './assets/project_card_images/Pokemon.png',
		alt: 'Pokemon Card Collection',
		description: `A Pokémon card collection project. This project allows users to collect and release Pokémon by adding and
              removing
              their favorite cards. The favorites section displays the total number of cards currently in their
              collection. The
              project also tallies common skills among the displayed Pokémon.`,
		href: '#',
	},
	calTube: {
		src: './assets/project_card_images/Caltube.png',
		alt: 'CalTube',
		description: `Youtube inspired clone featuring a selection of my favorite artists and videos. This project showcases
            female, male,
            and group artists, along with artist pages that include a sub collection of videos from similar artists.`,
		href: '#',
	},
	responsive: {
		src: './assets/project_card_images/Responsive_website.png',
		alt: 'Responsive Website',
		description: `My first mobile-responsive project. I learned to style website elements to make them automatically
              responsive for all
              device types. <br><br> NOTE: All projects are responsive, and this project marked the beginning of
              developing those skills."
              the
              project that started the learning of the skills to do so.`,
		href: '#',
	},

	login: {
		src: './assets/project_card_images/Social_Media.png',
		alt: 'Social Media Logins',
		description: `A social media login page clone project. I successfully created login pages for various platforms,
              optimized for
              desktop, tablet, and mobile. The displayed login page adapts based on the device used, showcasing
              responsive design
              skills across different screen sizes.`,
		href: `#`,
	},

	favz: {
		src: './assets/project_card_images/My_Favz.png',
		alt: 'My Favz',
		description: `A beginner project displaying a list of things I favor and don't favor, with each topic providing 3 key
              reasons for its
              inclusion. This project helped me learn HTML tables displayed on the homepage. User-interactive: click the
              topics to
              jump to the pages.`,
		href: '#',
	},
	tribute: {
		src: './assets/project_card_images/Aaliyah_tribute.png',
		alt: 'Aaliyah Tribute Page',
		description: `A tribute page dedicated to the late Aaliyah. This project features a detailed biography, a curated
              collection of her
              music and videos, and a page highlighting the movies she starred in. Each section pays homage to her
              impactful career
              and lasting legacy in entertainment.`,
		href: '#',
	},
	google: {
		src: './assets/project_card_images/Google.png',
		alt: 'Google Home Page',
		description: `A simple Google homepage clone built by studying an example, with functional links. The project involved
              replicating the
              layout, styling, and search bar, ensuring an accurate visual match. It’s a straightforward demonstration
              of
              understanding basic HTML, CSS, and link functionality.`,
		href: '#',
	},

	default: {
		src: './assets/logos/company/CalCodez2.png',
		alt: 'Cal Codez',
		description: `Select Project From Project Panel`,
	},
};
