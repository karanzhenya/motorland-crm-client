import React, {useEffect, useState} from 'react';
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

function Tasks() {
    const [tasks, setTasks] = useState<TasksType[]>([])
    const [message, setMessage] = useState<string>('')

    const removeTask = (id: string, taskNumber: number) => {
        axios.delete(`https://motorland-crm.vercel.app/tasks/${id}`).then((res) => {
            setMessage('task ' + taskNumber + ' was removed!')
        }).then(() => {
            setTimeout(() => {
                setMessage('')
            }, 3500)
        })
    }
    useEffect(() => {
        axios.get('https://motorland-crm.vercel.app/tasks').then((res) => {
            setTasks(res.data)
        })
    }, [])
    return (
        <div className="task-table">
            <div className="task-table-container">
                <table>
                    <tr>
                        <th>Номер задачи</th>
                        <th>Артикул</th>
                        <th>Кто поставил</th>
                        <th>Ответил</th>
                        <th>Дата создания</th>
                        <th>Дата ответа</th>
                    </tr>
                    {tasks.map(t =>
                        <tr key={t._id}>
                            <td>{t.task_number}</td>
                            <td>{t.article}</td>
                            <td>{t.task_creator}</td>
                            <td>{t.executor}</td>
                            <td>{t.create_date}</td>
                            <td>{new Date(Number(t.execution_date)).toLocaleString()}</td>
                                   <button onClick={()=> removeTask(t._id, t.task_number)}>X</button>
                        </tr>
                    )}
                </table>
            </div>
            <div>Общее кол-во задач: {tasks.length}</div>
            <div>Общее кол-во задач за месяц: {tasks.filter(t => Number(t.execution_date) >= Date.parse('04.01.2023')).length+10}</div>
            {message && message}

        </div>
    );

}


export default Tasks;
