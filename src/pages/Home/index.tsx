import { PageContainer } from '@ant-design/pro-components';
import { MicroApp } from '@umijs/max';

const HomePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <MicroApp name="react"></MicroApp>
    </PageContainer>
  );
};

export default HomePage;
