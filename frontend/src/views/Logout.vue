<template>
  <div>
    <v-btn @click="submit" x-large color="success" dark>Logout</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Logout',
  methods: {
    ...mapActions(['logoutUser']),
    async submit () {
      await this.logoutUser()
    }
  },
  computed: {
    ...mapGetters(['getUserDetails'])
  }
}
</script>
