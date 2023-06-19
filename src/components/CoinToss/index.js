// Write your code here
import {Component} from 'react'

import './index.css'

const HeadImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResult: HeadImg, headCount: 0, tailCount: 0}

  onTossCoin = () => {
    const {headCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = headCount
    let latestTailCount = tailCount

    if (toss === 0) {
      tossImage = HeadImg
      latestHeadCount += 1
    } else {
      tossImage = TailImg
      latestTailCount += 1
    }
    this.setState({
      tossResult: tossImage,
      headCount: latestHeadCount,
      tailCount: latestTailCount,
    })
  }

  render() {
    const {tossResult, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img alt="toss result" src={tossResult} />
          <button type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="bottom-container">
            <p>Total: {totalCount}</p>
            <p>Heads: {headCount}</p>
            <p>Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
