const ACCENTED_VOWELS = ['á', 'é', 'í', 'ó', 'ú'];
const NON_ACCENTED_VOWELS = ['a', 'e', 'i', 'o', 'u', 'ü'];
const ALL_VOWELS = [...ACCENTED_VOWELS, ...NON_ACCENTED_VOWELS];
const WEAK_VOWELS = ['i', 'u', 'ü'];

function isVowel(char: string) {
  return ALL_VOWELS.includes(char);
}

function isWeakVowel(char: string) {
  return WEAK_VOWELS.includes(char);
}

function isAccentedVowel(char: string) {
  return ACCENTED_VOWELS.includes(char);
}

function WordToSyllables(word: string): string[] {
  const syllables = [];
  const chars = word.split('');
  return syllables;
}
