import React, { Component } from "react";
import "../css/DLListApp.css";
import DLList from "../classes/DLList";
import DLListNodeComponent from "./DLListNodeComponent";

class DLListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insert: "",
      find: "",
      erase: "",
      dLlist: null,
      operation_time: 0
    };
    this.aux_timer = 0;
    this.onChangeInsert = this.onChangeInsert.bind(this);
    this.onChangeFind = this.onChangeFind.bind(this);
    this.onChangeErase = this.onChangeErase.bind(this);
    this.newDLList = this.newDLList.bind(this);
    this.push_front = this.push_front.bind(this);
    this.push_back = this.push_back.bind(this);
    this.pop_front = this.pop_front.bind(this);
    this.pop_back = this.pop_back.bind(this);
    this.find = this.find.bind(this);
    this.clear = this.clear.bind(this);
    this.erase = this.erase.bind(this);
  }
  initTimer() {
    this.aux_timer = performance.now();
  }
  finishTimer() {
    this.setState({
      operation_time: performance.now() - this.aux_timer
    });
  }
  newDLList() {
    this.initTimer();
    let dLlist = new DLList();
    this.setState({
      dLlist
    });
    this.finishTimer();
  }
  push_front() {
    this.initTimer();
    if (this.state.dLlist !== null) {
      this.state.dLlist.push_front(this.state.insert);
      this.forceUpdate();
    }
    this.finishTimer();
  }
  push_back() {
    this.initTimer();
    if (this.state.dLlist !== null) {
      this.state.dLlist.push_back(this.state.insert);
      this.forceUpdate();
    }
    this.finishTimer();
  }
  pop_front() {
    this.initTimer();
    if (this.state.dLlist !== null) {
      this.state.dLlist.pop_front();
      this.forceUpdate();
    }
    this.finishTimer();
  }
  pop_back() {
    this.initTimer();
    if (this.state.dLlist !== null) {
      this.state.dLlist.p1ck();
      this.forceUpdate();
    }
    this.finishTimer();
  }
  find() {
    /*if (this.state.dLli1= null) {
      const result = this1e.dLlist.find(this.state.find);
    }*/
    // This is not the truly way to find and element in the table
    // The good one is the above commented lines
    this.initTimer();
    const found = document.querySelector(
      '[data-key="' + this.state.find + '"]'
    );
    if (found != null) {
      found.classList.add("found");
      setTimeout(() => {
        found.classList.remove("found");
      }, 3000);
    }
    this.finishTimer();
  }
  clear() {
    this.initTimer();
    if (this.state.dLlist !== null) {
      this.state.dLlist.clear();
      this.forceUpdate();
    }
    this.finishTimer();
  }
  erase() {
    this.initTimer();
    if (this.state.dLlist !== null && this.state.erase !== null) {
      this.state.dLlist.erase(this.state.dLlist.find(this.state.erase));
      this.forceUpdate();
    }
    this.finishTimer();
  }

  onChangeInsert(e) {
    this.setState({
      insert: e.target.value
    });
  }
  onChangeFind(e) {
    this.setState({
      find: e.target.value
    });
  }
  onChangeErase(e) {
    this.setState({
      erase: e.target.value
    });
  }
  render() {
    const values =
      this.state.dLlist !== null && this.state.dLlist.elements > 0
        ? this.state.dLlist.values()
        : [];
    return (
      <div className="Hash-Table-App">
        <div className="App-intro">
          <div className="App-buttons col-md-12">
            <div className="pull-left col-md-1">
              <button
                onClick={this.newDLList}
                className="btn btn-default pull-left"
              >
                New List
              </button>
            </div>
            <div className="pull-left col-md-4">
              <input
                id="add-content"
                className="pull-left"
                value={this.state.insert}
                onChange={this.onChangeInsert}
              />
              <button
                onClick={this.push_front}
                className="btn btn-default pull-left"
              >
                Push Front O(1)
              </button>
              <button
                onClick={this.push_back}
                className="btn btn-default pull-left"
              >
                Push Back O(1)
              </button>
            </div>
            <div className="pull-left col-md-2">
              <input
                id="find"
                className="pull-left"
                value={this.state.find}
                onChange={this.onChangeFind}
              />
              <button onClick={this.find} className="btn btn-default pull-left">
                Find O(n)
              </button>
            </div>
            <div className="pull-left col-md-4">
              <input
                id="erase"
                className="pull-left"
                value={this.state.erase}
                onChange={this.onChangeErase}
              />
              <button
                onClick={this.erase}
                className="btn btn-default pull-left"
              >
                Erase O(n)
              </button>
              <button
                onClick={this.pop_front}
                className="btn btn-default pull-left"
              >
                Pop Front O(1)
              </button>
              <button
                onClick={this.pop_back}
                className="btn btn-default pull-left"
              >
                Pop Back O(1)
              </button>
            </div>
            <div className="pull-left col-md-1">
              <button
                onClick={this.clear}
                className="btn btn-default pull-left"
              >
                Clear O(n)
              </button>
            </div>
          </div>
          <div className="App-canvas col-md-12">
            <div className="content">
              <div className="dLlist">
                {this.state.dLlist !== null && (
                  <DLListNodeComponent value="Header" prev={false} />
                )}
                {values.length > 0 &&
                  values.map(value => (
                    <DLListNodeComponent
                      key={value}
                      value={value}
                      prev={true}
                    />
                  ))}
                {this.state.dLlist !== null && (
                  <DLListNodeComponent value="Tail" prev={true} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="operation-time">
          <span className="time">{this.state.operation_time}</span> ms
        </div>
      </div>
    );
  }
}
export default DLListApp;
