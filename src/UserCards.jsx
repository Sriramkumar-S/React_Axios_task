import PropTypes from 'prop-types'
import './UserForm.css'

const UserCards = (userData) => {

    return (
        <>
            <div className="col-lg-3">
                <div className="user">
                    <div className="card" style={{ width: '18rem', margin: '1rem 0', textAlign: 'left', height: '100%'}}>
                        <div className="card-body">
                            <h5 className="card-title">{userData.fullName}</h5>
                            <hr />
                            <p className="card-text"><b>Email: </b><br />{userData.email}</p>
                            <p className="card-text"><b>Mobile: </b>{userData.mobile}</p>
                            <p className="card-text"><b>UserName: </b>{userData.userName}</p>

                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b>Suite: </b>{userData.suite}</li>
                            <li className="list-group-item"><b>Street: </b>{userData.street}</li>
                            <li className="list-group-item"><b>City: </b>{userData.city}</li>
                            <li className="list-group-item"><b>Country: </b>{userData.country}</li>
                            <li className="list-group-item"><b>Zip Code: </b>{userData.zipcode}</li>
                            <li className="list-group-item"><b>Company Name: </b>{userData.companyName}</li>
                        </ul>
                        <div className="card-body" style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
                            <button type="button" onClick={() => userData.loadSelectedUser(userData)}><i className="fa-regular fa-pen-to-square"></i></button>
                            <button type="button" onClick={() => userData.deleteUserDetail(userData)}><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

UserCards.propTypes = {
    userData: PropTypes.shape({
        id: PropTypes.number,
        userName: PropTypes.string,
        fullName: PropTypes.string,
        email: PropTypes.email,
        mobile: PropTypes.number,
        street: PropTypes.string,
        suite: PropTypes.string,
        city: PropTypes.string,
        pincode: PropTypes.number,
        companyName: PropTypes.string,
        loadSelectedUser: PropTypes.func,
        deleteUserDetail: PropTypes.func
    })

}

export default UserCards;
