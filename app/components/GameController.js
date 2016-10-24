import React from 'react'
import { connect } from 'react-redux'

import BossActions from 'app/actions/BossActions'
import PartyActions from 'app/actions/PartyActions'
import partySelector from 'app/selectors/partySelector'
import GameActions from 'app/actions/GameActions'

class GameController extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        let { dispatch } = this.props

        dispatch(PartyActions.initializeParty())
    }

    handleClick() {
        let { dispatch } = this.props

        dispatch(GameActions.setStatus('ACTIVE'))
        dispatch(BossActions.initBoss({ level: 1 }))

        window.setTimeout(() => this.gameLoop(), 200)
    }

    gameLoop() {
        let { bossHealth, dispatch, gameStatus, isPartyAlive, partyUnits } = this.props
        let shouldLoop = true
        let failSafe = 0


        while (shouldLoop) {
            failSafe += 1

            // todo: remove!
            if (failSafe > 20) {
                return shouldLoop = false
            }

            if (!isPartyAlive) {
                alert('you are dead')
                dispatch(GameActions.setStatus('LOSE'))
                return shouldLoop = false
            }

            partyUnits.forEach((unit) => {
                unit.takeDamage(5)
            })
        }
    }

    render() {
        let { gameStatus } = this.props

        return (
            <div>
                Game Controller
                {gameStatus !== 'ACTIVE' && (<button onClick={this.handleClick}>Start Game</button>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    gameStatus: state.game.status,
    bossHealth: state.boss.health,
    isPartyAlive: partySelector.isPartyAlive(state.party.units),
    partyUnits: state.party.units
})

export default connect(mapStateToProps)(GameController)
