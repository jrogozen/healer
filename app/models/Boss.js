import Unit from 'app/models/Unit'

class Boss extends Unit {
    constructor(dispatch, props = {}) {
        super(dispatch, props)

        this.level = props.level
        this.name = props.name
    }
}

export default Boss
