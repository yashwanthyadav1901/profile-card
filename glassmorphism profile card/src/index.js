import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const Data = [
  {
    job: "Film Director, Producer",
    image: "images/yashwanth.jpg",
    pay: "14",
    name: "Jeffrey Abrams, 51",
    location: "New York, United States",
    about: "Abrams was born in New York City and raised in Los Angeles",
    status: "online",
  },
  {
    job: "Actor, Film Director",
    image: "images/random.jpg",
    pay: "9",
    name: "Baltasar Kormakur,52",
    location: "Reykjavik, Iceland",
    about: "Iceland actor, theater and film director, and film producer",
    status: "17 minutes ago",
  },
];

function App() {
  return <Container />;
}

function Container() {
  return (
    <div className="container">
      {Data.map((person) => (
        <ProfileCard obj={person} />
      ))}
    </div>
  );
}

function ProfileCard(props) {
  return (
    <div className="card">
      <img src={props.obj.image} alt="yashwanth"></img>
      <div className="content">
        <div>
          <h1>{props.obj.job}</h1>
          <h3>${props.obj.pay}/hour</h3>
        </div>
        <div>
          <h1>{props.obj.name}</h1>
          <h3>{props.obj.location}</h3>
          <p>{props.obj.about}</p>
        </div>
      </div>

      <div className="buttons">
        <button className="btn">View CV</button>
        <button className="btn">Make Offer</button>

        <p>{props.obj.status}</p>
      </div>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
