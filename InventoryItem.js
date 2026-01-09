function InventoryItem({
  name = "unknown",
  type = "unknown",
  quantity = 0,
  price = "unknown",
}) {
  return (
    <>
      <h2>
        {name} ({type})
      </h2>
      <p>
        {quantity <= 5 ? <Message>⚠️ Low stock! </Message> : null}
        {`${quantity} remained.`}
      </p>
      <p>
        {price * quantity >= 1000 ? (
          <Message>💰 High value - consider extra protection!</Message>
        ) : null}
      </p>
    </>
  );
}
