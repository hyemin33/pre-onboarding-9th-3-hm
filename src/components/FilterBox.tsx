import { Button, Space } from 'antd';

const idArray = ['강남구', '노원구', '성북구', '중원구'];

const FilterBox = () => {
  return (
    <Space align='center'>
      {idArray.map((id: string, i: number) => (
        <Button key={`filter-id` + i}>{id}</Button>
      ))}
    </Space>
  );
};

export default FilterBox;
