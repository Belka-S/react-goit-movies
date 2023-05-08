import classNames from 'classnames';
import { useLocalStorage } from './useLocalStorage';
import { Section } from '../Section/Section';
import items from './items.json';
import css from './Collection.module.scss';

const LS_KEY = 'collection_active_item_id';

export function Collection() {
  const [activeItemId, setActiveItemId] = useLocalStorage(LS_KEY, null);
  console.log('classNames, useLocalStorage');

  const addClass = id => {
    return classNames(css.Btn, {
      [css.Btn__active]: id === activeItemId,
    });
  };

  const activeItem = items.find(el => el.id === activeItemId);

  return (
    <Section title="Collection">
      <div className={css.Collection}>
        <div>
          {items.map(item => (
            <button
              className={addClass(item.id)}
              key={item.id}
              onClick={e => setActiveItemId(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
        {activeItem && (
          <img src={activeItem.avatar} alt="icon" width="100" height="100" />
        )}
      </div>
    </Section>
  );
}
