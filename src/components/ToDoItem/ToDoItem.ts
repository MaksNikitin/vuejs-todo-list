import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ToDoItem extends Vue {
  @Prop() value!: string;
  @Prop() isChecked!: boolean;

  deleteToDo() {
    this.$emit('delete', this.$vnode.key);
  }

  updateToDo() {
    this.$emit('update', this.$vnode.key);
  }
}
