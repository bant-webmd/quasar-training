<template>
  <q-page padding>
    <q-list class="q-mb-md" bordered padding>
      <q-item-label header>Settings</q-item-label>
      <q-item>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="show12HourTimeFormat"/>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Show tasks in one list</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="showTasksInOneList"/>
        </q-item-section>
      </q-item>
    </q-list>
    <q-list bordered padding>
      <q-item-label header>More</q-item-label>
      <q-item v-ripple to="/settings/help">
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>
      <q-item tag="label" @click="visitOurWebsite" v-ripple>
        <q-item-section>
          <q-item-label>Visit our website</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>
      <q-item tag="label" @click="emailUs" v-ripple>
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<style>
</style>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import {openURL} from 'quasar'

export default {
    methods: {
        ...mapActions('settings', ['setShow12HourTimeFormat', 'setShowTasksInOneList']),
        visitOurWebsite() {
          console.log("Called visit")
          openURL('http://www.google.com');
        },
        emailUs() {
          window.location.href="mailto:hello@awesometodo.com?subject=Awesome Todo Feeback"
        }
    },
    computed: {
        ...mapGetters('settings', ['settings']),
        show12HourTimeFormat: {
            get() {
                return this.settings.show12HourTimeFormat;
            },  
            set(value) {
                this.setShow12HourTimeFormat(value)
            }
        },
        showTasksInOneList: {
            get() {
                return this.settings.showTasksInOneList;
            }, 
            set(value) {
                this.setShowTasksInOneList(value);
            }
        }
    }
};
</script>
