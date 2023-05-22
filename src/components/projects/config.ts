import { getSkill, Skill, skills } from "../skills/config"
import SimpleChat from "./../../images/simple-chat.png";
import Portfolio from "./../../images/portfolio.png";
import Avatar from "./../../images/hardhat-logo.png";
import Crypto from "./../../images/crypto-tracker.png";
import Diamond from "./../../images/diamond-hands.png";
import Coin from "./../../images/coin-flip.png";
import Mobile from "./../../images/wallet.png";
import Whiteboard from "./../../images/whiteboard-app-preview.png";
import Horizen from "./../../images/horizen.png";
import Godaddy from "./../../images/godaddy.png";
import Writeup from "./../../images/write.png";
export type Project = {
  name: string,
  description: string,
  image: any,
  url: string,
  github: string,
  technologies: Skill[],
}

export const projects: Project[] = [
  {
    name: "Portfolio",
    description: "Developer portfolio showing my blockchain projects, skillset and certificates.",
    image: Portfolio,
    url: "https://siuming-intro.web.app/",
    github: "https://github.com/audreybass140/myportfoliosite",
    technologies: getSkill(["react", "typescript", "html", "css", "git"])
  },
  {
    name: "Horizen",
    description: "The Zero-Knowledge Enabled Network of Blockchains",
    image: Horizen,
    url: "https://www.horizen.io/",
    github: "",
    technologies: getSkill(["react", "typescript", "nodejs", "socket.io", "moralis", "solidity"])
  },
  {
    name: "Godaddy",
    description: "Website dedicated to promoting environmentally-friendly travel",
    image: Godaddy,
    url: "https://www.afternic.com/forsale/greentravelguide.com",
    github: "",
    technologies: getSkill(["html", "css", "javascript", "next.js"])
  },
  {
    name: "Writemeup",
    description: "Website offers services such as copywriting, content writing, proofreading, and editing",
    image: Writeup,
    url: "http://writemeup.com/",
    github: "",
    technologies: getSkill(["react", "next.js", "html", "typescript"])
  },
]