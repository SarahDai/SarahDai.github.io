import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="contact">

         <div className="row">
            <div className="eight columns">
               <h1><span>Thanks for checking out my website!</span></h1>
               <p>Should you have any opportunities or feedbacks, please feel free to reach out.</p>

           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Contact at:</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {state}, {zip}<br />
						   <span><i className="fa fa-phone" />{"  "}{phone}</span><br />
                     <span><i className="fa fa-envelope-o" />{"  "}{email}</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
