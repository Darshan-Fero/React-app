import { Outlet } from "react-router-dom";


function Layout({ }) {
    return (
        <>
            <div style={{width: "100%", height: "100px", backgroundColor: "tomato", marginBottom: "10px"}}>Header</div>

            <Outlet />

            <div style={{width: "100%", height: "100px", backgroundColor: "gray", marginTop: "10px"}}>Footer</div>
        </>
    );
}

export default Layout;