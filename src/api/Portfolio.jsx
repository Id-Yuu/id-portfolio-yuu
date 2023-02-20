import portfolios from "../assets/img/portfolio/01_portfolio.jpeg";
import quote from "../assets/img/portfolio/quote_.png";
import idpersonal from "../assets/img/portfolio/02_idpersonal.jpeg";

export const Portfolio_data = [
  {
    id: 1,
    pImg: `${portfolios}`,
    pTitle: "Portfolio Web",
    pLink: "https://github.com",
    pPrev: "https://portfolio-yuu.web.app/",
    pLang: "HTML5, JS, SCSS, React",
  },
  {
    id: 2,
    pImg: `${idpersonal}`,
    pTitle: "Id Personal Yuu",
    pLink: "https://github.com",
    pPrev: "https://id-personal-yuu.web.app/",
    pLang: "TailwindCSS, DaisyUI, Firebase, React",
  },
  {
    id: 3,
    pImg: "https://avatars.githubusercontent.com/u/122996864?v=4",
    pTitle: "PPDB Online - Progressive web apps",
    pLink: "https://github.com",
    pPrev: "http://ppdb-yub.web.app/",
    pLang: "HTML5, JS, TailwindCSS, DaisyUI, Firebase, React",
  },
  {
    id: 4,
    pImg: `${quote}`,
    pTitle: "Random Quote",
    pLink: "https://github.com",
    pPrev: "https://random-quote-f.web.app/",
    pLang: "HTML5, JS, CSS, Firebase, React",
  },
];
