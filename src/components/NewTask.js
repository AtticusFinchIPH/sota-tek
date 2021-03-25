import './NewTask.css';

const NewTask = () => {
    return (
        <div className="newTask container-md">
            <h2>New Task</h2>
            <form className="newTask__form">
                <input 
                    className="newTask__title"
                    type="text" required="true" placeholder="Add new task ..."
                    name="nt__input__title"
                />
                <div className="newTask__desc flex-column">
                    <label for="nt__textarea__desc">Description</label>
                    <textarea 
                        name="nt__textarea__desc"
                        rows="8"
                    />
                </div>
                <div className="newTask__date flex-column">
                    <label for="nt__input__date">Due Date</label>
                    <input 
                        type="date" required="true" placeholder="Add new task ..."
                        name="nt__input__date"
                    />
                </div>
                <div className="newTask__prio flex-column">
                    <label for="nt__select__prio">Priority</label>
                    <select
                        name="nt__select__prio"
                        defaultValue="Normal"
                    >
                        <option value="High">High</option>
                        <option value="Normal">Normal</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <button
                    className="newTask__add"
                >
                    Add
                </button>
            </form>
        </div>
    )
}
export default NewTask;