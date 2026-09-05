export function seededRandom(str) {
  let h = 1779033703 ^ str.length;
  for(let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = h << 13 | h >>> 19;
  }
  return function() {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

export function shuffle(array, randomFunc) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(randomFunc() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

export function pickRandom(array, num, seedStr) {
  const randomFunc = seededRandom(seedStr);
  const shuffled = shuffle([...array], randomFunc);
  return shuffled.slice(0, num);
}
