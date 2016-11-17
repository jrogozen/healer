import UnitActions from 'app/actions/UnitActions'

class Unit {
    constructor(dispatch, { id, health, damage, items, buffs, debuffs, critChance }) {
        this.dispatch = dispatch
        this.id = id
        this.health = health === 0 ? 0 : health || 100
        this.damage = damage || [0, 0]
        this.critChance = critChance || 0
        this.items = items || []
        this.buffs = buffs || []
        this.debuffs = debuffs || []
    }

    takeDamage(damage) {
        if (this.health === 0) {
            return
        } if (this.health <= damage) {
            console.log(`unit ${this.id} is now dead`)
            this.dispatch(UnitActions.partySetHealth(this.id, 0))
        } else {
            console.log(`taking damage and setting health of unit ${this.id} to:`, this.health - damage)
            this.dispatch(UnitActions.partySetHealth(this.id, this.health - damage))
        }

        return this.health
    }

    getAttackDamage() {
        const minDamage = this.damage[0]
        const maxDamage = this.damage[1]
        const attackDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage
        let isCrit = Math.floor(Math.random() * (100 - this.critChance + 1)) + this.critChance

        if (this.critChance > 0 && isCrit === 100) {
            return attackDamage * 2
        } else {
            return attackDamage
        }
    }

    attackBoss() {

    }
}

export default Unit
