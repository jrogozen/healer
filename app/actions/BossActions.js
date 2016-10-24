import constants from 'app/constants'
import bossUtils from 'app/utils/bossUtils'

const BossActions = {
    initBoss: ({ level }) => {
        return (dispatch) => {
            return dispatch({
                type: constants.INIT_BOSS,
                payload: bossUtils.createBoss(dispatch, { level })
            })
        }
    }
}

export default BossActions
