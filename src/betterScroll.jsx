import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class betterScroll extends Component {
  state = {
    list: [],
  }
  render() {
    return (
      <div>
        <button onClick={() => this.getData()}>Click Me</button>
        <div
          className="wrapper"
          style={{ height: '200px', background: 'yellow', overflow: 'hidden' }}>
          <ul className="content">
            {this.state.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  getData() {
    let newlist = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26,
    ]
    this.setState(
      {
        list: newlist,
      },
      () => {
        new BetterScroll('.wrapper')
      }
    )
  }
}
