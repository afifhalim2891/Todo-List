import Button from "./Button";
import boxIcon from "./../assets/box.png";

interface NoTodoProps {
  onCreateNewTodo: () => void;
}

export default function NoTodo({ onCreateNewTodo }: NoTodoProps) {
  return (
    <div className="bg-amber-50 flex flex-col items-center justify-center text-center w-full">
      <img src={boxIcon} alt="box icon" className="h-48" />
      <h3 className="text-3xl text-amber-700 font-bold mb-6">
        You have no todo!
      </h3>
      <p className="mb-6 w-2/5 text-stone-500 text-sm">
        "Looks like your todo list is empty! Take a moment to relax or add a new
        task to get started. Remember, every big accomplishment begins with a
        single step. What would you like to add to your list today?"
      </p>
      <Button variant="primary" onClick={onCreateNewTodo}>
        Add new todo
      </Button>
    </div>
  );
}
