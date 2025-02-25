# Quick Recipes

Quick Recipes is a React-based web application that allows users to search for recipes and view detailed information about each recipe, including ingredients and instructions. The application uses the Spoonacular API to fetch recipe data and displays it in a user-friendly interface.

## Features

- Search for recipes by keyword
- View detailed information about each recipe, including ingredients and instructions
- Responsive design for all screen sizes
- Persistent state using local storage

## Setup and Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/quick-recipes.git
   cd quick-recipes

   ```

2. Install the dependencies:

   npm install

3. Create a .env file in the root directory and add your Spoonacular API key:
   VITE_URL=https://api.spoonacular.com/recipes
   VITE_API_KEY=your_api_key_here

### Running the Application

1. Start the development server:

2. Open your browser and navigate to http://localhost:5173 to view the application.

Project Structure
src/: Contains the source code for the application
components/: Contains the React components
Footer.jsx: Footer component with a link to navigate back to the top of the page
FoodItem.jsx: Component to display individual food items
FoodList.jsx: Component to display a list of food items
IngredientList.jsx: Component to display the list of ingredients for a recipe
InnerContainer.jsx: Wrapper component for inner content
Nav.jsx: Navigation component with the application title
Recipe.jsx: Component to display detailed information about a recipe
RecipeContainer.jsx: Wrapper component for the recipe content
Search.jsx: Component to search for recipes
index.css: Global CSS styles
main.jsx: Entry point for the React application
.env: Environment variables for the application
.gitignore: Specifies files and directories to be ignored by Git
package.json: Contains the project metadata and dependencies
vite.config.js: Configuration file for Vite
