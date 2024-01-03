import React,{useState} from "react";
import "./recipes.scss";
import Button from "../../Components/Button";
import Switch from "../../Components/Switch";
import Data from '../../Data/data'
import Card from "../../Components/Card"
import Products from './Products'

const Recipes = () => {

    const [selectedCategory, setSelectedCategory] = useState("Buff")
    //---------- BUtton filter ---------------
  const handelclick = item =>{
      setSelectedCategory(item)
    }

  function filteredData(Data,selected){
      let filtereddata = Data;
  
      //---------- Selected_filtered
      if(selected){
        filtereddata = filtereddata.filter(
          ({category}) =>
            category === selected
        );
      }
  
      return filtereddata.map(({img, title, reviews, newPrice, prevPrice}) => (
        <Card
        key={Math.random()}
        img={img}
        title={title}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
        />
      ));
    }
  
    const result = filteredData(Data, selectedCategory);

    return (
    <>
      <div className="recipes_wrapper">
        <div className="title_text_wrapper">
          <h1>
            Our <span>Most Popular</span> Recipes
          </h1>
          <p>
            Browse through a varieties of recipes with fresh ingredients
            selected only from best places
          </p>
        </div>
        <div className="switch_wrapper">
            <Switch handelclick={handelclick}/>
        </div>
        <div className="momo_image_wrapper">
        <Products result={result}/>
        </div>
        <Button text="Explore Our Menu →" />
      </div>
    </>
  );
};

export default Recipes;
