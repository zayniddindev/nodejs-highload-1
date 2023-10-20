class UserHasInsufficientBalance extends Error {
  constructor() {
    super("User has insufficient balance");
  }
}

module.exports = { UserHasInsufficientBalance };
