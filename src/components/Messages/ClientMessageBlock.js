/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const ClientMessageBlock = () => {
    return (
        <>
            <div className="media media-chat">
                <div className="media-body mx-3">
                    <div className="mb-3">
                        <p style={{border: '1px solid #80808026', borderRadius: '25px', padding: '5px 20px', margin: 'auto'}}>message</p>
                        <small className="text-muted px-3">12:34</small>
                        {this}
                    </div>
                </div>
                <button className="btn btn-success" disabled></button>
            </div>
        </>
    );
};

export default ClientMessageBlock;
