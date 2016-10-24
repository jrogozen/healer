import _ from 'lodash'

const partySelector = {
    isPartyAlive: (units) => {
        return _.some(units, (v) => {
            return v.health > 0
        })
    }
}

export default partySelector
