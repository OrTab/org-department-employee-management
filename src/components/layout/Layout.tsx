import { useState } from "react";
import { Layout as AntLayout, Menu } from "antd";
import { Text } from "../common/Text";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";
import { observer } from "mobx-react-lite";
const { Header, Sider, Content } = AntLayout;

const ROUTES = [
  {
    key: "departments",
    label: "Departments",
  },
  {
    key: "employees",
    label: "Employees",
  },
];

export const Layout = observer(
  ({ children }: { children: React.ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const {
      rootStore: {
        companyStore: { selectedCompanyId },
      },
    } = useAppContext();
    const location = useLocation();
    const navigate = useNavigate();

    const handleMenuClick = (path: string) => {
      navigate(`company/${selectedCompanyId}/${path}`);
    };

    return !selectedCompanyId ? (
      <div>No company selected</div>
    ) : (
      <AntLayout className='layout'>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            background: "#00263e",
          }}
        >
          <Text color='white' type='title'>
            Management System
          </Text>
        </Header>
        <AntLayout>
          <Sider
            width={200}
            style={{ background: "#fff" }}
            collapsed={isCollapsed}
            collapsible
            onCollapse={() => setIsCollapsed(!isCollapsed)}
          >
            <Menu
              selectedKeys={[location.pathname.split("/").pop()!]}
              mode='inline'
              defaultSelectedKeys={["1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={ROUTES.map((route) => ({
                key: route.key,
                label: route.label,
                onClick: () => {
                  handleMenuClick(route.key);
                },
              }))}
            />
          </Sider>
          <Content>{children}</Content>
        </AntLayout>
      </AntLayout>
    );
  }
);
