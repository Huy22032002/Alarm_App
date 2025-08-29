export type SoundItem = {
  name: string;
  file: any; // require(...) hoặc import trực tiếp
  category?: string;
};

export const sounds: SoundItem[] = [
  {
    name: "Default",
    file: require("../assets/sounds/alarm1.mp3"),
  },
  {
    name: "Alarm Sound 2",
    file: require("../assets/sounds/alarm2.mp3"),
  },
];
