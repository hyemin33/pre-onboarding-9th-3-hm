import { useState, useEffect } from 'react';
import { api } from './apis/api';
import ChartBox from './components/charts/ChartBox';

function App() {
  const [data, setData] = useState([]);

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

  return (
    <div className='App' style={{ height: 'calc(100vh - 100px)' }}>
      <h1>시계열 차트 만들기</h1>
      <ChartBox data={data} />
    </div>
  );
}

export default App;
