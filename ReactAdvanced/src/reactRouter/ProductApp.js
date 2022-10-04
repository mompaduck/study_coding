import React from "react"
import { Link, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Products from "./Products"
import ProductDetail from "./ProductDetail"

/**
 *
 * In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import
 * from
 *   import { Switch, Route } from "react-router-dom";
 * to
 *   import { Routes ,Route } from 'react-router-dom';
 */

function ProductApp() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      {/* <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Routes> */}
    </div>
  )
}

export default ProductApp
