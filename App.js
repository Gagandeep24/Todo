import { useState } from 'react';
import { Button,FormControl,InputLabel,Input} from '@material-ui/core'
import './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setinput]= useState('');
  const addTodo = (event) =>{

    event.preventDefault();
    setTodos([...todos, input]);
    setinput('')

  }
  return (
    <div className="App">
    <h1>TODO-LIST</h1>
<form>
    <FormControl>
  <InputLabel>ADD A TODO </InputLabel>
  <Input  value={input} onChange={event => setinput(event.target.value)}/>
</FormControl>
    <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
  Add todo
</Button>
    <ul>
      {todos.map(todo => <li>{todo}</li>)}
    </ul>
</form>
    </div>
  );
}

export default App;
