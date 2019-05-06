import React from 'react'
import Helmet from 'react-helmet'

export default () => (

    <div>
        <Helmet defaultTitle="Proposal">
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta charset="utf-8" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale =1.0, user-scalable =no" />
        <link href='https://betterproposals.io/proposal/custom.css' rel='stylesheet' type='text/css' />
        <iframe src="http://www.example.com/" width="600" height="400"></iframe>
    </Helmet>

    <div>
        {/* <iframe src="http://www.example.com/" width="600" height="400"></iframe> */}
        <iframe id="iframe1" width="600" height="400" frameborder="0" src="https://betterproposals.io/proposal/customdomain.html"></iframe>
    </div>
    </div>
    

    // <iframe id="iframe1" frameborder="0" src="https://betterproposals.io/proposal/customdomain.html"></iframe>
    
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
