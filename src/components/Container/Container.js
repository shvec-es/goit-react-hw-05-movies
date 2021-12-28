import s from './Container.module.css';

function Container({ children }) {
  return <div className={s.wrapper}>{children}</div>;
}

export default Container;
