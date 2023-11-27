// import React from "react"
// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
// import styled from 'styled-components';

// // The number of columns change by resizing the window
//     const ImageSection = styled.div`
//         object-fit: cover;
//     `

// class MyWrapper extends React.Component {
    
    


//     render() {
//         return (
//             <ResponsiveMasonry
//                 columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
//             >
//                 <Masonry gutter="3">
//                     <div style={{height:'200px'}}><img style={{objectFit:'cover', height:''}} src={require('../../images/gallery/01.jpg')} alt="" /></div>
//                     <div style={{height:'250px'}}><img style={{objectFit:'cover', height:''}} src={require('../../images/gallery/02.jpg')} alt="" /></div>
//                     <div style={{height:'200px'}}><img style={{objectFit:'cover', height:''}} src={require('../../images/gallery/03.jpg')} alt="" /></div>
//                     <div style={{height:'250px'}}><img style={{objectFit:'cover', height:''}} src={require('../../images/gallery/02.jpg')} alt="" /></div>
//                     <div style={{height:'200px'}}><img style={{objectFit:'cover', height:''}} src={require('../../images/gallery/01.jpg')} alt="" /></div>
//                     <div style={{height:'200px'}}><img style={{objectFit:'cover', height:''}} src={require('../../images/gallery/03.jpg')} alt="" /></div>

                    
//                 </Masonry>
//             </ResponsiveMasonry>
//         )
//     }
// }

// // The number of columns don't change by resizing the window
// // class MyWrapper extends React.Component {
// //     render() {
// //         return (
// //             <Masonry columnsCount={3}>
// //                 <div><img src="../../../public/image/gallery/01.jpg" alt="" />test</div>
// //                 <div><img src="../../../public/image/gallery/02.jpg" alt="" />test</div>
// //                 <div><img src="../../../public/image/gallery/03.jpg" alt="" />test</div>
// //             </Masonry>
// //         )
// //     }
// // }
// export default MyWrapper;