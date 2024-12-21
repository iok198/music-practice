'use client';

export enum NoteName {
    A = "A",
    AshBb = "A#/Bb",
    B = "B",
    C = "C",
    CshDb = "C#/Db",
    D = "D",
    DshEb = "D#/Eb",
    E = "E",
    F = "F",
    FshGb = "F#/Gb",
    G = "G",
    GshAb = "G#/Ab"
};

export class Note {
    name: NoteName;
    pitch: number;
    private audioContext: AudioContext = new AudioContext();
    private oscillator: OscillatorNode = this.audioContext.createOscillator();

    constructor(name: NoteName, pitch: number) {
        this.name = name;
        this.pitch = pitch;
    }

    // Pass audio context as param? Maybe just have different class deal with playing notes

    playSine() {
        this.audioContext = new AudioContext();
        this.oscillator = this.audioContext.createOscillator();

        this.oscillator.type = "sine";
        this.oscillator.frequency.setValueAtTime(this.pitch, this.audioContext.currentTime);
        this.oscillator.connect(this.audioContext.destination);
        this.oscillator.start();
    }

    stop() {
        this.oscillator.stop();
    }
};