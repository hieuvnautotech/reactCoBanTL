import ToDoList from './components/ToDoList'
import './App.css';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import {useState, useCallback, useEffect} from 'react'
import {v4} from 'uuid'
const TODO_APP_STORAGE_KEY = 'TODO_APP'

function App() {
  const [toDoList, setTodoList] = useState([])
  const [textInPut, setTextInput] = useState('')

  useEffect(() => {
    const storagedToDoList = localStorage.getItem(TODO_APP_STORAGE_KEY)
    if(storagedToDoList) {
      setTodoList(JSON.parse(storagedToDoList))
    }
  },[])

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(toDoList))
  },[toDoList])

  const onChangeInput = useCallback((e) => {
    setTextInput(e.target.value)
  },[])
  const onClickBtn = useCallback( (e) => {
    setTodoList([
      {
      id: v4(),  
      name: textInPut,
      isCompleted: false
    },
      ...toDoList,
    
    ])
    setTextInput ("")
  },[textInPut, toDoList])

  const onCheckBtnClick = useCallback( (id) => {
    setTodoList((prevState) => prevState.map((todo) =>
      todo.id === id ? {...todo, isCompleted: true} : todo
    ))
  },[])



  return (
  <>
    
      <h3>Tạo danh sách việc làm</h3>
    
    
      <Textfield 
        css={{ padding: "2px 4px 2px" }}
        name="add-Todo"
        placeholder='Thêm việc làm'
        value={textInPut}
        onChange={onChangeInput}
        elemAfterInput={
          <Button
            isDisabled={!textInPut}
            appearance='primary'
            onClick={onClickBtn}
          >
            Thêm
          </Button>
        }
      />
    
    
      <ToDoList toDoList={toDoList} onCheckBtnClick={onCheckBtnClick}/>
    
  </>
    
  );
}

export default App;
