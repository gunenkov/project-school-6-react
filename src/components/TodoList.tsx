import { useState } from 'react';
import Todo from './Todo';

function TodoList() {
  // определим состояние - массив todos и функция для его изменения setTodos
  const [todos, setTodos] = useState([
    { text: 'Купить молоко', completed: true },
    { text: 'Сделать домашнее задание', completed: false },
    { text: 'Выгулять собаку', completed: false },
  ]);

  // функция для изменения todo
  function changeTodo(index: number) {
    // копируем массив в новую переменную
    const newTodos = [...todos];
    // меняем значение в массиве todos
    newTodos[index].completed = true;
    // обновляем состояние - в виду этого компонент будет перерисован
    setTodos(newTodos);
  }

  return (
    <>
      <div>
        {/* пример превращения массива с пропсами в компоненты */}
        {todos.map((todo, index) => (
          <div key={index}>
            <Todo text={index + ' ' + todo.text} completed={todo.completed} />
            {/*Кнопка переехала */}
            <button disabled={todo.completed} onClick={() => changeTodo(index)}>
              Выполнить
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;
