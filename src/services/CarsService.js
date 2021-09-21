import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class CarsService {
  async createCar(newCar) {
    try {
      console.log(newCar)
    } catch (error) {
      logger.error('error in CarService', error)
    }
  }
}

export const carsService = new CarsService()
