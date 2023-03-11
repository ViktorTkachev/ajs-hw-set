import Team from '../app';

const heroes = new Team();

test('returns an empty array when there are no members in the team', () => {
  const members = heroes.toArray();
  expect(members).toEqual([]);
});

test('adds a character to the team', () => {
  heroes.add('Zombie');
  const hero = heroes.toArray();
  expect(hero).toEqual(['Zombie']);
});

test('throws an error when attempting to add a duplicate character', () => {
  expect(() => {
    heroes.add('Zombie');
  }).toThrowError('Duplicate character');
});

test('adds multiple characters to the team and add a duplicate character', () => {
  heroes.addAll('Zombie', 'Undead', 'Bowerman', 'Magician', 'Swordsman', 'Daemon');
  const members = heroes.toArray();
  expect(members).toEqual(['Zombie', 'Undead', 'Bowerman', 'Magician', 'Swordsman', 'Daemon']);
});
