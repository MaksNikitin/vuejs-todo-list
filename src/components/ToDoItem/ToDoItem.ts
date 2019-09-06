import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ToDoItem extends Vue {
  @Prop() value!: string;
  @Prop() isChecked!: boolean;
  @Prop() index!: number;

  deleteToDo() {
    this.$emit('delete', this.index);
  }

  updateToDo() {
    this.$emit('update', this.index);
  }

  changeToDoStatus() {
    this.$emit('changeStatus', this.index);
  }
}
