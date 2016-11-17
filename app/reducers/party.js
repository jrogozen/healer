import constants from 'app/constants'

import Unit from 'app/models/Unit'

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
            if (u.id === payload.id) {
                let unitDefault = Object.assign({}, u, {
                    health: payload.health
                })

                return new Unit(u.dispatch, unitDefault)
            }

            return u
        })

        return Object.assign({}, {
            units: newUnits
        })
    default:
        return state
    }
}

export default party
