// Code Keypad Component Here
import React from "react"

class Keypad extends React.Component
      {
        handleInPass = () => console.console.log("Entering PassCode :)");

        render(){
          return(
            <div>
              <input type="password" onKeyUp={this.handleInPass} />
            </div>
          )
        }
      }
export default Keypad;
