import { Dispatch, SetStateAction } from "react";
export type InputAreaProps = {
  inputValue : string,
  setInputValue : Dispatch<SetStateAction<string>>,
  isProductInstock : boolean,
  setIsProductInstock : Dispatch<SetStateAction<boolean>>
}
export type TableProps = {
    isProductInstock : boolean,
    inputValue : string,
  }

export type Products = {
  id: number,
  name: string,
  price: string,
  inStock: boolean
}[];

