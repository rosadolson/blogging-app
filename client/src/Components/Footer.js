import React from 'react'

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    width: '110%',
    marginLeft: -10,
    marginRight: -10,
    backgroundColor: 'black'
  },
  content: {
    marginBottom: 30,
    color: 'white',
    paddingLeft: '10%'
  }
}

const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <p>FOOTER</p>
      </div>
    </div>
  )
}

export default Footer
