import React, { Component } from "react";
import './Content.css'

class RandomNumbers extends Component {
    state = {
        value: []
    }
    tempArray = []
    constructor() {
        super()
        this.state = { value: this.fillArray() }
    }
    fillArray = () => {
        let tempArr = []
        this.state.value = []
        let isTrue = true
        while (isTrue) {
            const randomNum = Math.floor(Math.random() * 36 + 1)
            if (!tempArr.includes(randomNum) && tempArr.length < 5) {
                tempArr.push(randomNum)
            } else if (tempArr.length >= 5) {
                isTrue = false
            }
        }
        tempArr = this.sortArray(tempArr)
        return tempArr
    }
    sortArray = (tempArray) => {
        const tempArr = []
        for (let i = 0; i < 37; i++) {
            for (let j = 0; j < tempArray.length; j++) {
                if (Number(tempArray[j]) === i) {
                    tempArr.push(tempArray[j])
                }
            }
        }
        return tempArr
    }
    changeNumbers = () => {
        const copyArr = { ...this.state }
        copyArr.value = this.fillArray()
        this.setState(copyArr)
    }
    render() {
        return (
            <div className="container">
                <div className="content_block">
                    <button className="button" onClick={this.changeNumbers}> Новая комбинация </button>
                    <div className="content_block_items">
                        {this.state.value.map(c => {
                            return (
                                <div className="circle" key={c}>
                                    <p>{[c]}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default RandomNumbers