<template>
  <v-container class="grey lighten-5">
    <v-row>
      <h4>Recent Posts</h4>
    </v-row>
    <v-row no-gutters>
      <v-col v-for="(post, index) in getPosts.getPosts" :key="index" cols="12" sm="4">
        <v-card style="width: 95%; height: 95%"  class="px-2 ma-2" color="#26c6da" dark>
          <v-card-title color="#26c6da">
            <v-list color="#26c6da">
              <v-list-item link :to="post.id">
                <v-list-item-action>
                  <v-icon>mdi-twitter</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ dateSince(post.createdAt) }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-title>
          <v-card-text class="headline font-weight-bold">{{post.body}}</v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  src="https://robohash.org/034b521c33ac11292f7cd764e1968e34?set=set4&bgset=bg1&size=400x400"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{post.username}}</v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-btn class="ma-2" tile outlined color="pink">
                  <v-icon left>mdi-heart</v-icon>
                  {{post.likeCount}}
                </v-btn>
                <v-btn class="ma-2" tile outlined color="success">
                  <v-icon left>mdi-comment</v-icon>
                  {{post.commentCount}}
                </v-btn>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'

export default {
  name: 'Posts',
  methods: {
    ...mapActions(['fetchPosts']),
    dateSince (createdAt) {
      return moment(createdAt).fromNow(true)
    }
  },
  computed: {
    ...mapGetters(['getPosts'])
  },
  async created () {
    await this.fetchPosts()
  }
}
</script>

<style scoped>
</style>
