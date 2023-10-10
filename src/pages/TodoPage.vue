<template>
  <div class="text-h5 q-ma-md text-weight-light">待办事项</div>
  <div class="row q-pa-sm">
    <div class="col-12 col-md-4">
      <div class="q-ma-sm">
        <q-input
          placeholder="输入任务标题"
          label="新增任务"
          square
          outlined
          v-model="newTask.title"
          @keyup.enter="addNewTask"
        >
          <template v-slot:label>
            <q-icon name="bi-check-lg" size="24px" class="q-mr-xs"></q-icon
            >新增任务
          </template>
          <template v-slot:append>
            <q-btn round flat icon="bi-mic" color="primary"></q-btn>
            <q-btn round flat icon="bi-pencil" color="primary"></q-btn>
            <q-btn
              round
              flat
              icon="bi-plus-lg"
              color="primary"
              @click.stop="addNewTask"
            ></q-btn>
          </template>
        </q-input>
        <q-card v-if="todoList.length" flat bordered class="q-my-md">
          <todo-list
            title="未完成"
            :list="undoneList"
            @delete="deleteTodo"
          ></todo-list>
          <q-separator></q-separator>
          <todo-list
            title="已完成"
            :list="doneList"
            @delete="deleteTodo"
          ></todo-list>
        </q-card>
        <div class="text-center q-ma-lg" v-else style="opacity: 0.5">
          <q-icon name="bi-check-all" size="100px" color="primary"></q-icon>
          <div class="text-h6 text-primary text-center">暂无任务</div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <q-card class="q-ma-sm" flat bordered>
        <q-date
          v-model="date"
          :events="events"
          class="full-width"
          event-color="orange"
        />
      </q-card>
    </div>
    <div class="col-12 col-md-4">
      <q-card class="q-ma-sm" flat bordered>
        <q-tab-panels
          v-model="date"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel :name="event" v-for="event in events" :key="event">
            <div class="text-h4 q-mb-md">{{ event }}</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TodoList from '../components/TodoList.vue';
import { computed, ref } from 'vue';
import { useQuasar } from 'quasar';
import { Task } from '../model/models';

const $q = useQuasar();
const todoList = ref<Task[]>([
  {
    id: 1,
    done: false,
    title: '待办1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente assumenda rerum? Facere, incidunt. Cum repellendus mollitia perferendis enim nisi eos aliquam, quasi hic, quas voluptatum facere ab reiciendis minus!',
  },
  {
    id: 2,
    done: false,
    title: '待办2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente assumenda rerum? Facere, incidunt. Cum repellendus mollitia perferendis enim nisi eos aliquam, quasi hic, quas voluptatum facere ab reiciendis minus!',
  },
  {
    id: 3,
    done: false,
    title: '待办3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente assumenda rerum? Facere, incidunt. Cum repellendus mollitia perferendis enim nisi eos aliquam, quasi hic, quas voluptatum facere ab reiciendis minus!',
  },
]);
const doneList = computed<Task[]>(() => {
  return todoList.value.filter((todo) => todo.done);
});
const undoneList = computed<Task[]>(() => {
  return todoList.value.filter((todo) => !todo.done);
});
const newTask = ref<Task>({
  id: todoList.value.length + 1,
  done: false,
  title: '',
  content: '',
});
function deleteTodo(index: number) {
  $q.dialog({
    title: '确认',
    message: '确定删除吗?' + todoList.value.length + ',' + index,
    persistent: true,
    focus: 'none',
    ok: {
      label: '确定',
      flat: true,
    },
    cancel: {
      label: '取消',
      flat: true,
    },
  }).onOk(() => {
    todoList.value.splice(index, 1);
    $q.notify({
      message: '任务已删除',
      icon: 'bi-trash3',
      color: 'primary',
      timeout: 1000,
    });
  });
}
function addNewTask() {
  newTask.value.id = todoList.value.length + 1;
  const task: Task = { ...newTask.value };
  todoList.value.push(task);
  newTask.value.title = '';
}

const date = ref('2023-08-06');
const events = ref(['2023/08/06', '2023/08/12', '2023/08/17']);
</script>
../model/models
