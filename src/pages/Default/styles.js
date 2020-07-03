import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const User = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    border-radius: 8px;
    margin: 20px;
  }

  span {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin: 25% 0;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #e1e4e8;
    }

    img {
      width: 60px;
      border-radius: 50%;
      margin: 20px;
    }
  }

  .name {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-weight: bold;
    margin: 20px 0 5px 0;
  }

  .description {
    margin-left: 30px;
    margin-bottom: 5px;
    text-align: justify;
  }

  .language {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-left: 30px;
    margin-bottom: 20px;
  }

  .javascript-dot {
    cursor: pointer;
    background-color: #f1e05a;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .css-dot {
    cursor: pointer;
    background-color: #563d7c;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .php-dot {
    cursor: pointer;
    background-color: #4f5d95;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .html-dot {
    cursor: pointer;
    background-color: #e34c26;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .java-dot {
    cursor: pointer;
    background-color: #b07219;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .typescript-dot {
    cursor: pointer;
    background-color: #2b7489;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .ruby-dot {
    cursor: pointer;
    background-color: #701516;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .cpluplus-dot {
    cursor: pointer;
    background-color: #f34b7d;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .python-dot {
    cursor: pointer;
    background-color: #3572a5;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .jupyter-dot {
    cursor: pointer;
    background-color: #da5b0b;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .objectivecplus-dot {
    cursor: pointer;
    background-color: #6866fb;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .haskell-dot {
    cursor: pointer;
    background-color: #5e5086;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .scala-dot {
    cursor: pointer;
    background-color: #c22d40;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .c-dot {
    cursor: pointer;
    background-color: #555555;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .objectivec-dot {
    cursor: pointer;
    background-color: #438eff;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }
  .gray-dot {
    cursor: pointer;
    background-color: #000;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    margin-right: 5px;
  }

  .forks,
  .stars {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const IconSide = styled.div`
  margin-right: 20px;
`;

export const IconName = styled.div`
  margin-right: 10px;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .description {
    max-width: 600px;
  }
`;
