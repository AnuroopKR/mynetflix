const checkValidData=(email,password)=>{
const isEmailValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const isPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
if(!isEmailValid) return "Email Id is not valid"
if (!isPassword) return "Password is not valid"
return null
}
export default checkValidData;