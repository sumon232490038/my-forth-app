/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import singars from "./Singer";
import Singars from "./Singer";
import Books from "./Book";

function App() {
  const actors = ["rony", "saful", "rasel", "monir"];

  const singars = [
    { name1: "shakil", age: 34 },
    { name1: "shakil", age: 24 },
    { name1: "sany", age: 23 },
    { name1: "abujor", age: 23 },
    { name1: "kamrul", age: 26 },
  ];
  const bookstore = [
    { names: "physics", age: 34 },
    { names: "biology", age: 24 },
    { names: "chemisty", age: 23 },
    { names: "math", age: 23 },
    { names: "programing", age: 26 },
  ];
  return (
    <>
      <Books books={bookstore}></Books>
      <Singars></Singars>
      {singars.map((singar) => (
        <Singars singar={singar}></Singars>
      ))}

      <Actor name={"sumon"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      <Todo sure="sure" isture={false}></Todo>
      <Todo sure="sure" isture={true}></Todo>
      <Todo sure="sure" isture={true}></Todo>
      <Todo sure="sure" isture={true}></Todo>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Person name="react" id="45"></Person>
      <Person name="learn" id="67"></Person>
      <Student glass="1st" roll={34}></Student>
      <Student glass="2nd" roll={4}></Student>
      <Student glass="3nd" roll={43}></Student>
      <Student glass="7th" roll={12}></Student>
    </>
  );
}

function Person({ name, id = 2 }) {
  return (
    <h1>
      {id}bangladesh name:{name}
    </h1>
  );
}
function Student({ glass, roll }) {
  return (
    <div className="student">
      <h1>student details ltd</h1>
      <h2>class:{glass}</h2>
      <h2>Roll:{roll}</h2>
    </div>
  );
}
export default App;
