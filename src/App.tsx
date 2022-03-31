import * as C from './App.styles'; //importando tudo do styled- components
import {useState} from 'react';
import { Item } from './types/item'
import {ListItem } from './Components/ListItem';
import {AddArea} from './Components/AddArea';

const App = () => {

  const[list,setList] = useState<Item[]>([
    { id: 1, name: 'comprar meu próprio notebook', done: false},
    { id: 2, name: 'montar meu setup', done:true}  
    

  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id:list.length + 1,
      name:taskName,
      done: false
    });
    setList(newList);
  }

  
  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>


        {/* AREA DE ADICIONAR NOVA TAREFA*/}
        <AddArea onEnter={handleAddTask}/>





        {/* AREA DE ADICIONAR NOVA TAREFA*/}

        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}

      </C.Area>
    </C.Container>

  );
}

export default App;