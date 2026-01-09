function InventoryItem({
  name = "unknown",
  type = "unknown",
  quantity = 0,
  price = "unknown",
}) {
  return (
    <div>
      <h2>
        {name} ({type})
      </h2>
      <p>{`${quantity} remained.`}</p>
      {/*<!-- TODO: Render the low stock alert based on the quantity of the item. --> */}
      {/*<!-- TODO: Render the high value alert based on the total value of the item. --> */}
    </div>
  );
}
