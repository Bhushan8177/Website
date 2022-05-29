import React from "react";
import classes from "./TeamPage.module.css";
import Card from "./Card";
import aj from "../assets/aj.jpeg";

const DATA = [
  {
    name: "spider",
    position: "nyu",
    class: "comp",
    photo: aj,
  },
  {
    name: "spider",
    position: "nyu",
    class: "comp",
    photo: aj,
  },
  {
    name: "spider",
    position: "nyu",
    class: "comp",
    photo: aj,
  },
];

const TeamPage = () => {
  return (
    <>
      <div className={classes.team_section}>
        <h1 className={classes.heading}>MEET OUR TEAM</h1>
        <p className={classes.para}>
          Our vision for the next two years is to create a community that will
          not only assist students in obtaining better placements and assisting
          them in their path, but will also give confidence in them to achieve
          future milestones.
        </p>
        <div className={classes.team}>
          {DATA.map((m, i) => (
            <Card m={m} key={i} />
          ))}
        </div>
        <h1 className={classes.heading2}>Doubt-Solving Team</h1>
        <div className={classes.team}>
          {DATA.map((m, i) => (
            <Card m={m} key={i} />
          ))}
        </div>
        <h1 className={classes.heading2}>Management Team</h1>
        <div className={classes.team}>
          {DATA.map((m, i) => (
            <Card m={m} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
