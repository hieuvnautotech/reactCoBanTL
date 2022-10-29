import ToDoList from './components/ToDoList'
import './App.css';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import {useState} from 'react'
import {v4} from 'uuid'

function App() {
  const [toDoList, setTodoList] = useState([])
  const [textInPut, setTextInput] = useState('')
  const onChangeInput = (e) => {
    setTextInput(e.target.value)
  }
  const onClickBtn = (e) => {
    setTodoList([{
      id: v4(),  
      name: textInPut,
      isCompleted: false,
      ...toDoList,
    }
    ])
  }
  return (
  <>
    <div>
      <h3>Tạo danh sách việc làm</h3>
    </div>
    <div>
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
    </div>
    <div>
      <ToDoList toDoList={toDoList} />
    </div>
  </>
    
  );
}

export default App;
