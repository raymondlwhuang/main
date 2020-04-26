import { User } from '../_models/user';
import { Application } from '../_models/application';

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
