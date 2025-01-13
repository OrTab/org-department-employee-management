import { Spin } from 'antd';
import styled from 'styled-components';

export const PageLoader = () => {
  return (
    <SpinContainer>
      <Spin size="large" />
    </SpinContainer>
  );
};

/// STYLES ///

const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
