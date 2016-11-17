import constants from 'app/constants'
import Boss from 'app/models/Boss'

const initState = () => ({
    name: '',
    level: null,
    debuffs: [],
    buffs: [],
    health: null,
    damage: null
})

const boss = (state = initState(), action = {}) => {
    let { payload, type } = action

    switch (type) {
    case constants.INIT_BOSS:
        return payload
    case constants.UPDATE_BOSS:
        return new Boss(state.dispatch, payload)
    default:
        return state

    }
}

export default boss
