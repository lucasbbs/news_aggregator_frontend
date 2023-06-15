import { motion } from "framer-motion";
import { styled } from "styled-components";

export const BoxContainer = styled.div`
margin-left: auto;
margin-right: auto;
    width: 100%;
    max-width: 1920px;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background.white};
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

export const TopContainer = styled.div`
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1.8em;
`;

export const BackDrop = styled(motion.div)`
    position: absolute;
    width: 200%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(-5deg);
    top: -400px;
    left: -300px;
    background: rgb(207,106,135);
    background: linear-gradient(58deg, rgba(207,106,135,1) 20%, rgba(196,69,105,1) 100%);
`;
