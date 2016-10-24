import { combineReducers } from 'redux'

import app from './app'
import boss from './boss'
import party from './party'
import game from './game'

const rootReducer = combineReducers({
    app,
    boss,
    party,
    game
})

export default rootReducer
