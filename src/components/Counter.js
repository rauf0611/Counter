
import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0,
        inputCount: 0
    }

    onHandleChange = (e) => {
        this.setState({
            inputCount: e.target.value
        })
    }


    Minus = () => {
       
           
            if(this.state.inputCount !== 0){
                this.setState({
                    count: this.state.count - parseInt(this.state.inputCount)
                })
            }else{
                this.setState({
                    count: this.state.count - 1
                })
            }
        
        


    }
    Plus = () => {
        if(this.state.inputCount !== 0){
            this.setState({
                count: this.state.count + parseInt(this.state.inputCount)
            })
        }else{
            this.setState({
                count: this.state.count + 1
            })
        }

    }


    render() {
        return (


            <div
                className="container ">
                <input
                    className="m-5 p-1"
                    placeholder="Enter number"
                    type="number"
                    onChange={this.onHandleChange}>
                </input>

                <button
                    className="btn btn-success w-25"
                    onClick={this.Minus}>
                    minus
                 </button>

                <span min="0" className="p-5">{this.state.count}</span>

                <button
                    className="btn btn-success w-25"
                    onClick={this.Plus}>
                    plus
                 </button>

            </div>
        )
    }
}
