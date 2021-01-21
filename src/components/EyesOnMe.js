// Code EyesOnMe Component Here
import React from "react";

class EyesOnMe extends React.Component 
  {
    onFocus = () => console.log("NICEEE");

    onBlur = ()  => console.log("HEYY LOOK HERE!!")

    render(){
      return(
        <button onFocus={this.onFocus} onBlur={this.onBlur}>
            WHERE YOUR LOOKING SIR !?
        </button>
      )
    }
  }

  export default EyesOnMe;