import styled from 'styled-components';

export const SectionStyled = styled.section`
  h1,
  h2 {
    padding-bottom: 2px;
    font-family: 'Montserrat', sans-serif;
    &::first-letter {
      color: tomato;
    }
  }

  h1 {
    padding-top: 5px;
    text-align: center;
    font-size: 20px;
    &::first-letter {
      color: inherit;
    }
  }

  @media screen and (min-width: 320px) {
    // max-width: 300px;
  }

  @media screen and (min-width: 768px) {
    h1 {
      padding-top: 10px;
      font-size: 26px;
    }
    h1,
    h2 {
      padding-bottom: 5px;
    }
  }

  @media screen and (min-width: 1280px) {
    h1 {
      padding-top: 20px;
      font-size: 30px;
    }
    h1,
    h2 {
      padding-bottom: 10px;
    }
  }
`;
