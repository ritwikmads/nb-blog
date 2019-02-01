import React, { Component } from 'react';

class Family extends Component{
    state = {
        name: "Nil Boruah",
        age: 24
    }

    handleMouseOver = (e) =>{
        console.log(e.target, e.pageX);
    }

    handleCopy = (e) =>{
        // alert("Try being original");
        console.log(this.state.name, this.state.age);
    }

    changeName = (e) =>{
        this.setState({
            name: "Manasi Hazarika"
        });
    }

    changeNameNew = (e) =>{
        this.setState({
            name: "Nilutpal Boruah"
        });
    }

    render(){
        // console.log(this.props);
        const { newname, newage } = this.props;
        return (
            <div className="family">
                <h3>Name: { this.state.name }</h3>
                <h3>Age: { this.state.age }</h3>
                <button onMouseOver={this.handleMouseOver}>Hover me!</button>
                <button onClick={this.changeName}>Change Name to Manasi</button>
                <button onClick={this.changeNameNew}>Change Name to Nilutpal</button>
                <p onCopy={ this.handleCopy }>I am an Assamese</p>
                <p>Second name: { newname } and Second age: { newage }</p>
            </div>
        );
    };
}

export default Family;