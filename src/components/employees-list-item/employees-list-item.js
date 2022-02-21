import cn from 'classnames';

import './employees-list-item.css';

const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleProp,
    increase,
    rise,
    onChangeSalary,
  } = props;
  return (
    <li
      className={cn('list-group-item', 'd-flex', 'justify-content-between', {
        increase,
        like: rise,
      })}
    >
      <span
        onClick={onToggleProp}
        className='list-group-item-label'
        data-toggle='rise'
      >
        {name}
      </span>
      <input
        type='text'
        className='list-group-item-input'
        defaultValue={salary <= 0 ? '0 $' : parseInt(salary) + ' $'}
        onChange={onChangeSalary}
      />
      <div className='d-flex justify-content-center align-items-center'>
        <button
          type='button'
          data-toggle='increase'
          onClick={onToggleProp}
          className='btn-cookie btn-sm '
        >
          <i className='fas fa-cookie'></i>
        </button>

        <button type='button' className='btn-trash btn-sm' onClick={onDelete}>
          <i className='fas fa-trash'></i>
        </button>
        <i className='fas fa-star'></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
