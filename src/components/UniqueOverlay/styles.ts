import styled from 'styled-components';
import { motion } from 'framer-motion';

import { LogoSVG, BurgerSVG } from './IconsSVG';

export const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
`;

export const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 12px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 20px;
    min-height: 52px;
`;

export const Logo = styled(LogoSVG)`
    height: 17px;
`;

export const Burguer = styled(BurgerSVG)`
    width: 24px;
    height: 24px;
    cursor: pointer;

    padding-right: 5px;
`;

export const Footer = styled(motion.footer)`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        li {
            list-style: none;
            font-size: 14px;

            & + li{
                margin: 10px 0 0;
            }

            a {
                text-decoration: none;
                color: #393c41;

                &:hover{
                    color: #000;
                }
            }
        }
    }

    margin-bottom: 30px;

    @media (min-width: 600px) {
        ul{
            flex-direction: row;

            li {
                & + li{
                    margin: 0 0 0 30px;
                }
            }
        }
    }
`;
