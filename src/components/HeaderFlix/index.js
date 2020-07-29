import styled from 'styled-components';
import Button from '../Button';
import LogoFired from '../LogoFired'

const HeaderFlix = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    background-color: var(--black);
    border-bottom: 4px solid var(--primary);

    @media (max-width: 800px) {
        justify-content: center;
        padding: 15px 16px;

        & > ${LogoFired} {
            max-width: 85px;
        }

        & > ${Button} {
            position: fixed;
            width: 100%;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--primary);
            border-radius: 0;
            border: 0;
            text-align: center;

            &:hover {
            opacity: .8;
            }
        }
    }
`;

export default HeaderFlix; 