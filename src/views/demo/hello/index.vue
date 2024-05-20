<script setup lang="ts">
  import { onMounted, reactive } from 'vue';
  import { DemoParams, queryDemoList, Record } from '@/api/demo';
  import useLoading from '@/hooks/loading';
  import { TableColumnData } from '@arco-design/web-vue/es/table/interface.d';

  const { loading, setLoading } = useLoading(true);

  const form = reactive({
    name: '',
    phone: '',
    visible: false,
    post: '',
  });
  interface TableData {
    columns: TableColumnData[];
    data: Record[];
    page: number;
    total: number;
  }
  const tableData: TableData = reactive({
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: '电话',
        dataIndex: 'phone',
        slotName: 'phone',
      },
      {
        title: 'Salary',
        dataIndex: 'salary',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
    ],
    data: [],
    page: 0,
    total: 0,
  });

  let defaultParams: DemoParams = { name: '', phone: '' };
  const fetchData = async (params: DemoParams) => {
    setLoading(true);
    try {
      const { data } = await queryDemoList(params);
      tableData.data = data.data;
      tableData.total = data.total;
    } catch (err) {
      console.error('fetchData error', err);
    } finally {
      setLoading(false);
    }
  };

  onMounted(() => {
    fetchData(defaultParams);
  });
  function search() {
    defaultParams = { name: form.name, phone: form.phone };
    fetchData({ name: form.name, phone: form.phone });
  }
  function reset() {
    form.name = '';
    form.phone = '';
  }
  function pageChange(current: number) {
    tableData.page = current;
    console.log(tableData.page);
    fetchData(defaultParams);
  }
  function handleBeforeOk(done) {
    window.setTimeout(() => {
      console.log('timeout!!!');
      done();
    }, 3000);
    console.log('handleBeforeOk!!!');
    return true;
  }
  function save() {
    form.visible = !form.visible;
    console.log('save');
  }
</script>

<template>
  <div class="container">
    <!--    <Breadcrumb :items="['menu.demo', 'menu.demo.hello']"></Breadcrumb>-->
    <a-card>
      <a-form :model="form" layout="inline">
        <a-form-item label="用户名">
          <a-input v-model="form.name" placeholder="输入用户名" />
        </a-form-item>
        <a-form-item label="手机号">
          <a-input v-model="form.phone" placeholder="输入手机号" />
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button type="primary" @click="search">确定</a-button>
            <a-button type="secondary" @click="reset">重置</a-button>
          </a-space>
        </a-form-item>
      </a-form>
      <a-divider />
      <div style="display: flex; margin-bottom: 16px">
        <a-space>
          <a-button type="primary">
            <template #icon>
              <icon-plus />
            </template>
            {{ $t('searchTable.operation.create') }}
          </a-button>
          <a-upload action="/">
            <template #upload-button>
              <a-button>
                {{ $t('searchTable.operation.import') }}
              </a-button>
            </template>
          </a-upload>
        </a-space>
        <a-space>
          <a-tooltip :content="$t('searchTable.actions.refresh')">
            <icon-refresh size="18" />
          </a-tooltip>
          <a-tooltip :content="$t('searchTable.actions.refresh')">
            <icon-refresh size="18" />
          </a-tooltip>
        </a-space>
      </div>
      <a-table
        style="margin-bottom: 16px"
        :columns="tableData.columns"
        :data="tableData.data"
        :pagination="false"
        :loading="loading"
      >
        <template #phone="{ record }">
          <a-button
            v-show="record.phone"
            type="text"
            @click="form.visible = !form.visible"
          >
            {{ record.phone }}
          </a-button>
        </template>
      </a-table>
      <a-pagination
        style="justify-content: flex-end; margin-bottom: 16px"
        :total="tableData.total"
        show-page-size
        @change="pageChange"
      />
      <a-modal
        :visible="form.visible"
        :on-before-ok="handleBeforeOk"
        title="Modal Form"
        @cancel="form.visible = !form.visible"
        @ok="save"
      >
        <a-form :model="form">
          <a-form-item field="name" label="Name">
            <a-input v-model="form.name" />
          </a-form-item>
          <a-form-item field="post" label="Post">
            <a-select v-model="form.post">
              <a-option value="post1">Post1</a-option>
              <a-option value="post2">Post2</a-option>
              <a-option value="post3">Post3</a-option>
              <a-option value="post4">Post4</a-option>
            </a-select>
          </a-form-item>
        </a-form>
      </a-modal>
    </a-card>
  </div>
</template>

<style scoped lang="less">
  .container {
    margin: 0 20px 20px;
  }
</style>
