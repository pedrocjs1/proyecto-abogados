import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../style/Portfolio.css";
import grand from "../images/abuelos.jpg";

export default function Portfolio() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center d-flex flex-column w-100 justify-content-center justify-content-center align-items-center">
            <div className=" text-center img-grand move-up">
              <img src={grand} alt="" />
            </div>
          </div>
        </div>
        <div className="d-flex w-100 gap-3 justify-content-around">
          <div className="d-flex  justify-content-center flex-wrap gap-3 container-about text-start ">
            <div className="w-100 gal d-flex flex-column align-items-center flex-wrap">
              <h2 className="text-about ">Get to know BigHorn Law</h2>
              <div className="line-p"></div>
              <p>
                An attorney can make or break a case based on how the case is
                documented, developed, and positioned for insurance companies
                and juries. At Bighorn Law, we make sure that nothing is missed
                in your case and our results prove it. With more than a dozen
                attorneys and decades of experience, our knowledge translates to
                more cases won, higher settlements, and happier clients. We
                implement a team approach so that all of our clients benefit
                from our firm’s collective knowledge, experience, and successes.
              </p>
              <p>
                It’s no surprise Bighorn Law was named in the Top 100 personal
                injury attorneys in the nation in 2020. If you need an attorney,
                let us put our experience and resources to work for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function Portfolio() {
//   return (
//     <section id="portfolio" >

//           {/* <div className=" text-center img-grand move-up">
//             <img src={grand} alt="" />
//           </div> */}

//         <div className="container-text ">
//           <h2 className="mt-3 h2-title text-center w-100">Get to know BigHorn Law</h2>
//           <div className=" d-flex flex-wrap section-p">
//             <div className="w-100 grand-p" >
//               <p className="">
//                 An attorney can make or break a case based on how the case is
//                 documented, developed, and positioned for insurance companies
//                 and juries. At Bighorn Law, we make sure that nothing is missed
//                 in your case and our results prove it. With more than a dozen
//                 attorneys and decades of experience, our knowledge translates to
//                 more cases won, higher settlements, and happier clients. We
//                 implement a team approach so that all of our clients benefit
//                 from our firm’s collective knowledge, experience, and successes.
//               </p>
//               <p className="">
//                 It’s no surprise Bighorn Law was named in the Top 100 personal
//                 injury attorneys in the nation in 2020. If you need an attorney,
//                 let us put our experience and resources to work for you.

//               </p>

//             </div>
//           </div>
//         </div>

//     </section>
//   );
// }
