import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Editor from "./components/Editor/Editor";
import { data } from "./data";
import Split from "react-split";
import {nanoid} from "nanoid";
import styles from "./App.module.css";




export default function App() {
    const [note, setNote] = React.useState(data);
    const [currentNoteID, setCurrentNoteID] = React.useState();




    function createNewNote(){

    }

    function findCurrentNote() {
      
      return note.find(note => {
          return note.id == currentNoteID
      }) || note[0]


  }

    function setUpCurrentNote(){


    }
    return (
        
      <div>
        <Split
            sizes={[35, 65]}
            className={styles["split_container"]}
            direction="horizontal"
            
        >
            <Sidebar 
              note={note}
              createNewNote= {createNewNote}
              setCurrentNoteID={setCurrentNoteID}
            />

            <Editor 
              currentNote={findCurrentNote()}

            />

        </Split>
      </div>
    )
}
