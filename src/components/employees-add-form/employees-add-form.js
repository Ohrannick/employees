import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправлена форма.');
    this.props.onAddUser(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: '',
    });
  };

  render() {
    const { name, salary } = this.state;
    const isEnabled = name.length > 0 && salary.length > 0;

    return (
      <div className='app-add-form'>
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={this.handleSubmit} className='add-form d-flex'>
          <input
            type='text'
            name='name'
            onChange={this.onValueChange}
            value={name}
            className='form-control new-post-label'
            placeholder='Как его зовут?'
          />
          <input
            type='number'
            name='salary'
            onChange={this.onValueChange}
            value={salary}
            className='form-control new-post-label'
            placeholder='З/П в $?'
          />
          <button
            disabled={!isEnabled}
            type='submit'
            className='btn btn-outline-light'
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
