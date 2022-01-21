import React from "react";

// refactor and styling using boostrap
function CocktailForm() {
  return (
    <div>
      <section>
      <form onSubmit={handleSubmit}>
        <h4 >
          Add a New Cocktail
        </h4>
        <label htmlFor="name">Name</label>
        <input
          required
          placeholder="Cocktail Name"
          type="text"
          title="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="category">Catgory</label>
        <select
          required
          name="category"
          placeholder="Catgory"
          value={catgory}
          onChange={(event) => setCategory(event.target.value)}
        >

          <option value="" disabled selected hidden>
            Please Choose...
          </option>
          <option value="Beer">Beer</option>
          <option value="Cocktail">Cocktail</option>
          <option value="Cocoa">Cocoa</option>
          <option value="Coffee / Tea">Coffee / Tea</option>
          <option value="Homemade Liqueur">Homemade Liqueur</option>
          <option value="Milk / Float / Shake">Milk / Float / Shake</option>
          <option value="Ordinary Drink">Ordinary Drink</option>
          <option value="Other">Other</option>
          <option value="Punch / Party Drink">Punch / Party Drink</option>
          <option value="Shot">Shot</option>
          <option value="Soft Drink / Soda">Soft Drink / Soda</option>
        </select>

        <label htmlFor="image">Image</label>
        <input
          required
          placeholder="Image URL"
          type="text"
          title="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <label htmlFor="iba">IBA</label>
        <input
          required
          placeholder="IBA"
          type="text"
          title="iba"
          value={iba}
          onChange={(event) => setIBA(event.target.value)}
        />

        <label htmlFor="measure_1">Measure</label>
        <input
          required
          placeholder="Measure"
          type="text"
          title="measure_1"
          value={iba}
          onChange={(event) => setIBA(event.target.value)}
        />
      
        <button>Add Cocktail</button>
      </form>
    </section>
    </div>
  );
}

export default CocktailForm;
