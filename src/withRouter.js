// you will need link and withRouter from react router dom
import {Link, withRouter} from 'react-router-dom';
 
// And you will need react offcanvas menu offcourse :)
import OffcanvasMenu from 'react-offcanvas-menu-component'; 
 
// name you menu component and pass the location parameter 
// that will be drilled from withRouter
function Menu({location}) {
 
    return(
        <OffcanvasMenu
            Link={Link} // react-router-dom Link
            location={location} // location parameter passed from Router
            config={{
                width: 300, // you can modify default width
                push: true // if you want to enable push feature
            }}
            // this is where you create your menu items
            menu={[
                // basic menu item
                {text: 'Home', link: '/'}, 
 
                // menu item with submenu
                {text: 'Pages', link: '/page', submenu: [ 
                    {text: 'Page 1', link: '/page/1'},
                    {text: 'Page 2', link: '/page/2'}
                ]}
            ]}
            header={ // you can add logo to the header for example
                <img src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-b8b4c00b25fde9cc8f514dc4947c266a.svg" className="menu-logo" alt="logo" width="250" height="100" />
            }
            footer={<Footer />} // if you want content in footer
        />
    )
}
 
// some quick markup for the footer section of offcanvas menu
const Footer = () => {
    return(
        <div className="social-wrap">
            <h4>Socia Networks Footer</h4>
            <ul className="social">
                <li>
                    <a href="facebook">Facebook</a>
                </li>
                <li>
                    <a href="twitter">Twitter</a>
                </li>
            </ul>
        </div>
    )
}
 
// You need to wrap export with withRouter 
// so you can access the location prop in your component
// and pass it to the react-offcanvas-menu
export default withRouter(Menu);