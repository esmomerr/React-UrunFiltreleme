import { TableProps, Products } from './types'

export const VegetablesTable = ({inputValue, isProductInstock,} : TableProps) => {
  const vegetables: Products = [
    {id: 0, name: "Biber", price: "1$", inStock: true},
    {id: 1, name: "Patlıcan", price: "2$", inStock: false},
    {id: 2, name: "Ispanak", price: "3$", inStock: false},
    {id: 3, name: "Göbek", price: "4$", inStock: true},
    {id: 4, name: "Domates", price: "5$", inStock: true},
    {id: 5, name: "Dolmalık Biber", price: "6$", inStock: true},
    {id: 6, name: "Charliston Biber", price: "7$", inStock: false},
    {id: 7, name: "Havuç", price: "7$", inStock: true}
  ]
  const filteredVegetables = vegetables.filter((vegetable) => {
    const matchesName = vegetable.name.toLowerCase().includes(inputValue.toLowerCase());
    const matchesStock = !isProductInstock || vegetable.inStock;
    return matchesName && matchesStock;
});
  return (
  <>
  <table>
    <thead>
      <tr>
        <th>Vegatables</th>
      </tr>
    </thead>
    
    <tbody>
      {filteredVegetables.map((vegetable) => {
        if(vegetable.name.toLowerCase().includes(inputValue.toLowerCase())){
          return(
            (
              <tr key={vegetable.id}>
                <td>{`${vegetable.name}  ${vegetable.price}`}  </td>
              </tr>
            )
          )
        }else <></>
      })}
    </tbody>
  </table>
  </>
  );
};
