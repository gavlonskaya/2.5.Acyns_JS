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
async function fetchHandler() {
  try {
    const response = await fetch(
      'https://anapioficeandfire.com/api/characters/583',
      {
        method: 'GET',
      }
    );
    const data = await response.json();
    name.innerHTML = data.name;
    born.innerHTML = data.born;
    died.innerHTML = data.died;
    culture.innerHTML = data.culture;
    aliases.innerHTML = data.aliases;
    titles.innerHTML = data.titles;
    actor.innerHTML = data.playedBy;
    photo.src =
      'https://cdn.europosters.eu/image/750/posters/game-of-thrones-jon-snow-i30603.jpg';
  } catch (error) {
    console.log(error);
  }
}
async function fetchHandler2() {
  try {
    const response2 = await fetch(
      'https://anapioficeandfire.com/api/characters/271',
      {
        method: 'GET',
      }
    );
    const data2 = await response2.json();
    name.innerHTML = data2.name;
    born.innerHTML = data2.born;
    died.innerHTML = data2.died;
    culture.innerHTML = data2.culture;
    aliases.innerHTML = data2.aliases;
    titles.innerHTML = data2.titles;
    actor.innerHTML = data2.playedBy;
    photo.src =
      'https://i.pinimg.com/564x/da/ac/64/daac64e573dd9e863b814d9e95f8baad.jpg';
  } catch (error) {
    console.log(error);
  }
}
 async function fetchHandler3() {
   try {
     const response3 = await fetch(
       'https://anapioficeandfire.com/api/characters/1052',
       {
         method: 'GET',
       }
     );
     const data3 = await response3.json();
     name.innerHTML = data3.name;
     born.innerHTML = data3.born;
     died.innerHTML = data3.died;
     culture.innerHTML = data3.culture;
     aliases.innerHTML = data3.aliases;
     titles.innerHTML = data3.titles;
     actor.innerHTML = data3.playedBy;
     photo.src =
            'https://i.pinimg.com/564x/c7/35/27/c73527e07d04bab35876efba489128b0.jpg';
   } catch (error) {
          console.log(error);
   }
 }
button.addEventListener('click', () => {
  fetchHandler();
  fetchHandler2();
  fetchHandler3();
});
