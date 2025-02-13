import todoLogo from "./../assets/agenda.png";
import Button from "./Button";

import { type Todo } from "../App";

interface SidebarProps {
  onCreateNewTodo: () => void;
  onSelectTodo: (todo: Todo) => void;
  todos: Todo[];
  selectedTodoId?: string;
}

export default function Sidebar({
  onCreateNewTodo,
  onSelectTodo,
  todos,
  selectedTodoId,
}: SidebarProps) {
  return (
    <aside className="bg-amber-100 w-[300px] h-screen flex flex-col items-center py-10 px-6 shadow-xl">
      <div className="flex flex-col items-center mb-4">
        <div className="p-2 rounded-full h-20 w-20 bg-amber-400 mb-2">
          <img src={todoLogo} alt="to list logo" className="h-16 w-16" />
        </div>
        <h1 className="text-3xl text-amber-700 font-semibold">Todo List</h1>
      </div>
      <Button variant="primary" onClick={onCreateNewTodo} addStyle="px-7 py-3">
        Add new todo
      </Button>
      <ul className="h-ful w-full border-t border-stone-300 mt-6 flex flex-col gap-1">
        {todos.map((todo) => (
          <button
            className={`w-full ${
              selectedTodoId === todo.id
                ? "bg-amber-400 text-white"
                : "bg-amber-200"
            } py-2 px-3 text-left duration-100`}
            key={todo.id}
            onClick={() => onSelectTodo(todo)}
          >
            {todo.title}
          </button>
        ))}
      </ul>
    </aside>
  );
}
