import React, { useReducer, useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
const App = () => {

  function reducer (state,action){


    switch(action.type){

      case "ADDTASK" : return([...state,action.payload])
      case "REMOVETASK" : return(state.filter(todo=>todo.id != action.payload.id))
      case "CHANGESTATUS" : return(
            state.map(todo=>{

                if(todo.id == action.payload.id){
                  return {...todo,status:action.payload.status}

                }

                return todo

            })

      )
      case "EDITTASK" : return (
        state.map(todo=>{

                if(todo.id == action.payload.id){
                  return {...todo,title:action.payload.title}

                }

                return todo

            })

      )

    }
    

  }

  const [todo,setTodo] = useState("")

  const [todos , dispatch] = useReducer(reducer,[])
  console.log("todos current state : ",todos);
  function add_task (){

    let id = Date.now()
    // setTodo({id:"",title:"eat",status:false})
    dispatch({type: "ADDTASK",payload :{id,title:todo,status:false}})

  }
  function removeTodo (id){

    dispatch({type:"REMOVETASK",payload:{id}})


  }
  function changeStatus (id){

    dispatch({type:"CHANGESTATUS",payload:{id,status:true}})


  }
  function edittask (){

    dispatch({type:"EDITTASK",payload:{id:"4",title:"new content"}})


  }
  return (
    <section className='flex justify-center m-[20px]'>
      <div className="flex flex-col w-[50%]">
        <h1 className='my-2 text-center text-5xl'>Todo Reducer</h1>
        <Input onInput ={(e)=>{setTodo(e.target.value)}}/>

        <Button className="my-3.5" variant="success" onClick= {()=>{add_task()}} >Add Task</Button>
        <hr />
        <hr />
        {todos.map((todo)=>(
          <Item variant="outline" className="my-1.5">
            <ItemContent>
            {todo.status  ? <ItemTitle className="text-gray-400 line-through">{todo.title}</ItemTitle> : <ItemTitle>{todo.title}</ItemTitle>}
              
              
            </ItemContent>
            <ItemActions>
              <Button onClick={()=>{removeTodo(todo.id)}} variant="destructive" size="sm">
                Delete Task
              </Button>
              <Button variant="secondary" size="sm" onClick={()=>{changeStatus(todo.id)}}>
                Mark Completed
              </Button>
            </ItemActions>
          </Item>
        

        ))}
      </div>

    </section>
  )
}

export default App;
