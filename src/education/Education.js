import React from "react";
import style from './Education.module.scss';
import Title from "../common/components/title/Title";
import { Fade } from "react-reveal";


function Education() {
  return (
    <div className={style.educationBlock}>
      <div className={style.educationContainer}>
        <Title title={'Education'} />
        <Fade bottom>
        <div className={style.educationItems}>
          <div className={style.item}>
            <span className={style.university}>Belarussian State Economic University (2005-2010)</span>
            <span className={style.specialization}>Financial management</span>
          </div>
          <div className={style.item}>
            <span className={style.university}>Hexlet educational courses (september 2021 - ...)</span>
            <span className={style.specialization}>Frontend development</span>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default Education;