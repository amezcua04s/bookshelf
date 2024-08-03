export interface BookInterface {
  id:         string;
  theme:      Theme;
  author:     string;
  release:    string;
  owned:      boolean;
  readed:     boolean;
  alt_img?:   string;
}

export enum Theme {
  Distopía  = "Distopía",
  Fantasía  = "Fantasía",
  Filosofía = "Filosofía",
}
