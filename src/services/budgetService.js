import { db } from "../firebaseConfig"
import {
  collection,
  query,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  Timestamp
} from "firebase/firestore"

// Get user-specific collection reference
const getUserBudgetCollection = (userId) => {
  return collection(db, "users", userId, "budget")
}

// Add a transaction
export async function addTransaction(userId, transaction) {
  const data = {
    ...transaction,
    date: Timestamp.fromDate(new Date()),
    createdAt: Timestamp.now()
  }
  const docRef = await addDoc(getUserBudgetCollection(userId), data)
  return { 
    id: docRef.id, 
    ...data,
    date: data.date.toDate().toLocaleDateString()
  }
}

// Get all transactions for a user
export async function fetchTransactions(userId) {
  try {
    const snapshot = await getDocs(
      query(
        getUserBudgetCollection(userId),
        orderBy("createdAt", "desc")
      )
    )
    
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().date?.toDate().toLocaleDateString() || new Date().toLocaleDateString()
    }))
  } catch (error) {
    console.error("Error fetching transactions:", error)
    // Return empty array if no data yet
    return []
  }
}

// Delete a transaction
export async function deleteTransaction(userId, transactionId) {
  await deleteDoc(doc(getUserBudgetCollection(userId), transactionId))
}