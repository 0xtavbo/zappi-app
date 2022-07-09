import styled from "styled-components";

export const NavbarContainerStyled = styled.div`
  height: 100%;
  background-color: #18191a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  a {
    padding: 1rem 1.5rem;
  }

  a:first-child {
    background: var(--orange-bg);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 5px;
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1rem;
  color: ${(props) => (props.home ? "#ff9300" : "#ffb701")};
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    background-color: red;
    height: 20px;
    width: 20px;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid white;
    top: 0;
    color: white;
    font-size: 1rem;
  }
`;

export const UserNavStyled = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 15px;
  cursor: pointer;

  span {
    color: white;
    font-size: 1rem;
    margin-right: 20px;
  }
`;
