import styled from "styled-components";

export const Container = styled.div`
  width: 70%;

  @media (max-width: 945px) {
    width: 100%;
  }
`;

export const Header = styled.header`
  height: 13%;
  background: var(--bg-container);
  box-shadow: 0px 2.60958px 7.24883px rgba(0, 0, 0, 0.08);
  padding-left: 50px;
  display: flex;
  align-items: center;

  @media (max-width: 945px) {
    display: flex;
    justify-content: flex-end;
    padding: 0;
  }
`;

export const SearchBox = styled.div`
  display: flex;
`;

export const Input = styled.input`
  height: 52.14px;
  width: 405.2px;
  padding: 0 40px;
  border: 0.912834px solid #d1d1d1;
  border-radius: 4.34533px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;

  @media (max-width: 945px) {
    width: 80%;
  }
`;

export const IconBox = styled.div`
  text-align: center;
  width: 63.01px;
  height: 52.14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-red);
  border-radius: 4.34533px;

  border-start-start-radius: 0;
  border-end-start-radius: 0;
  color: var(--bg-container);
  cursor: pointer;
`;

export const Section = styled.section`
  height: 76%;
  background-color: var(--bg-primary-gray);
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const CardContainer = styled.div`
  padding: 10px;
  max-height: 290px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 20px;
  }

  @media (max-width: 945px) {
    max-height: 100%;
  }
`;

export const Footer = styled.footer`
  height: 11%;
  display: flex;
  align-items: center;
  padding-left: 50px;

  box-shadow: 0px 2.60958px 7.24883px rgba(0, 0, 0, 0.08);
  border-right: 1px solid var(--bg-primary-gray);
`;

export const Pages = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 30px;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;

  @media (max-width: 945px) {
    display: none;
  }
`;

export const PageBox = styled.div`
  width: 73px;
  height: 34px;
  background: var(--bg-container);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonNav = styled.div`
  width: 73px;
  height: 34px;
  background: var(--bg-red);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .icon {
    font-size: 1.5rem;
    color: #f5f5f5;
    cursor: pointer;
  }
`;

export const Profile = styled.div`
  height: 40px;
  width: 161px;
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    max-width: 60%;
    max-height: 100%;
    border-radius: 50%;
  }
`;

export const Cart = styled.div`
  position: absolute;
  margin: 10px 30px;
  font-size: 2rem;
  left: 0;
  color: var(--bg-red);
  display: none;

  @media (max-width: 945px) {
    display: block;
  }
`;
