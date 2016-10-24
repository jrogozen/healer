import constants from 'app/constants'

const UnitActions = {
    partySetHealth: (id, health) => {
        return (dispatch) => {
            dispatch({
                type: constants.PARTY_SET_HEALTH,
                payload: {
                    id,
                    health
                }
            })
        }
    }
}

export default UnitActions
