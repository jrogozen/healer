import constants from 'app/constants'

const GameActions = {
    setStatus: (status) => {
        return (dispatch) => {
            return dispatch({
                type: constants.SET_GAME_STATUS,
                payload: status
            })
        }
    }
}

export default GameActions
