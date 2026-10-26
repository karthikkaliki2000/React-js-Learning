import React, { useState } from 'react'

const ToDoList = () => {

  

    const [message,setMessage]=useState({
        text: "",
        id:  ""
    });

    const [list,setList]=useState([]);

    const [editingItem,setEditingItem]=useState({
        id:"",
        isEditing:false,
    });


    const changeMessage=(e)=>{
        setMessage(
            {
                ...message,
            text: e.target.value,
            }
        )

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let newTodo={
            text:message.text,
            id:new Date().getTime().toString(),
        }
        if(newTodo.text===""){
           return <h3>"please add something then only click add"</h3>;
        }
        setList([...list,newTodo]);
        setMessage({
            text:"",
            id:"",
        });
    }

const handleDelete=(id)=>{
    let newTodos=list.filter((item)=>{
        return item.id!==id;
    })

    setList(newTodos);
}

const changeEditState=(id)=>{
    setEditingItem({
        ...editingItem,
        id: id,
        isEditing:true,
    });

    let editableItem=list.find((item)=>item.id===id);
    setMessage({
        ...message,
        text:editableItem.text,
        id:editableItem.id,
    })

}

const handleEdit=(e)=>{
      e.preventDefault();
      let newTodos=list.map((item)=>{
        if(item.id===editingItem.id){
            return {
                text: message.text,
                id: editingItem.id
            }
        }
        else{
            return item;
        }
      })

      setList(newTodos);
      setMessage({
        text:"",
        id:"",
      })
      setEditingItem({
        id:"",
        isEditing:false
      })
}

  return (
    <div>

    <form>

    <input type="text" name="message" id="message" placeholder='Add your message here' value={message.text} onChange={changeMessage}/>

    {editingItem.isEditing? <button onClick={handleEdit} type='submit'>Edit</button>: <button onClick={handleSubmit} type='submit'>Add</button>}
   
    </form>

    <hr/>

    {list.length===0 && <h4>There no items in the list</h4>}

    <ul>
    {
        list.map((item)=>{
            const{text,id}=item;
            return <li key={id} >
            <span>
                {text}
            </span>
            <button onClick={()=>changeEditState(id)}>Edit</button>
             <button onClick={()=>handleDelete(id)}>Delete</button>
            </li>
             
        })
    }
    </ul>
    
    </div>
  )
}

export default ToDoList