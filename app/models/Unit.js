import UnitActions from 'app/actions/UnitActions'

class Unit {
    constructor(dispatch, { id, health, damage, items, buffs, debuffs }) {
        this.dispatch = dispatch
        this.id = id
        this.health = health || 100
        this.damage = damage || 0
        this.items = items || []
        this.buffs = buffs || []
        this.debuffs = debuffs || []
    }

    takeDamage(damage) {
        if (this.health <= damage) {
            this.dispatch(UnitActions.partySetHealth(this.id, 0))
        } else {
            console.log('doing take damage', this.health - damage)
            this.dispatch(UnitActions.partySetHealth(this.id, this.health - damage))
        }

        return this.health
    }

    castAttack() {
        return this.damage
    }
}

export default Unit
