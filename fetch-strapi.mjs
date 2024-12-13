// import fetch from 'node-fetch';
// import fs from 'fs';
// import path from 'path';

// const fetchStrapiContent = async () => {
//   const apiUrl = 'http://localhost:1337/api/blog-posts?populate=media'; 
  
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     const outputDir = path.join(process.cwd(), 'src', '_data');
//     if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
//     fs.writeFileSync(path.join(outputDir, 'blogs.json'), JSON.stringify(data, null, 2));

//     console.log('Fetched Strapi data successfully!');
//   } catch (error) {
//     console.error('Error fetching data from Strapi:', error);
//   }
// };

// fetchStrapiContent();

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const fetchStrapiContent = async () => {
  const apiUrl = 'http://localhost:1337/api/blog-posts?populate=media'; 
  const pageSize = 1; 
  let currentPage = 1; 
  let isMoreData = true;
  const allBlogs = []; 

  try {
    while (isMoreData) {
      
      const response = await fetch(`${apiUrl}&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`);
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        allBlogs.push(...data.data); 
        currentPage++; 
      } else {
        isMoreData = false; 
      }
    }

    const outputDir = path.join(process.cwd(), 'src', '_data');
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(path.join(outputDir, 'blogs.json'), JSON.stringify({ data: allBlogs }, null, 2));

    console.log('Fetched all Strapi data successfully with pagination!');
  } catch (error) {
    console.error('Error fetching data from Strapi:', error);
  }
};

fetchStrapiContent();
