import type {IGame} from "@/models/IGame";

export const games: IGame[] = [
  {
    id: "1",
    title: "Slug Wars",
    subtitle: "Slug Wars multiplayer game",
    description: "something",
    users: 10,
    createdAt: "2 Weeks",
    engine: "Unity",
    src: "/portfolio/gifs/slug.gif",
  },
  {
    id: "2",
    title: "Game 2",
    subtitle: "Subtitle 2",
    description: "Description for Game 2",
    users: 500,
    createdAt: "3 Weeks",
    engine: "Unreal Engine",
    src: "/portfolio/gifs/mario.gif",
  },
  {
    id: "3",
    title: "Game 3",
    subtitle: "Subtitle 3",
    description: "Description for Game 3",
    users: 500,
    createdAt: "3 Weeks",
    engine: "Unreal Engine",
    src: "/portfolio/gifs/mario.gif",
  },

];