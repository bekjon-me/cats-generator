import React, { Component } from "react";

interface IProps {
  cat: {
    name: string;
    color: string;
    age: number;
    hasCollar: boolean;
    image?: string;
    feedTime: number;
  };
}

export default class AllCatsList extends Component<IProps> {
  render() {
    const { color } = this.props.cat;
    return (
      <div
        className={`w-80 p-4 border-white rounded-md border-2 bg-[${color}] flex gap-4`}
        style={{ backgroundColor: color }}
      >
        <img
          src={this.props.cat.image}
          alt="Cat's_image"
          className="w-[128px] rounded-full"
        />
        <div className="flex flex-col">
          <h2>{this.props.cat.name}</h2>
          <p>{this.props.cat.age} years old</p>
        </div>
      </div>
    );
  }
}
