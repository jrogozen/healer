import constants from 'app/constants'

const initState = () => ({
    units: []
})

const party = (state = initState(), action = {}) => {
    let { payload, type } = action

    switch (type) {
    case constants.SET_PARTY:
        return Object.assign({}, {
            units: payload
        })
    case constants.PARTY_SET_HEALTH:
        let newUnits = state.units.map((u) => {
            let updatedUnit = Object.assign({}, u)

            if (u.id === payload.id) {
                updatedUnit.health = payload.health
            }

            return updatedUnit
        })

        return Object.assign({}, {
            units: newUnits
        })
    default:
        return state
    }
}

export default party
