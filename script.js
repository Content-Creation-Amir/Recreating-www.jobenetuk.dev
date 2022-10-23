const cursorTrail = document.getElementById("cursorTrail"),
  trail1 = document.getElementById("trail1"),
  trail2 = document.getElementById("trail2"),
  trail3 = document.getElementById("trail3"),
  root = document.documentElement;

/**
 * window.onmousemove to listen to whenever the cursor moves and its position/coordinates updates
 * On Mobile, this event is triggered whenever a user taps on the screen
 */
window.onmousemove = (e) => {
  // Based on the current coordinates of the cursor, calculate the new position the trail has to move to.
  // offset is used so that the trail remains at the middle of the cursor
  const xPos = e.clientX - cursorTrail.offsetWidth / 2,
    yPos = e.clientY - cursorTrail.offsetHeight / 2;

  // Animate transform with keyframe
  cursorTrail.animate(
    { transform: `translate(${xPos}px, ${yPos}px)` },
    {
      duration: 1000, // Duration of # will create a delay so that the trail will slightly lag behind
      fill: "forwards", // Ensures that the trail does not go back to its original position of (0,0)
    }
  );
};

/**
 * Executes of a function at specified intervals, in our case every 500ms
 * The function called will modify the color, border-radius and position of an element
 */
setInterval(() => {
  // Function that returns a random rgb color as a string
  function generateRandomColor() {
    const r = _.random(0, 255),
      g = _.random(0, 255),
      b = _.random(0, 255);
    return "rgb(" + [r, g, b].join(",") + ")";
  }

  // Function that returns a random border radius as a string
  function generateRandomBorderRadius() {
    const p1 = _.random(25, 75),
      p2 = _.random(25, 75),
      p3 = _.random(25, 75),
      p4 = _.random(25, 75),
      p11 = 100 - p1,
      p21 = 100 - p2,
      p31 = 100 - p3,
      p41 = 100 - p4;
    return `${p1}% ${p11}% ${p21}% ${p2}% / ${p3}% ${p4}% ${p41}% ${p31}%`;
  }

  // Function that returns a random top and left value as an object with the keys top and left
  function generateRandomOffset() {
    const top = _.random(-200, 200),
      left = _.random(-200, 200);
    return { top: `${top}px`, left: `${left}px` };
  }

  // Iterate through each trail element to modify its styling and add animations
  [trail1, trail2, trail3].forEach((ele) => {
    ele.animate(
      {
        background: generateRandomColor(), // Update the color
        borderRadius: generateRandomBorderRadius(), // Update the border radius
        top: generateRandomOffset().top, // Update the top offset
        left: generateRandomOffset().left, // Update the left offset
      },
      {
        duration: 3000, // Time taken for the styles to transition
        fill: "forwards", // Ensures that the trail does not go back to its original style
      }
    );
  });
}, 500);
