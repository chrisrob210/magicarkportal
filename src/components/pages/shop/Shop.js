import React, { useState } from 'react'
import ShopList from './ShopList'
import ShopView from './ShopView'
import ShopEdit from './ShopEdit'

export default function Shop(props) {
  const [item, setItem] = useState({})
  const [itemName, setItemName] = useState("")
  const [itemEdit, setItemEdit] = useState({})
  let shopEditIsVisible = false

  function setViewItem(shopItem, name){
    console.log(shopItem);
    setItem(shopItem)
    setItemName(name)
    setItemEdit({})
  }

  function editItemList(itemList){
    alert(`Edit ${itemList.length} Items`)

  }

  function editItem(shopItem){
    //setItemEdit(shopItem)
    setItemEdit(shopItem)
  }

  function addItem(){
    console.log("ADD ITEM");
  }

  return (
    <div className="container-fluid w-75 m-0 p-2 mx-auto bg-light">
        <section className="w-auto m-0 p-3">
            <h3>Shop Entry Editor</h3>
            <div className="row">
            <ShopList setView={setViewItem} addItem={addItem}/>
            <ShopView item={item} name={itemName} onClick={editItemList} editItem={editItem}/>
            <ShopEdit item={itemEdit}/>
            </div>
        </section>
    </div>
  )
}
