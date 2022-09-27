import React from "react"
import ReactDOM from "react-dom/client"

// import BoxApp from "./BoxApp"
// import AddItem from "./addItem"
// import Count from "./count"
// import ContectCard from "./ContactCard"
// import ContactCardHandleClick from "./ContactCard-Click"
// import Form from "./Form"
// import FormBasic from "./FormBasic"
// import FetchData from "./fetch-data"
// import WindowTrackerApp from "./windowTrackerApp"
import MemeApp from "./memeApp"

//import './boxs.css';
//import './additem.css';
//import './count.css';
//import './contactcard.css';
//import './formbasic.css';
//import './wintracker.css';
import './meme.css';

//ReactDOM.render(<App />, document.getElementById("root")) //version 17
//ReactDOM.createRoot(document.getElementById("root")).render(<App />) //version 18

const root = ReactDOM.createRoot(document.getElementById("root"))

//root.render(<BoxApp />)
//root.render(<AddItem />)
//root.render(<Count />)
//root.render(<ContectCard />)
//root.render(<ContactCardHandleClick />)
//root.render(<FormBasic />)
//root.render(<Form />)
//root.render(<FetchData />)
//root.render(<WindowTrackerApp />)

root.render(<MemeApp />)  //Meme Generator


