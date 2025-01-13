import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import { ROUTES } from '../../routes';
import { useState } from 'react';

const { Sider } = Layout;

type Props = {
  currentPage: string;
};

export const Sidebar = ({ currentPage }: Props) => {
  const navigate = useNavigate();
  const { isMediumUp } = useWindowSize();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const {
    rootStore: {
      companyStore: { selectedCompanyId },
    },
  } = useAppContext();

  const handleMenuClick = (path: string) => {
    navigate(`company/${selectedCompanyId}/${path}`);
  };

  return (
    <SideBar
      width={200}
      collapsed={isMediumUp ? isCollapsed : true}
      collapsible={isMediumUp}
      onCollapse={() => setIsCollapsed(!isCollapsed)}
    >
      <PagesMenu
        selectedKeys={[currentPage]}
        mode="inline"
        items={ROUTES.map((route) => ({
          key: route.key,
          label: route.label,
          onClick: () => {
            handleMenuClick(route.key);
          },
        }))}
      />
    </SideBar>
  );
};

//// STYLES ////

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
