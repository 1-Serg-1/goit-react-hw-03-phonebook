import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
   font-family: Roboto, sans-serif;
   background-color: ${p => p.theme.colors.background};
   background-image: 
		linear-gradient(135deg, rgba(0,0,0, 0.2) 0%, rgba(0,0,0, 0.1) 25%, rgba(0,0,0, 0.2) 50%, rgba(0,0,0, 0.1) 75%, rgba(0,0,0, 0.2) 100%), 
		linear-gradient(90deg, #192129, #303641, #484e57);
	background-size: 8px 8px, 100%;
   text-align: center;
   padding-top: 30px;
   padding-bottom: 30px;
   color: ${p => p.theme.colors.primary}
}
h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    color: ${p => p.theme.colors.white}
}
 ul {
    margin: 0;
    padding: 0;
    list-style: none;
 }
`;
