import constants from 'app/constants'
import PartyUtils from 'app/utils/PartyUtils'

const PartyActions = {
    setParty: (party) => {
        return (dispatch) => {
            dispatch({
                type: constants.SET_PARTY,
                payload: party
            })
        }
    },
    initializeParty: (defaults = {}) => {
        return (dispatch) => {
            dispatch({
                type: constants.SET_PARTY,
                payload: PartyUtils.initializeParty(dispatch, defaults)
            })
        }
    },

}

export default PartyActions
