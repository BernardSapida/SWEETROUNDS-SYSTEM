for (let i = 1; i <= 100; i++) {
  console.log(
    `INSERT INTO order_items (quantity, order_id, product_id) VALUES (${
      Math.floor(Math.random() * 10) + 5
    }, ${i}, ${i + 4});`
  );
}

// for (let i = 1; i <= 100; i++) {
//   console.log(
//     `UPDATE orders SET created_at='2023-${(Math.floor(Math.random() * 12) + 1)
//       .toString()
//       .padStart(2, "0")}-10 16:39:21}' WHERE id = ${i};`
//   );
// }
