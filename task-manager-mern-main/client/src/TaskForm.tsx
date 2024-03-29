import React, {useState} from "react";
import Button from "./generic/components/Button/Button";

function TaskForm(props) {
    const {addTask} = props;
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const disabled = (!title || !description) ? true : false;
    return (
        <div className='task-manager-app__form'>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />            
            <Button onClick={() => addTask({title, description})} disabled={!!disabled} label="Add Task"/>
        </div>
    );
}

export default TaskForm;