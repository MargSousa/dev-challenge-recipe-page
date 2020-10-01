import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import cheesecakeImage from '../challenge/photo1.png';
import greyDots from '../challenge/6dots.svg';
import './Recipe.css';

const Recipe = () => {

  const crackerCrustIngredients = [
    { id: 1, text: '1 and 1/2 cups (150g) <b>graham cracker crumbs</b> (about 10 full sheet graham crackers)'},
    { id: 2, text: '5 Tablespoons (70g) <b>unsalted butter</b>, melted'},
    { id: 3, text: '1/4 cup (50g) <b>granulated sugar</b>'}
  ]

  const cheesecakeIngredients = [
    { id: 1, text: 'four 8-ounce blocks (904g) full-fat <b>cream cheese</b>, softened to room temperature'},
    { id: 2, text: '1 cup (200g) <b>granulated sugar</b>'},
    { id: 3, text: '1 cup (240g) full-fat <b>sour cream</b>, at room temperature'},
    { id: 4, text: '1 teaspoon <b>pure vanilla extract</b>'},
    { id: 5, text: '2 teaspoons <b>fresh lemon juice</b> (optional, but recommended)'},
    { id: 6, text: '3 large <b>eggs</b>, at room temperature'},
    { id: 7, text: 'topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes)'},
  ]

  const recipeInstructions = [
    {
      id: 1, text: "Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C)."
    },
    {
      id: 2, text: "<b>Make the crust:</b> Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling."
    },
    {
      id: 3, text: "<b>Make the filling:</b> Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can."
    },
    {
      id: 4, text: "<b>Prepare the simple water bath (see note)</b> Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)"
    },
    {
      id: 5, text: "Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight."
    },
    {
      id: 6, text: "Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice."
    },
    {
      id: 7, text: "Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days."
    },
  ]

  return (
    <div className="Recipe">
      <div className="main-title">Classic Cheesecake Recipe</div>
      <div className="main-intro">
        <span className="six-dots"><img src={greyDots} alt="dots" /></span>
        Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.
      </div>
      <div className="recipe-image">
        <img className="" src={cheesecakeImage} alt="Cheesecake" />
      </div>
      <div className="recipe-information-section">
        <div className="recipe-time">
          <div className="time-info responsive-servings">
            <span className="material-icons servings">local_dining</span>
            <div>
              <div className="time-title">Yields</div>
              <div className="time-text servings">12 servings</div>
            </div>
          </div>
          <div className="time-info">
            <span className="material-icons">schedule</span>
            <div>
              <div className="time-title">Prep Time</div>
              <div className="time-text">45 minutes</div>
            </div>
          </div>
          <div className="time-info">
            <span className="material-icons">schedule</span>
            <div>
              <div className="time-title">Cook Time</div>
              <div className="time-text">1 hour</div>
            </div>
          </div>
          <div className="time-info">
            <span className="material-icons">schedule</span>
            <div>
              <div className="time-title">Total Time</div>
              <div className="time-text">7,75 hours</div>
            </div>
          </div>
        </div>
        <div className="recipe-details">
          <div className="recipe-title">Ingredients</div>
          <div className="recipe-subtitle">Graham Cracker Crust</div>
          {crackerCrustIngredients.map(ingredient => 
            <div className="recipe-ingredients" key={ingredient.id}>
              <input type="checkbox" />
              <div className="ingredient">{ReactHtmlParser(ingredient.text)}</div>
            </div>
          )}
          <div className="recipe-subtitle">Cheesecake</div>
          {cheesecakeIngredients.map(ingredient => 
            <div className="recipe-ingredients" key={ingredient.id}>
              <input type="checkbox" />
              <div className="ingredient">{ReactHtmlParser(ingredient.text)}</div>
            </div>
          )}
          <div className="recipe-title title-margin">Instructions</div>
          {recipeInstructions.map(step => 
            <div className="recipe-instruction" key={step.id}>
              <div className="recipe-instruction-number">{step.id}</div>
              <div className="recipe-instruction-text">{ReactHtmlParser(step.text)}</div>
            </div>
          )}
        </div>
      </div>
      <div className="source-link">Source: https://sallysbakingaddiction.com/classic-cheesecake/</div>
    </div>
  );
}
 
export default Recipe;