import css from"./TransactionHistory.module.css"
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.conteyner}>
      <thead className={css.hero}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.body}>
       
          {items.map(item => {
            return (
             <tr key={item.id}>
                <td >{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            );
          })}
       
      </tbody>
    </table>
  );
};
export default TransactionHistory;
