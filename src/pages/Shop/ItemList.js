import React, { useState } from 'react'
import config from '../../data/config.json'
import ListItem from './ListItem'

const shop = config.Kits.ShopItems
const className =  "col-2 list-group list-group-flush shoplist border"
let id = ""
export default function ItemList(props) {
    
    const [list, setList] = useState(updateList(shop, id))
    function updateList(newShop, id){
    let shopKeys = Object.keys(newShop)
    let list = []
    shopKeys.forEach((key, index) => {
        if (!(key === id)){
            list.push(<ListItem className='list-group-item list-group-item-action' key={index} id={key} name={key} isActive={false} onClick={handleClick}/>)
        }
        else {
            list.push(<ListItem className='list-group-item list-group-item-action' key={index} id={key} name={key} isActive={true} onClick={handleClick}/>)
        }
    })
    return list
    }

    function handleClick(itemId){
    //Find the Object in ShopItems that matches ID 
    
    //Show ShopItem in View Panel
    //
    id = itemId
    setList(updateList(shop, this.id))
    props.setView(shop[id], id)
    }

    return (
    <div className="col width-fit">
    <h6 className="m-1 p-2">Shop Items  <Button label='add item' className='add' onClick={props.addItem}/></h6>
    <ul className={className}>
    {list}
    </ul>
    </div>
    )
}

function Button(props){
   return (<button type='button' className={`btn btn-${props.className}`} onClick={props.onClick}>{props.label}</button>)
  }
