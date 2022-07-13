import React from 'react'
import Button from '../../components/Button'
import { getNameByBlueprint, correctBlueprint } from '../../utils/bplist'

export default function ObjectList(props) {
    let list = getValue(props.obj)
    let objsList = []
    let isEdit = props.isEdit
    function getValue(obj){
        let o = null
        for (var key in obj){
            o = obj[key]
        }
        return o
    }

    function loadList(){
        
        console.log(`--Loading Object List-- `)
        list.forEach(obj => {
            for (var key in obj){
                if (key === "Blueprint"){
                    console.log(`Blueprint Found! ${correctBlueprint(obj[key])}`);
                    objsList.push(<li key={objsList.length} className='list-group-item'>{`${getNameByBlueprint(correctBlueprint(obj[key]))}`}</li>)
                }
            }
        })
        console.log(`LIST FOUND: ${objsList}`)
        return objsList
    }

    function loadEditList(){
        
        console.log(`--Loading Object List-- `)
        list.forEach(obj => {
            for (var key in obj){
                if (key === "Blueprint"){
                    console.log(`Blueprint Found! ${correctBlueprint(obj[key])}`);
                    objsList.push(<li key={objsList.length} className='list-group-item'>{`${getNameByBlueprint(correctBlueprint(obj[key]))}`}<Button className='edit' onClick={props.edit} label='edit'/></li>)
                }
            }
        })
        console.log(`LIST FOUND: ${objsList}`)
        return objsList
    }

    function handleClick(){
        props.onClick(objsList)
    }

  return (
    <div>
    <h6></h6>
    <ul className='objectList'>{isEdit ? loadEditList() : loadList() }</ul>
    </div>
  )
}
