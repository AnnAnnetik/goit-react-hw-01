const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {items.map(item => {
            return (
              <>
                <td key={item.id}>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};
export default TransactionHistory;
