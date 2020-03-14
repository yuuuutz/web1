export default {
  items: [
    {
      name: 'لوحة التحكم',
      url: '/dashboard/main',
      icon: 'icon-home',
    },
    {
      title: true,
      name: 'أعدادات البوت',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'هوية البوت',
      url: '/dashboard/botid',
      icon: 'fa fa-id-card',
      badge: {
        variant: 'success',
        text: 'Plus'
      },
    },
    {
      name: 'الخصائص',
      url: '/dashboard/properties',
      icon: 'icon-settings',
      children: [
        {
          name: 'الترحيب والمغادرة',
          url: '/dashboard/properties/Welcome',
          icon: 'fa fa-sign-in',
        },
        {
          name: 'فويس اونلاين',
          url: '/dashboard/properties/VoiceOnline',
          icon: 'icon-microphone',
          badge: {
                 variant: 'success',
                 text: 'Plus',
          },
        },
        {
          name: 'الردود التلقائية',
          url: '/dashboard/properties/Autores',
          icon: 'fa fa-retweet',
        },
      ],
    },
    {
      name: 'الأوامر',
      url: '/dashboard/commands',
      icon: 'fa fa-hashtag',
      children: [
        {
          name: 'الأوامر الأدارية',
          url: '/dashboard/commands/admins',
          icon: 'fa fa-gavel',
          children: [
            {
              name: 'الرولات',
              url: '/dashboard/commands/admins/role',
              icon: 'fa fa-quote-right',
              badge: {
                variant: 'danger',
                text: 'Owner',
              },
            },
            {
              name: 'الفعاليات',
              url: '/dashboard/commands/admins/activitymanager',
              icon: 'fa fa-paragraph',
              badge: {
                variant: 'info',
                text: 'Turbo',
              },
            },
            {
              name: 'التحذير',
              url: '/dashboard/commands/admins/warn',
              icon: 'fa fa-exclamation-triangle',
            },
            {
              name: 'أكتب',
              url: '/dashboard/commands/admins/embed',
              icon: 'fa fa-i-cursor',
              badge: {
                variant: 'info',
                text: 'Turbo',
              },
            },
            {
              name: 'الباند',
              url: '/dashboard/commands/admins/ban',
              icon: 'fa fa-ban',
            },
            {
              name: 'الطرد',
              url: '/dashboard/commands/admins/kick',
              icon: 'fa fa-sign-out',
            },
            {
              name: 'السجن',
              url: '/dashboard/commands/admins/PMute',
              icon: 'fa fa-balance-scale',
            },
            {
              name: 'المسح',
              url: '/dashboard/commands/admins/clear',
              icon: 'fa fa-trash',
            },
            {
              name: 'السحب',
              url: '/dashboard/commands/admins/move',
              icon: 'fa fa-arrows',
            },
            {
              name: 'تغيير النك',
              url: '/dashboard/commands/admins/Setnick',
              icon: 'fa fa-retweet',
            },
            {
              name: 'البرودكاست',
              url: '/dashboard/commands/admins/Bc',
              icon: 'fa fa-bullhorn',
              badge: {
                     variant: 'info',
                     text: 'Turbo',
              },
            },
            {
              name: 'أضافة أيموجي',
              url: '/dashboard/commands/admins/AddEmoji',
              icon: 'fa fa-puzzle-piece',
            },
            {
              name: 'الطرد الصوتي',
              url: '/dashboard/commands/admins/vkick',
              icon: 'fa fa-share-square',
            },
            {
              name: 'الميوت الكتابي',
              url: '/dashboard/commands/admins/tmute',
              icon: 'fa fa-comment',
            },
            {
              name: 'الميوت الصوتي',
              url: '/dashboard/commands/admins/vmute',
              icon: 'fa fa-microphone-slash',
            },
          ],
        },
        {
          name: 'الأوامر العامة',
          url: '/dashboard/commands/public',
          icon: 'fa fa-asterisk',
          children: [
            {
              name: 'الرابط',
              url: '/dashboard/commands/public/link',
              icon: 'icon-link',
            },
            {
              name: 'الهوية',
              url: '/dashboard/commands/public/ID',
              icon: 'fa fa-address-book',
              badge: {
                variant: 'info',
                text: 'Turbo',
              },
            },
            {
              name: 'الألوان',
              url: '/dashboard/commands/public/Colors',
              icon: 'fa fa-paint-brush',
            },
          ],
        },
      ],
    },
    {
      name: 'الحماية',
      url: '/dashboard/protsystem',
      icon: 'fa fa-shield',
      children: [
        {
          name: 'مضاد الروابط',
          url: '/dashboard/protsystem/protlinks',
          icon: 'icon-shield',
        },
        {
          name: 'مضاد السبام',
          url: '/dashboard/protsystem/protspam',
          icon: 'icon-shield',
        },
        {
          name: 'مضاد الجحفلة',
          url: '/dashboard/protsystem/protgahfala',
          icon: 'icon-shield',
          badge: {
            variant: 'info',
            text: 'Turbo',
        },
        },
        {
          name: 'مانع النشر',
          url: '/dashboard/protsystem/protads',
          icon: 'icon-shield',
          badge: {
            variant: 'success',
            text: 'Plus',
        },
        }    
      ]
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'أعدادات السيرفر',
    },
    {
      name: 'الأعضاء',
      url: '/dashboard/members',
      icon: 'fa fa-users'
    },
    {
      name: 'الأحصائيات',
      url: '/dashboard/charts',
      icon: 'icon-pie-chart'
    },
    {
      name: 'السجلات',
      url: '/dashboard/logs',
      icon: 'fa fa-book'
    },
  ]
};
