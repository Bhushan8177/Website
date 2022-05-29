import React from "react";
import Image from "next/image";

import contact from "../assets/contact.svg";
import classes from "./ContactPage.module.css";

const Contact = () => {
  return (
    <>
      <div className={classes.contact_section}>
        <h1 className={classes.heading}>HAVE SOME QUESTIONS ?</h1>
        <p className={classes.para}>
          Our vision for the next two years is to create a community that will
          not only assist students in obtaining better <br /> placements and
          assisting them in their path, but will also give confidence in them to
          achieve future milestones.{" "}
        </p>
        <div className={classes.contact}>
          <div className={classes.image}>
            <Image src={contact} alt="contact" width={700} height={700} />
          </div>
          <div className={classes.form}>
            <div className={classes.input_container}>
              <input className={classes.input} placeholder="Full Name" />
            </div>
            <div className={classes.input_container}>
              <input className={classes.input} placeholder="Email" />
            </div>
            <div className={classes.input_container}>
              <textarea
                className={classes.textarea}
                placeholder="Type Your Message Here..!"
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
      </div>
    </>
  );
};

export default Contact;
