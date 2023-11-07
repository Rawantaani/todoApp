
import axios from "axios";
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'


let nextId = 0;
function App() {

  const [myList, setmyList] = useState([]);
  const [myCheckList, setmyCheckList] = useState([]);
  const [myItem, setmyItem] = useState('');
  const additem = () => {
    setmyList([...myList, { id: nextId++, itemName: myItem, isPacket: false }])

  }
  const deleteItem = (id) => {
    setmyList(myList.filter((x) => x.id != id))
  }
  const deleteItem2 = (id) => {
    setmyCheckList(myCheckList.filter((x) => x.id != id))
  }
  const itemCheck = (index,id) => {

    const newData = [...myList];
    newData[index].isPacket =true
    setmyCheckList([...myCheckList,{id:newData[index].id,itemName:newData[index].itemName,isPacket:newData[index].isPacket}])

    setmyList(myList.filter((x) => x.id != id))
   

  }


  return (
    <>

      <div className="app">
        <div className="add">
          <input type="text" placeholder="Add Item" value={myItem} onChange={(e) => setmyItem(e.target.value)} />
          <button onClick={additem}>+</button>


        </div>


        <div className="container">
          <div className="ps-2  " style={{fontFamily:'Playfair, ital'}}>To Do :</div>
          {

            myList.map((item,ind) =>

              <div className="item" key={item.id}>
                <span className="text text-dark" ><input className="ch me-2" type="checkbox" onChange={() => itemCheck(ind,item.id)} />{item.itemName}

                </span>
                <button className="it ms-2" onClick={() => deleteItem(item.id)}>x</button>

              </div>





            )
          }
          <div className="ps-2 mt-5 " style={{fontFamily:'Playfair, ital'}}>Compleate :</div>
          {
            myCheckList.map((item) =>
           

              <div className="item"  key={item.id}>
                <span className="text text-dark"><del>{item.itemName}</del>

                </span>
                <button className="it ms-2" onClick={() => deleteItem2(item.id)}>x</button>

              </div>






            )
          }
        </div>

      </div>
    </>
  )
}

export default App
