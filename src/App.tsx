import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export  function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
     <div>App2</div>
   </ThemeProvider>
  )
}
