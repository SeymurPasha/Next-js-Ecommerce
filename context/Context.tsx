import React, {
  ReactNode, useState, createContext,
} from 'react';

interface MainContextInterface {
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible:boolean) => void;
  cart:any;
  setCart:(cart:any) => void;
}

const defaultState = {
  isModalVisible: false,
  setIsModalVisible: () => null,
  cart: [],
  setCart: () => null,
};

const MainContext = createContext<MainContextInterface>(defaultState);

const MainProvider = ({ children } : { children:ReactNode }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cart, setCart] = useState<Object[] | []>([]);

  return (
    <MainContext.Provider value={{
      isModalVisible,
      setIsModalVisible,
      cart,
      setCart,
    }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainProvider, MainContext };