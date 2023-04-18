import React from "react";
import Background from "./components/Background";
import MainContainer from "./components/MainContainer";
import { CartProvider } from "./context/cart";
import { CategorieProvider } from "./context/categories";
import { CategoryProvider } from "./context/category";
import { DoneProvider } from "./context/done";
import { MenuProvider } from "./context/menu";
import { OpenProvider } from "./context/open";
import { RequestsProvider } from "./context/requests";
import { TotalProvider } from "./context/total";
import { UniqueIdProvider } from "./context/uniqueId";
import { GlobalStyle } from "./global/GlobalStyle";

function App() {
  return (
    <OpenProvider>
      <DoneProvider>
        <CartProvider>
          <CategoryProvider>
            <UniqueIdProvider>
              <TotalProvider>
                <RequestsProvider>
                  <CategorieProvider>
                    <MenuProvider>
                      <GlobalStyle />
                      <Background>
                        <MainContainer />
                      </Background>
                    </MenuProvider>
                  </CategorieProvider>
                </RequestsProvider>
              </TotalProvider>
            </UniqueIdProvider>
          </CategoryProvider>
        </CartProvider>
      </DoneProvider>
    </OpenProvider>
  );
}

export default App;
