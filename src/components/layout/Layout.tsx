import { useState } from "react";
import { Layout as AntLayout, Menu, Select, Spin } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import { mediumUp } from "../../style/breakpoints";
import { ROUTES } from "../../routes";

const { Header, Sider, Content } = AntLayout;

export const Layout = observer(
  ({ children }: { children: React.ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const {
      rootStore: {
        companyStore: {
          isLoaded,
          selectedCompanyId,
          setSelectedCompanyId,
          companies,
          selectedCompany,
        },
      },
    } = useAppContext();
    const location = useLocation();
    const navigate = useNavigate();
    const { isMediumUp } = useWindowSize();

    const currentPage = location.pathname.split("/").pop()!;

    const handleMenuClick = (path: string) => {
      navigate(`company/${selectedCompanyId}/${path}`);
    };

    return !isLoaded || !selectedCompanyId ? (
      <SpinContainer>
        <Spin size='large' />
      </SpinContainer>
    ) : (
      <MainLayout>
        <AppHeader>
          <HeaderContent>
            <Title>
              {selectedCompany.name} {currentPage}
            </Title>
            <CompaniesSelect
              placeholder='Select a company'
              value={selectedCompanyId}
              onChange={(companyId) =>
                setSelectedCompanyId(companyId as string)
              }
              options={Object.entries(companies).map(
                ([companyId, company]) => ({
                  value: companyId,
                  label: company.name,
                })
              )}
            />
          </HeaderContent>
        </AppHeader>
        <AntLayout>
          <SideBar
            width={200}
            collapsed={isMediumUp ? isCollapsed : true}
            collapsible={isMediumUp}
            onCollapse={() => setIsCollapsed(!isCollapsed)}
          >
            <PagesMenu
              selectedKeys={[currentPage]}
              mode='inline'
              defaultSelectedKeys={["1"]}
              items={ROUTES.map((route) => ({
                key: route.key,
                label: route.label,
                onClick: () => {
                  handleMenuClick(route.key);
                },
              }))}
            />
          </SideBar>
          <Content>{children}</Content>
        </AntLayout>
      </MainLayout>
    );
  }
);

//// STYLES ////

const AppHeader = styled(Header)`
  && {
    height: unset;
    display: flex;
    align-items: center;
    background: #00263e;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  ${mediumUp} {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

const CompaniesSelect = styled(Select)`
  && {
    width: 200px;
  }
`;

const SideBar = styled(Sider)`
  && {
    background: #fff;
    border-right: 1px solid #0000002b;
  }
`;

const PagesMenu = styled(Menu)`
  && {
    height: 100%;
    border-right: 0;
  }
`;

const Title = styled.h2`
  color: white;
`;

const MainLayout = styled(AntLayout)`
  min-height: 100vh;
`;

const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
