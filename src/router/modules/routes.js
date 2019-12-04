import Layout from '@/views/layout'
const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/main',
    meta: {
      title: '主体',
      requireAuth: true,
      hide: true
    }
  }, {
    path: '/main',
    name: 'main',
    component: Layout,
    meta: {
      title: '首页',
      requireAuth: true,
      icon: '&#xe601;'
    }
  }, {
    path: '/system',
    name: 'system',
    component: Layout,
    meta: {
      title: '系统维护',
      requireAuth: true,
      icon: '&#xe602;'
    },
    children: [
      {
        path: 'organizations',
        name: 'organizations',
        meta: {
          title: '机构管理',
          requireAuth: true,
          icon: '&#xe62c;'
        }
      }, {
        path: 'departments',
        name: 'departments',
        component: () => import('@/views/group'),
        meta: {
          title: '科室管理',
          requireAuth: true,
          icon: '&#xe7d2;'
        }
      }, {
        path: 'personnel',
        name: 'personnel',
        component: () => import('@/views/user'),
        meta: {
          title: '人员管理',
          requireAuth: true,
          icon: '&#xe7a7;'
        }
      }, {
        path: 'permissions',
        name: 'permissions',
        meta: {
          title: '权限管理',
          requireAuth: true,
          icon: '&#xe603;'
        }
      }
    ]
  }, {
    path: '/basically',
    name: 'basically',
    component: Layout,
    meta: {
      title: '基础管理',
      requireAuth: true,
      icon: '&#xe64e;'
    },
    children: [
      {
        path: 'transitional',
        name: 'transitional',
        meta: {
          title: '基础字典',
          requireAuth: true,
          icon: '&#xe609;'
        }
      }, {
        path: 'disease',
        name: 'disease',
        component: () => import('@/views/diseaseControl'),
        meta: {
          title: '药品知识库',
          requireAuth: true,
          icon: '&#xe66b;'
        }
      }, {
        path: 'bulletin',
        name: 'bulletin',
        component: () => import('@/views/drugfreeControl'),
        meta: {
          title: '疾病用药库',
          requireAuth: true,
          icon: '&#xe604;'
        }
      }, {
        path: 'treatment',
        name: 'treatment',
        meta: {
          title: '诊疗知识库',
          requireAuth: true,
          icon: '&#xe650;'
        }
      }, {
        path: 'frequency',
        name: 'frequency',
        meta: {
          title: '频次库',
          requireAuth: true,
          icon: '&#xe6a0;'
        }
      }, {
        path: 'reference',
        name: 'reference',
        meta: {
          title: '参考文献库',
          requireAuth: true,
          icon: '&#xe624;'
        }
      }
    ]
  }, {
    path: '/register',
    name: 'register',
    component: Layout,
    meta: {
      title: '登录注册',
      requireAuth: true,
      hide: true,
      icon: '&#xe67a;'
    },
    children: [
      {
        path: 'doctor',
        name: 'doctor',
        meta: {
          title: '医生注册',
          requireAuth: false,
          hide: true,
          icon: '&#xe67a;'
        }
      }, {
        path: 'patient',
        name: 'patient',
        meta: {
          title: '患者注册',
          requireAuth: false,
          hide: true,
          icon: '&#xe67a;'
        }
      }
    ]
  }, {
    path: '/personalized',
    name: 'personalized',
    component: Layout,
    meta: {
      title: '个人中心',
      requireAuth: true,
      hide: true,
      icon: '&#xe858;'
    },
    children: [
      {
        path: 'information',
        name: 'information',
        meta: {
          title: '完善信息',
          requireAuth: true,
          hide: true,
          icon: '&#xe67a;'
        }
      }, {
        path: 'mysticism',
        name: 'mysticism',
        meta: {
          title: '我的关注',
          requireAuth: true,
          hide: true,
          icon: '&#xe67a;'
        }
      }, {
        path: 'collections',
        name: 'collections',
        meta: {
          title: '我的收藏',
          requireAuth: true,
          hide: true,
          icon: '&#xe67a;'
        }
      }, {
        path: 'feedbacks',
        name: 'feedbacks',
        meta: {
          title: '我的反馈',
          requireAuth: true,
          hide: true,
          icon: '&#xe67a;'
        }
      }
    ]
  }, {
    path: '/querysource',
    name: 'querysource',
    component: Layout,
    meta: {
      title: '知识库查询',
      requireAuth: true,
      icon: '&#xe69c;'
    },
    children: [
      {
        path: 'diseaseproof',
        name: 'diseaseproof',
        component: () => import('@/views/disease'),
        meta: {
          title: '疾病信息',
          requireAuth: true,
          icon: '&#xe606;'
        }
      }, {
        path: 'drugfree',
        name: 'drugfree',
        component: () => import('@/views/drugfree'),
        meta: {
          title: '药品信息',
          requireAuth: true,
          icon: '&#xe648;'
        }
      }, {
        path: 'therapy',
        name: 'therapy',
        component: () => import('@/views/therapy'),
        meta: {
          title: '诊疗信息',
          requireAuth: true,
          icon: '&#xe652;'
        }
      }, {
        path: 'abstract',
        name: 'abstract',
        component: () => import('@/views/abstract'),
        meta: {
          title: '参考文献',
          requireAuth: true,
          icon: '&#xe688;'
        }
      }, {
        path: 'info',
        name: 'info',
        component: () => import('@/views/disease/components/diseaseDetail'),
        meta: {
          title: '疾病详情',
          requireAuth: true,
          hide: true
        }
      }, {
        path: 'infodrug',
        name: 'infodrug',
        component: () => import('@/views/drugfree/components/DrugfreeDetail'),
        meta: {
          title: '药品详情',
          requireAuth: true,
          hide: true
        }
      }
    ]
  }, {
    path: '/nonintelligent',
    name: 'nonintelligent',
    component: Layout,
    meta: {
      title: '智能助诊',
      requireAuth: true,
      icon: '&#xe613;'
    },
    children: [
      {
        path: 'western',
        name: 'western',
        component: () => import('@/views/pearlandx'),
        meta: {
          title: '西医辅助诊疗',
          requireAuth: true,
          icon: '&#xe6a7;'
        }
      }, {
        path: 'chinese',
        name: 'chinese',
        component: () => import('@/views/pearlandz'),
        meta: {
          title: '中医辅助诊疗',
          requireAuth: true,
          icon: '&#xe663;'
        }
      }
    ]
  }, {
    path: '/help',
    name: 'help',
    component: Layout,
    meta: {
      title: '帮助',
      requireAuth: true,
      icon: '&#xe615;'
    },
    children: [
      {
        path: 'interface',
        name: 'interface',
        component: () => import('@/views/interface'),
        meta: {
          title: '接口文档',
          requireAuth: true,
          icon: '&#xe668;'
        }
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      title: '登录',
      requireAuth: false,
      hide: true
    }
  }, {
    path: '/registers',
    name: 'registers',
    component: () => import('@/views/login/register'),
    meta: {
      title: '注册',
      requireAuth: false,
      hide: true
    }
  }, {
    path: '/notpage',
    name: 'notpage',
    component: () => import('@/views/notpage'),
    meta: {
      title: '页面错误',
      requireAuth: false,
      hide: true
    }
  }
]

export default routes