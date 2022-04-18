import styles from './Menu.module.scss';
let menuList = [
  {
    name: 'A-SOUL_Official',
    link: 'https://space.bilibili.com/703007996',
  },
  {
    name: '嘉然',
    link: 'https://space.bilibili.com/672328094',
  },
  {
    name: '向晚',
    link: 'https://space.bilibili.com/672346917',
  },
  {
    name: '贝拉',
    link: 'https://space.bilibili.com/672353429',
  },
  {
    name: '珈乐',
    link: 'https://space.bilibili.com/351609538',
  },
  {
    name: '乃琳',
    link: 'https://space.bilibili.com/672342685',
  },
  {
    name: '导航站',
    link: 'https://www.asoulworld.com/',
  },
];
export default function Menu() {
  return (
    <div id="menu">
      <ul className={styles['ul-box']}>
        {menuList.map((item, index) => {
          return (
            <li className={styles.item} key={index}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <span>{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
