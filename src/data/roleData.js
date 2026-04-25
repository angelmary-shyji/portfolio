import { softwareDeveloperData } from './softwareDeveloper'
import { analystData } from './analyst'
import { webDeveloperData } from './webDeveloper'

export function getRoleData(role) {
  switch (role) {
    case 'software-developer':
      return softwareDeveloperData
    case 'analyst':
      return analystData
    case 'web-developer':
      return webDeveloperData
    default:
      return softwareDeveloperData
  }
}
