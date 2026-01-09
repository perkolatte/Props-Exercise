function App() {
  const inventoryItems = [
    {
      id: 1,
      name: "Oxygen Tank",
      type: "Equipment",
      quantity: 3,
      price: 150.0,
    },
    {
      id: 2,
      name: "Freeze-Dried Ice Cream",
      type: "Food",
      quantity: 20,
      price: 5.99,
    },
    {
      id: 3,
      name: "Space Suit",
      type: "Equipment",
      quantity: 2,
      price: 2500.0,
    },
    { id: 4, name: "Water Filter", type: "Tool", quantity: 5, price: 75.5 },
    {
      id: 5,
      name: "Solar Panel",
      type: "Equipment",
      quantity: 10,
      price: 300.0,
    },
    { id: 6, name: "Navigation Module", type: "Technology", price: 1200.0 },
    {
      id: 7,
      name: "First Aid Kit",
      type: "Medical",
      quantity: 4,
      price: 22.35,
    },
    {
      id: 8,
      name: "Hydroponic Seeds",
      type: "Food",
      quantity: 30,
      price: 10.0,
    },
    {
      id: 9,
      name: "Communication Radio",
      type: "Technology",
      quantity: 3,
      price: 199.99,
    },
    { id: 10, name: "Thruster Fuel", type: "Fuel", quantity: 50, price: 45.0 },
  ];

  return (
    <>
      <h1>Inventory</h1>
      <ol>
        {inventoryItems.map((item) => (
          <li key={item.id} value={item.id}>
            <InventoryItem {...item} />
          </li>
        ))}
      </ol>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
