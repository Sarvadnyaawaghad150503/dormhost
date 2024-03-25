import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam illum quam optio autem suscipit incidunt dicta dolorum eum dolores recusandae laboriosam expedita quo facilis, numquam et.
            Delectus atque dolorum sapiente.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +91 7588711657</span>
          <span>Name : DormDine</span>
          <span>Email : contactDormdine@gmail.com</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Chembur, Mumbai</span>
          <span>Maharashtra</span>
        </div>
      </div>
      <div className={classes.footers}>
        DormDine &copy; 2023, ALL RIGHT RESERVED 
      </div>
    </footer>
  )
}

export default Footer