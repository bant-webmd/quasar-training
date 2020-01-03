<template>
    <q-form @submit.prevent="submitForm" ref="myForm">
        <div class="row q-mb-md">
            <q-banner class="bg-grey-3 col">
                <template v-slot:avatar>
                    <q-icon name="account_circle" color="primary" />
                </template>
                {{tab | titleCase}} to access your Todos anywhere!
            </q-banner>
        </div>
        <div class="row q-mb-md">
            <q-input
              :rules="[val => isValidEmailAddress(val) || 'Please enter a valid email address.']"
              lazy-rules
              class="col"
              outlined
              v-model="formData.email"
              label="Email"
              stack-label />
        </div>
        <div class="row q-mb-md">
            <q-input
              :rules="[val => val.length >= 6 || 'Please enter at least 6 characters.']"
              lazy-rules
              class="col"
              outlined
              v-model="formData.password"
              label="Password"
              type="password"
              stack-label />
        </div>
        <div class="row">
            <q-space></q-space>
            <q-btn
                color="primary"
                label="Register"
                type="submit"
            ></q-btn>
        </div>
    </q-form>
</template>

<script>
export default {
    props: ["tab"],
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    filters: {
        titleCase(value) {
            return value.charAt(0).toUpperCase() + value.substring(1);
        }
    },
    methods: {
        submitForm() {
            this.$refs.myForm.validate().then((success) => {
                console.log("Submit form");
                if (success) {
                    if (this.tab == "login") {
                        console.log("login user action")
                    } else {
                        console.log("register user action")
                    }
                } else {
                    console.log('invalid form');
                }
            })
        },
        isValidEmailAddress(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
        }
    }
};
</script>