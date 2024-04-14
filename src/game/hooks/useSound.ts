import { useCallback, useEffect, useMemo } from "react";
import { useGameStore } from "../store.ts";


export const useSound = (soundPath: string, voulme: number = 1) => {
    const { isMuted } = useGameStore()

    const sound = useMemo(() => {
       const audio = new Audio(soundPath)
        audio.volume = voulme;
        return audio;

}, [soundPath, voulme]);

    const playSound = useCallback(() => {
        sound.play()
    }, [sound])

    useEffect(() => {
       sound.muted = isMuted;
    }, [isMuted, sound])

    return playSound;

}