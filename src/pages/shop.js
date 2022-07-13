import React, { useState } from 'react'
import ItemList from './Shop/ItemList'
import ItemView from './Shop/ItemView'
import Edit from './Shop/Edit'

const Shop = (props) => {
  const [item, setItem] = useState({})
  const [itemName, setItemName] = useState("")
  const [itemEdit, setItemEdit] = useState({})
  let shopEditIsVisible = false

  function setViewItem(shopItem, name){
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
            <ItemList setView={setViewItem} addItem={addItem}/>
            <ItemView item={item} name={itemName} onClick={editItemList} editItem={editItem}/>
            <Edit item={itemEdit}/>
            </div>
        </section>
    </div>
  )
}

export default Shop;