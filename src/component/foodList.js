import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Divider, List, Skeleton, Tag } from 'antd';

const sample = [
    {name: 'استیک', desc: 'dfdf dfd  df', id: 0, ing: ['گوشت راسته یا فیله گوساله']},
    {name: 'خورش قیمه', desc: 'dfdf  df', id: 1, ing: ['گوشت خورشتی', 'پیاز', 'لپه']},
    {name: 'زرشک پلو با مرغ', desc: 'dfdf', id: 2, ing: ['سینه یا ران مرغ', 'رب گوجه فرنگی', 'پیاز']},
    {name: 'استیک', desc: 'dfdf dfd  df', id: 0, ing: ['گوشت راسته یا فیله گوساله']},
    {name: 'خورش قیمه', desc: 'dfdf  df', id: 1, ing: ['گوشت خورشتی', 'پیاز', 'لپه']},
    {name: 'زرشک پلو با مرغ', desc: 'dfdf', id: 2, ing: ['سینه یا ران مرغ', 'رب گوجه فرنگی', 'پیاز']},
    {name: 'استیک', desc: 'dfdf dfd  df', id: 0, ing: ['گوشت راسته یا فیله گوساله']},
    {name: 'خورش قیمه', desc: 'dfdf  df', id: 1, ing: ['گوشت خورشتی', 'پیاز', 'لپه']},
    {name: 'زرشک پلو با مرغ', desc: 'dfdf', id: 2, ing: ['سینه یا ران مرغ', 'رب گوجه فرنگی', 'پیاز']},
    {name: 'استیک', desc: 'dfdf dfd  df', id: 0, ing: ['گوشت راسته یا فیله گوساله']},
    {name: 'خورش قیمه', desc: 'dfdf  df', id: 1, ing: ['گوشت خورشتی', 'پیاز', 'لپه']},
    {name: 'زرشک پلو با مرغ', desc: 'dfdf', id: 2, ing: ['سینه یا ران مرغ', 'رب گوجه فرنگی', 'پیاز']},
    {name: 'استیک', desc: 'dfdf dfd  df', id: 0, ing: ['گوشت راسته یا فیله گوساله']},
    {name: 'خورش قیمه', desc: 'dfdf  df', id: 1, ing: ['گوشت خورشتی', 'پیاز', 'لپه']},
    {name: 'زرشک پلو با مرغ', desc: 'dfdf', id: 2, ing: ['سینه یا ران مرغ', 'رب گوجه فرنگی', 'پیاز']},
]


function FoodList({filteredIng}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const filteredFoods = sample.filter(food =>
            filteredIng.every(ingredient => food.ing.includes(ingredient))
          );
        setData(filteredFoods)

      }, [filteredIng]);

      useEffect(() => {
        setData(sample)
      }, []);


    return (
      <div
        id="scrollableDiv"
        style={{
          height: 400,
          overflow: 'auto',
          padding: '0px',
          border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          //next={loadMoreData}
          hasMore={data.length < 1}
          loader={
            <Skeleton
              paragraph={{
                rows: 1,
              }}
              active
            />
          }
          endMessage={<Divider plain>همین دیگه تموم شد 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
         {data.length > 0 ? (<List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.id}> 
                <List.Item.Meta
                  title={item.name}
                  description={
                  <div>{item.ing.map(name => (  
                    <Tag color="cyan"> 
                      {name}  
                    </Tag> ))}
                    </div>}
                />
              </List.Item>
            )}
          />):(
            <p>غذایی با این مواد پیدا نشد 😔</p>
          )
          }
        </InfiniteScroll>
      </div>
    );
  };

export default FoodList;




