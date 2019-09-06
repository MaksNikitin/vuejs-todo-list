<template>
  <v-dialog
    v-model="isDialogFormVisible"
    width="500"
  >
    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        {{ title }}
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          v-model="isValid"
          lazy-validation
          style="padding-top: 25px"
        >
          <v-text-field
            v-model="formValue.value"
            :counter="25"
            :rules="valueRules"
            label="Value"
            required
          />

          <v-checkbox
            v-model="formValue.isChecked"
            label="Status"
          />
        </v-form>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-btn 
          color="primary"
          :disabled="!isValid"
          @click="saveChanges"
        >
          Save
        </v-btn>
        <v-btn
          color="secondary"
          @click="discardChanges"
        >
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="./UpdateDialog.ts" />
