import React, {useState} from 'react';
import axios from 'axios'

const LoginCard: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event:any){
        event.preventDefault();
        axios.post('http://localhost:5000/login', {email, password})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
 
    return (

        <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
          <div className="relative py-3 sm:w-96 mx-auto text-center">
            <span className="text-2xl font-light ">Login to your account</span>
            <div className="mt-4 bg-white shadow-md rounded-lg text-left">
              <div className="h-2 bg-purple-400 rounded-t-md"></div>
              <div className="px-8 py-6 ">
                <form onSubmit={handleSubmit}>
                <label className="block font-semibold"> Username or Email </label>
                <input type="text" placeholder="Email" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" onChange={e => setEmail(e.target.value)}/>
                <label className="block mt-3 font-semibold"> Username or Email </label>
                <input type="password" placeholder="Password" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" onChange={e => setPassword(e.target.value)}/>
                  <div className="flex justify-between items-baseline">
                    <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Login</button>
                    <a href="#" className="text-sm hover:underline">Forgot password?</a>
                    
                  </div>
                  </form>
              </div>
              </div>
        </div>
          </div>
    );
  };
  
  export default LoginCard;