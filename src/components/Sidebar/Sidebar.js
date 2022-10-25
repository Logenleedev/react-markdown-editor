import React from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import styles from "./Sidebar.module.css";
import Button from '@mui/material/Button';

export default function Sidebar(props) {

    const noteElement =  props.note.map((item, index) => {
        return (
            <div key={item.id} className={styles["sidebar--note-box"]}>
                <h4>Note {index + 1}</h4>
                <p></p>
            </div>
        )
    })
    
    return (
        <div>
            <div className={styles["sidebar--newnote-container"]}>
                <h1>New Note</h1>
                <Button variant="contained">+</Button>
             </div>
            {noteElement}
        </div>
    )
}
