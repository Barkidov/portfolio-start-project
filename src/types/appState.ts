import { MenuBar } from "./menuBar";
import { Skills } from "./skills";
import { Socials } from "./socials";
import { Works } from "./works";

export interface AppState {
    menubar: MenuBar[],
    skills: Skills[],
    works: Works[],
    socials: Socials[],
  }