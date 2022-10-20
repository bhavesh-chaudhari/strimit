import React from 'react'
import styles from "../styles/CopyrightNotice.module.scss"

const CopyrightNotice = () => {

    const date = new Date()
    
  return (
    <div className={styles["container"]}>
      <p>Copyright © {date.getFullYear()} Live</p>
    </div>
  );
}

export default CopyrightNotice