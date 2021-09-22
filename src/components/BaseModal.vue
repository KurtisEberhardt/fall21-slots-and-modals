<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="title" class="modal-title">
            YOUR CONTENT IS INJECTED RIGHT HERE
          </slot>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="create">
          <slot name="input" class="modal-body">
            YOUR CONTENT IS INJECTED RIGHT HERE
          </slot>
          <button class="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { carsService } from '../services/CarsService'
import { houseService } from '../services/HouseService'
import { jobService } from '../services/JobService'

export default {
  props: {
    idProp: { type: String, required: true }
  },
  setup(props) {
    const state = reactive({
      newObject: computed(() => AppState.newObject)
    })
    return {
      async create() {
        if (props.idProp === 'modalId-cars') {
          try {
            await carsService.createCar(state.newObject)
          } catch (error) {
            logger.error('error in base modal', error)
          }
        } else if (props.idProp === 'modalId-jobs') {
          try {
            await jobService.createJob(state.newObject)
          } catch (error) {
            logger.error(error)
          }
        } else {
          try {
            await houseService.createHouse(state.newObject)
          } catch (error) {
            logger.error(error)
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
