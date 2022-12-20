import PropTypes from 'prop-types';
import React from 'react';
const FullName = (props) => {
    console.log(props);
    const myStyle={
        textAlign:"center",
        color:"rgb(9, 30, 90)",
        textTransform: "uppercase",
        fontFamily: 'Roboto Condensed',margin:"auto",
    }
    return (
        <div style ={{color:"black",textAlign:"center"}}>
    <h1 style ={myStyle}>  {props.FirstName} {props.LastName}</h1>
    {props.children}
        </div>
    );
    
      }
      FullName.propTypes = {
        FirstName: PropTypes.string
};
export default FullName;

