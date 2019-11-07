<template>
<div class="q-my-xl">
  <q-card
    v-for="(post, index) in postsFilters" :key="index"
    class="my-card q-my-lg q-mx-xs-sm"
  >
    <q-card-section class="row">
      <q-avatar
        class="col"
        style="max-width: 48px"
      >
        <img :src="post.avatarOwner">
      </q-avatar>
      <div class="text-h6 col-7 text-accent line-height-3 q-px-sm">{{ post.nameOwner }}</div>
      <div class="text-subtitle2 text-right col-3 text-grey-8">{{ post.day }}<br>{{ post.hour }}</div>
    </q-card-section>

    <div class="row">
      <q-rating
        v-model="post.rating"
        size="1.5rem"
        color="yellow"
        icon="star_border"
        icon-selected="star"
        class="col-12 q-px-md"
      />
    </div>
    <div class="row">
      <q-separator
        inset
        :color="post.type === 'requisitoriado' ? 'info': 'warning'"
        style="height: 2px"
        class="col-6 q-mt-md"
      />
      <q-chip
        :icon="post.type === 'requisitoriado' ? 'face' : 'search'"
        :color="post.type === 'requisitoriado' ? 'info': 'warning'"
        text-color="white"
        class="col justify-around"
      >
        <div
          class="mx-auto q-ml-none"
          :class="{'q-mr-md': post.type !== 'requisitoriado' }"
        >
          {{ post.type }}
        </div>
      </q-chip>
    </div>
    <q-card-section>
      <div class="text-h6 col-5 text-dark">{{ post.title }}</div>
      {{ post.description }}
    </q-card-section>
    <q-card-section>
      <q-carousel
        v-model="post.slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        navigation padding arrows infinite
        height="300px"
        class="bg-transparent shadow-1"
      >
        <q-carousel-slide
          v-for="(postImage, i) in post.images" :key="i"
          :name="postImage.name"
          class="column no-wrap flex-center"
        >
          <q-parallax
            :src="postImage.src"
          >
          </q-parallax>
        </q-carousel-slide>
      </q-carousel>
    </q-card-section>
    <q-card-section>
      <q-btn-group
        spread
      >
        <q-btn
          outline
          :color="post.hasView ? 'secondary' : 'grey-5'"
          :label="post.views"
          icon-right="visibility"
          @click="setViewsAmount(post)"
        />
        <q-btn
          outline
          color="grey-5" icon-right="comment" :label="post.comments"
        />
        <q-btn
          outline
          color="grey-5" icon-right="share"
        >
          <q-menu
            class="q-mt-lg"
            transition-show="rotate"
            transition-hide="rotate"
          >
            <q-list>
              <q-item clickable>
                <q-item-section>
                  <q-avatar>
                    <img src="statics/social/fb.jpg">
                  </q-avatar>
                </q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>
                  <q-avatar>
                    <img src="statics/social/twitter.png">
                  </q-avatar>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-btn-group>
    </q-card-section>
  </q-card>

  <dialog-comments />
</div>
</template>

<script>
import { Notify } from 'quasar'
import { mapState } from 'vuex'

export default {
  // data () {
  //   return {
  //   }
  // },
  computed: {
    ...mapState('posts',['postsFilters'])
  },

  methods: {
    setViewsAmount (post) {
      if (!post.hasView) {
        post.views++
        post.hasView = true,
        Notify.create({
          message: this.$t(`Esta publicación te interesa`),
          color: 'positive',
          icon: 'check_circle'
        })
      } else {
        post.views--
        post.hasView = false
        Notify.create({
          message: this.$t(`Esta publicación ya no te interesa`),
          color: 'warning',
          icon: 'info'
        })
      }
    }
  }
}
</script>

<style lang="scss" scope>
.q-carousel.q-carousel--arrows .q-carousel__slide {
  padding: 0;
}
.q-btn--outline {
  border: none;
}
.q-btn-group {
  box-shadow: none
}
</style>