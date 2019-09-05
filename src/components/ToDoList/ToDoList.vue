<template>
  <v-content>
    <div style="justify-content: center; display: flex; padding-bottom: 20px;">
      <v-btn @click="addToDo">
        Add New Todo
      </v-btn>
    </div>

    <to-do-item
      v-for="(toDo, index) in toDos"
      :key="index"
      :value="toDo.value"
      :is-checked="toDo.isChecked"
      @delete="deleteToDo"
      @update="updateToDo"
    />

    <update-dialog
      v-if="selectedItem"
      :title="selectedItemIndex >= 0 ? 'Update ToDo Value' : 'Add ToDo Value'"
      :value="selectedItem"
      :is-dialog-visible="isDialogVisible"
      @close="closeDialog"
    />
  </v-content>
</template>

<script lang="ts" src="./ToDoList.ts" />
