import './style.css';
const button: HTMLButtonElement = document.querySelector('.next');
const photo: HTMLImageElement = document.querySelector('.photo');
const name: HTMLDivElement = document.querySelector('.name');
const born: HTMLDivElement = document.querySelector('.born');
const died: HTMLDivElement = document.querySelector('.died');
const culture: HTMLDivElement = document.querySelector('.culture');
const aliases: HTMLDivElement = document.querySelector('.aliases');
const titles: HTMLDivElement = document.querySelector('.titles');
const actor: HTMLDivElement = document.querySelector('.actor');

var array_person: string[][] = [
  [
    'https://anapioficeandfire.com/api/characters/583',
    'https://anapioficeandfire.com/api/characters/271',
    'https://anapioficeandfire.com/api/characters/1052',
    'https://anapioficeandfire.com/api/characters/238',
    'https://www.anapioficeandfire.com/api/characters/529',
    'https://anapioficeandfire.com/api/characters/957',
  ],
  [
    'https://cdn.europosters.eu/image/750/posters/game-of-thrones-jon-snow-i30603.jpg',
    'https://i.pinimg.com/564x/da/ac/64/daac64e573dd9e863b814d9e95f8baad.jpg',
    'https://i.pinimg.com/564x/c7/35/27/c73527e07d04bab35876efba489128b0.jpg',
    'https://cellularnews.com/wp-content/uploads/2020/05/62-game-of-thrones-cersei-lannister-on-the-iron-throne-325x485.jpg',
    'https://i.pinimg.com/originals/2c/68/53/2c6853841cbad46a1d073fc672c954fd.jpg',
    'https://i.pinimg.com/originals/b2/da/e7/b2dae7d4fcc335b5373578ee312d0ff1.jpg',
  ],
];

async function fetchHandler(url, photoUrl) {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();
    name.innerHTML = data.name;
    born.innerHTML = data.born;
    died.innerHTML = data.died;
    culture.innerHTML = data.culture;
    aliases.innerHTML = data.aliases;
    titles.innerHTML = data.titles;
    actor.innerHTML = data.playedBy;
    photo.src = photoUrl;
  } catch (error) {
    console.log(error);
  }
}

var i = 0;

button.addEventListener('click', () => {
  console.log('size' + array_person[0].length);
  if (i > array_person[0].length) {
    i = 0;
  }
  fetchHandler(array_person[0][i], array_person[1][i]);
  i = i + 1;
});
