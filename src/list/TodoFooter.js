function TodoFooter({todos,onClearCompleted}) {

  const complitedSize = todos.filter((todo) => todo.isComplited).length;
  return (
    <div className="todoFooter">
      <span>{complitedSize} / {todos.length} Completed</span>
      <button onClick={onClearCompleted}>Clear Completed</button>
    </div>
  )
}

export default TodoFooter;