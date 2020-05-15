import { User } from '../_models/user';
import { Application } from '../_models/application';
import { BookDetail } from '../_models/book-detail';
import { Book } from '../_models/book';

export const users: User[] = [
  {
    email: 'jane@here.com',
    firstName: 'Jane',
    lastName: 'Smith',
    yearsActive: 2
  },
  {
    email: 'bob@there.com',
    firstName: 'Bob',
    lastName: 'Baker',
    yearsActive: 4
  },
  {
    email: 'amy@here.com',
    firstName: 'Amy',
    lastName: 'Bell',
    yearsActive: 1
  }
];

export const applications: Application[] = [
  { 
    id: '1',
    name: 'Calendar'
  },
  {
    id: '2',
    name: 'Email'
  },
  {
    id: '3',
    name: 'Games'
  },
  {
    id: '4',
    name: 'VS Code'
  },
  {
    id: '5',
    name: 'Terminal'
  }
];
export const books : Book[] = [
  {
    author: "Chinua Achebe",
    title: "Things Fall Apart"
  },{
    author: "Hans Christian Andersen",
    title: "Fairy tales"
  },{
    author: "Dante Alighieri",
    title: "The Divine Comedy"
  },{
    author: "Unknown",
    title: "The Epic Of Gilgamesh"
  },{
    author: "Unknown",
    title: "The Book Of Job"
  },{
    author: "Unknown",
    title: "One Thousand and One Nights"
  },{
    author: "Unknown",
    title: "Njál's Saga"
  },{
    author: "Jane Austen",
    title: "Pride and Prejudice"
  },{
    author: "Honoré de Balzac",
    title: "Le Père Goriot"
  },{
    author: "Samuel Beckett",
    title: "Molloy, Malone Dies, The Unnamable, the trilogy"
  },{
    author: "Giovanni Boccaccio",
    title: "The Decameron"
  },{
    author: "Jorge Luis Borges",
    title: "Ficciones"
  },{
    author: "Emily Brontë",
    title: "Wuthering Heights"
  },{
    author: "Albert Camus",
    title: "The Stranger"
  },{
    author: "Paul Celan",
    title: "Poems"
  },{
    author: "Louis-Ferdinand Céline",
    title: "Journey to the End of the Night"
  },{
    author: "Miguel de Cervantes",
    title: "Don Quijote De La Mancha"
  },{
    author: "Geoffrey Chaucer",
    title: "The Canterbury Tales"
  },{
    author: "Anton Chekhov",
    title: "Stories"
  },{
    author: "Joseph Conrad",
    title: "Nostromo"
  }
];


export const booksDetail : BookDetail []= [
  {
    country: "Nigeria",
    imageLink: "images/things-fall-apart.jpg",
    language: "English",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958
  },
  {
    country: "Denmark",
    imageLink: "images/fairy-tales.jpg",
    language: "Danish",
    pages: 784,
    title: "Fairy tales",
    year: 1836
  },
  {
    country: "Italy",
    imageLink: "images/the-divine-comedy.jpg",
    language: "Italian",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315
  },
  {
    country: "Sumer and Akkadian Empire",
    imageLink: "images/the-epic-of-gilgamesh.jpg",
    language: "Akkadian",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    year: -1700
  },
  {
    country: "Achaemenid Empire",
    imageLink: "images/the-book-of-job.jpg",
    language: "Hebrew",
    pages: 176,
    title: "The Book Of Job",
    year: -600
  },
  {
    country: "India/Iran/Iraq/Egypt/Tajikistan",
    imageLink: "images/one-thousand-and-one-nights.jpg",
    language: "Arabic",
    pages: 288,
    title: "One Thousand and One Nights",
    year: 1200
  },
  {
    country: "Iceland",
    imageLink: "images/njals-saga.jpg",
    language: "Old Norse",
    pages: 384,
    title: "Njál's Saga",
    year: 1350
  },
  {
    country: "United Kingdom",
    imageLink: "images/pride-and-prejudice.jpg",
    language: "English",
    pages: 226,
    title: "Pride and Prejudice",
    year: 1813
  },
  {
    country: "France",
    imageLink: "images/le-pere-goriot.jpg",
    language: "French",
    pages: 443,
    title: "Le Père Goriot",
    year: 1835
  },
  {
    country: "Republic of Ireland",
    imageLink: "images/molloy-malone-dies-the-unnamable.jpg",
    language: "French, English",
    pages: 256,
    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
    year: 1952
  },
  {
    country: "Italy",
    imageLink: "images/the-decameron.jpg",
    language: "Italian",
    pages: 1024,
    title: "The Decameron",
    year: 1351
  },
  {
    country: "Argentina",
    imageLink: "images/ficciones.jpg",
    language: "Spanish",
    pages: 224,
    title: "Ficciones",
    year: 1965
  },
  {
    country: "United Kingdom",
    imageLink: "images/wuthering-heights.jpg",
    language: "English",
    pages: 342,
    title: "Wuthering Heights",
    year: 1847
  },
  {
    country: "Algeria, French Empire",
    imageLink: "images/l-etranger.jpg",
    language: "French",
    pages: 185,
    title: "The Stranger",
    year: 1942
  },
  {
    country: "Romania, France",
    imageLink: "images/poems-paul-celan.jpg",
    language: "German",
    pages: 320,
    title: "Poems",
    year: 1952
  },
  {
    country: "France",
    imageLink: "images/voyage-au-bout-de-la-nuit.jpg",
    language: "French",
    pages: 505,
    title: "Journey to the End of the Night",
    year: 1932
  },
  {
    country: "Spain",
    imageLink: "images/don-quijote-de-la-mancha.jpg",
    language: "Spanish",
    pages: 1056,
    title: "Don Quijote De La Mancha",
    year: 1610
  },
  {
    country: "England",
    imageLink: "images/the-canterbury-tales.jpg",
    language: "English",
    pages: 544,
    title: "The Canterbury Tales",
    year: 1450
  },
  {
    country: "Russia",
    imageLink: "images/stories-of-anton-chekhov.jpg",
    language: "Russian",
    pages: 194,
    title: "Stories",
    year: 1886
  },
  {
    country: "United Kingdom",
    imageLink: "images/nostromo.jpg",
    language: "English",
    pages: 320,
    title: "Nostromo",
    year: 1904
  }
];
interface UserApplicationsDictionary {
    [userEmail: string]: Application[];
}

const getRandomApplications = (): Application[] => {
  const numberOfApplications = getRandomInt(1, applications.length);
  return Array.from(new Set(Array(numberOfApplications)
    .fill(undefined)
    .map(_ => getRandomInt(0, applications.length - 1))))
    .map(uniqueIndex => applications[uniqueIndex]);
}

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const userApplications: UserApplicationsDictionary = users.reduce((userApplicationsDictionary: UserApplicationsDictionary, user: User) => {
  userApplicationsDictionary[user.email] = getRandomApplications();
  return userApplicationsDictionary;
}, {});
