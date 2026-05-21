import { Flex, Spin } from 'antd';

export const Loading = () => {
  return (
    <Flex
      vertical
      gap={12}
      justify="center"
      align="center"
      style={{ height: '100vh' }}>
      <Spin size="large" />
    </Flex>
  );
};
