// const coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };

// // for (const property in coolestTvShow){
// //   console.log(property)
// // };
// console.log(Object.keys(coolestTvShow));

const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nivel: ${student[arrayOfSkills[index]]}`);
  }
}

listSkills(student1);


const band = {
  name: 'Blind Guardian',
  formedIn: 1986,
  lastAlbum: 'Beyond the Red Mirror',
};

const info = {
  genre: 'Power Metal',
  lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
};

console.log(Object.assign(band, info))
