### 多语言的改造（引入不在他定义的版本里面）
1. 创建要引入的语言包`en-IN.ts`
2. 调整`SelectLang`组件对语言的处理函数`postLocalesData`
我这里是针对印度的语言进行了调整（同时注意封装的`SelectLang`）
``` tsx

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
```
