import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {
  constructor() {
    super()
    this.state = {
      cinemaList: [],
      cpycinemaList: [],
    }

    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6352089',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16693768445597480553021441","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list',
      },
    }).then((res) => {
      console.log(res.data.data.cinemas)
      this.setState({
        cinemaList: res.data.data.cinemas,
        cpycinemaList: res.data.data.cinemas,
      })
    })
  }
  render() {
    return (
      <div>
        <input type="text" onInput={this.handleInput} />
        {this.state.cinemaList.map((item) => {
          return (
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
          )
        })}
      </div>
    )
  }

  handleInput = (event) => {
    console.log(event.target.value)
    let newlist = this.state.cpycinemaList.filter((item) =>
      item.name.toUpperCase().includes(event.target.value.toUpperCase())
    )
    console.log(newlist)
    this.setState({
      cinemaList: newlist,
    })
  }
}
