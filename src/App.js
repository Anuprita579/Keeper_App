
import React, {useState} from "react";
import "./styles.css";
import Header from "./Header";
import Notes from "./Notes";
import Footer from "./Footer";
import CreateArea from "./CreateArea"
import {note} from "./note"



export default function App() {
  const [note,setNote]= useState([])
  function addNote(newNote){
    setNote(prevNote=>{
      return [...prevNote, newNote]
    })
  
  }
  function deleteNote(id){
    setNote(prevNote=>{
      return prevNote.filter((noteItem, index)=>{
        return index !== id
      })
    })

  }
  return (
    <div>
      <Header />
      <CreateArea onAdd ={addNote}/>
      {note.map((noteItem, index)=>{
        return <Notes key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}