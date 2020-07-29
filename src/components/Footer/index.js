import styled from 'styled-components';

const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding: 20px 0;
  color: var(--white);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export default FooterBase;
