export default {
  name: 'home',
  children: [
    {
      name: 'Desktop',
      children: [
        {
          name: 'example-folder',
          children: [
            {
              name: 'test.txt',
              content: 'Example content.\n I am testing component',
            },
            {
              name: 'test2.txt',
              content: 'Example content.\n I am testing component',
            },
            {
              name: 'sub-folder',
              children: [
                {
                  name: 'subtest1.txt',
                  content: 'Example content.\n I am testing component, subtest1.txt',
                },
                {
                  name: 'subtest2.txt',
                  content: 'Example content.\n I am testing component, subtest2.txt',
                },
                {
                  name: 'subtest3.txt',
                  content: 'Example content.\n I am testing component, subtest3.txt',
                },

              ],
            },
          ],
        },
      ],
    },
  ],
};
