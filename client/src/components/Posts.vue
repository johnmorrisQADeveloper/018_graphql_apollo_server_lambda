<template>
  <v-container class="lighten-5">
    <v-row>
      <h4>Recent Posts</h4>
    </v-row>
    <v-row class="d-flex align-center">
      <v-card
        style="width: 30%"
        class="px-4 ma-2"
        color="#26c6da"
        dark
        v-for="(post, index) in getPosts"
        :key="index"
      >
        <v-card-title color="#086972" class="rounded-xl">
          <v-list color="#01a9b4">
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
        <v-card-text link :to="post.id" class="headline font-weight-bold">{{post.body}}</v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img class="elevation-6" src></v-img>
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
