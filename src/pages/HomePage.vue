<template>
  <div class="container-fluid">
    <div class="row justify-content-center mt-3">
      <div class="col-3">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalId-cars">
          Open Modal Cars
        </button>
      </div>
      <div class="col-3">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalId-houses">
          Open Modal Houses
        </button>
      </div>
      <div class="col-3">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalId-jobs">
          Open Modal Jobs
        </button>
      </div>
    </div>
  </div>
  <BaseModal id-prop="modalId-cars">
    <template #title>
      <h5>Make a Car</h5>
    </template>
    <template #input>
      <input type="text" v-model="newObject.name">
      <input type="text" v-model="newObject.make">
      <input type="text" v-model="newObject.model">
      <input type="text" v-model="newObject.price">
    </template>
  </BaseModal>
  <BaseModal id-prop="modalId-houses">
    <template #title>
      <h5>Make a House</h5>
    </template>
    <template #input>
      <input type="text" placeholder="Address" v-model="newObject.address">
      <input type="text" placeholder="Year" v-model="newObject.year">
      <input type="text" placeholder="SquareFoot" v-model="newObject.squareFoot">
      <input type="text" placeholder="Price" v-model="newObject.price">
    </template>
  </BaseModal>
  <BaseModal id-prop="modalId-jobs">
    <template #title>
      <h5>Make a Job</h5>
    </template>
    <template #input>
      <input type="text" placeholder="title" v-model="newObject.title">
      <input type="text" placeholder="company" v-model="newObject.company">
      <input type="text" placeholder="yearly pay" v-model="newObject.pay">
    </template>
  </BaseModal>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    return {
      newObject: computed(() => AppState.newObject)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      width: 200px;
    }
  }
}
</style>
