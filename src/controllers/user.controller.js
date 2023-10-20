const { pool } = require("../db");
const { UserHasInsufficientBalance } = require("../errors/user.errors");

exports.withdrawBalance = async (data = { userId: 1, amount: 2 }) => {
  const { userId, amount } = data;
  const result = await pool.query(
    `UPDATE users
    SET balance = balance - $1
    WHERE id = $2
    AND balance >= $1;
    `,
    [amount, userId]
  );

  if (result.rowCount != 1) {
    console.log("USER_BALANCE_WITHDRAW_ERROR: insufficient balance");
    throw new UserHasInsufficientBalance();
  }

  console.log(`USER_BALANCE_WITHDRAW: withdrawed successfully`);
  return "User balance updated successfully!";
};
