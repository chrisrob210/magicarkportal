import React, { useState } from 'react'
import Input from '../../Input';
import ObjectList from './ObjectList';

export default function ShopEdit(props) {
    let item = props.item
    let objList = []

    function isEmpty(obj){
        for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }
      return true;
      }

    function displayItems(){
        let list = []
        for (let key in item){
            if (typeof item[key] !== 'object'){
            console.log(`SHOP EDIT: key ${key}`);
            list.push(<Input key={list.length} label={key} value={item[key]}/>)
            }
            else {
                objList.push(item[key])
            }
        }
        return list
    }

    return (!isEmpty(item) ? <div className="col itemEdit">
    <h6 className="m-1 p-2">Item Edit</h6>
    {displayItems()}
    {!(isEmpty(objList)) ? <ObjectList obj={objList} onClick={props.onClick} isEdit={true}/> : null}
    </div> 
    : null
    )
}
