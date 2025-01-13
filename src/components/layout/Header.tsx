import styled from 'styled-components';
import { mediumUp } from '../../style/breakpoints';
import { Layout, Select } from 'antd';
import { observer } from 'mobx-react-lite';
import { useAppContext } from '../../hooks/useAppContext';

const { Header: _Header } = Layout;

type Props = {
  currentPage: string;
};

export const Header = observer(({ currentPage }: Props) => {
  const {
    rootStore: {
      companyStore: {
        selectedCompany,
        selectedCompanyId,
        companies,
        setSelectedCompanyId,
      },
    },
  } = useAppContext();

  return (
    <AppHeader>
      <HeaderContent>
        <Title>
          {selectedCompany.name} {currentPage}
        </Title>
        <CompaniesSelect
          placeholder="Select a company"
          value={selectedCompanyId}
          onChange={(companyId) => setSelectedCompanyId(companyId as string)}
          options={Object.entries(companies).map(([companyId, company]) => ({
            value: companyId,
            label: company.name,
          }))}
        />
      </HeaderContent>
    </AppHeader>
  );
});

///// STYLES /////

const AppHeader = styled(_Header)`
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

const Title = styled.h2`
  color: white;
`;
