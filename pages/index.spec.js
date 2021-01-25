import 'jest';
import { shallowMount } from '@vue/test-utils';
import index from './index.vue';

describe('Index file', () => {
  it('Displaying site link from data', async () => {
    const wrapper = shallowMount(index);

    await wrapper.setData({
      items: [
        {
          name: 'Some site',
          page: '/some',
          icon: 'address-card',
        },
      ],
    });
    expect(wrapper.find('.navbar').text()).toContain('Some site');
  });
});
