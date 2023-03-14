import { useState, useEffect } from 'react';

import { Layout } from 'antd';
import { api } from './apis/api';
const { Header, Content } = Layout;

import ChartBox from './components/charts/ChartBox';
import FilterBox from './components/FilterBox';

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
      <Header style={headerStyle}>시계열 차트 만들기</Header>
      <Content style={contentStyle}>
        <FilterBox />
        <ChartBox data={data} />
      </Content>
    </Layout>
  );
}

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
  minHeight: 'calc(100% - 64px)',
  padding: '20px',
};

export default App;
