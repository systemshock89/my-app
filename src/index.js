import { createRoot } from "react-dom/client";
import styled from 'styled-components';
import App from './App';

import "./index.css";
import { Button } from "./App";
import { StrictMode } from "react";

const BigButton = styled(Button)`
    margin: 0 auto;
    width: 245px;
    text-align: center;
`;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <StrictMode>
        <App />
        <BigButton as="a">Отправить отчет</BigButton>
    </StrictMode>
);
