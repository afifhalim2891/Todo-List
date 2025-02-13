import { useRef, useState } from "react";
import { type Todo } from "../App";
import Button from "./Button";
import { FaPencilAlt } from "react-icons/fa";

interface SelectedTodoProps {
  selectedTodo: Todo;
  onUpdateTodo: (updatedTodo: Todo) => void;
  onDeleteTodo: (id: string) => void;
}

//COMPONENT
export default function SelectedTodo({
  selectedTodo,
  onUpdateTodo,
  onDeleteTodo,
}: SelectedTodoProps) {
  const [enableEdit, setEnableEdit] = useState<boolean>(false);

  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    setEnableEdit(true);
  };

  const handleSave = () => {
    setEnableEdit(false);
    const editedTodo = {
      id: selectedTodo.id,
      title: title.current!.value,
      description: description.current!.value,
      dueDate: dueDate.current!.value,
    };
    onUpdateTodo(editedTodo);
  };

  //CLASS
  const inputClass = `bg-white border border-slate-500 rounded py-1 px-3 w-full focus:outline-none focus:border focus:border-amber-500`;

  const divClass =
    "bg-amber-50 border border-amber-300 rounded py-1 px-3 w-full text-gray-500";

  const headingClass =
    "flex items-start gap-2 font-semibold text-amber-700 text-xl mb-2";

  return (
    <section className=" w-full py-16 px-20">
      <div className="py-3">
        <h3 className={headingClass}>Title {enableEdit && <FaPencilAlt />}</h3>
        {enableEdit ? (
          <input
            className={inputClass}
            type="text"
            defaultValue={selectedTodo.title}
            ref={title}
          />
        ) : (
          <div className={divClass}>{selectedTodo.title}</div>
        )}
      </div>
      <div className="py-3">
        <h3 className={headingClass}>
          Description {enableEdit && <FaPencilAlt />}
        </h3>
        {enableEdit ? (
          <textarea
            className={inputClass + " h-60"}
            ref={description}
            defaultValue={selectedTodo.description}
          />
        ) : (
          <div className={divClass + " h-60"}>{selectedTodo.description}</div>
        )}
      </div>
      <div className="py-3">
        <h3 className={headingClass}>
          Due date {enableEdit && <FaPencilAlt />}
        </h3>
        {enableEdit ? (
          <input
            type="date"
            className={inputClass}
            defaultValue={selectedTodo.dueDate}
            ref={dueDate}
          />
        ) : (
          <div className={divClass}>{selectedTodo.dueDate}</div>
        )}
      </div>

      <div className="flex justify-end gap-2 mt-10">
        <Button
          variant="primary"
          addStyle="w-30"
          onClick={!enableEdit ? handleEdit : handleSave}
        >
          {enableEdit ? "Save" : "Edit"}
        </Button>
        <Button
          variant="secondary"
          addStyle="w-30"
          onClick={() => {
            onDeleteTodo(selectedTodo.id);
          }}
        >
          Delete
        </Button>
      </div>
    </section>
  );
}
