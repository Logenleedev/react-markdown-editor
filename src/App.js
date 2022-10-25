import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Editor from "./components/Editor/Editor";
import { data } from "./data";
import Split from "react-split";
import {nanoid} from "nanoid";
import styles from "./App.module.css";




export default function App() {
    const [note, setNote] = React.useState(data);
    const [currentNote, setCurrentNote] = React.useState();

    


    function createNewNote(){

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
              currentNote = {setUpCurrentNote}
            />
            <Editor />

        </Split>
      </div>
    )
}
