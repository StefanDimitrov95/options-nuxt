<template>
  <div>
    <Navbar />
    <section class="main-content columns">
      <aside class="column is-2 section">
        <SideMenuBar :items="sidebarItems" title="Admin" />
      </aside>
      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import SideMenuBar from '~/components/SideMenuBar'

export default {
  data() {
    return {
      sidebarItems: [
        {
          title: 'Signals',
          icon: 'plus',
          to: { name: 'admin-signals' },
        },
        {
          title: 'Users',
          icon: 'account',
          to: { name: 'admin-users' },
        },
      ],
    }
  },
  components: {
    Navbar,
    SideMenuBar,
  },
}
</script>
