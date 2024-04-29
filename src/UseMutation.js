import React, { useRef } from 'react'
import { useMutation } from 'react-query';

const UseMutation = () => {
  // データを投稿、更新する時に使う
  const taskRef = useRef();
  // オブジェクトで投稿内容やデータ送信の進捗を管理している
  const taskMutation = useMutation({
    mutationFn: () => {
      return taskRef.current.value;
    },
    onSuccess: (data) => {
      console.log(data);
    }
  });
  // console.log(taskMutation)

  return (
    <div>
      <h1>Todo</h1>
      <input type="text" ref={taskRef}/>
      <button onClick={()=> taskMutation.mutate(taskRef)}>作成</button>
    </div>
  )
}

export default UseMutation
