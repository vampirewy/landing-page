// 主页元数据接口
interface HomePageMetaData {
  title: string;
  description: string;
}

// 导航项子项接口
interface NavigationItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  items?: string[];
}

// 导航栏组件接口
interface NavBarComponent {
  title: string;
  navigation: NavigationItem[];
  loginText: string;
  startText: string;
  sheetTitle: string;
  sheetDescription: string;
  chooseLanguage: string;
}

// 字典总接口
interface Dictionary {
  homePageMetaData: HomePageMetaData;
  navBarComponent: NavBarComponent;
}

export type { Dictionary, HomePageMetaData, NavBarComponent, NavigationItem };
