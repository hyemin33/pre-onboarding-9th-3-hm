import { Button, Space } from 'antd';

const FilterBox = () => {
  return (
    <Space wrap style={{ padding: '20px' }}>
      <Button>중원구</Button>
      <Button>성북구</Button>
      <Button>강남구</Button>
      <Button>노원구</Button>
    </Space>
  );
};

export default FilterBox;
