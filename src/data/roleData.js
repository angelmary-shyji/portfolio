import { softwareDeveloperData } from './softwareDeveloper'
import { webDeveloperData } from './webDeveloper'

export function getRoleData(role) {
  switch (role) {
    case 'software-developer':
      return softwareDeveloperData
    case 'web-developer':
      return webDeveloperData
    default:
      return softwareDeveloperData
  }
}
