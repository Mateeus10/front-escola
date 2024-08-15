import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AlunosContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid #fef;
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50px;
  }
`;
export const NovoAluno = styled(Link)`
  display: block;
  padding: 20px 0 10px 0;
`;