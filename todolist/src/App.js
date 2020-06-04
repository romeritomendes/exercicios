import React, { useState } from 'react';

import Box from './components/Box';
import Card from './components/Card';

import GlobalStyle from './components/styles';


const ST_TODO = 'todo';
const ST_DOING = 'doing';
const ST_DID = 'did';

const INIT_TODO_BOX = [
    {
        name: ST_TODO,
        title: 'Por Fazer',
    },
    {
        name: ST_DOING,
        title: 'Em Execução',
    },
    {
        name: ST_DID,
        title: 'Concluído',
    },
]

const INIT_TODO_LIST = [
    {
        id: 1,
        status: ST_TODO,
        text: 'Testar API de Usuários'
    },
    {
        id: 2,
        status: ST_TODO,
        text: 'Criar Cadastro'
    },
    {
        id: 3,
        status: ST_DOING,
        text: 'Criar Lista de Tarefas'
    },
    {
        id: 4,
        status: ST_DID,
        text: 'Tabela de Pratos'
    },
];

function App() {

    const todoBox = INIT_TODO_BOX;
    const [ todoList, setTodoList ] = useState(INIT_TODO_LIST);

    const [ activeTodo, setActiveTodo ] = useState(null);

    const handleDragStart  = (id) => {
        setActiveTodo(todoList.filter(todo => todo.id === id)[0]);
    }

    const handleDrop = (newStatus) => {
        console.log('drop: ', newStatus)
        
        if (activeTodo.status !== newStatus) {

            activeTodo.status = newStatus;
            const newTodoList = todoList.filter(todo => todo.id !== activeTodo.id);

            newTodoList.push(activeTodo);
            setTodoList(newTodoList);
        }
    }

    const handleDragEnter = (e) => {
        e.target.active = true;
    }

    const handleDragLeave = (e) => {
        //setTodoList(todoList.filter(todo => todo.id !== 'tmp'));

        e.target.active = false;
        e.preventDefault();
    }

    return (
        <div className='content'>
            {
                todoBox.map(box => {
                    return (
                        <Box key={box.name}
                            className={box.name}
                            title={box.title}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={() => handleDrop(box.name)}

                            onDragEnter={(e) => handleDragEnter(e)}
                            onDragLeave={(e) => handleDragLeave(e)}
                        >
                            {
                                todoList.filter(todo => todo.status === box.name)
                                        .map((todo, todoId) => (
                                                <Card
                                                    key={todoId}
                                                    texto={todo.text}
                                                    onDragStart={() => handleDragStart(todo.id)}
                                                />
                                            )
                                        )
                            }
                        </Box>
                    )
                })
            }
            <GlobalStyle />
        </div>
    );
}

export default App;