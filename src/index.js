import './styles.css';
import menu from './menu.json';
import makeMenuCards from './menu.hbs';

const jsMenu = document.querySelector('.js-menu');
const markup = makeMenuCards(menu);
jsMenu.innerHTML = markup;

const themeSwitch = document.querySelector('.theme-switch__toggle');
const body = document.body;

themeSwitch.addEventListener('change', themeSwitchToggle);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

function themeSwitchToggle(event) {
  if (event.target.checked) {
    replaceTheme(LIGHT, DARK);
  } else {
    replaceTheme(DARK, LIGHT);
  }
}

function replaceTheme(oldTheme, newTheme) {
  document.body.classList.add(newTheme);
  document.body.classList.remove(oldTheme);
  localStorage.setItem('theme', newTheme);
}

if (localStorage.getItem('theme') === DARK) {
  replaceTheme(LIGHT, DARK);
  themeSwitch.checked = true;
}
