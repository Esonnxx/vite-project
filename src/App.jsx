import React, { Component } from 'react'
import './styles/App.css'
import Film from './component/Film'
import Cinema from './component/Cinema'
import MyAccount from './component/MyAccount'

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: 'Movies',
      },
      {
        id: 2,
        text: 'Cinema',
      },
      {
        id: 3,
        text: 'MyAccount',
      },
    ],
    current: 0,
  }
  switchPage() {
    switch (this.state.current) {
      case 0:
        return <Film></Film>
      case 1:
        return <Cinema></Cinema>
      case 2:
        return <MyAccount></MyAccount>
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        {this.switchPage()}
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li
                key={item.id}
                className={this.state.current === index ? 'active' : null}
                onClick={() => this.handleClick(index)}>
                {item.text}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  handleClick = (index) => {
    console.log(index)

    this.setState({
      current: index,
    })
  }
}
