const starDensity = 1 / 3000;
const sky = document.querySelector("#sky");
let { clientWidth, clientHeight } = sky;
const starCount = calculateStarCount(clientWidth, clientHeight, starDensity);

generateStars();

function calculateStarCount(width, height, density) {
  return width * height * density;
}

function generateStars() {
  const fragment = document.createDocumentFragment();
  const from = { x: 2, y: 2 };
  const to = { x: 98, y: 98 };
  console.log(`Generating ${starCount} stars.`);

  for (let i = 0; i < starCount; i++) {
    const star = generateStar(from, to);
    if (i % 3 === 0) {
        star.classList.add("twinkle");
    }
    fragment.appendChild(star);
  }

  sky.appendChild(fragment);
}

/**
 *
 * @param {object} from min x/y coordinate to place star
 * @param {object} to max x/y coordinate to place star
 */
function generateStar(from, to) {
  const star = document.createElement("div");
  const sizes = [
    "tiny",
    "tiny",
    "tiny",
    "tiny",
    "tiny",
    "small",
    "small",
    "small",
    "small",
    "medium",
    "medium",
    "large"
  ];
  const rndIndex = getRandomInt(0, sizes.length);

  star.classList.add("star");
  star.classList.add(sizes[rndIndex]);
  star.style.top = `${getRandomFloat(from.y, to.y).toFixed(2)}%`;
  star.style.left = `${getRandomFloat(from.x, to.x).toFixed(2)}%`;

  return star;
}

/**
 * Generates a random int.
 * @param {number} min Minimum number to generate
 * @param {number} max Maximum number to generate
 */
function getRandomInt(min, max) {
  return Math.floor(getRandomFloat(min, max));
}

/**
 * Generates a random float.
 * @param {number} min Minimum number to generate
 * @param {number} max Maximum number to generate
 * @returns {number}
 */
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
