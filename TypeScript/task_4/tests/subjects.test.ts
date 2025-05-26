// Importer le namespace depuis le fichier index
import { Subjects } from '../js/subjects/index';

describe('Subject namespace tests', () => {
  it('Should have the necessary classes', () => {
    // Vérifier que le namespace et ses classes existent
    expect(Subjects).toBeDefined();
    expect(Subjects.Subject).toBeDefined();
    expect(Subjects.Cpp).toBeDefined();
    expect(Subjects.React).toBeDefined();
    expect(Subjects.Java).toBeDefined();
  });

  // Autres tests...
});