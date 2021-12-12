import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCart, SelectCart } from "../../store/cartStoreSlice";

const Cart: React.FC = () => {
  const cart = useSelector(SelectCart);
  const cartItems: Array<string> = Object.keys(cart);
  const [dataFilms, setDataFilms] = useState<any[]>([]);
  const dispatch = useDispatch();
  const classes: string[] = [];

  useEffect(() => {
    let arr: any[] = [];

    async function processArray(array: any[]) {
      for (let i = 0; i < array.length; i++) {
        const a = await fetch(
          `http://www.omdbapi.com/?apikey=6e55c3bc&i=${array[i]}`
        );
        const b = await a.json();
        const obj = { ...b, Count: cart[array[i]] };
        arr.push(obj);
      }
      setDataFilms(arr);
    }
    processArray(Object.keys(cart));
  }, [cart]);

  const deleteHandler = (e: React.MouseEvent<HTMLElement>) => {
    const elem: string = e.currentTarget.getAttribute("data-id")!;
    dispatch(deleteToCart(elem));
  };
  return (
    <div>
      {Object.keys(cart).length === 0 ? (
        <div>Корзина пуста</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Released</th>
              <th>Count</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {dataFilms.map((elem, index) => {
              return (
                <tr key={index}>
                  <td>{elem.Title}</td>
                  <td>{elem.Year}</td>
                  <td>{elem.Released}</td>
                  <td>{elem.Count}</td>
                  <td>
                    <i
                      data-id={elem.imdbID}
                      className="small material-icons"
                      onClick={e => deleteHandler(e)}
                    >
                      delete
                    </i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
