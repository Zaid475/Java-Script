// You are given an array of objects representing products in a store. Each object has three
// properties: name, category, and price. Write a function called filterAndTransformProducts that
// filters the products by a given category and then returns an array of strings where each string is
// the product's name and price concatenated.


const products = [
     { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Phone", category: "Electronics", price: 500 },
    { name: "Shoes", category: "Clothing", price: 80 }
    ];

    function filterAndTransformProducts(products, category) {
        return products
            .filter(product => product.category === category)  // Filter products by category
            .map(product => `${product.name} ${product.price}`); // Transform to strings with name and price
    }
    
   
    
    const filteredProducts = filterAndTransformProducts(products, "Clothing");
    console.log(filteredProducts); // Output: ["Laptop 1000", "Phone 500"]
    