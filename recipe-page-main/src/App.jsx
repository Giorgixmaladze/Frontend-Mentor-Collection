import { useState } from "react";

function App() {
  return (
    <div
      id="main"
      className="w-screen min-h-screen bg-kanisferi flex justify-center items-center pt-5"
    >
      <div
        id="parent"
        className="w-170 h-450 rounded-xl bg-white flex flex-col  items-center "
      >
        <div className="w-155 h-11/12 flex flex-col gap-10">
          <img
            src="/image-omelette.jpeg"
            className="w-full h-5/12 rounded-xl"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-young font-bold">
              Simple Ommelete Recipe
            </h1>
            <p className="text-stone-500">
              An easy and quick dish,perfect for any meal. This classic omelette
              combines beaten eggs cooked to perfection, optionally filled with
              your choice of cheese, vegetables or meats
            </p>
            <div className="bg-x h-42 flex justify-center items-center">
              <div className="w-10/12">
                <h3 className="text-rose-800 text-l">Preparation time</h3>
                <ul className="list-disc list-inside">
                  <li>Total: Approximately 10 minutes</li>
                  <li>Preparation: 5 minutes</li>
                  <li>Cooking: 5 minutes</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-amber-900 text-3xl">Ingredients</h2>
              <ul className="list-disc list-inside">
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon butter or oil</li>
                <li>
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </li>
              </ul>
            </div>
            <div className="border-1 border-gray-300"></div>
            <h2 className="text-amber-900 text-3xl">Instructions</h2>
            <ol className="list-decimal list-inside flex flex-col gap-10">
              <li>
                Beat the eggs: In a bowl, beat the eggs with a pinch of salt and
                pepper until they are well mixed. You can add a tablespoon of
                water or milk for a fluffier texture.
              </li>
              <li>
                Heat the pan: Place a non-stick frying pan over medium heat and
                add butter or oil.
              </li>
              <li>
                Cook the omelette: Once the butter is melted and bubbling, pour
                in the eggs. Tilt the pan to ensure the eggs evenly coat the
                surface.
              </li>
              <li>
                Add fillings (optional): When the eggs begin to set at the edges
                but are still slightly runny in the middle, sprinkle your chosen
                fillings over one half of the omelette.
              </li>
              <li>
                Fold and serve: As the omelette continues to cook, carefully
                lift one edge and fold it over the fillings. Let it cook for
                another minute, then slide it onto a plate.
              </li>
              <li>
                Enjoy: Serve hot, with additional salt and pepper if needed.
              </li>
            </ol>
            <div className="border-1 border-gray-300"></div>
            <h2 className="text-amber-900 text-3xl">Nutrition</h2>
            <p className="text-orange-900">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table>
              <tbody className="flex flex-col gap-10">
                <tr className=" flex gap-50 justify-center border-b-2 border-b-gray-400">
                  <td>Calories</td>
                  <td>277kcal</td>
                </tr>
                <tr className=" flex gap-50 justify-center border-b-2 border-b-gray-400">
                  <td>Carbs</td>
                  <td>0g</td>
                </tr>
                <tr className=" flex gap-50 justify-center border-b-2 border-b-gray-400">
                  <td>Protein</td>
                  <td>20g</td>
                </tr>
                <tr className=" flex gap-50 justify-center">
                  <td>Fat</td>
                  <td>22g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
