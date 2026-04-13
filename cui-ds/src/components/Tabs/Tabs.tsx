import React from 'react';
import styled from 'styled-components';

export interface TabItem {
  label: string;
  value: string;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (value: string) => void;
}

const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
  gap: ${({ theme }) => theme.spacing['4']};
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 12px 16px;
  background: none;
  border: none;
  border-bottom: 2px solid ${({ $active, theme }) => ($active ? theme.semantic.brand.primary : 'transparent')};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ $active, theme }) => ($active ? theme.fontWeight.bold : theme.fontWeight.medium)};
  color: ${({ $active, theme }) => ($active ? theme.semantic.brand.primary : theme.semantic.text.secondary)};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: -1px;

  &:hover {
    color: ${({ theme }) => theme.semantic.brand.primary};
  }
`;

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange }) => (
  <TabList role="tablist">
    {tabs.map((tab) => (
      <Tab
        key={tab.value}
        role="tab"
        $active={activeTab === tab.value}
        aria-selected={activeTab === tab.value}
        onClick={() => onChange(tab.value)}
      >
        {tab.label}
      </Tab>
    ))}
  </TabList>
);
