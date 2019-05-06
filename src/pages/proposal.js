import React from 'react'

function createMarkup() {
    return {__html: 'First &middot; Second'};
  }
  
//   function MyComponent() {
//     return <div dangerouslySetInnerHTML={createMarkup()} />;
//   }

export default () => (

    <div dangerouslySetInnerHTML={createMarkup()} />

    // {/* // <html>
    // //     <script src="proposalFiles/cover.php"></script>
    // //     <script src="proposalFiles/forward.php"></script>
    // //     <script src="proposalFiles/index.php"></script>
    // //     <script src="proposalFiles/payment-info.php"></script>
    // //     <script src="proposalFiles/payment.php"></script>
    // //     <script src="success.php"></script>
    // //     <script src="proposalFiles/thanks.php"></script>
    // // </html> */}
)
