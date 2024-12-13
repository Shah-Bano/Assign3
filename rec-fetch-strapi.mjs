import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';


const fetchStrapiRecipes = async (recipeType) => {

  let apiUrl = 'http://localhost:1337/api/recipes?populate=media'; 
  if (recipeType) {
   
    apiUrl += `&filters[type][$eq]=${recipeType}`;
  }

  const pageSize = 10; 
  let currentPage = 1; 
  let isMoreData = true;
  const allRecipes = []; 

  try {
    while (isMoreData) {
      
      const response = await fetch(`${apiUrl}&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`);
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        allRecipes.push(...data.data); 
        currentPage++; 
      } else {
        isMoreData = false; 
      }
    }


    const outputDir = path.join(process.cwd(), 'src', '_data');
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
    

    const fileName = recipeType ? `recipes-${recipeType}.json` : 'recipes.json';
    fs.writeFileSync(path.join(outputDir, fileName), JSON.stringify({ data: allRecipes }, null, 2));

    console.log(`Fetched ${recipeType ? recipeType : 'all'} recipes successfully!`);
  } catch (error) {
    console.error('Error fetching data from Strapi:', error);
  }
};


const recipeType = process.argv[2]; 


fetchStrapiRecipes(recipeType);
