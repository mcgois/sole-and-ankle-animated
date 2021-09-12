import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES, WEIGHTS } from '../../constants';
import Icon from '../Icon';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';


const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

// const NavLink = styled.a`
//   font-size: 1.125rem;
//   text-transform: uppercase;
//   text-decoration: none;
//   color: var(--color-gray-900);
//   font-weight: ${WEIGHTS.medium};
//   &:first-of-type {
//     color: var(--color-secondary);
//   }
// `;


const NavLink = ({children, ...delegated}) => {
  return <NavLinkWrapper {...delegated}>
    <MainText>{children}</MainText>
    <SecondaryText>{children}</SecondaryText>
  </NavLinkWrapper>
}

const NavLinkWrapper = styled.a`
  display: block;
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  &:first-of-type {
    color: var(--color-secondary);
  }
  overflow: hidden;
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--from));
  transition: transform 500ms;
  ${NavLinkWrapper}:hover & {
    transform: translateY(var(--to));
    transition: transform 250ms;
  }
`;

const MainText = styled(Text)`
  --from: 0%;
  --to: -100%
`;

const SecondaryText = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: ${WEIGHTS.bold};
  --from: 100%;
  --to: 0%;
`;

export default Header;
