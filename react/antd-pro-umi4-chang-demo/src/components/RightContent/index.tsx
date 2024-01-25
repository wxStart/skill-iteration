import { QuestionCircleOutlined } from '@ant-design/icons';
import { SelectLang as UmiSelectLang } from '@umijs/max';
import { isFunction } from 'lodash';
import React from 'react';

export type SiderTheme = 'light' | 'dark';

interface LocalData {
  lang: string,
  label?: string,
  icon?: string,
  title?: string,
}

export const SelectLang = (props:any ={}) => {


  const postLocalesData = (langs: LocalData[])=>{

    let result: LocalData[] = []
    if(props?.postLocalesData &&  isFunction(props.postLocalesData) ){
      result = props.postLocalesData(langs) as LocalData[];
    }else{
      result = langs;
    }
    return result.map(el => {
      if (el.lang === 'en-IN') {
        el.icon = '🇮🇳';
        el.label = 'भारत';
        el.title = 'भारत';
      }
      return el
    });
  }


  return (
    <UmiSelectLang
      style={{
        padding: 4,
      }}
      postLocalesData={postLocalesData}
      {...props}
    />
  );
};

export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        window.open('https://pro.ant.design/docs/getting-started');
      }}
    >
      <QuestionCircleOutlined />
    </div>
  );
};
