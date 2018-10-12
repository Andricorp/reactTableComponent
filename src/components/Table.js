import React, { Component } from 'react';
// import './App.css';
import { Router, Route, Link, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { setTable } from '../actions/actions'

const thValue = new Set(["name", "language", "genres", "status", "rating"])


class Td extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <td>
        <Link to ={`/details/${this.props.id}`}>

        {
          this.props.name
        }
        </Link>
      </td>
    )
  }
}


class Th extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // <div>
      <th>
        {
          this.props.name
        }
      </th>
      // </div>

    )
  }
}

class Tr extends Component {
  constructor(props) {
    super(props)
    props = this.props.columns

  }


  // getCollect(){
  //   var sayings = new Map();

  //   for (let key in this.props.columns) {
  //     if (thValue.has(key)) {

  // obj[key] = this.props.columns[key];

  // sayings.set(key, obj[key])
  // // return <Td key = {key} name={obj[key]} ></Td>

  //     }
  //   }
  //   return sayings
  // }

  getArr(setArr) {
    let arr = []

    for (let key in setArr) {
      if (thValue.has(key)) {
        if (key === 'rating') {
          arr.push(this.props.columns['rating']['average'] || '0');
        } else {
          arr.push(this.props.columns[key]);
        }

      }
    }
    return arr
  }

  setTrValue() {
    // if(!this.props.index){
    // return this.getArr(this.props.columns).map(el => <Th name={el} ></Th><Td name={el} ></Td>)
    // }
    return this.getArr(this.props.columns).map(el => <Td name={el} id = {this.props.index}></Td>)
  }



  render() {
    return (
      <tr>{
        this.setTrValue()
      }
      </tr>

    )
  }
}


class Table extends Component {

  makeColumns() {
    console.log('Post data', this.props.postData)

    if (this.props.postData !== null && this.props.postData !== false) {
      if (this.props.postData.length > 0) {
        let data = this.props.postData
        console.log('Post data !', data)
        return data.map((row, i) =>
          // {
          // if(!i){
          // return  <Tr key={i} columns={row.show}></Tr>    
          // }
          // return 
          <Tr key={i} columns={row.show} index={i}></Tr>
          // }
        )
      } else {
        return <h1> По данном запросу не найдено данных </h1>
      }
    }
  }


  componentWillMount() {
    this.props.setTable('girls')
  }

  render() {
    // if(!this.props.postData=== false){

    return (
      <table>
        <tbody>
          {this.makeColumns()}
        </tbody>
      </table>
    )
  }
}


function mapStateToProps(state) {
  return {
    // postData: state.arr
    postData: state.posts.arr
  };
};

Table = connect(mapStateToProps, { setTable })(Table)

export default Table