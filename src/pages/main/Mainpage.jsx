export default function Mainpage() {
    if (!localStorage.getItem("user")) {
        window.location.href = '/auth/login';
    }

    return (
        <div className="">
            Mainpage
        </div>
    )
}
