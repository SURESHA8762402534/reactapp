import React, { Component } from "react";
import "./App.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  //   props = {name: 'geekster', age: 26, YOE: 10}

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h1 id="heading">{this.props.heading}</h1>
        <p id="para">{this.props.para}</p>
        {/* <p>my age is {this.props.age}</p>
        <p>my years of exp is {this.props.YOE}</p>
        <p>hi {this.props.geek}</p>

        <p>hello {this.props.hello}</p>

        <hr /> */}
      </div>
    );
  }
}

export default Card;