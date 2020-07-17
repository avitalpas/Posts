import React from 'react'

export default function Post(props) {
  
  function randomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  return (
    <div style={{ backgroundColor: randomColor() }}>

         {/* content */}
         <div style={{ width: "90%", padding: "30px" }}>
           <div style={{ display: "flex", boxShadow: "0 0 30px gray", backgroundColor: "white", padding: "15px", }}>

             <div style={{width: "90%"}}>
               <h4 style={{ fontFamily: "verdana" }}>{props.title}</h4>
               <p>{props.info}</p>
             </div>

             {/* right div */}
             <div style={{ width: "10%", top: "0", right: "0"}}>
              
               {/* delete button */}
               <button onClick={() => { props.deletePostFunc(props.index); }} style={{ float: "right",backgroundColor: "#fff", border: "none", cursor: "pointer" }} title="Delete">
                 X
               </button>

               {/* author */}
               <p style={{marginTop: "230%",color:"gray", fontFamily: "verdana", fontSize: "15px", textAlign: "right"}}>
                 {props.author}
               </p>
             </div>


           </div>
         </div>

       </div>
  )
}

// export default class Post extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       index: props.index,
//       postBackground: this.randomColor(),
//     };
//   }

//   render() {
//     return (
//       <div style={{ backgroundColor: this.state.postBackground }}>

//         {/* content */}
//         <div style={{ width: "90%", padding: "30px" }}>
//           <div style={{ display: "flex", boxShadow: "0 0 30px gray", backgroundColor: "white", padding: "15px", }}>

//             <div style={{width: "90%"}}>
//               <h4 style={{ fontFamily: "verdana" }}>{this.props.title}</h4>
//               <p>{this.props.info}</p>
//             </div>

//             {/* right div */}
//             <div style={{ width: "10%", top: "0", right: "0"}}>
              
//               {/* delete button */}
//               <button onClick={() => { this.props.deletePostFunc(this.state.index); }} style={{ float: "right",backgroundColor: "#fff", border: "none", cursor: "pointer" }} title="Delete">
//                 X
//               </button>

//               {/* author */}
//               <p style={{marginTop: "230%",color:"gray", fontFamily: "verdana", fontSize: "15px", textAlign: "right"}}>
//                 {this.props.author}
//               </p>
//             </div>


//           </div>
//         </div>

//       </div>
//     );
//   }
// }
