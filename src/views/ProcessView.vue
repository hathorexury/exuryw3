<!-- eslint-disable vue/valid-v-slot -->
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Who we are' },
        { title: 'Our Team' },
        { title: 'Contact' }
      ],
    }),
  }
</script>

<template>
  <v-stepper :items="['Step 1', 'Step 2', 'Step 3']" transition="scroll-x-transition">
  <template #step-one>
    <v-card title="Step 1" flat>...</v-card>
  </template>

  <template #step-two>
    <v-card title="Step 2" flat>...</v-card>
  </template>

  <template #step-three>
    <v-card title="Step 3" flat>...</v-card>
  </template>
</v-stepper>
    
    <nav>
      <v-menu>
        <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i"              >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        </v-list>       
      </v-menu>
    </nav> 

  
</template>

<style>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    justify-content: center;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>