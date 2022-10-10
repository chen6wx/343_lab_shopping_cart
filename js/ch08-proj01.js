
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

function outputTable() {
   let subtotal = 0;
   for (let item of cart) {
      let total = calculateTotal(item.quantity, item.product.price);
      subtotal += total;
      outputCartRow(item, total);
   }
   let tax = subtotal * tax_rate;
   let grandtotal = subtotal + tax;
   let shipping = 40
   if (subtotal > shipping_threshold) {
      shipping = 0
   }

   outputTotals(subtotal, tax, grandtotal, shipping);
}