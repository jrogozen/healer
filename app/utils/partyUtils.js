import Unit from 'app/models/Unit'

const initializeParty = (dispatch, defaultStats = {}, size = 9) => {
    let party = []

    for (let i = 0; i < size; i++) {
        party.push({
            id: i,
            health: defaultStats.health || 100,
            damage: defaultStats.damage || 5,
            items: defaultStats.items || [],
            buffs: defaultStats.buffs || [],
            debuffs: defaultStats.debuffs || []
        })
    }

    return party.map((p) => new Unit(dispatch, p))
}

export default {
    initializeParty
}
