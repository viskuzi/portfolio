import React from "react";
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import { Fade } from "react-reveal";

function Contacts() {
  return (
    <div className={style.contactsBlock}>
      <div className={style.contactsContainer}>
        <Title title={'Contacts'}/>
        <div className={style.contactsData}>
          <Fade left>
            <div className={style.contactType}>
              <div className={style.contactBlock}>
                <span className={style.middleBlackText}>Phone:</span>
                <span className={style.littleBlackText}>+(48)575-651-421</span>
              </div>
              <div className={style.contactBlock}>
                <span className={style.middleBlackText}>Email:</span>
                <span className={style.littleBlackText}>kanstantsin.lushchyk@gmail.com</span>
              </div>
              <div className={style.contactBlock}>
                <span className={style.middleBlackText}>My location:</span>
                <span className={style.littleBlackText}>Lodz, Poland</span>
              </div>
            </div>
          </Fade>
          <Fade right>
            <form className={style.formContainer}>
              <div className={style.inputBlock}>
                <input type="text" name="name" className={style.inputData} placeholder="Your name" required></input>
                <input type="email" name="email" className={style.inputData} placeholder="Your email" required></input>
              </div>
              <textarea placeholder="Your message" className={style.textarea} name="comment" required></textarea>
              <button type="submit" className={style.submitButton}>Send</button>
            </form>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Contacts;