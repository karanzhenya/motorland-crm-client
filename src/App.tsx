import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";

type TasksType = {
    _id: string,
    task_number: number,
    article: number,
    task_creator: string,
    executor: string,
    create_date: string,
    execution_date: string
}

function App() {
    const [tasks, setTasks] = useState<TasksType[]>([])
    const [message, setMessage] = useState<string>('')



    const removeTask = (id: string, taskNumber: number) => {
        axios.delete(`https://motorland-crm.vercel.app/tasks/${id}`).then((res) => {
            setMessage('task ' + taskNumber + ' was removed!')
        }).then(() => {setTimeout(() => {setMessage('')}, 3500)})
    }
    useEffect(() => {
        axios.get('https://motorland-crm.vercel.app/tasks').then((res) => {
            setTasks(res.data)
        })
    }, [tasks])
    return (
        <div className="App">
            <h2>Выполненные задачи</h2>
            <table className="table">
                <tr>
                    <th>Номер задачи</th>
                    <th>Артикул</th>
                    <th>Кто поставил</th>
                    <th>Ответил</th>
                </tr>
                {tasks.map(t =>
                    <tr>
                        <td>{t.task_number}</td>
                        <td>{t.article}</td>
                        <td>{t.task_creator}</td>
                        <td>{t.executor}</td>
                        <button onClick={() => {
                            removeTask(t._id, t.task_number)
                        }}>X
                        </button>
                    </tr>
                )}
            </table>
            {message && message}
        </div>
    )
}

export default App
