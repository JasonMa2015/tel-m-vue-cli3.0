export default [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () =>
      import('@/views/home/Home')
  }
];