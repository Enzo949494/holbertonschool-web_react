module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|js)x?$': 'ts-jest', // Ajouter 'js' pour transformer aussi les fichiers JavaScript
  },
  // Si nécessaire, vous pouvez aussi configurer le traitement des modules ES
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};