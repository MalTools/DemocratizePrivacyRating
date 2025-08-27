/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */

import component from "@/locales/en-US/component";

//<LockOutlined />
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/Survey',
    name: 'Survey',
    icon: 'crown',
    component: './PrivacyRiskSurvey',
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: '/admin',
  //       redirect: '/admin/sub-page',
  //     },
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       component: './Admin',
  //     },
  //   ],
  // },
  {
    name: 'Weather',
    // icon: 'table',
    path: '/categories/weather',
    component: './Category_Weather',
  },
  {
    name: 'Weather-App1',
    path: '/categories/weather/app1',
    component: './Category_Weather',
    hideInMenu: true,
  },
  {
    name: 'Weather-App2',
    path: '/categories/weather/app2',
    component: './Category_Weather',
    hideInMenu: true,
  },
  {
    name: 'Weather-App3',
    path: '/categories/weather/app3',
    component: './Category_Weather',
    hideInMenu: true,
  },
  {
    name: 'Social',
    path: '/categories/social',
    component: './Category_Social',
  },
  {
    name: 'Social-App1',
    path: '/categories/social/app1',
    component: './Category_Social',
    hideInMenu: true,
  },
  {
    name: 'Social-App2',
    path: '/categories/social/app2',
    component: './Category_Social',
    hideInMenu: true,
  },
  {
    name: 'Social-App3',
    path: '/categories/social/app3',
    component: './Category_Social',
    hideInMenu: true,
  },
  {
    name: 'Events',
    path: '/categories/events',
    component: './Category_Events',
  },
  {
    name: 'Events-App1',
    path: '/categories/events/app1',
    component: './Category_Events',
    hideInMenu: true,
  },
  {
    name: 'Events-App2',
    path: '/categories/events/app2',
    component: './Category_Events',
    hideInMenu: true,
  },
  // {
  //   path: '/categories/comics',
  //   name: 'Comics',    
  //   component: './Category_Comics',
  // },
  {
    path: '/categories/tools',
    name: 'Tools',
    // icon: 'crown',
    routes: [
      {
        path: '/categories/tools',
        redirect: '/categories/tools/translator-tools',
      },
      {
        name: 'Tool-Translator',
        path: '/categories/tools/translator-tools',        
        component: './Category_Tools_Translator',
      },
      {
        name: 'Tool-Translator-App1',
        path: '/categories/tools/translator-tools/app1',
        component: './Category_Tools_Translator',
        hideInMenu: true,
      },
      {
        name: 'Tool-Translator-App2',
        path: '/categories/tools/translator-tools/app2',
        component: './Category_Tools_Translator',
        hideInMenu: true,
      },
      {
        name: 'Tool-Scanner',
        path: '/categories/tools/scanner-tools',
        component: './Category_Tools_Scanner',
      },
      {
        name: 'Tool-Scanner-App1',
        path: '/categories/tools/scanner-tools/app1',
        component: './Category_Tools_Scanner',
        hideInMenu: true,
      },
      {
        name: 'Tool-VPN Proxy',
        path: '/categories/tools/vpn-tools',        
        component: './Category_Tools_VPN',
      },
      {
        name: 'Tool-VPN Proxy-App1',
        path: '/categories/tools/vpn-tools/app1',
        component: './Category_Tools_VPN',
        hideInMenu: true,
      },
      {
        name: 'Tool-VPN Proxy-App2',
        path: '/categories/tools/vpn-tools/app2',
        component: './Category_Tools_VPN',
        hideInMenu: true,
      },
      // {
      //   path: '/categories/tools/alarm-clock',
      //   name: 'Tool-Alarm Clock',
      //   icon: 'lock',
      //   component: './Category_Beauty',
      // },
      // {
      //   path: '/categories/tools/audio-recording',
      //   name: 'Tool-Audio Recording',
      //   icon: 'lock',
      //   component: './Category_Beauty',
      // },
      // {
      //   path: '/categories/tools/calculator',
      //   name: 'Tool-Calculator',
      //   icon: 'lock',
      //   component: './Category_Beauty',
      // },
      // {
      //   path: '/categories/tools/calendar',
      //   name: 'Tool-Calendar',
      //   icon: 'lock',
      //   component: './Category_Beauty',
      // },
      // {
      //   path: '/categories/tools/flashlight',
      //   name: 'Tool-Flashlight',
      //   icon: 'lock',
      //   component: './Category_Beauty',
      // },
      // {
      //   path: '/categories/tools/lock-screen',
      //   name: '......',
      //   icon: 'lock',
      //   component: './Category_Beauty',
      // },
    ],
  },

  // {
  //   path: '/categories/art-and-design',
  //   name: 'Art and Design',    
  //   icon: 'lock',
  //   component: './Category_ArtandDesign',
  // },
  // {
  //   path: '/categories/auto-and-vehicles',
  //   name: 'Auto and Vehicles',    
  //   icon: 'lock',
  //   component: './Category_AutoandVehicles',
  // },
  // {
  //   path: '/categories/beauty',
  //   name: 'Beauty',    
  //   icon: 'lock',
  //   component: './Category_Beauty',
  // },
  // {
  //   path: '/categories/books-and-reference',
  //   name: 'Books and Reference',    
  //   icon: 'lock',
  //   component: './Category_BooksandReference',
  // },
  // {
  //   path: '/categories/business',
  //   name: 'Business',    
  //   icon: 'lock',
  //   component: './Category_Business',  
  // },
  // {
  //   path: '/categories/communications',
  //   name: 'Communications',    
  //   icon: 'lock',
  //   component: './Category_Communications',
  // },
  // {
  //   path: '/categories/dating',
  //   name: 'Dating',    
  //   icon: 'lock',
  //   component: './Category_Dating',
  // },
  // {
  //   path: '/categories/education',
  //   name: '......',    
  //   icon: 'lock',
  //   component: './Category_Education',
  // },
  // {
  //   path: '/categories/entertainment',
  //   name: 'Entertainment',    
  //   icon: 'lock',
  //   component: './Category_Entertainment',
  // },
  // {
  //   path: '/categories/finance',
  //   name: '......',    
  //   icon: 'lock',
  //   component: './Category_Finance',
  // },
  // {
  //   path: '/categories/food-and-drink',
  //   name: 'Food and Drink',    
  //   icon: 'lock',
  //   component: './Category_FoodandDrink',
  // },
  // {
  //   path: '/categories/health-and-fitness',
  //   name: 'Health and Fitness',    
  //   icon: 'lock',
  //   component: './Category_HealthandFitness',
  // },
  // {
  //   path: '/categories/house-and-home',
  //   name: 'House and Home',    
  //   icon: 'lock',
  //   component: './Category_HouseandHome',
  // },
  // {
  //   path: '/categories/libraries-and-demo',
  //   name: 'Libraries and Demo',    
  //   icon: 'lock',
  //   component: './Category_LibrariesandDemo',
  // },
  // {
  //   path: '/categories/lifestyle',
  //   name: 'Lifestyle',    
  //   icon: 'lock',
  //   component: './Category_Lifestyle',
  // },
  

  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },

  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
  {
    path: '/contact',
    name: 'Contact',
    component: './ContactForm',
    hideInMenu: true,
  },
  
];
