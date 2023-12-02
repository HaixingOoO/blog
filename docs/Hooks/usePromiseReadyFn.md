---
title: usePromiseReadyFn
date: 2023-12-02 12:48:00
categories:
  - Hooks
tags:
  - Hooks
---

# usePromiseReadyFn

> 等待数据请求完再接受数据

```ts
const sleepFn = (sleep:number):Promise<number[]> => {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve([1,2,3])
    },sleep)
  })
}

const usePromiseReadyFn = () =>{
  let resolveResolve = null;

  const promiseResolveFn = new Promise(resolve => {
    resolveResolve = resolve;
  })

  const promiseReadyFn = (cb:()=>void) =>{
    promiseResolveFn.then(()=>{
      cb();
    })
  }

  return {
    promiseResolveFn,
    promiseReadyFn
  }
}


// Demo
const {promiseResolveFn,promiseReadyFn} = usePromiseReadyFn;

export const onReadyFn = promiseReadyFn;

const request = async() =>{
  await Promise.all([sleepFn(1000),sleepFn(3000),sleepFn(2000)])
  promiseResolveFn();
}

// 其它地方需要用到上面执行完之后才执行获取到的数据
import {onReadyFn} from "*";

onReadyFn(()=>{
  console.log("Ready")
})
```