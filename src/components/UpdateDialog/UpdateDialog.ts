import { Vue, Component, Prop, PropSync } from "vue-property-decorator";

import ToDoModel from '../../models/ToDoModel';

@Component
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
