import React from 'react'
import { useQuery, useQueryClient } from 'react-query';

const Test = () => {

  const queryClient = useQueryClient();
  console.log(queryClient);

  const fetchTodos = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data;
  };

  const todos = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return (
    <div>
      {todos.isLoading ? (
        <h1>読み込み中</h1>
      ) : (
        todos.data.map((todo) =>(
          <p key={todo.id}>{todo.title}</p>
        ))
      )}
    </div>
  )
}

export default Test
