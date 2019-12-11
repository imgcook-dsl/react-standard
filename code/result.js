'use strict';

import React, { Component } from 'react';

import { fetch } from 'whatwg-fetch';
import jsonp from 'fetch-jsonp';

const print = function(value) {
  console.log(value);
};

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: '71.20vw'
  },
  bd: {
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'row',
    opacity: '1.00',
    width: '45.60vw',
    height: '45.60vw'
  },
  layer: {
    position: 'absolute',
    top: '0.00vw',
    left: '0.00vw',
    width: '45.60vw',
    height: '45.60vw',
    overflow: 'hidden'
  },
  bg: { position: 'absolute', top: '0.00vw', left: '0.00vw', opacity: '1.00', width: '45.60vw', height: '45.60vw' },
  wrap: {
    boxSizing: 'border-box',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '2.40vw',
    marginLeft: '2.40vw',
    borderRadius: '2.00vw',
    backgroundColor: 'rgba(0,0,0,0.40)',
    paddingRight: '1.20vw',
    paddingLeft: '1.33vw',
    height: '4.00vw'
  },
  riverdinwei: { opacity: '1.00', width: '1.87vw', height: '2.40vw' },
  distance: {
    marginLeft: '0.53vw',
    width: '11.20vw',
    height: '2.93vw',
    lineHeight: '2.93vw',
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontSize: '2.40vw',
    fontWeight: 400,
    lines: 1
  },
  main: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '45.60vw',
    height: '15.20vw'
  },
  title: {
    marginTop: '2.93vw',
    width: '40.00vw',
    height: '11.73vw',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '5.87vw',
    color: '#333333',
    fontSize: '4.00vw',
    fontWeight: 400,
    lines: 2
  },
  ft: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: '1.60vw',
    borderBottomRightRadius: '1.60vw',
    backgroundColor: '#ffffff',
    paddingRight: '2.27vw',
    paddingLeft: '2.40vw',
    width: '45.60vw',
    height: '10.40vw',
    overflow: 'hidden'
  },
  block: { display: 'flex', alignItems: 'center', flexDirection: 'row', height: '4.00vw' },
  xianjin: { width: '4.00vw', height: '4.00vw' },
  fashionHome: {
    marginLeft: '0.80vw',
    width: '12.80vw',
    height: '3.73vw',
    lineHeight: '3.73vw',
    whiteSpace: 'nowrap',
    color: '#666666',
    fontSize: '3.20vw',
    fontWeight: 300,
    lines: 1
  },
  group: { display: 'flex', alignItems: 'center', flexDirection: 'row', height: '4.00vw' },
  favorite: { width: '2.93vw', height: '2.93vw' },
  num: {
    marginLeft: '0.67vw',
    width: '4.80vw',
    height: '3.47vw',
    lineHeight: '3.47vw',
    whiteSpace: 'nowrap',
    color: '#999999',
    fontSize: '2.93vw',
    fontWeight: 400,
    lines: 1
  }
};

class Page_0 extends Component {
  state = {
    data: [
      {
        title: '小户型卫浴怎样才能装得高大上？',
        coverImage: 'https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png',
        readCount: 200,
        user: { userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png', userName: '时尚家居' },
        url: 'https://www.imgcook.com'
      },
      {
        title: '拥有超多功能的40平米简约小公寓了解一下',
        coverImage: 'https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png',
        readCount: 500,
        user: {
          userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png',
          userName: '花花设计工作'
        },
        url: 'https://www.imgcook.com/docs'
      }
    ]
  };
  constructor(props, context) {
    console.log('super props');
    this.fetch_example();
    this.jsonp_example();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}
  isReadCountShow(readCount) {
    return readCount > 300;
  }
  fetch_example() {
    fetch('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET', headers: '{"Content-Type":"json"}' })
      .then(response => response.json())
      .then((data, error) => {
        console.log('fetch example: ', data, error);
        return data;
      })
      .catch(e => {
        console.log('error', e);
      });
  }
  jsonp_example() {
    jsonp('https://assets.airbnb.com/frontend/search_results.js', { jsonpCallbackFunction: 'search_results', body: {} })
      .then(response => response.json())
      .then((data, error) => {
        console.log('jsonp example: ', data, error);
        return data;
      })
      .catch(e => {
        console.log('error', e);
      });
  }
  render() {
    return (
      <div style={styles.box}>
        {this.state.data.map((item, index) => {
          return (
            <div
              key={index}
              onClick={e => {
                window.open(item.url, '_blank');
              }}
              data-url={item.url}
              key={item.index}
            >
              <div style={styles.bd}>
                <img style={styles.layer} src={'https://img.alicdn.com/tfs/TB1bLoWoYH1gK0jSZFwXXc7aXXa-684-684.png'} />
                <img style={styles.bg} src={item.coverImage} />
                <div style={styles.wrap}>
                  <img
                    style={styles.riverdinwei}
                    src={'https://img.alicdn.com/tfs/TB1mtZRoVT7gK0jSZFpXXaTkpXa-28-36.png'}
                  />
                  <span style={styles.distance}>距离500m</span>
                </div>
              </div>
              <div style={styles.main}>
                <span style={styles.title}>{item.title}</span>
              </div>
              <div style={styles.ft}>
                <div style={styles.block}>
                  <img
                    style={styles.xianjin}
                    src={'https://img.alicdn.com/tfs/TB1OvsYoW61gK0jSZFlXXXDKFXa-60-60.png'}
                  />
                  <span style={styles.fashionHome}>{item.user.userName}</span>
                </div>
                {this.isReadCountShow(item.readCount) && (
                  <div style={styles.group}>
                    <img
                      style={styles.favorite}
                      src={'https://img.alicdn.com/tfs/TB1arwYo7T2gK0jSZFkXXcIQFXa-46-44.png'}
                    />
                    <span style={styles.num}>{item.readCount}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Page_0;
