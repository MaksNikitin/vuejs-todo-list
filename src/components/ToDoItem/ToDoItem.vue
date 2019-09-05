<template>
  <v-card
    max-width="344"
    class="mx-auto"
    style="margin-bottom: 20px"
  >
    <v-card-title>{{ value }}</v-card-title>
    <v-card-text>I'm card text</v-card-text>
    <v-card-actions>
      <v-btn @click="updateToDo">
        Update
      </v-btn>
      <v-btn @click="deleteToDo">
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
