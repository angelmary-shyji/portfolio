import { softwareDeveloperData } from './softwareDeveloper'

export function getRoleData(role) {
  switch (role) {
    case 'software-developer':
      return softwareDeveloperData
    default:
      return softwareDeveloperData
  }
}
