import React, { useState } from 'react';
import '../App.css';
import { Layout, Space, Button } from 'antd';
import SearchBar from '../component/searchBar'
import FoodList from '../component/foodList'
const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  //color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  //backgroundColor: '#7dbcea',
};

function SearchPage() {
  const [filteredIng, setFilteredIng] = useState([]);
  return (
       <Layout>
      <Header style={headerStyle}><h2 style={{ padding: '0 20px', color: 'white', margin: '0px'}}>Iranian Recipes</h2></Header>
      <Content style={{display: 'flex', minHeight: '80vh', flexDirection: 'column'}}>
<h4>What do you have?</h4>
<SearchBar setFilteredIng={setFilteredIng}/>
<h4 style={{textAlign: 'left', paddingLeft: '30px'}}>Recipes</h4>
<FoodList filteredIng={filteredIng}/>

      </Content>
      <Footer style={{marginTop: 'auto'}}
      ><Space>
  
      <Button style={{background: '#5DADE2'}}>
       ویرایش مواد غذایی
      </Button>
  <Button style={{background: '#5DADE2'}} >
        اضافه کردن رسپی جدید
      </Button>
      
      </Space></Footer>
    </Layout>
  );
}

export default SearchPage;




