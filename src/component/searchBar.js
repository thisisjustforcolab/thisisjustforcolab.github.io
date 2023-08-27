import logo from '../logo.svg';
import '../App.css';
import { Select } from 'antd';

const options = [
    {value: 'برنج', label: 'برنج'},
    {value: 'گوشت خورشتی', label: 'گوشت خورشتی'},
    {value: 'پیاز', label: 'پیاز'},
    {value: 'سیب زمینی', label: 'سیب زمینی'},
    {value: 'رب گوجه فرنگی', label: 'رب گوجه فرنگی'},
    {value: 'لیمو عمانی', label: 'لیمو عمانی'},
    {value: 'سینه یا ران مرغ', label: 'سینه یا ران مرغ'},
    {value: 'سیر', label: 'سیر'},
    {value: 'گلاب', label: 'گلاب'},
    {value: 'گوشت راسته', label: 'گوشت راسته'},
];



function SearchBar({setFilteredIng}) {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setFilteredIng(value)       
      };
  return (
    <div style={{ padding: '0 20px' }}>
      <Select
    mode="tags"
    style={{
      width: '100%',
    }}
    placeholder="select ingredients you have"
    onChange={handleChange}
    options={options}
  />
  </div>
  );
}

export default SearchBar;




