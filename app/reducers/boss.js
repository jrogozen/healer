import constants from 'app/constants'

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
        return Object.assign({}, payload)
    case constants.UPDATE_BOSS:
        return Object.assign({}, this.state, payload)
    default:
        return state

    }
}

export default boss
