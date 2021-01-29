import { shallowMount } from '@vue/test-utils';
import contact from './contact.vue';

describe('Contact file', () => {
  it('Clearing form', () => {
    const wrapper = shallowMount(contact);

    wrapper.setData({
      email: 'someemail@email.com',
      title: 'Some title',
      message: 'some message',
    });

    wrapper.vm.clear();
    expect(wrapper.vm.email).toBe('');
  });
  it('Cannot submit form', () => {
    const wrapper = shallowMount(contact);
    const sentMessage = wrapper.find('h3');

    wrapper.setData({
      email: 'someemail@email.com',
      title: 'Some title',
      message: 'some message',
    });

    expect(sentMessage.text()).toBe('');
    wrapper.vm.submit();
    expect(sentMessage.text()).toBe('');
  });
});
