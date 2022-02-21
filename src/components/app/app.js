import { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import nextId from 'react-id-generator';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'John Clark',
          salary: 900,
          increase: false,
          rise: true,
          id: nextId(),
        },
        {
          name: 'Alex Bold',
          salary: 3000,
          increase: true,
          rise: false,
          id: nextId(),
        },
        {
          name: 'Tom Cruz',
          salary: 5000,
          increase: false,
          rise: false,
          id: nextId(),
        },
      ],
      term: '',
      filter: 'all',
    };
  }

  onDeleteItem = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((item) => item.id !== id) };
    });
  };

  onAddItem = (name, salary) => {
    const newData = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: nextId(),
    };
    this.setState(({ data }) => {
      return { data: [...data, newData] };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  onChangeSalary = (id, salary) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, salary: parseInt(salary) };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (!term.length) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) !== -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise);
      case 'more1000':
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const countEmploees = data.length;
    const countIncsrease = data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className='app'>
        <AppInfo
          countEmploees={countEmploees}
          countIncsrease={countIncsrease}
        />

        <div className='search-panel'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.onDeleteItem}
          onToggleProp={this.onToggleProp}
          onChangeSalary={this.onChangeSalary}
        />
        <EmployeesAddForm onAddUser={this.onAddItem} />
      </div>
    );
  }
}

export default App;
