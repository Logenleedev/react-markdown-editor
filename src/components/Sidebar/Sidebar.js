import React from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import styles from "./Sidebar.module.css";
import Button from '@mui/material/Button';

export default function Sidebar(props) {

    // console.log(props.currentNote)

    const noteElement =  props.note.map((item, index) => {
        return (
           
            <div key={item.id} className={styles[`${item.id == props.currentNote.id ? "sidebar--selectedNote-box" : "sidebar--note-box"}`]} onClick={()=>props.setCurrentNoteID(item.id)}>
                <h4>Note {index + 1}</h4>
                <p>{item.body.slice(0, 10) + "..."}</p>
            </div>
        )
    })
    
    return (
        <div>
            <div className={styles["sidebar--newnote-container"]}>
                <h1>New Note</h1>
                <Button variant="contained" onClick={props.createNewNote} className={styles["sidebar--newnote-button"]}>+</Button>
             </div>
            {noteElement}
        </div>
    )
}
