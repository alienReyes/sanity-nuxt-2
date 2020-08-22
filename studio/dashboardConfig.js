export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-2-studio',
                  apiId: '9dc98420-ab9e-4b15-88fa-9bdb35853871'
                },
                {
                  buildHookId: '5f4075da54270483466ccf23',
                  title: 'Events Website',
                  name: 'sanity-nuxt-2',
                  apiId: '7a99c31d-3960-48d9-b26d-01aea7affa24'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alienReyes/sanity-nuxt-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
