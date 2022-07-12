import React, { useState } from 'react'
import Value from './Value'
import ObjectList from './ObjectList'
import Button from '../../Button'
const className =  "col-2 list-group list-group-flush viewlist border"

export default function ShopView(props) {
  let buttonIsVisible = false
  let item = props.item
  let itemName = props.name
  let objs = []

  function isEmpty(obj){
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }
  return true;
  }

  function getParameters(){
    let newList=[]
    if (!(isEmpty(item))){
      newList.push(<Value key={newList.length} param={"ItemName"} value={itemName}/>)
        for (var key in item){
          console.log(`Added ${typeof item[key]}`);
          console.log(`${key}->${item[key]}`);
          if (!(typeof item[key] === 'object')){
            newList.push(<Value key={newList.length} param={key} value={item[key]}/>)
          }
          else{
            objs.push(item[key])
          }
        }
        buttonIsVisible = true
    }
    else {
      console.log("Item is Empty!");
    }
    return newList
  }

  function editItem(){
    props.editItem(item, itemName)
  }

  function removeItem(){
    //TODO remove item
    console.log("Remove Item");
  }

  return (
    <div className="col width-fit">
    <h6 className="m-1 p-2">Item View</h6>
    <ul className={className}>
    {getParameters()}
    {!(isEmpty(objs)) ? <ObjectList obj={objs} onClick={props.onClick} isEdit={false}/> : null}
    </ul>
    <div>
      {buttonIsVisible ? <Button onClick={editItem} label='edit' className='edit'/> : null}
    </div>
    </div>
  )
}



function Object(props){
  let obj = props.obj
  let objList = []

  function listObjects(){
    obj.forEach(o => {
      objList.push(o)
    })
    return objList.length
  }

  function handleClick(){
    props.onClick(objList)
  }

  return (<li className='list-group-item'>{`${props.param}: ${listObjects()}`}<Button label='view' className='view' isVisible={true} onClick={handleClick}/></li>) 
}

