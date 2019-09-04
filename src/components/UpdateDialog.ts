import { Vue, Component, Prop, PropSync } from "vue-property-decorator";

import ToDoModel from '../models/ToDoModel';

@Component({
  template: `
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
          </v-form>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-btn :disabled="!isValid" @click="saveChanges">Save</v-btn>
          <v-btn @click="discardChanges">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  `
})
export default class ToDoList extends Vue {
  @Prop() title!: string;
  @PropSync('value', { type: Object }) formValue!: ToDoModel;
  @PropSync('isDialogVisible', { type: Boolean}) isDialogFormVisible!: boolean;

  isValid: boolean = true;
  valueRules: any = [
    (v: string) => !!v || 'Value is required',
  ];

  saveChanges() {
    this.$emit('close', true);
  }

  discardChanges() {
    this.$emit('close');
  }
}
