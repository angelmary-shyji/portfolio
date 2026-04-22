import { softwareDeveloperData } from './softwareDeveloper'
import { analystData } from './analyst'

export function getRoleData(role) {
  switch (role) {
    case 'software-developer':
      return softwareDeveloperData
    case 'analyst':
      return analystData
    default:
      return softwareDeveloperData
  }
}
