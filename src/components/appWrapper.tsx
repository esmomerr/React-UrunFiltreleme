import { useState } from 'react';
import { InputArea } from './inputArea';
import { TableWrapper } from './tableWrapper';

export const AppWrapper = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isProductInstock, setIsProductInstock] = useState(false);

  return(
  <>
    <InputArea 
      inputValue = {inputValue}
      setInputValue = {setInputValue}
      isProductInstock = {isProductInstock}
      setIsProductInstock = {setIsProductInstock}
    />
    <TableWrapper 
    inputValue = {inputValue}
    isProductInstock = {isProductInstock}
    />
  </>)
  
  };
