import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import Container from 'react-bootstrap/Container';
import useFetch from '../hooks/useFetch';
import Settings from './Settings';
import PaginationContext from '../Contexts';


function ToDo(props) {

    const [displayCount, setDisplayCount] = useState(3);
    const [showCompleted, setShowCompleted] = useState(true);

    const { setRequest, response } = useFetch({
        url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
    });

    async function addTask(taskDetails) {
        await setRequest({
            url: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
            method: 'POST',
            body: taskDetails,
            runGet: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
        });
    }

    async function modifyTask(indx, updatedTask) {
        await setRequest({
            url:
                'https://todo-server-401n16.herokuapp.com/api/v1/todo/' +
                response[indx]._id,
            method: 'PUT',
            body: updatedTask,
            runGet: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
        });
    }

    async function deleteTask(indx) {
        await setRequest({
            url:
                'https://todo-server-401n16.herokuapp.com/api/v1/todo/' +
                response[indx]._id,
            method: 'DELETE',
            runGet: 'https://todo-server-401n16.herokuapp.com/api/v1/todo',
        });
    }

    return (
        <PaginationContext.Provider
            value={{
                displayCount,
                setDisplayCount,
                showCompleted,
                setShowCompleted,
            }}
        >
            <Container id="main-container">
                <ToDoForm addTask={addTask} />
                <Settings />
                <ToDoList
                    tasks={response}
                    modifyTask={modifyTask}
                    deleteTask={deleteTask}
                />
            </Container >
        </PaginationContext.Provider>

    )
}

export default ToDo;