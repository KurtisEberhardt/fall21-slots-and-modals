import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class JobService {
  async createJob(newJob) {
    try {
      console.log(newJob)
      // const res = api.post('', newJob)
      // AppState.jobs.push(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const jobService = new JobService()
