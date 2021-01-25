import 'jest';
import { shallowMount } from '@vue/test-utils';
import BlogPost from './BlogPost.vue';

describe('BlogPost Component', () => {
  it('Displaying posts from data', () => {
    const title = 'New Title';
    const wrapper = shallowMount(BlogPost, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
