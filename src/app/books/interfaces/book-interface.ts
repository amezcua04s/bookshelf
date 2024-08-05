export interface BookInterface {
  id:         string;
  title:      string;
  theme:      Theme;
  author:     string;
  release:    string;
  owned:      boolean;
  readed:     boolean;
  img?:   string;
}

export enum Theme {
  Distopia  = "Distopía",
  Fantasia  = "Fantasía",
  Filosofia = "Filosofía",

  notSpecified = 'Otro',
}
