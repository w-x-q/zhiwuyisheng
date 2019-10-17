
function move1908(domObj,attr,start,end,direction,step,timeSpace){
    let value = start;//起点
    let myTimer = setInterval(()=>{
        //一、处理数据
        //1、改变数据
        value = value+direction*step;//步长
        //2、边界处理
        if(direction==1?value>=end:value<=end){//终点
            value = end;
            window.clearInterval(myTimer);
        }
        if(attr=="opacity"){
            domObj.style[attr] = value;
        }else{
            domObj.style[attr] = value+"px";
        }
    },timeSpace);
    return myTimer;
}
function move190802(domObj,attr,end,timeLong){
    // domObj,start,end,direction,step,timeSpace,attr
    let start = parseFloat(getStyle(domObj,attr));
    let direction = start>end?-1:1;
    // 路程/时长 = 速度（）
    let timeSpace = 16; //最小频率
    let step = Math.abs(end-start)/(timeLong/timeSpace); // 总路程/(总次数，走多少下)
    move1908(domObj,attr,start,end,direction,step,timeSpace);
}

function fadeInOut(inImg,outImg,timeLong){

    let timeSpace = 16;
    let step = 1/(timeLong/timeSpace); 
    let opacity = 0;

    let myTimer = setInterval(()=>{
        //一、处理数据
        opacity+=step;
        if(opacity>=1){
            opacity = 1;
            window.clearInterval(myTimer);
        }

        //二、改变外观
        inImg.style.opacity = opacity;
        outImg.style.opacity = 1-opacity;
        
    },timeSpace);
}


function animate(domObj,endObj,timeLong){
    //  let start = parseFloat(getStyle(domObj,attr));
    // let startObj = {
    //     "left":20,
    //     "top":100
    // };
    let  startObj={};
    //循环endObj对象
    for(let key in endObj){//循环json对象的，每循环一次，得到当前的键
        startObj[key] = parseFloat(getStyle(domObj,key));//key=left
    }
    
    // let direction = start>end?-1:1;
    let directionObj = {};
    for(let key in endObj){//key = "left" "top"
        directionObj[key] = startObj[key]>endObj[key]?-1:1;
    }

     // 路程/时长 = 速度（）
    let timeSpace = 16; //最小频率
    //let step = Math.abs(end-start)/(timeLong/timeSpace); // 总路程/(总次数，走多少下)
    let stepObj = {};
    for(let key in endObj){//key = "left" "top"
        stepObj[key] = Math.abs(endObj[key]-startObj[key])/(timeLong/timeSpace);
    }
    //-------move1908------//
    // let value = start;//起点
    let valueObj ={};
    for(let key in endObj){
        valueObj[key] = startObj[key];
    }
    let myTimer = setInterval(()=>{
        //一、处理数据
        //1、改变数据
        // value = value+direction*step;//步长
        for(let key in endObj){
            valueObj[key] = valueObj[key]+directionObj[key]*stepObj[key];
        }
        //2、边界处理
        /*
        if(direction==1?value>=end:value<=end){//终点
            value = end;
            window.clearInterval(myTimer);
        }
        */
       for(let key in endObj){
            if(directionObj[key]==1?valueObj[key]>=endObj[key]:valueObj[key]<=endObj[key]){//终点
                valueObj[key] = endObj[key];
                if(myTimer!=null){
                    window.clearInterval(myTimer);
                    myTimer = null;
                }
            }
       }
        //二、改变外观
        for(let key in endObj){
            if(key=="opacity"){
                domObj.style[key] = valueObj[key];
            }else{
                domObj.style[key] = valueObj[key]+"px";
            }
        }
    },timeSpace);
    return myTimer;
}



function getStyle(domObj,attr){
    if(domObj.currentStyle){
        return domObj.currentStyle[attr];
    }else{
        return window.getComputedStyle(domObj)[attr];
    }
}
