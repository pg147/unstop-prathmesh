import ProfilePic from '/profile.png';

export default function Mainpage() {
    // If user doesn't exist then redirect to Login Page
    if (!localStorage.getItem("user")) {
        window.location.href = '/auth/login';
    }

    // Fetching user
    const user = JSON.parse(localStorage.getItem("user"));

    // Setting user details
    const userDetails = {
        username: user.username,
        email: user.email,
    }

    // Logout function
    const logout = () => {
        localStorage.removeItem("user");
        window.location.href = '/auth/login';
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="grid gap-y-10 h-fit w-full lg:w-fit lg:mx-auto">
                <h1 className="font-medium text-2xl text-center">Welcome to {""}<br /><span className="font-bold text-primary">Unstop</span></h1>
                <div className="mx-auto lg:mx-0 w-[300px] p-6 border-outline rounded-[20px] shadow-intense">
                    <img
                        src={ProfilePic}
                        alt="profile"
                        className='h-[120px] w-[120px] mx-auto'
                    />
                    <div className='mt-6'>
                        <h1 className='text-primary text-center font-semibold text-lg'>{userDetails.username}</h1>
                        <p className='font-medium text-center text-sm text-gray-600'>{userDetails.email}</p>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        onClick={logout}
                        className="mt-6 p-4 w-full rounded-[12px] bg-primary hover:bg-primary/90 transition-all duration-300 ease-in-out text-white"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}
