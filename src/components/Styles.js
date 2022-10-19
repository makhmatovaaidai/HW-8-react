import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  padding: 1em;
  background: #6c63ff;
  border-radius: 5px;
  margin: 0 auto;
  position: relative;
  top: 90px;
`;

export const Card = styled.header`
  & form {
    display: flex;
    width: 100%;
  }
  input {
    border: 4px solid #519;
    width: 550px;
    height: 70px;
    font-size: 1.6rem;
    margin: 0 auto;
  }
  button {
    width: 200px;
    font-size: 1.6rem;
    border: 4px solid #519;
  }
`;
export const List = styled.div`
  margin-top: em;
`;

export const NameTask = styled.span`
  text-decoration: ${(props) => (props.checked ? " line-through" : "none")};
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
  padding: 1em;
  border-radius: 9px;
  background: #519;
  color: white;
  text-transform: capitalize;
  font-size: 1.6rem;
`;
