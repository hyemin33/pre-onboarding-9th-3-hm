import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  text-align: center;
  color: #fff;
  height: 64px;
  background-color: #9ea1ff;
  display: flex;
  align-items: center;
  justify-content: center;

  & > h1 {
    font-size: 18px;
  }
`;

export const Contents = styled.div`
  height: calc(100% - 64px);
  padding: 20px;
`;

export const FilterArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  & > button {
    margin: 0 5px;
  }
`;
export const Button = styled.button`
  width: 100px;
  height: 30px;
  background: none;
  border-radius: 4px;
  border: 1px solid #9ea1ff;
  cursor: pointer;

  &:hover {
    border-color: #6e1ef4;
  }
`;
