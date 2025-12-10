import { db } from "../firebaseConfig"
import {
  collection,
  query,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  where,
  orderBy,
  Timestamp
} from "firebase/firestore"

// Get user-specific stock collection reference
const getUserStockCollection = (userId) => {
  return collection(db, "users", userId, "stocks")
}

// Save a stock to user's portfolio
export async function saveStock(userId, stock) {
  const data = {
    ...stock,
    savedAt: Timestamp.now(),
    lastUpdated: Timestamp.now()
  }
  
  // Check if stock already exists for this user
  const existingStocks = await getDocs(
    query(
      getUserStockCollection(userId),
      where("symbol", "==", stock.symbol)
    )
  )
  
  if (!existingStocks.empty) {
    // Stock already exists, update it
    const docId = existingStocks.docs[0].id
    await deleteDoc(doc(getUserStockCollection(userId), docId))
  }
  
  const docRef = await addDoc(getUserStockCollection(userId), data)
  return { id: docRef.id, ...data }
}

// Get all saved stocks for a user
export async function fetchSavedStocks(userId) {
  try {
    const snapshot = await getDocs(
      query(
        getUserStockCollection(userId),
        orderBy("savedAt", "desc")
      )
    )
    
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      // Convert Firestore timestamps
      savedAt: doc.data().savedAt?.toDate() || new Date(),
      lastUpdated: doc.data().lastUpdated?.toDate() || new Date()
    }))
  } catch (error) {
    console.error("Error fetching saved stocks:", error)
    return []
  }
}

// Delete a stock from user's portfolio
export async function deleteStock(userId, stockId) {
  await deleteDoc(doc(getUserStockCollection(userId), stockId))
}