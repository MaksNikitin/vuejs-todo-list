<template>
  <v-list-item>
    <v-list-item-icon @click="changeToDoStatus">
      <v-icon>{{ isChecked ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank' }}</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title v-text="value" />
    </v-list-item-content>

    <v-list-item-icon @click="updateToDo">
      <v-icon>mdi-pencil</v-icon>
    </v-list-item-icon>

    <v-list-item-icon @click="deleteToDo">
      <v-icon>mdi-delete</v-icon>
    </v-list-item-icon>
  </v-list-item>
</template>

<script lang="ts" src="./ToDoItem.ts" />
