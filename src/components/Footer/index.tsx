import React from 'react';
import style from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.flexWrapper}>
          <div className={style.leftBlock}/>
          <div className={style.rightBlock}/>
        </div>  
      </div>    
    </footer>
  );
};

export default Footer;
