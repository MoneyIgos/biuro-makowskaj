import 'jest';
import { shallowMount } from '@vue/test-utils';
import BlogPost from './BlogPost.vue';

describe('BlogPost Component', () => {
  it('Displaying title from prop', () => {
    const title = 'New Title';
    const description = 'New Description';
    const image = 'New Image';

    const wrapper = shallowMount(BlogPost, {
      propsData: { title, description, image },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
