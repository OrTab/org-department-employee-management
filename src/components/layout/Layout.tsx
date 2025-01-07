import { Layout as AntLayout, Spin } from "antd";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const { Content: _Content } = AntLayout;

export const Layout = observer(
  ({ children }: { children: React.ReactNode }) => {
    const {
      rootStore: {
        companyStore: { isLoaded, selectedCompanyId },
      },
    } = useAppContext();
    const location = useLocation();

    const currentPage = location.pathname.split("/").pop()!;

    return !isLoaded || !selectedCompanyId ? (
      <SpinContainer>
        <Spin size='large' />
      </SpinContainer>
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

const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled(_Content)`
  margin: 10px;
`;
