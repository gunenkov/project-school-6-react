// определим интерфейс пропса
interface TodoProps {
  text: string;
  completed: boolean;
}

// используем пропсы в компоненте - теперь нельзя создать компонент, не указав значения text и completed
function Todo(props: TodoProps) {
  return (
    <>
      {/* Этот компонент теперь строчный */}
      <span>{props.text}</span>
    </>
  );
}

export default Todo;
