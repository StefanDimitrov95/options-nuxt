<template>
  <div>
    <Navbar />
    <section class="main-content columns">
      <aside class="column is-2 section">
        <SideMenuBar :items="sidebarItems" />
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
          icon: 'chart-line',
          to: { name: 'index' },
        },
        {
          title: 'Users',
          icon: 'users',
          to: { name: 'users' },
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
