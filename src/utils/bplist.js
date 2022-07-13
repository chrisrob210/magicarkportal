import bps from '../data/bp.json'

function getNameByBlueprint(blueprint){
    let bp = null
    bp = bps.filter(bp => bp.bp.includes(blueprint))
    console.log(bp)
    return bp[0].l
}

function correctBlueprint(blueprint){
    let bp = blueprint.split("Blueprint'/Game/")
    let newBp = bp[1].split("'")
    return newBp[0]
}


export {getNameByBlueprint, correctBlueprint}