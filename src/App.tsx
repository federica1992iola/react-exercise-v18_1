import { DictionaryList } from "./components/DictionaryList";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <>
      <div className="p-2">
        <TodoList />
      </div>
      <div className="p-2">
        <DictionaryList />
      </div>
    </>
  );
};
