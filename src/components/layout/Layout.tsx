import { Layout as AntLayout } from 'antd';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { PageLoader } from '../PageLoader';

const { Content: _Content } = AntLayout;

export const Layout = observer(
  ({ children }: { children: React.ReactNode }) => {
    const {
      rootStore: {
        companyStore: { shouldShowPageLoader },
      },
    } = useAppContext();
    const location = useLocation();

    const currentPage = location.pathname.split('/').pop()!;

    return shouldShowPageLoader ? (
      <PageLoader />
    ) : (
      <MainLayout>
        <Header currentPage={currentPage} />
        <AntLayout>
          <Sidebar currentPage={currentPage} />
          <Content>{children}</Content>
        </AntLayout>
      </MainLayout>
    );
  }
);

//// STYLES ////

const MainLayout = styled(AntLayout)`
  min-height: 100vh;
`;

const Content = styled(_Content)`
  margin: 10px;
`;
