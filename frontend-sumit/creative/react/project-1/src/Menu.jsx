import React, { useState } from "react";
import burger_01 from "./burger_01.png";
import burger_02 from "./burger_02.png";
import burger_03 from "./burger_03.png";
import burger_04 from "./burger_04.png";
import salad from "./salad.png";
import burger from "./burger.png";
import french_fries from "./french_fries.png";
import cake from "./cake.png";
import salad_01 from "./salad_01.png";
import salad_02 from "./salad_02.png";
import salad_03 from "./salad_03.png";
import salad_04 from "./salad_04.png";
import side_01 from "./side_01.png";
import side_02 from "./side_02.png";
import side_03 from "./side_03.png";
import side_04 from "./side_04.png";
import dessert_01 from "./dessert_01.png";
import dessert_02 from "./dessert_02.png";
import dessert_03 from "./dessert_03.png";
import dessert_04 from "./dessert_04.png";
import offer_1 from "./offer_1.jpg"
import offer_2 from "./offer_2.jpg"
import offer_3 from "./offer_3.jpg"
import offer_4 from "./offer_4.jpg"
import all from "./all.png"
const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("burgers");

  const showCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div
        id="menu"
        style={{
          backgroundColor: "#fff5f0",
          fontFamily: "sans-serif",
          margin: "50px 0",
        }}
      >
        <h1 className="titleStyle"> Menu<span>Item</span></h1>

        <div className="category">
          <div
            className="category-item"
            onClick={() => showCategory("burgers")}
          >
            <div>
              <img src={burger} alt="Burgers" />
            </div>
            <span>Burgers</span>
          </div>
          <div className="category-item" onClick={() => showCategory("salads")}>
            <div>
              <img src={salad} alt="Salads" />
            </div>
            <span>Salads</span>
          </div>
          <div className="category-item" onClick={() => showCategory("fries")}>
            <div>
              <img src={french_fries} alt="Fries" />
            </div>
            <span>French Fries</span>
          </div>
          <div
            className="category-item"
            onClick={() => showCategory("desserts")}
          >
            <div>
              <img src={cake} alt="Desserts" />
            </div>
            <span>Desserts</span>
          </div>
          <div  className="category-item" onClick={() => showCategory("all")}>
            <div>
              <img className="all-img" src={all} alt="All Items" />
            </div>
            <span>All</span>
          </div>
        </div>

        {/* Burger Menu */}
        {(selectedCategory === "burgers" || selectedCategory === "all") && (
          <div className="burger-menu">
            <div className="burger-item">
              <img src={burger_01} alt="Crispy Chicken" />
              <h3>Crispy Chicken</h3>
              <p>$8.95</p>
              Fried chicken breast, chilli sauce, tomatoes, pickles, coleslaw
              <button>Add to Cart</button>
            </div>
            <div className="burger-item">
              <img src={burger_02} alt="Ultimate Bacon" />
              <h3>Ultimate Bacon</h3>
              <p>$9.99</p>
              Fried chicken breast, chilli sauce, tomatoes, pickles, coleslaw
              <button>Add to Cart</button>
            </div>
            <div className="burger-item minus-item">
              <img src={burger_03} alt="Smokey House" />
              <h3>Smokey House</h3>
              <p>$7.99</p>
              Fried chicken breast, chilli sauce, tomatoes, pickles, coleslaw
              <button>Add to Cart</button>
            </div>
            <div className="burger-item minus-item">
              <img src={burger_04} alt="Turkey Burger" />
              <h3>Turkey Burger</h3>
              <p>$8.30</p>
              Fried chicken breast, chilli sauce, tomatoes, pickles, coleslaw
              <button>Add to Cart</button>
            </div>
          </div>
        )}

        {/* Salads Menu */}
        {(selectedCategory === "salads" || selectedCategory === "all") && (
          <div className="salads-menu">
            <div className="salads-item">
              <img src={salad_01} alt="Greek Salad" />
              <h3>Greek Salad</h3>
              <p>$8.95</p>
              Chicken breast, chilli sauce, lime juice, lettuce leaves, cucumber
              <button>Add to Cart</button>
            </div>
            <div className="salads-item">
              <img src={salad_02} alt="Chicken Salad" />
              <h3>Chicken Salad</h3>
              <p>$9.99</p>
              Chicken breast, chilli sauce, lime juice, lettuce leaves, cucumber
              <button>Add to Cart</button>
            </div>
            <div className="salads-item minus-item">
              <img src={salad_03} alt="Spinach Salad" />
              <h3>Spinach Salad</h3>
              <p>$7.99</p>
              Chicken breast, chilli sauce, lime juice, lettuce leaves, cucumber
              <button>Add to Cart</button>
            </div>
            <div className="salads-item minus-item">
              <img src={salad_04} alt="Turkey Salad" />
              <h3>Turkey Salad</h3>
              <p>$8.30</p>
              Chicken breast, chilli sauce, lime juice, lettuce leaves, cucumber
              <button>Add to Cart</button>
            </div>
          </div>
        )}

        {/* Fries Menu */}
        {(selectedCategory === "fries" || selectedCategory === "all") && (
          <div className="fries-menu">
            <div className="fries-item">
              <img src={side_01} alt="Onion Rings" />
              <h3>Onion Rings</h3>
              <p>$8.95</p>
              Integer ultrice an aliquam lectus purus magna and tempor
              <button>Add to Cart</button>
            </div>
            <div className="fries-item">
              <img src={side_02} alt="French Fries" />
              <h3>French Fries</h3>
              <p>$9.99</p>
              Integer ultrice an aliquam lectus purus magna and tempor
              <button>Add to Cart</button>
            </div>
            <div className="fries-item minus-item" >
              <img src={side_03} alt="Mozzarella Sticks" />
              <h3>Mozzarella Sticks</h3>
              <p>$7.99</p>
              Integer ultrice an aliquam lectus purus magna and tempor
              <button>Add to Cart</button>
            </div>
            <div className="fries-item minus-item">
              <img src={side_04} alt="Chicken Nuggets" />
              <h3>Chicken Nuggets</h3>
              <p>$8.30</p>
              Integer ultrice an aliquam lectus purus magna and tempor
              <button>Add to Cart</button>
            </div>
          </div>
        )}

        {/* Desserts Menu */}
        {(selectedCategory === "desserts" || selectedCategory === "all") && (
          <div className="desserts-menu">
            <div className="desserts-item">
              <img src={dessert_01} alt="Strawberry Cake" />
              <h3>Strawberry Cake</h3>
              <p>$8.95</p>
              Strawberry, double cream, icing sugar, soft cheese, biscuits
              <button>Add to Cart</button>
            </div>
            <div className="desserts-item">
              <img src={dessert_02} alt="Belgian Waffle" />
              <h3>Belgian Waffle</h3>
              <p>$9.99</p>
              Strawberry, double cream, icing sugar, soft cheese, biscuits
              <button>Add to Cart</button>
            </div>
            <div className="desserts-item minus-item">
              <img src={dessert_03} alt="Cheesecake" />
              <h3>Cheesecake</h3>
              <p>$7.99</p>
              Strawberry, double cream, icing sugar, soft cheese, biscuits
              <button>Add to Cart</button>
            </div>
            <div className="desserts-item minus-item">
              <img src={dessert_04} alt="Chocolate Cake" />
              <h3>Chocolate Cake</h3>
              <p>$8.30</p>
              Strawberry, double cream, icing sugar, soft cheese, biscuits
              <button>Add to Cart</button>
            </div>
          </div>
        )}
      </div>

      <p className='subtitleStyle'>Best <span>Offers  </span></p>
      <div className="offer">

        <div className="offer_subdiv">
          <div className="img_div" ><img src={offer_1} alt="" /></div>
          <div className="img_div" ><img src={offer_2} alt="" /></div>
        </div>
        <div className="offer_subdiv">
          <div className="img_div" ><img src={offer_3} alt="" /></div>
          <div className="img_div" ><img src={offer_4} alt="" /></div>
        </div>
      </div>
    </>
  );
};

export default Menu;
