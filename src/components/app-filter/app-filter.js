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

  // viewAll = () => {
  //   this.setState(({ isActiveAll }) => ({
  //     isActiveAll: isActiveAll ? isActiveAll : !isActiveAll,
  //     isActiveInc: false,
  //     isActiveSal: false,
  //   }));
  //   this.props.viewAll();
  // };

  // isIncrease = () => {
  //   this.setState(({ isActiveInc }) => ({
  //     isActiveAll: false,
  //     isActiveInc: isActiveInc ? isActiveInc : !isActiveInc,
  //     isActiveSal: false,
  //   }));
  //   this.props.searchIncrease();
  // };

  // isSalary = () => {
  //   this.setState(({ isActiveSal }) => ({
  //     isActiveAll: false,
  //     isActiveInc: false,
  //     isActiveSal: isActiveSal ? isActiveSal : !isActiveSal,
  //   }));
  //   this.props.searchSalary();
  // };
};

export default AppFilter;
