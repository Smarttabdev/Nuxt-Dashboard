const Menu = [
  // {header: 'Apps'},
  {
    title: 'Home',
    group: 'apps',
    icon: 'home',
    name: 'Home',
    href: '/home'
  },
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
    href: '/dashboard'
  },
  {
    title: 'Contact',
    group: 'apps',
    icon: 'account_circle',
    name: 'Contact',
    href: '/contact'
  },
  {
    title: 'Business',
    group: 'apps',
    name: 'Business',
    icon: 'card_travel',
    href: '/business'
  },
  {
    title: 'Projects',
    group: 'apps',
    name: 'Projects',
    icon: 'assignment_turned_in',
    href: '/projects'
  },
  {
    title: 'Inbox',
    group: 'apps',
    name: 'Inbox',
    icon: 'move_to_inbox',
    href: '/inbox'
  },
  {
    title: 'Payment Schedule',
    group: 'apps',
    name: 'Payment Schedule',
    icon: 'credit_card',
    href: '/'
  }
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
