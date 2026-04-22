import { useRole } from '../context/RoleContext'
import { getRoleData } from '../data/roleData'

export function useRoleData() {
  const { role } = useRole()
  return getRoleData(role)
}
