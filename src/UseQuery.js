import React from 'react'
import { useQuery } from 'react-query'

const studentData = [
  {
    id: "00001",
    name: "Tanaka",
    age: "20",
  },
  {
    id: "00002",
    name: "Yoshida",
    age: "19",
  },
  {
    id: "00003",
    name: "Natori",
    age: "21",
  } 
]

const UseQuery = () => {
  // useQueryはデータの取得に使う
  const studentQuery = useQuery({
    queryKey: ["students"],
    // データ取得は非同期で動作してオブジェクトで管理されている
    // クエリ（パラメーター）、ステータス、Promiseオブジェクトみたいなもの
    queryFn: () => {
      // console.log(obj);
      return [...studentData];
    }
  });

  if(studentQuery.status === "pending") return <p>ローディング中...</p>

  if(studentQuery.status === "error") return <p>エラーです！</p>

  return (
    <div>
      {studentQuery.status === "success" && 
        studentQuery.data.map((student) => (
          <h1 key={student.id}>{student.name}</h1>
      ))}
    </div>
  )
}

export default UseQuery
