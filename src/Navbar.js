import React from 'react';

const Navbar = (props) => {
  
    return (
      <div style={styles.nav}>
       <div style={styles.cartIconContainer}> 
           <img 
           style={styles.cartIcon}
           src="https://img-premium.flaticon.com/png/128/2838/premium/2838838.png?token=exp=1630743508~hmac=ca38cdaba9409b1cc0fd5077da47f79b" alt = "cart-icon"/>
           <span style={styles.cartCount}> {props.count} </span>
       </div>
      </div>
    );
  
} 

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };

export default Navbar ;




