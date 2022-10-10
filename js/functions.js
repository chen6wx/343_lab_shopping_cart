/* define your functions here */
function calculateTotal(quantity, price) {
    return quantity * price;
}

function outputCartRow(item, total) {
    // const {
    //     product: {title, filename, price},
    //     quantity,
    // } = item;
    const row = `<tr>
                    <td><img src="images/${item.product.filename}"></td>
                    <td>${item.product.title}</td>
                    <td>${item.quantity}</td>
                    <td>${"$" + item.product.price.toFixed(2)}</td>
                    <td>${"$" + total.toFixed(2)}</td>
                </tr>`
    document.write(row)
}

function outputTotals(subtotal, tax, grandtotal, shipping) {
    const totals = `<tr class="totals">
                     <td colspan="4">Subtotal</td>
                     <td>${"$" + subtotal.toFixed(2)}</</td>
                  </tr>
                  <tr class="totals">
                     <td colspan="4">Tax</td>
                     <td>${"$" + tax.toFixed(2)}</td>
                  </tr>
                  <tr class="totals">
                     <td colspan="4">Shipping</td>
                     <td>${"$" + shipping}</td>
                  </tr> <tr class="totals">
                     <td colspan="4" class="focus">Grand Total</td>
                     <td class="focus">${"$" + grandtotal}</td>
                  </tr>`
    document.write(totals)
}   