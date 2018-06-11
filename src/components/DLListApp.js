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
      dLlist: null
    };
    this.onChangeInsert = this.onChangeInsert.bind(this);
    this.onChangeFind = this.onChangeFind.bind(this);
    this.onChangeErase = this.onChangeErase.bind(this);
    this.newDLList = this.newDLList.bind(this);
    this.insert = this.insert.bind(this);
    this.find = this.find.bind(this);
    this.clear = this.clear.bind(this);
    this.erase = this.erase.bind(this);
  }
  newDLList() {
    let dLlist = new DLList();
    this.setState({
      dLlist
    });
  }
  insert() {
    if (this.state.dLlist !== null) {
      this.state.dLlist.push_back(this.state.insert);
      this.forceUpdate();
    }
  }
  find() {
    /*if (this.state.dLlist !== null) {
      const result = this.state.dLlist.find(this.state.find);
    }*/
    // This is not the truly way to find and element in the table
    // The good one is the above commented lines
    const found = document.querySelector(
      '[data-key="' + this.state.find + '"]'
    );
    if (found != null) {
      found.classList.add("found");
      setTimeout(() => {
        found.classList.remove("found");
      }, 3000);
    }
  }
  clear() {
    if (this.state.dLlist !== null) {
      this.state.dLlist.clear();
      this.forceUpdate();
    }
  }
  erase() {
    if (this.state.dLlist !== null && this.state.erase !== null) {
      this.state.dLlist.erase(this.state.erase);
      this.forceUpdate();
    }
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
            <div className="pull-left col-md-2">
              <button
                onClick={this.newDLList}
                className="btn btn-default pull-left"
              >
                New List
              </button>
            </div>
            <div className="pull-left col-md-3">
              <input
                id="add-content"
                className="pull-left"
                value={this.state.insert}
                onChange={this.onChangeInsert}
              />
              <button
                onClick={this.insert}
                className="btn btn-default pull-left"
              >
                Insert
              </button>
            </div>
            <div className="pull-left col-md-3">
              <input
                id="find"
                className="pull-left"
                value={this.state.find}
                onChange={this.onChangeFind}
              />
              <button onClick={this.find} className="btn btn-default pull-left">
                Find
              </button>
            </div>
            <div className="pull-left col-md-3">
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
                Erase
              </button>
            </div>
            <div className="pull-left col-md-1">
              <button
                onClick={this.clear}
                className="btn btn-default pull-left"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="App-canvas col-md-12">
            <div className="content">
              <div className="dLlist">
                {values.length > 0 &&
                  values.map(value => (
                    <DLListNodeComponent key={value} value={value} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DLListApp;
