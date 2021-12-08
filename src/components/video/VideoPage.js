
import React, { Component } from "react";



class VideoPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount = () => {
    fetch("https://my-json-server.typicode.com/fattymiller/youtube-test/videos")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  };

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>..Loading</div>;
    } else {
      return (


        <table>
          <thead>

            <tr >
              <th>Title</th>
              <th>Description</th>
              <th>uploaded At</th>
              <th>Video</th>
              <th>size</th>
            </tr>

          </thead>

          {items.map(item => (
            <tr key={item.id}>

              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.uploadedAt}</td>
              <td>
                <a href={item.url}>Watch me</a>

              </td>
              <td>{item.size}</td>
            </tr>

          ))}


        </table>
      );

    }
  }
}


// class VideoPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//     };
//   }
//   componentDidMount = () => {
//     fetch("https://my-json-server.typicode.com/fattymiller/youtube-test/videos")
//       .then((response) => response.json())
//       .then((json) => {
//         this.setState({
//           isLoaded: true,
//           items: json,
//         });
//       });
//   };

//   render() {
//     var { isLoaded, items } = this.state;
//     if (!isLoaded) {
//       return <div>..Loading</div>;
//     } else {
//       return (


//         <table>
//           <thead>

//             <tr >
//               <th>Title</th>
//               <th>Description</th>
//               <th>uploaded At</th>
//               <th>url</th>
//               <th>size</th>
//             </tr>

//           </thead>

//           {items.map(item => (
//             <tr key={item.id}>

//               <td>{item.title}</td>
//               <td>{item.description}</td>
//               <td>{item.uploadedAt}</td>
//               <td>{item.url}</td>
//               <td>{item.size}</td>
//             </tr>

//           ))}


//         </table>
//       );

//     }
//   }
// }

export default VideoPage;
