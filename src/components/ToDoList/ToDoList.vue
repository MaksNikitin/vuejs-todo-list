<template>
  <v-content class="mx-auto content-container">
    <v-card
      v-if="toDos && toDos.length"
      class="mb-6"
    >
      <v-progress-linear
        active
        rounded
        height="8"
        :value="completedTodosRatio"
      />

      <v-list-item class="d-flex justify-space-between">
        <div>{{ activeToDos.length }} items left</div>
        <div class="pb-3 pt-3">
          <v-btn-toggle
            v-model="filterValue"
            color="primary"
          >
            <v-btn class="mr-3 ml-3 toggle-btn">
              ALL
            </v-btn>
            <v-btn class="mr-3 ml-3 toggle-btn">
              ACTIVE
            </v-btn>
            <v-btn class="mr-3 ml-3 toggle-btn">
              COMPLETED
            </v-btn>
          </v-btn-toggle>
        </div>
      </v-list-item>

      <v-divider />

      <div
        v-for="(item, index) in filteredToDos"
        :key="index"
      >
        <to-do-item
          :value="item.value"
          :is-checked="item.isChecked"
          :index="index"
          @delete="deleteToDo"
          @update="updateToDo"
          @changeStatus="updateStatus"
        />
      </div>
    </v-card>

    <div class="d-flex justify-center mb-6">
      <v-btn
        class="add-btn"
        color="primary"
        @click="addToDo"
      >
        Add New Todo
      </v-btn>
    </div>

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

<style lang="css" scoped>
  .content-container {
    width: 35%;
  }

  .add-btn {
    width: 100%;
  }

  .toggle-btn {
    border: 0 !important;
  }
</style>
