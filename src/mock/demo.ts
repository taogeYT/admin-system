import setupMock, {
  failResponseWrap,
  // successResponseWrap,
} from '@/utils/setup-mock';
import Mock from 'mockjs';

setupMock({
  mock: true,
  setup() {
    Mock.mock(new RegExp('/api/demo/hello'), () => {
      return failResponseWrap(null, 'api undefined');
    });
  },
});
