import Boss from 'app/models/Boss'

const bossUtils = {
    createBoss: (dispatch, { level }) => {
        switch(level) {
        case 1:
            return new Boss(dispatch, {
                id: 1,
                name: 'Mulgog',
                level: 1,
                health: 1000,
                damage: 10
            })
        default:
            return null
        }
    }
}

export default bossUtils
