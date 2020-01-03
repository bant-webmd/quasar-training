<template>
  <q-layout view="hHh Lpr fFf">
    <q-header>
      <q-toolbar elevated>
        <q-toolbar-title class="absolute-center">
          Awesome Todo 
        </q-toolbar-title>
        <q-btn 
          to="/auth"
          flat
          class="absolute-right"
          icon-right="account_circle" 
          label="Login" />
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs
      >
        <q-route-tab 
          v-for="nav in navs"
          :key="nav.to"         
          :icon="nav.icon"
          :label="nav.label"
          :to="nav.to"
        ></q-route-tab>
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
      :breakpoint="767"
      :width="250"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>
        <q-item class="text-grey-4" v-for="nav in navs" :key="nav.to" clickable tag="a" :to="nav.to" href="https://quasar.dev" exact>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>            
          </q-item-section>
        </q-item>          
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'Layout',
  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        }
      ],
      tab: "Settings"
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 768px){
    .q-footer {
      display: none;
    }
}
.q-drawer .q-router-link--exact-active {
  color: white !important;
}
</style>
