import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function ProtectedRoute({ children }) {
  const { token } = useSelector((state) => state.auth)
  return token ? children : <Navigate to="/login" replace />
}