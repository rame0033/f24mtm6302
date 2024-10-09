// Variables
// 1. Create a Categories Array
const categories = ['All', 'T-Shirt', 'Hoodies'];


/**
 * Displays the list of categories as HTML list items on the page.
 * 
 */

//2. Display Categories Dynamically
// Create a function to display the categories | function
function displayCategories(){

    // Retrieve the HTML element where the categories will be displayed | getElementById
    const categoriesEl=document.getElementById('categories');

    // Create an empty list (array) to store the category elements | const, array
    const tempArr=[];
    // Loop through each item in the categories array | forEach
    categories.forEach((category) => {
        // Create an HTML list item for each category | template literal, push
        tempArr.push(
              `<li class="nav-item">
              <a href="#" class="nav-link btn btn-light btn-sm rounded-0 mx-1">${category}</a></li>`
            );
    });
    // Combine the list of category elements into a single string | join
    // Insert the HTML into the categories element | innerHTML
    categoriesEl.innerHTML = tempArr.join('');
} // -> Test the function in the console.



//3. Refactor with map()



/** 
 * Adds a product to the cart and updates the cart display.
 * @param {string} product - The name of the product to be added.
*/

// 4. Add Products to the Cart


// 5. Refactor with map()


// 6. Refactor Using JavaScript Methods to Create HTML Elements


/**
 * Updates the cart display on the webpage by generating a list of
 * the products currently in the cart.
 */
// 7. Create the function to display the cart


/**
 * Removes a product from the cart by filtering out the selected product,
 * and updates the cart display.
 * @param {string} product - The name of the product to be removed.
 */
// 8. Remove a Product from the Cart


// 9. Refactor Using filter()