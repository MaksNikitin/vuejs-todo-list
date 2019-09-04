export default class ToDoModel {
  value: string;
  isChecked: boolean;

  constructor(value: string = '', isChecked: boolean = false) {
    this.value = value;
    this.isChecked = isChecked;
  }
}
