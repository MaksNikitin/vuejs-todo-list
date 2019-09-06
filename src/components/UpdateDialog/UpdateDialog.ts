import { Vue, Component, Prop, PropSync } from "vue-property-decorator";

import ToDoModel from '../../models/toDoModel';

@Component
export default class ToDoList extends Vue {
  @Prop() title!: string;
  @PropSync('value', { type: Object }) formValue!: ToDoModel;
  @PropSync('isDialogVisible', { type: Boolean }) isDialogFormVisible!: boolean;

  isValid: boolean = false;
  valueRules: any = [
    (v: string) => !!v || 'Value is required',
  ];

  saveChanges() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.$emit('close', true);
    }
  }

  discardChanges() {
    this.$emit('close');
  }
}
