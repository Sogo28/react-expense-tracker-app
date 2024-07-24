import Transaction from "../models/Transaction.js";

// @desc    Get all transactions 
// @route   GET /api/v1/transactions 
// @access  public
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      count: transactions.length,
      data: transactions
    })

  } catch (error) {
    return res.status(500).json({
      error: `Server error : ${error}`
    })
  }
}

// @desc    Create a transaction
// @route   POST /api/v1/transactions/ 
// @access  public
export const createTransaction = async (req, res) => {
  const { text, amount } = req.body;

  try {
    // Create the transaction and send the response 
    const newTransaction = await Transaction.create(req.body);
    res.status(201).json({
      data: newTransaction
    })

  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json(messages);
    }
    return res.status(500).json({ message: "Server Error" });
  }

}

// @desc    Get a single transaction
// @route   GET /api/v1/transactions/:id 
// @access  public
export const getTransaction = async (req, res) => {
  const id = req.params.id;

  try {
    const transaction = await Transaction.findById(id);

    // If the transaction is not found :
    if (!transaction) {
      return res.status(404).json({
        message: `Transaction with id ${id} not found`
      })
    }

    return res.status(200).json({
      data: transaction
    });

  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
}

// @desc    Update a transaction
// @route   PUT /api/v1/transactions/:id 
// @access  public
// export const updateTransaction = (req, res) => {
//   res.send('Update a transaction');
// }

// @desc    Delete a transaction
// @route   DELETE /api/v1/transactions/:id 
// @access  public
export const deleteTransaction = async (req, res) => {
  const id = req.params.id;

  try {
    const transaction = await Transaction.findById(id);

    // If the transaction is not found.
    if (!transaction) {
      return res.status(404).json({
        message: `Transaction with id ${id} not found`
      })
    }

    // Delete the transaction if found and return the response. 
    await Transaction.findByIdAndDelete(id);
    res.status(200).json({
      message: `The transaction has been deleted`
    })

  } catch (error) {
    return res.status(500).json({ message: `Server error: ${error}` });
  }
}


