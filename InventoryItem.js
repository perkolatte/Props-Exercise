function InventoryItem({
  name = "unknown",
  type = "unknown",
  quantity = 0,
  price = 0,
}) {
  return (
    <>
      <h2>{name}</h2>
      <p>
        {/* Low-stock alert shown inline with remaining count. */}
        {quantity <= 5 && <Message>⚠️ Low stock! </Message>}
        {`${quantity} remaining.`}
      </p>
      <p>
        {/* High-value warning based on total item value. */}
        {price * quantity >= 1000 && (
          <Message>💰 High value - consider extra protection!</Message>
        )}
      </p>
    </>
  );
}
