import styled from "styled-components";

export const Container = styled.nav`
  height: 105px;
  width: 90%;
  background-color: var(--bg-container);
  margin: 31px 0;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5.44px;

  .icon {
    font-size: 4rem;
    color: var(--bg-red);
    cursor: pointer;
  }

  .previous {
    position: absolute;
    left: 0;
  }
  .next {
    position: absolute;
    right: 0;
  }

  @media (max-width: 945px) {
    overflow-x: scroll;

    height: 80px;

    svg {
      display: none;
    }
  }
`;

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 3.5rem;
`;

export const Li = styled.li`
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 945px) {
    font-size: 12px;
  }
`;
