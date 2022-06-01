import React from "react";
import classes from "./JoinPage.module.css";
import Link from "next/link"

const JoinPage = () => {
  return (
    <>
      <div className={classes.join_section}>
        <h1 className={classes.heading}>
          FILL THESE DETAILS TO <br /> <span className={classes.red}> JOIN CLUB</span>
        </h1>
        <p className={classes.para}>
          Our vision for the next two years is to create a community that will
          not only assist students in obtaining better placements and assisting
          them in their path, but will also give confidence in them to achieve
          future milestones.
        </p>
        <div className={classes.form}>
          <div className={classes.input_container}>
            <label className={classes.input_label}>First Name *</label>
            <input className={classes.input} placeholder="Rahul Sharma" />
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>Email*</label>
            <input
              className={classes.input}
              placeholder="rahulsharma@gmail.com"
            />
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>Phone Number</label>
            <input className={classes.input} placeholder="0123456789" />
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>Academic Year</label>
            <select className={classes.input}>
              <option>Select an Option</option>
              <option>FE</option>
              <option>SE</option>
              <option>TE</option>
              <option>BE</option>
            </select>
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>Branch</label>
            <select className={classes.input}>
              <option>Select an Option</option>
              <option>Computer Engineering</option>
              <option>IT Engineering</option>
              <option>AI&DS Engineering</option>
              <option>Mechanical Engineering</option>
              <option>ENTC Engineering</option>
              <option>Civil Engineering</option>
              <option>Instrumental Engineering</option>
            </select>
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>Division</label>
            <select className={classes.input}>
              <option>Select an Option</option>
              <option>A</option>
              <option>B</option>
            </select>
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>Codechef ID</label>
            <input
              className={classes.input}
              placeholder="https://www.codechef.com/users/rahul_sharma"
            />
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>Hackerrank ID</label>
            <input
              className={classes.input}
              placeholder="https://www.hackerrank.com/rahul_sharma"
            />
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>Atcoder ID</label>
            <input
              className={classes.input}
              placeholder="https://atcoder.jp/users/rahul_sharma"
            />
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>Codeforces ID</label>
            <input
              className={classes.input}
              placeholder="https://codeforces.com/profile/rahul_sharma"
            />
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>Leetcode ID</label>
            <input
              className={classes.input}
              placeholder="https://leetcode.com/rahul_sharma/"
            />
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>Hackerearth ID</label>
            <input
              className={classes.input}
              placeholder="https://www.hackerearth.com/@rahul_sharrma"
            />
          </div>

          <button className={classes.btn}>
            <div className={classes["svg-wrapper-1"]}>
              <div className={classes["svg-wrapper"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>SUBMIT</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinPage;
