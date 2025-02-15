const baseURL = "demo.magic-portfolio.com";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

const style = {
  // theme: "dark", // dark | light
  // neutral: "gray", // sand | gray | slate
  // brand: "emerald", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  // accent: "orange", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  // solid: "contrast", // color | contrast
  // solidStyle: "flat", // flat | plastic
  // border: "playful", // rounded | playful | conservative
  // surface: "translucent", // filled | translucent
  // transition: "all", // all | micro | macro

  // chatgpt
//   theme: "dark", // Dark mode gives a premium, sleek look
// neutral: "slate", // Slate offers a balanced, professional gray tone
// brand: "cyan", // Cyan adds a fresh, tech-forward touch
// accent: "aqua", // Aqua complements cyan, keeping it vibrant yet subtle
// solid: "contrast", // Ensures elements stand out in dark mode
// solidStyle: "flat", // A flat style gives a modern, minimalistic feel
// border: "rounded", // Rounded edges make it feel smooth and polished
// surface: "translucent", // Translucent backgrounds add depth and elegance
// transition: "all", // Smooth transitions for all elements enhance UX

// gemini
"theme": "dark", // dark | light
"neutral": "slate", // sand | gray | slate - A dark, sophisticated neutral
"brand": "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan -  A vibrant, professional brand color
"accent": "orange", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan - A complementary accent to emerald
"solid": "contrast", // color | contrast - Ensures good readability against the dark background
"solidStyle": "flat", // flat | plastic - A clean, modern look
"border": "playful", // rounded | playful | conservative -  Softens the edges for a more approachable feel
"surface": "translucent", // filled | translucent - Adds depth and a sense of layering
"transition": "all" // all | micro | macro - Smooth transitions for a polished experience

};

const effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 75,
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: 2,
    color: "brand-on-background-weak",
    opacity: 20,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
};

const display = {
  location: true,
  time: true,
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: false,
      x: 100,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      x: 100,
      y: 50,
      width: 100,
      height: 100,
      tilt: -45,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
      opacity: 100,
    },
    dots: {
      display: false,
      size: 24,
      color: "brand-on-background-weak",
      opacity: 100,
    },
    lines: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
    grid: {
      display: true,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
  },
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };
