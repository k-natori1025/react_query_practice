import React from 'react'
import { useMutation, useQuery } from 'react-query'

const todos = [
  {
    id: "0001",
    name: "Study English",
  },
  {
    id: "0002",
    name: "Go to Gym",
  },
  {
    id: "0003",
    name: "Buy toothpaste",
  },
]

const Todo = () => {

  const todosQuery = useQuery({
    queryKey: ["trask"],
    queryFn: () => [...todos],
  });

  const todosMutation = useMutation({
    mutationFn: () => todos.push({id: "0004", name: "new todo"})
  });

  // console.log(todos);

  return (
    <div>
      <h1>To Do</h1>
      {todosQuery.isLoading ? (
        <p>ローディング中</p>
      ) : (
        <div>
          {todosQuery.data.map((todo) => (
            <p key={todo.id}>{todo.name}</p>
          ))}
          <button onClick={() => todosMutation.mutate()}>追加</button>
        </div>
      )}
    </div>
  )
}

export default Todo
