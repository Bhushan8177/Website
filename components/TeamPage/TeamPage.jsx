import React from "react";
import classes from "./Teampage.module.css";
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
const DATA2 = [
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
const DATA3 = [
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
        <h1 className={classes.heading}>
          MEET OUR <span className={classes.red}> TEAM</span>
        </h1>
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
        <h1 className={classes.heading2}>
          Doubt-Solving <span className={classes.red}> TEAM</span>
        </h1>
        <div className={classes.team}>
          {DATA2.map((m, i) => (
            <Card m={m} key={i} />
          ))}
        </div>
        <h1 className={classes.heading2}>
          Management <span className={classes.red}> TEAM</span>
        </h1>
        <div className={classes.team}>
          {DATA3.map((m, i) => (
            <Card m={m} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
