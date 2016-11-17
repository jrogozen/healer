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
        this.handleResetClick = this.handleResetClick.bind(this)
        this.intervalLoopId = null
    }

    componentDidMount() {
        let { dispatch } = this.props

        dispatch(PartyActions.initializeParty())
    }

    handleClick() {
        let { dispatch } = this.props

        dispatch(GameActions.setStatus('ACTIVE'))
        dispatch(BossActions.initBoss({ level: 1 }))

        // todo: fix so dont need timeout
        window.setTimeout(() => {
            this.intervalLoopId = window.setInterval(this.gameLoop.bind(this), 100)
        }, 200)
    }

    handleResetClick() {
        let { dispatch } = this.props

        dispatch(PartyActions.initializeParty())
    }

    gameLoop() {
        let { boss, dispatch, gameStatus, isPartyAlive, partyUnits } = this.props

        if (!isPartyAlive) {
            alert('you are dead')
            dispatch(GameActions.setStatus('LOSE'))
            window.clearInterval(this.intervalLoopId)
        } else {
            partyUnits.forEach((unit) => {
                if (unit.health > 0) {
                    let attackDamage = boss.getAttackDamage()

                    unit.takeDamage(attackDamage)
                }
            })
        }
    }

    render() {
        let { gameStatus } = this.props

        return (
            <div>
                Game Controller
                {gameStatus !== 'ACTIVE' && (<button onClick={this.handleClick}>Start Game</button>)}
                {gameStatus !== 'ACTIVE' && (<button onClick={this.handleResetClick}>Reset Game</button>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    gameStatus: state.game.status,
    boss: state.boss,
    isPartyAlive: partySelector.isPartyAlive(state.party.units),
    partyUnits: state.party.units
})

export default connect(mapStateToProps)(GameController)
