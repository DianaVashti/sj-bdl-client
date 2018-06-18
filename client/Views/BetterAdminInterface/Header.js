import React from 'react';

const styles = {
  viewStyle: {
    display: 'flex',
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    paddingTop: 15,
    boxShadow: '0px 1px 8px 0.8px grey',
    elevation: 2,
    position: 'relative',
    marginBottom: 5,
  },
  textStyle: {
    fontSize: 20
  }
};

const Header = () => {
  return (
    <div style={styles.viewStyle}>
      <p style={styles.textStyle}>Admin Interface</p>
    </div>
  );
};



export default Header;
