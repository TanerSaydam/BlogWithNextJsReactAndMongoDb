import SideBar from "./sidebar";

export default function Layout({children}){
    return(
        <>
        <SideBar/>
        <div>
            {children}
        </div>
        </>
    )
}