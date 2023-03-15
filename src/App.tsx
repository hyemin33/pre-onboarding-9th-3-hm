import { useState, useEffect } from 'react';
import { api } from './apis/api';
import { Contents, Header, Layout } from './apis/commons/commonStyles';

import Chart from './components/charts/Chart';
import Filter from './components/Filter';

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
    <Layout style={{ height: '100vh' }}>
      <Header>
        <h1>시계열 차트 만들기</h1>
      </Header>
      <Contents>
        <Filter />
        <Chart data={data} />
      </Contents>
    </Layout>
  );
}

export default App;
