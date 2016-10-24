import constants from 'app/constants'

const initState = () => ({
    status: 'PENDING'
})

const game = (state = initState(), action = {}) => {
    let { type, payload } = action

    switch (type) {
    case constants.SET_GAME_STATUS:
        return Object.assign({}, state, {
            status: payload
        })
    default:
        return state

    }
}

export default game
