"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Note, NoteName } from "./music/note"

export default function Home() {

  const note = new Note(NoteName.A, 440);
  console.log(note);

  return (
    <div className={styles.page}>
      <button onClick={note.playSine}>Play {note.name}</button>
      <button onClick={() => { console.log(note); }}>Stop {note.name}</button>
    </div>
  );
}
