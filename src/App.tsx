import { useState } from "react";
import NoTodo from "./components/NoTodo";
import Sidebar from "./components/Sidebar";
import NewTodo from "./components/NewTodo";
import SelectedTodo from "./components/SelectedTodo";

export type Todo = {
  id: string;
  title: string;
  description: string;
  dueDate?: string;
};

type SelectedTodo = null | undefined | Todo;

type TodoState = {
  selectedTodo: SelectedTodo;
  todoList: Todo[];
};

//MAIN APP
function App() {
  const [todoState, setTodoState] = useState<TodoState>({
    selectedTodo: undefined,
    todoList: [],
  });

  const handleCreateNewTodo = () => {
    setTodoState((prevState) => ({
      ...prevState,
      selectedTodo: null,
    }));
  };

  const handleCancelTodo = () => {
    setTodoState((prevState) => {
      if (prevState.todoList.length === 0) {
        return {
          ...prevState,
          selectedTodo: undefined,
        };
      } else {
        return {
          ...prevState,
          selectedTodo: prevState.todoList[prevState.todoList.length - 1],
        };
      }
    });
  };

  const handleAddNewTodo = (todo: Todo) => {
    setTodoState((prevState) => ({
      selectedTodo: todo,
      todoList: [...prevState.todoList, todo],
    }));
  };

  const handleUpdateTodo = (updatedTodo: Todo) => {
    setTodoState((prevState) => {
      const updatedTodoList = prevState.todoList.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        } else {
          return todo;
        }
      });

      return {
        selectedTodo: updatedTodo,
        todoList: updatedTodoList,
      };
    });
  };

  const handleDeleteTodo = (id: string) => {
    setTodoState((prevState) => {
      if (prevState.todoList.length === 1) {
        return {
          selectedTodo: undefined,
          todoList: prevState.todoList.filter((todo) => todo.id !== id),
        };
      } else {
        return {
          selectedTodo: prevState.todoList[prevState.todoList.length - 2],
          todoList: prevState.todoList.filter((todo) => todo.id !== id),
        };
      }
    });
  };

  const handleSelectTodo = (todo: Todo) => {
    setTodoState((prevState) => {
      return {
        ...prevState,
        selectedTodo: todo,
      };
    });
  };

  //RENDERS
  let content;

  if (todoState.selectedTodo === undefined) {
    content = <NoTodo onCreateNewTodo={handleCreateNewTodo} />;
  } else if (todoState.selectedTodo === null) {
    content = (
      <NewTodo onAddTodo={handleAddNewTodo} onCancelTodo={handleCancelTodo} />
    );
  } else {
    content = (
      <SelectedTodo
        selectedTodo={todoState.selectedTodo}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    );
  }

  return (
    <main className="flex">
      <Sidebar
        onCreateNewTodo={handleCreateNewTodo}
        onSelectTodo={handleSelectTodo}
        todos={todoState.todoList}
        selectedTodoId={todoState.selectedTodo?.id}
      />
      {content}
    </main>
  );
}

export default App;
