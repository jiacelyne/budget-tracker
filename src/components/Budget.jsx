import { useState, useEffect } from "react"
import { addTransaction, fetchTransactions, deleteTransaction } from "../services/budgetService"
import { useAuthentication } from "../services/authService"

const TAGS = [
  { id: 'food', name: '🍕 Food', color: '#FF6B6B' },
  { id: 'shopping', name: '🛍️ Shopping', color: '#4ECDC4' },
  { id: 'pay', name: '💰 Pay', color: '#45B7D1' },
  { id: 'entertainment', name: '🎬 Entertainment', color: '#96CEB4' },
  { id: 'transport', name: '🚗 Transport', color: '#FFEAA7' },
  { id: 'bills', name: '💡 Bills', color: '#DDA0DD' },
  { id: 'health', name: '🏥 Health', color: '#98D8C8' },
  { id: 'other', name: '📦 Other', color: '#B0B0B0' }
]

export default function Budget() {
  const [transactions, setTransactions] = useState([])
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [selectedTag, setSelectedTag] = useState("food")
  const [filterTag, setFilterTag] = useState("all")
  const [loading, setLoading] = useState(true)
  
  const user = useAuthentication()

  // Load transactions when user logs in
  useEffect(() => {
    if (user) {
      loadTransactions()
    } else {
      setTransactions([])
      setLoading(false)
    }
  }, [user])

  const loadTransactions = async () => {
    try {
      setLoading(true)
      const data = await fetchTransactions(user.uid)
      setTransactions(data)
    } catch (error) {
      console.error("Error loading transactions:", error)
      // Fallback to local storage if needed
      const localData = localStorage.getItem(`budget_${user.uid}`)
      if (localData) {
        setTransactions(JSON.parse(localData))
      }
    } finally {
      setLoading(false)
    }
  }

  const saveToLocalStorage = () => {
    if (user) {
      localStorage.setItem(`budget_${user.uid}`, JSON.stringify(transactions))
    }
  }

  const handleAddTransaction = async (e) => {
    e.preventDefault()
    if (!description.trim() || !amount) return

    const tag = TAGS.find(t => t.id === selectedTag) || TAGS[0]

    const newTransaction = {
      description,
      amount: parseFloat(amount),
      tag: tag.id,
      tagName: tag.name,
      tagColor: tag.color
    }

    try {
      if (user) {
        // Save to Firebase
        const savedTransaction = await addTransaction(user.uid, newTransaction)
        setTransactions([savedTransaction, ...transactions])
      } else {
        // Save locally if not logged in
        const localTransaction = {
          ...newTransaction,
          id: Date.now(),
          date: new Date().toLocaleDateString()
        }
        setTransactions([localTransaction, ...transactions])
        saveToLocalStorage()
      }

      setDescription("")
      setAmount("")
      setSelectedTag("food")
    } catch (error) {
      console.error("Error saving transaction:", error)
      alert("Failed to save transaction. Please try again.")
    }
  }

  const handleRemoveTransaction = async (id) => {
    try {
      if (user) {
        // Delete from Firebase
        await deleteTransaction(user.uid, id)
      }
      // Update local state
      setTransactions(transactions.filter(t => t.id !== id))
      
      if (user) {
        saveToLocalStorage() // Backup to localStorage
      }
    } catch (error) {
      console.error("Error deleting transaction:", error)
      alert("Failed to delete transaction. Please try again.")
    }
  }

  const total = transactions.reduce((sum, t) => sum + t.amount, 0)
  const filteredTransactions = filterTag === "all" 
    ? transactions 
    : transactions.filter(t => t.tag === filterTag)

  const tagTotals = TAGS.map(tag => ({
    ...tag,
    total: transactions.filter(t => t.tag === tag.id).reduce((sum, t) => sum + t.amount, 0)
  }))

  if (!user) {
    return (
      <div className="budget">
        <h2>Simple Budget Tracker</h2>
        <p style={{ textAlign: 'center', color: '#5e35b1', padding: '40px' }}>
          Please sign in to save and access your budget data
        </p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="budget">
        <h2>Simple Budget Tracker</h2>
        <p style={{ textAlign: 'center', color: '#5e35b1', padding: '40px' }}>
          Loading your transactions...
        </p>
      </div>
    )
  }

  return (
    <div className="budget">
      <h2>Simple Budget Tracker</h2>
      
      {/* Tag Summary */}
      <div className="tag-summary">
        <h3>Category Breakdown</h3>
        <div className="tag-buttons-container">
          {tagTotals.map(tag => (
            <div 
              key={tag.id}
              className="tag-item"
              style={{ '--tag-color': tag.color }}
            >
              <span>{tag.name.split(' ')[0]}</span>
              <span>${tag.total.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Add Transaction Form */}
      <form onSubmit={handleAddTransaction}>
        <div className="budget-form-container">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            step="0.01"
          />
          
          {/* Tag Selection */}
          <div>
            <label className="tag-selection-label">Select Category:</label>
            <div className="tag-buttons-container">
              {TAGS.map(tag => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => setSelectedTag(tag.id)}
                  className={`tag-button ${selectedTag === tag.id ? 'selected' : ''}`}
                  style={{ 
                    '--tag-color': tag.color,
                    '--tag-color-40': `${tag.color}40`
                  }}
                >
                  <span>{tag.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <button type="submit" className="add-transaction-button">
            Add Transaction
          </button>
        </div>
      </form>

      {/* Total and Filter */}
      <div className="total-filter-section">
        <h3 className="total-amount">Total: ${total.toFixed(2)}</h3>
        
        {/* Filter by Tag */}
        <div>
          <label className="filter-label">Filter by Category:</label>
          <select
            value={filterTag}
            onChange={(e) => setFilterTag(e.target.value)}
            className="filter-dropdown"
          >
            <option value="all">All Categories</option>
            {TAGS.map(tag => (
              <option key={tag.id} value={tag.id}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Transactions List */}
      <div>
        <h3 className="transactions-header">
          Transactions {filterTag !== "all" ? `(${TAGS.find(t => t.id === filterTag)?.name})` : ''}
        </h3>
        
        {filteredTransactions.length === 0 ? (
          <p className="no-transactions">
            No transactions yet. Add one above!
          </p>
        ) : (
          <ul>
            {filteredTransactions.map(transaction => (
              <li key={transaction.id} className="transaction-item">
                <div className="transaction-content">
                  <div className="transaction-header">
                    <span 
                      className="tag-indicator"
                      style={{ '--tag-color': transaction.tagColor }}
                    />
                    <p className="transaction-description">
                      {transaction.description}
                    </p>
                  </div>
                  <div className="transaction-meta">
                    <span 
                      className="transaction-tag"
                      style={{ 
                        '--tag-color': transaction.tagColor,
                        '--tag-color-40': `${transaction.tagColor}40`,
                        '--tag-color-60': `${transaction.tagColor}60`
                      }}
                    >
                      {transaction.tagName}
                    </span>
                    <span className="transaction-date">
                      {transaction.date || new Date().toLocaleDateString()}
                    </span>
                  </div>
                </div>
                
                <div className="transaction-amount-section">
                  <div className={`transaction-amount ${transaction.amount >= 0 ? 'positive' : 'negative'}`}>
                    ${transaction.amount >= 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                  </div>
                  <button
                    onClick={() => handleRemoveTransaction(transaction.id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}