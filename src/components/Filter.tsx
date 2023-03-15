import { Button, FilterArea } from '../apis/commons/commonStyles';

const idArray = ['강남구', '노원구', '성북구', '중원구'];

const Filter = () => {
  return (
    <FilterArea>
      {idArray.map((id: string, i: number) => (
        <Button key={`filter-id` + i}>{id}</Button>
      ))}
    </FilterArea>
  );
};

export default Filter;
