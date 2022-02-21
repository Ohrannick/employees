import './app-info.css';

const AppInfo = ({ countEmploees, countIncsrease }) => {
  return (
    <div className='app-info'>
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {countEmploees} </h2>
      <h2>Премию получат: {countIncsrease} </h2>
    </div>
  );
};

export default AppInfo;
