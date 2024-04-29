import './App.css';
import UseQuery from './UseQuery';
import UseMutation from './UseMutation';
import Todo from './Todo';
import { useQuery } from 'react-query';
import Test from './Test';

const usersData = [
  {
    id: "01",
    name: "AAA",
    age: 22,
  },
  {
    id: "02",
    name: "BBB",
    age: 32,
  },
  {
    id: "03",
    name: "CCC",
    age: 26,
  },
]

function App() {

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return [...usersData];
    },
    // データ取得前に初期データを先に表示させる
    placeholderData: [
      {
        id: "000",
        name: "sample",
        age: 99,
      }
    ]
  });
  // console.log(usersQuery.data);

  if(usersQuery.status === "pending") return <p>ローディング中...</p>

  if(usersQuery.status === "error") return <p>エラーです</p>

  return (
    <div className="App">
      <UseQuery />
      <UseMutation />
      <Todo />
      {usersQuery.data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <Test />
    </div>
  );
}

export default App;
