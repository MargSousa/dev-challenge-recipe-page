import React from 'react';
import './Recipe.css';

const Recipe = () => {
  return (
    <div className="Recipe">
      <div className="main-title">Classic Cheesecake Recipe</div>
      <div className="main-intro">
        Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.
      </div>
      <div className="recipe-image"></div>
      <div className="section-title">Ingredients</div>
      <div className="section-subtitle">Graham Cracker Crust</div>
      <div>
        <input type="checkbox" />
        <span className="recipe-step">1 and 1/2 cups (150g) <b>graham cracker crumbs</b> (about 10 full sheet graham crackers)</span>
      </div>
      <div>
        <input type="checkbox" />
        <span className="recipe-step">5 Tablespoons (70g) <b>unsalted butter</b>, melted</span>
      </div>
      <div>
        <input type="checkbox" />
        <span className="recipe-step">1/4 cup (50g) <b>granulated sugar</b></span>
      </div>
      <div className="section-subtitle">Cheesecake</div>
      <div>
        <input type="checkbox" />
        <span className="recipe-step">four 8-ounce blocks (904g) full-fat <b>cream cheese</b>, softened to room temperature</span>
      </div>
      <div>
        <input type="checkbox" />
        <span className="recipe-step">1 cup (200g) <b>granulated sugar</b></span>
      </div>
      <div>
        <input type="checkbox" />
        <span className="recipe-step">1 cup (240g) full-fat <b>sour cream</b>, at room temperature</span>
      </div>
      <div>
        <input type="checkbox" />
        <span className="recipe-step">1 teaspoon <b>pure vanilla extract</b></span>
      </div>
      <div>
        <input type="checkbox" />
        <span className="recipe-step">2 teaspoons <b>fresh lemon juice</b> (optional, but recommended)</span>
      </div>
      <div>
        <input type="checkbox" />
        <span className="recipe-step">3 large <b>eggs</b>, at room temperature</span>
      </div>
      <div>
        <input type="checkbox" />
        <span className="recipe-step">topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes)</span>
      </div>
      <div className="section-title">Instructions</div>
      <div className="source-link">Source: https://sallysbakingaddiction.com/classic-cheesecake/</div>
    </div>
  );
}
 
export default Recipe;