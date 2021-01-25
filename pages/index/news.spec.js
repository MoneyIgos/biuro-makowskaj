import 'jest';
import { shallowMount } from '@vue/test-utils';
import BlogPost from '../../components/BlogPost.vue';
import news from './news.vue';

describe('News file', () => {
  it('Displaying post from data', async () => {
    const wrapper = shallowMount(news);

    await wrapper.setData({
      posts: [
        {
          title: 'Some title',
          image: '',
          description: 'Some description',
        },
      ],
    });
    expect(wrapper.findComponent(BlogPost).html()).toContain(
      '<blogpost-stub title="Some title" image="" description="Some description"></blogpost-stub>',
    );
  });
});
