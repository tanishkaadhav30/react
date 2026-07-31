import { useState } from "react";
import "./app.css";
import Navbar from "./components/Navbar";

function App() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");

  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [react, setReact] = useState(false);

  const [course, setCourse] = useState("React");
  const [address, setAddress] = useState("");

  return (
    <>
      <Navbar />

      <div className="container">

      <h1>Student Registration Form</h1>

      <h3>Full Name : {fullName}</h3>
      <input
        type="text"
        placeholder="Enter Full Name"
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />

      <br /><br />

      <h3>Email : {email}</h3>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <br /><br />

      <h3>Gender : {gender}</h3>

      <input
        type="radio"
        name="gender"
        value="Male"
        checked={gender === "Male"}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
      Male

      <input
        type="radio"
        name="gender"
        value="Female"
        checked={gender === "Female"}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
      Female

      <br /><br />

      <h3>Skills</h3>

      <input
        type="checkbox"
        checked={html}
        onChange={(e) => {
          setHtml(e.target.checked);
        }}
      />
      HTML

      <br />

      <input
        type="checkbox"
        checked={css}
        onChange={(e) => {
          setCss(e.target.checked);
        }}
      />
      CSS

      <br />

      <input
        type="checkbox"
        checked={react}
        onChange={(e) => {
          setReact(e.target.checked);
        }}
      />
      React

      <br /><br />

      <h3>Course : {course}</h3>

      <select
        value={course}
        onChange={(e) => {
          setCourse(e.target.value);
        }}
      >
        <option>React</option>
        <option>Java</option>
        <option>Python</option>
        <option>MERN</option>
      </select>

      <br /><br />

      <h3>Address</h3>

      <textarea
        rows="4"
        cols="30"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      ></textarea>

      <br /><br />

      <button
        onClick={() => {
          alert("Form Submitted Successfully");
        }}
      >
        Submit
      </button>

      </div>
    </>
  );
}

export default App;