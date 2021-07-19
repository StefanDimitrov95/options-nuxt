<template>
  <b-navbar transparent shadow>
    <!--<template #brand>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        /
      </b-navbar-item>
    </template>-->
    <template #start>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }"> Home </b-navbar-item>
      <b-navbar-item href="#"> Trade Alerts </b-navbar-item>
      <b-navbar-dropdown label="Info" hoverable>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/about' }"> About
        </b-navbar-item>
        <b-navbar-item href="#"> Contact </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" @click="isModalActive = true">
            Log in
          </a>
        </div>
      </b-navbar-item>
      <b-modal
        v-model="isModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="true"
        :can-cancel="['escape', 'outside']"
        aria-role="dialog"
        aria-label="Login form"
        aria-modal
      >
        <template #default="props">
          <Login v-bind="formProps" @close="props.close"></Login>
        </template>
      </b-modal>
    </template>
  </b-navbar>
</template>

<script>
import Login from '~/components/Login'
export default {
  data() {
    return {
      isModalActive: false,
      formProps: {
        email: 'test@test.com',
        password: 'testing',
      },

      components: {
        Login,
      },
    }
  },
}
</script>

<style></style>
