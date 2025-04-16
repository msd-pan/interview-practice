<template>
  <h1>Task 1：点击按钮弹出 Modal</h1>
  <button @click="isOpen = true">打开弹窗</button>

  <div v-if="isOpen" class="modal">
    <h3>弹窗内容</h3>
    <button @click="isOpen = false">取消</button>
    <button @click="confirm">确认</button>
  </div>

  <h1>Task 2：表单（含验证）</h1>
  <div>
    <input
      type="email"
      name="email"
      placeholder="email"
      v-model="formData.email"
    />
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="formData.password"
    />
    <button type="submit" @click="submit">提交</button>
  </div>

  <h1>Task 3：动态添加表单项（多项输入）</h1>
  <div>
    <input
      type="text"
      style="display: block"
      v-for="(ele, index) in inputFormAmount"
      :key="index"
    />
    <button @click="addInputForm">add input</button>
    <button @click="deleteInputForm">delete input</button>
  </div>
</template>
<script lang="ts" setup>
interface LoginForm {
  email: string;
  password: string;
}

const isOpen = ref<boolean>(false);
const formData = reactive<LoginForm>({
  email: "",
  password: "",
});
const inputFormAmount = ref<string[]>([]);

const confirm = () => {
  isOpen.value = false;
};

const submit = () => {
  if (!formData.email || !formData.password) {
    alert("请填写所有字段");
    return;
  }
  console.log("表单数据", formData);
};

const addInputForm = () => {
  inputFormAmount.value.push("");
};

const deleteInputForm = () => {
  inputFormAmount.value.pop();
};
</script>
<style lang="scss" scoped></style>
