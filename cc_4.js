// Retail Discount Engine

// Step 1: Inventory
const products = [
  { name: "Laptop", category: "electronics", price: 1000, inventory: 5 },
  { name: "Hoodie", category: "apparel", price: 25, inventory: 10 },
  { name: "Bacon", category: "groceries", price: 3, inventory: 20 },
  { name: "Microwave", category: "household", price: 8, inventory: 15 },
  { name: "Book", category: "books", price: 12, inventory: 7 }
];

//Step 2: Discounts

for (let product of products) {
  let discount = 0;

  switch (product.category) {
    case "electronics":
      discount = 0.2;
      break;
    case "apparel":
      discount = 0.15;
      break;
    case "groceries":
    case "household":
      discount = 0.10;
      break;
    default:
      discount = 0;
      break;
  }

  product.discountedPrice = product.price - (product.price * discount);

  console.log(`${product.name} (${product.category}) original: $${product.price.toFixed(2)}, discounted: $${product.discountedPrice.toFixed(2)}`);
}

// Step 3: Extra Discount based on Customer Type

let customerType = "student"; 
let extraDiscount = 0;

if (customerType === "student") {
  extraDiscount = 0.05;
} else if (customerType === "senior") {
  extraDiscount = 0.07;
} else {
  extraDiscount = 0;
}

console.log(`Customer type: ${customerType}`);
console.log(`Extra discount: ${extraDiscount * 100}%`);

// Step 4: SImulate Purchases

for (let customer = 1; customer <= 3; customer++) {
    console.log(`\n--- Customer ${customer} Checkout ---`);

    let cartTotal = 0;

    for (let product of products) {
        let discount = 0;

        // Apply category discount
        switch (product.category) {
            case "electronics":
                discount = 0.20;
                break;
            case "apparel":
                discount = 0.15;
                break;
            case "groceries":
            case "household":
                discount = 0.10;
                break;
            default:
                discount = 0;
        }

        // Calculate discounted price
        let discountedPrice = product.price * (1 - discount);

        // Apply extra discount based on customer type
        let finalPrice = discountedPrice * (1 - extraDiscount);

        // Add to cart total
        cartTotal += finalPrice;

        // Reduce inventory
        if (product.inventory > 0) {
            product.inventory--;
        } else {
            console.log(`${product.name} is out of stock!`);
        }
    }

    console.log(`Customer ${customer} Total: $${cartTotal.toFixed(2)}`);
}

// Step 5: Log Value after discount

console.log("\n Product Details After Discount:");

let sampleProduct = products[0]; 

for (let key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`);
}

// Step 6: Log All Info After Inventory Update

console.log("\nFinal Inventory Summary:");

for (let product of products) {
    console.log(`\n${product.name} Info:`);

    for (let [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
    }
}