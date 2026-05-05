import { createContext, useContext } from 'react'
import { useCart } from '../hooks/useCart.js'

// =============================================================
// CartContext — accessible dans toute l'arborescence
// =============================================================
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(null)

// CartProvider est rendu dans main.jsx autour de <App>
export function CartProvider({ children }) {
  // =============================================================
  // TODO Étape 5 — useContext (côté provider)
  // Remplacer la ligne ci-dessous par :
  //   const cart = useCart()
  // puis passer cart comme valeur du Provider :
  //   <CartContext.Provider value={cart}>
  // =============================================================
  const cart = useCart()

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  )
}

// Hook de commodité — fourni par le professeur, ne pas modifier
// eslint-disable-next-line react-refresh/only-export-components
export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext doit être utilisé dans un CartProvider')
  }
  return context
}
