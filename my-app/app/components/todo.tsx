function Todo(props) {
    return (
        <div className="border-2">
            <li className="grid grid-cols-5 grid-item p-6">
                <div className="col-span-4">
                    <input className="w-5 h-5 mr-5 rounded-full" id={props.id} type="checkbox" defaultChecked={props.completed} />
                    <label className="todo-label" id={props.id}>{props.name}</label>
                </div>
                <div className="btn-group col-span-1">
                    <button type="button" className="btn">edit<span className="sr-only">{props.name}</span></button>
                    <button type="button" className="btn btn__danger ml-5">delete <span className="sr-only">{props.name}</span></button>
                </div>
            </li>
        </div>
    );
}

export default Todo;