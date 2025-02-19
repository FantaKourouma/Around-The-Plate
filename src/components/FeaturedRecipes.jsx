import React, {useEffect, useState } from "react";

const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="recipes" className="featured-recipes-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Featured Recipes</h2>
        <div className="row justify-content-center">
          {/* Recipe Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://th.bing.com/th?id=OSK.1ef0ff67be046806c5080f55c1124fb4&w=194&h=129&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1"
                className="card-img-top"
                alt="Spaghetti Carbonara"
              />
              <div className="card-body">
                <h5 className="card-title">Spaghetti Carbonara</h5>
                <p className="card-text">
                  A traditional Italian dish with eggs, cheese, pancetta, and
                  pepper.
                </p>
                <a href="#" className="btn btn-primary rounded-pill">
                  View Recipe
                </a>
              </div>
            </div>
          </div>

          {/* Recipe Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://th.bing.com/th/id/OIP.LywifRwk_Ur_ribexnvTGwAAAA?w=208&h=139&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                className="card-img-top"
                alt="Chicken Tikka Masala"
              />
              <div className="card-body">
                <h5 className="card-title">Chicken Tikka Masala</h5>
                <p className="card-text">
                  A flavorful Indian dish with grilled marinated chicken in a
                  creamy sauce.
                </p>
                <a href="#" className="btn btn-primary rounded-pill">
                  View Recipe
                </a>
              </div>
            </div>
          </div>

          {/* Recipe Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://th.bing.com/th/id/OIP.yMSwU9i_twdr0TNPrRJs-QHaE7?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                className="card-img-top"
                alt="Sushi Rolls"
              />
              <div className="card-body">
                <h5 className="card-title">Sushi Rolls</h5>
                <p className="card-text">
                  A popular Japanese dish made with vinegared rice, fish, and
                  vegetables.
                </p>
                <a href="#" className="btn btn-primary rounded-pill">
                  View Recipe
                </a>
              </div>
            </div>
          </div>

          {/* New Recipe Card 4 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://th.bing.com/th/id/OIP.zVLP5xyh4fqAkYHKJ3kDQwHaLH?rs=1&pid=ImgDetMain"
                className="card-img-top"
                alt="Vegetable Stir Fry"
              />
              <div className="card-body">
                <h5 className="card-title">Vegetable Stir Fry</h5>
                <p className="card-text">
                  A quick and healthy dish made with a variety of vegetables stir-fried in a savory sauce.
                </p>
                <a href="#" className="btn btn-primary rounded-pill">
                  View Recipe
                </a>
              </div>
            </div>
          </div>

          {/* New Recipe Card 5 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://th.bing.com/th/id/OIP.UcASC1yj_H9p701Sn6FaXQHaLH?rs=1&pid=ImgDetMain"
                className="card-img-top"
                alt="Grilled Chicken Salad"
              />
              <div className="card-body">
                <h5 className="card-title">Grilled Chicken Salad</h5>
                <p className="card-text">
                  A fresh and light salad with grilled chicken, mixed greens, and a tangy vinaigrette.
                </p>
                <a href="#" className="btn btn-primary rounded-pill">
                  View Recipe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;

