// used function from book website's editor: characterScript

function dominantDirection(text) {
    let retval = "notFound";
    let counts = {ltr: 0, rtl: 0, ttb: 0};
    for (const char of text) {
      let direction = characterScript(char.codePointAt(0))?.direction;
      if (direction) {
        counts[direction] += 1;
      }
    }
    let maxCount = 0;
    for (const [key, value] of Object.entries(counts)) {
      if (value > maxCount) {
        retval = key;
        maxCount = value;
      }
    }
    return retval;
  }
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl