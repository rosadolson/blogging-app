import React from 'react'

const styles = {
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid red'
  },
  header: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 60
  },
  subHeader: {
    fontFamily: 'Muli, sans-serif'
  }
}

const Home = () => {
  return (
    <div>
      <div style={styles.textContainer}>
        <p style={styles.header}> WELCOME </p>
        <p style={styles.subHeader}>Welcome to the home page for the whole entire blog!</p>
      </div>
    </div>
  )
}

export default Home
