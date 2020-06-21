<template>
  <v-container class="pink lighten-5">
    <v-row>
      <h4>Recent Posts</h4>
    </v-row>
    <v-row class="d-flex align-center">
      <v-card style="width: 30%" class="px-4 ma-2" color="#26c6da" dark v-for="(post, index) in getPosts" :key="index">
        <v-card-title>
          <v-icon large left>mdi-twitter</v-icon>
          <span class="title font-weight-light">{{ dateSince(post.createdAt) }}</span>
        </v-card-title>
        <v-card-text class="headline font-weight-bold">{{post.body}}</v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src=""
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{post.username}}</v-list-item-title>
            </v-list-item-content>

            <v-row align="center" justify="end">
              <v-icon class="mr-1">mdi-heart</v-icon>
              <span class="subheading mr-2">{{post.likeCount}}</span>
              <span class="mr-1">·</span>
              <v-icon class="mr-1">mdi-comment</v-icon>
              <span class="subheading">{{post.commentCount}}</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'

import { ALL_POSTS_QUERY } from '../constants/graphql'
export default {
  name: 'Posts',
  data () {
    return {
      getPosts: []
    }
  },
  methods: {
    dateSince (createdAt) {
      return moment(createdAt).fromNow(true)
    }
  },
  apollo: {
    getPosts: {
      query: ALL_POSTS_QUERY
    }
  }
}
</script>

<style scoped>
</style>
