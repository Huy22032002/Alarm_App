import { Audio } from "expo-av";
import { Vibration } from "react-native";
import { SoundItem, sounds } from "../constant/sounds";

let sound: Audio.Sound | null = null;
let fadeInterval: ReturnType<typeof setInterval> | null = null;
let currentSoundName: string | null = null;

export async function playAlarm(soundItem: SoundItem, fadeInDuration = 7000) {
  try {
    sound = new Audio.Sound();
    //load local sound
    await sound.loadAsync(soundItem.file);
    await sound.setIsLoopingAsync(true);
    await sound.setVolumeAsync(0.2); //start with 20% volumn
    await sound.playAsync();

    currentSoundName = soundItem.name;

    //fade in: tang 20% -> 100%
    let volume = 0.2;
    const step = 0.05;
    const interval = fadeInDuration / ((1 - 0.2) / step);

    fadeInterval = setInterval(async () => {
      if (!sound) return;
      volume = Math.min(1, volume + step);
      await sound.setVolumeAsync(volume);
      if (volume >= 1 && fadeInterval) clearInterval(fadeInterval);
    }, interval);

    // Vibration lặp
    Vibration.vibrate([500, 500], true);
  } catch (err) {
    console.log("Error playing alarm:", err);
  }
}

export async function stopAlarm() {
  if (fadeInterval) clearInterval(fadeInterval);

  if (sound) {
    await sound.stopAsync();
    await sound.unloadAsync();
    sound = null;
  }
  Vibration.cancel();
}
// Snooze: dừng + lên lịch lại (demo: gọi lại sau X giây)
export function snooze(soundItem: SoundItem, seconds = 10) {
  stopAlarm();
  setTimeout(() => {
    playAlarm(soundItem);
  }, seconds * 1000);
}

export function getCurrentSoundName() {
  return currentSoundName;
}
