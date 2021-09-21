import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class HouseService {
  async createHouse(newHouse) {
    try {
      console.log(newHouse)
      // const res = await api.post('', newHouse)
      // AppState.houses.push(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const houseService = new HouseService()
