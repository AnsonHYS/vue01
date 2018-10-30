export const powerRouter =[    
    { path: '/',  redirect:'/red',name: 'index',component: () => import('@/components/BGindex.vue'),
      children: [
        { path: '/red', name: 'red', component: () => import('@/components/red.vue'),},
        { path: '/yellow', name: 'yellow', component: () => import('@/components/yellow.vue'), meta: {role: 'B'}},
        { path: '/blue', name: 'blue', component: () => import('@/components/blue.vue'), meta: {role: 'C'}}
      ]
    }
];

 

 