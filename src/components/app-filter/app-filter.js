import cn from 'classnames';

import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'more1000', label: 'З/п больше 1000$' },
  ];

  const elements = buttonsData.map(({ name, label }) => {
    const isActive = props.filter === name;
    return (
      <button
        type='button'
        className={cn(
          'btn',
          { 'btn-outline-light': !isActive },
          { 'btn-light': isActive }
        )}
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className='btn-group'>{elements}</div>;
};

export default AppFilter;
