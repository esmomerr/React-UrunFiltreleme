import { FruitsTable } from "./fruitsTables.js";
import { VegetablesTable } from "./vegetablesTable.js";
import {TableProps} from './types.js'

export const TableWrapper = ({inputValue, isProductInstock} : TableProps) => {
  console.log(inputValue);
  console.log(isProductInstock);
  
  
  return (
  <>
    <FruitsTable 
    inputValue = {inputValue}
    isProductInstock = {isProductInstock}
    />
    <VegetablesTable 
    inputValue = {inputValue}
    isProductInstock = {isProductInstock}
    />
  </>
);
};
