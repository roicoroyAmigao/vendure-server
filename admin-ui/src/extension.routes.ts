export const extensionRoutes = [  {
    path: 'extensions/vue-ui',
    loadChildren: () => import('./extensions/c0e1b73c36d5233cb09673567199eee191cc645f7f84e705c564a70a2e4ee47a/vue-ui-extension.module').then(m => m.VueUiExtensionModule),
  }];
