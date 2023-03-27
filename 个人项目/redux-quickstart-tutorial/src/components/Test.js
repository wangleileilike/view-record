// import React from 'react';

// export default class Index extends React.Component<any,any> {
//     constructor(props){
//         super(props)
//         this.state={
//             number:0
//         }
//     }
//     handerClick=()=>{
//     //    for(let i = 0 ;i<5;i++){
//     //        setTimeout(()=>{
//     //            this.setState({ number:this.state.number+1 })
//     //            console.log(this.state.number)
//     //        },1000)
//     //    }
//         this.setState({ number: 0 })
//     }

//     render(){
//         console.log('render执行了')
//         return <div>
//             <button onClick={ this.handerClick } >{this.state.number}</button>
//         </div>
//     }
// }


// export default function Index(){
//     const [ num ,setNumber ] = React.useState(0)
//     const handerClick=()=>{
//         // for(let i=0; i<5;i++ ){
//         //    setTimeout(() => {
//         //         setNumber(num+1)
//         //         console.log(num)
//         //    }, 1000)
//         // }
//         setNumber(num+1)
//     }
//     return (
//         <div>
//             {(
//                 function() {
//                     console.log(666)
//                 }
//             )()}
//             <button onClick={ handerClick } >{ num }</button>
//         </div>
//     )
// }


import React , { useEffect , useState , useRef , useMemo  } from 'react'
export default function Index(){
    const [ number , setNumber ] = useState(0)
    const DivDemo = useMemo(() => {
        console.log('mome执行')
        return <div> hello , i am useMemo </div>
    },[number])
    const curRef  = useRef(null)
    useEffect(()=>{
       console.log('curRef.current==>', curRef.current)
    },[])
    return <div ref={ curRef } >
        hello,world { number } 
        { DivDemo }
        <button onClick={() => setNumber(number+1) } >number++</button>
     </div>
}