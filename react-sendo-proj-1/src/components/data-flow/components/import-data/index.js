// App.js
import React, { useEffect, useRef, useState } from "react";
/* import AdminNav from "../../Admin/modules/AdminNav.js";

import CrudNav from "../../Admin/modules/CrudNav.js"; */
/* import CreateForm from '../../../components/bar-form/CreateForm.js'; */
import { useNavigate } from "react-router-dom";
import { RouteButton } from "../../../routing/components/button-route";
import { TrigButton } from "../../../interact/components/trigger-button";
import { clickedProduct } from "../../../interact/components/on-click";

const EinItem = (product) => {
  let ref = useRef(0);
  return (
    <li
      key={product.id}
      className="relative bg-white border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200 group flex flex-col items-center justify-center"
    >
      duma m luon du ma m
      <span className="text-lg font-bold">{product.name} </span> -{" "}
      <span className="text-gray-600 ml-2">${product.price}</span>
    </li>
  );
};

const PerItem = (
  product,
  handle,
  navigate,
  navi,
  Button,
  setBlur,
  products,
  setProducts,
  blur
) => {
  let ref = useRef(0);
  return (
    <li
      key={product.id}
      className="relative bg-white border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200 group flex flex-col items-center justify-center"
      onClick={() =>
        handle
          ? handle({
              handle: navigate,
              navi: navi,
              product: product,
              ref: ref,
            })
          : console.log("Thông tin sản phẩm:", product)
      }
    >
      <span className="text-lg font-bold">{product.name} </span> -{" "}
      <span className="text-gray-600 ml-2">${product.price}</span>
      {
        /* Overlay mờ dần quanh nút Action */
        blur === true && (
          <span
            className="
            pointer-events-none
            absolute inset-0
            rounded-lg
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            z-10
            backdrop-blur-sm
            "
          >
            {/*<span
                className="
                block w-40 h-40 rounded-full
                bg-[radial-gradient(circle,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0)_80%)]
                "
                ></span>*/}
          </span>
        )
      }
      {/*doNav === true ? (
            <RouteButton
              setBlur={setBlur}
              //product={product}
              handle={() => handle(product)}
            ></RouteButton>
          ) : ( */}
      <Button
        setBlur={setBlur}
        navi={navi}
        product={product}
        products={products}
        setProducts={setProducts}
      ></Button>
      {/*<TrigButton
            setBlur={setBlur}
            handle={() => handle(product)}
          ></TrigButton>*/}
      {/* Nút Action nhỏ, căn giữa 
          <button
            className="
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                opacity-0 group-hover:opacity-100
                bg-blue-500 text-white px-4 py-2 rounded
                transition-opacity duration-200
                z-20
                shadow
                "
            onMouseEnter={() => setBlur(true)}
            onMouseLeave={() => setBlur(false)}
            onClick={(e) => {
              e.stopPropagation();
              console.log("Sản phẩm tương tự:", product);
            }}
          >
            Action
          </button>
          */}
    </li>
  );
};

export const AutoFetchOnPage = ({ /* doNav, */ handle, navi, Button }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8080/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.log(err);
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);
  const [blur, setBlur] = useState(false);
  return (
    <ul className="grid grid-cols-5 gap-4">
      {products.map((product) => (
        <>
          <li
            key={product.id}
            className="relative bg-white border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200 group flex flex-col items-center justify-center"
            onClick={() =>
              handle
                ? handle({
                    handle: navigate,
                    navi: navi,
                    product: product,
                    // ref: ref,
                  })
                : console.log("Thông tin sản phẩm:", product)
            }
          >
            <span className="text-lg font-bold">{product.name} </span> -{" "}
            <span className="text-gray-600 ml-2">${product.price}</span>
            {
              /* Overlay mờ dần quanh nút Action */
              blur === true && (
                <span
                  className="
            pointer-events-none
            absolute inset-0
            rounded-lg
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            z-10
            backdrop-blur-sm
            "
                >
                  {/*<span
                className="
                block w-40 h-40 rounded-full
                bg-[radial-gradient(circle,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0)_80%)]
                "
                ></span>*/}
                </span>
              )
            }
            {/*doNav === true ? (
            <RouteButton
              setBlur={setBlur}
              //product={product}
              handle={() => handle(product)}
            ></RouteButton>
          ) : ( */}
            <Button
              setBlur={setBlur}
              navi={navi}
              product={product}
              products={products}
              setProducts={setProducts}
            ></Button>
            {/*<TrigButton
            setBlur={setBlur}
            handle={() => handle(product)}
          ></TrigButton>*/}
            {/* Nút Action nhỏ, căn giữa 
          <button
            className="
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                opacity-0 group-hover:opacity-100
                bg-blue-500 text-white px-4 py-2 rounded
                transition-opacity duration-200
                z-20
                shadow
                "
            onMouseEnter={() => setBlur(true)}
            onMouseLeave={() => setBlur(false)}
            onClick={(e) => {
              e.stopPropagation();
              console.log("Sản phẩm tương tự:", product);
            }}
          >
            Action
          </button>
          */}
          </li>
          okeoke
          <EinItem product={product}></EinItem>
        </>
      ))}
    </ul>
  );
};
