import component from './en-IN/component';
import globalHeader from './en-IN/globalHeader';
import menu from './en-IN/menu';
import pages from './en-IN/pages';
import pwa from './en-IN/pwa';
import settingDrawer from './en-IN/settingDrawer';
import settings from './en-IN/settings';

export default {
  'navBar.lang': '印度',
  'layout.user.link.help': '帮助',
  'layout.user.link.privacy': '隐私',
  'layout.user.link.terms': '条款',
  'app.preview.down.block': '下载此页面到本地项目',
  'app.welcome.link.fetch-blocks': '获取全部区块',
  'app.welcome.link.block-list': '基于 block 开发，快速构建标准页面',
  ...pages,
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
};
