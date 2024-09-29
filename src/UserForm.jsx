import { useEffect, useState } from 'react'
import UserCards from './UserCards'
import './UserForm.css'
// import data from './data.json'

import { readAllUsers, createUser, editUserInfo, deleteUserInfo } from './apis'
import Loader from './loader'


const UserForm = () => {

    const initialState = {
        userName: '',
        fullName: '',
        email: '',
        mobile: '',
        zipcode: '',
        companyName: '',
        street: '',
        suite: '',
        city: '',
        country: '',
    }

    const [displayData, setDisplayData] = useState([])
    const [formState, setFormState] = useState(initialState)
    const [editUser, setEditUser] = useState(false)
    const [loader, setLoader] = useState(false)


    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const loadAllUsers = async () => {
        try {
            setLoader(true)
            const response = await readAllUsers();
            if (response.status !== 200) {
                throw new Error('Error in loading User Data')
            }
            setDisplayData(response.data);
        } catch (error) {
            throw new Error(error.message)
        } finally {
            setLoader(false)
        }
    }

    const updateUser = async (formState) => {
        try {
            setLoader(true)
            const response = await createUser(formState);
            if (response.status !== 201) {
                throw new Error('Error in adding the user Details')
            }
            loadAllUsers();
            setFormState(initialState)
        } catch (error) {
            throw new Error(error.message)
        } finally {
            setLoader(false)
        }
    }

    const loadSelectedUser = (userInfo) => {
        setEditUser(true)
        setFormState(userInfo)
    }

    const editUserDetail = async (userInfo) => {
        try {
            setLoader(true)
            const response = await editUserInfo(userInfo);
            if (response.status !== 200) {
                throw new Error('Error in updating user Details')
            }
            loadAllUsers();
            setEditUser(false)
            setFormState(initialState)
        } catch (error) {
            throw new Error(error.message)
        } finally {
            setLoader(false)
        }
    }

    const deleteUserDetail = async (userInfo) => {
        try {
            setLoader(true)
            const response = await deleteUserInfo(userInfo);
            if (response.status !== 200) {
                throw new Error("Error in deleting user details")
            }
            loadAllUsers();
        } catch (error) {
            throw new Error(error.message)
        } finally {
            setLoader(false)
        }
    }

    useEffect(() => {
        loadAllUsers();
    }, [])



    return (
        <>

            <div className="main-div">
                <div className="container" style={{ border: '1px solid', margin: '1rem auto', backgroundColor: 'burlywood' }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <header className="text-center" style={{ backgroundColor: 'silver' }}>
                                <h2>User Form</h2>
                            </header>
                        </div>
                        <div className="form-details">
                            <form >
                                <div className="col-lg-4">
                                    <input type="text" placeholder='Enter User Name' name='userName' value={formState.userName} onChange={handleChange} />
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" placeholder='Enter Full Name' name='fullName' value={formState.fullName} onChange={handleChange} />
                                </div>
                                <div className="col-lg-4">
                                    <input type="email" placeholder='Enter Email' name='email' value={formState.email} onChange={handleChange} />
                                </div>
                                <div className="col-lg-4">
                                    <input type="number" placeholder='Enter Mobile No.' name='mobile' value={formState.mobile} onChange={handleChange} />
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" placeholder='Enter Company Name' name='companyName' value={formState.companyName} onChange={handleChange} />
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" placeholder='Enter Street' name='street' value={formState.street} onChange={handleChange} />
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" placeholder='Enter Suite' name='suite' value={formState.suite} onChange={handleChange} />
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" placeholder='Enter City' name='city' value={formState.city} onChange={handleChange} />
                                </div>
                                <div className="col-lg-4">
                                    <input type="string" placeholder='Enter Country' name='country' value={formState.country} onChange={handleChange} />
                                </div>
                                <div className="col-lg-4">
                                    <input type="number" placeholder='Enter Zipcode' name='zipcode' value={formState.zipcode} onChange={handleChange} />
                                </div>

                                <div className="col-lg-12">
                                    {!editUser && <button
                                        type="button" className="btn btn-primary"
                                        onClick={() => updateUser(formState)}
                                        disabled={(formState.userName === '' && formState.fullName === '' && formState.email === '' &&
                                            formState.mobile === '' && formState.companyName === '' && formState.street === '' &&
                                            formState.suite === '' && formState.city === '' && formState.zipcode === '' &&
                                            formState.country === '')}>
                                        Submit
                                    </button>}
                                    {editUser && <button
                                        type="button" className="btn btn-primary"
                                        onClick={() => editUserDetail(formState)}
                                        disabled={(formState.userName === '' && formState.fullName === '' && formState.email === '' &&
                                            formState.mobile === '' && formState.companyName === '' && formState.street === '' &&
                                            formState.suite === '' && formState.city === '' && formState.zipcode === '' &&
                                            formState.country === '')}>
                                        Edit
                                    </button>}
                                </div>
                                <br />
                                <div style={{ borderTop: '2px solid', width: '100%' }}></div>
                                <br />
                                {displayData.map((element) => (
                                    <UserCards
                                        key={element.id}
                                        {...element}
                                        loadSelectedUser={loadSelectedUser}
                                        deleteUserDetail={deleteUserDetail}
                                    />
                                ))}
                                {loader && <Loader />}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserForm