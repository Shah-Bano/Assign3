const sass = require("sass");
const ejsPlugin = require("@11ty/eleventy-plugin-ejs");
const fs = require("fs-extra");
const path = require("path");

module.exports = function (eleventyConfig) {
    
    eleventyConfig.addTemplateFormats("scss");

    
    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css", 

        
        compile: async function (inputContent) {
            let result = sass.compileString(inputContent);

            
            return async (data) => {
                return result.css;
            };
        },
    });

    
    eleventyConfig.addPlugin(ejsPlugin);
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.on('before', () => {
        const distPath = path.join(__dirname, 'dist');
        fs.removeSync(distPath);
    });
    
    eleventyConfig.addCollection("posts", function(collection) {
        const posts = require('./src/_data/posts.json');
        return posts.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
    });



    eleventyConfig.addCollection("recipes", function(collection) {
        const recipes = require('./src/_data/recipes.json').data;  

        return recipes.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
    });

    
    eleventyConfig.addCollection("filteredRecipes", function(collection) {
        const recipes = require('./src/_data/recipes.json').data; 
        const filterType = process.env.RECIPE_TYPE || '';  

        if (filterType) {
            return recipes.filter(recipe => recipe.type === filterType);
        }

        return recipes; 
    });




    eleventyConfig.setBrowserSyncConfig({
        files: '/css/**/*.css'
    });

    return {
        dir: {
            input: "src",
            output: "dist"
        },
    };
};
