import { useState, useEffect } from 'react';
import { api } from './apis/api';

function App() {
  const [data, setData] = useState();

  const getData = async () => {
    await api
      .get('')
      .then((res) => {
        setData(res.data.response);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <div className='App'>
      <h1>시계열 차트 만들기</h1>
    </div>
  );
}

export default App;
