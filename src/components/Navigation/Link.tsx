import React from 'react';
import { SelectedPage } from '../../shared/types';
import { NavLink } from 'react-router-dom';

type Props = {
  page: string;
  pagelink: string;
  selectedPage: SelectedPage;
  textStyles: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link: React.FC<Props> = ({
  page,
  selectedPage,
  pagelink,
  setSelectedPage,
  textStyles,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

  return (
    <NavLink
      to={`/${pagelink}`}
      className={`${selectedPage === lowerCasePage ? "" : ""} font-semibold text-[14px] pb-[4px] ${textStyles}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
        {({ isActive }) => (
    <span className={isActive ? "border-b-[1.5px] border-[#e14817] pb-2" : ""}>{page}</span>
  )}
    </NavLink>
  );
};

export default Link;