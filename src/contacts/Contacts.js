import React, { useRef, useState } from "react";
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import { Zoom } from "react-awesome-reveal";
import emailjs from '@emailjs/browser';

function Contacts() {
  const [isSent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_s65d4d6', 'template_ouczz5j', form.current, 'tL7_l6Akrb8nhOC-6')
      .then((result) => {
          console.log(result.text);
          console.log('Message sent');
      }, (error) => {
          console.log(error.text);
      });

      form.current.reset();
      setSent(true);
  };

  const sentMessageClick = () => {
    setSent(false);
  }

  return (
    <div id="contacts" className={style.contactsBlock}>
      <Zoom>
      <div className={style.contactsContainer}>
        <Title title={'Contacts'}/>
        <div className={style.contactsData}>
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
            <form className={style.formContainer} ref={form} onSubmit={sendEmail}>      
              <div className={style.inputBlock}>
                <input type="text" name="user_name" className={style.inputData} placeholder="Your name" required></input>
                <input type="email" name="user_email" className={style.inputData} placeholder="Your email" required></input>
              </div>
              <textarea placeholder="Your message" className={style.textarea} name="message" required></textarea>
              <button type="submit" className={style.submitButton}>Send</button>
              {isSent ? <div className={style.sendMessage} >
                Thank you! Your message sent
                <button className={style.sendButton} onClick={sentMessageClick}>Ok</button>
              </div> : ''}
            </form>
        </div>
      </div>
      </Zoom>
    </div>
  );
}

export default Contacts;