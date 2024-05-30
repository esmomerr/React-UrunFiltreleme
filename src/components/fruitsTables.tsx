import { TableProps, Products } from "./types";

export const FruitsTable = ({inputValue, isProductInstock,} : TableProps) => {
  const fruits: Products = [
    {id: 0, name: "Erik", price: "1$", inStock: true},
    {id: 1, name: "Elma", price: "2$", inStock: false},
    {id: 2, name: "Kiraz", price: "3$", inStock: true},
    {id: 3, name: "Yeni Dünya", price: "4$", inStock: false},
    {id: 4, name: "Karpuz", price: "5$", inStock: true},
    {id: 5, name: "Kavun", price: "6$", inStock: false},
    {id: 6, name: "Portakal", price: "7$", inStock: false},
    {id: 7, name: "Vişne", price: "8$", inStock: false},
  ]
  const filteredFruits = fruits.filter((fruit) => {
    const matchesName = fruit.name.toLowerCase().includes(inputValue.toLowerCase());
    const matchesStock = !isProductInstock || fruit.inStock;
    return matchesName && matchesStock;
});
  return (
  <>
  <table>
    <thead>
      <tr>
        <th>Fruits</th>
      </tr>
    </thead>
    <tbody>
      {filteredFruits.map((fruit) =>(
        <tr key={fruit.id}>
          <td>{`${fruit.name}  ${fruit.price}`}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </>
);
};
