import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {string} from "prop-types";


const Profile = ({prop,handleName,children}) => {

        const handleClick=()=>{
            handleName(prop.fullName)
        };
        return(
        <div>
            <h2>full Name : </h2>
            <span>{prop.fullName}</span>
            <h2>Bio :</h2>
            <span>{prop.bio}</span>
            <h2>Profession :</h2>
            <span>{prop.profession}</span>
            <div>{children}</div>
            <Button variant="primary" onClick={handleClick} style={{backgroundColor: "#008CBA", fontSize: "16px"}}>the name of the user</Button>
        </div>

    );
};

Profile.defaultProps = {
    version: "16"
};

Profile.propTypes={
    prop:PropTypes.shape({
        fullName:PropTypes.string,
        bio:PropTypes.string,
        profession:PropTypes.string
    }),
    handleName:PropTypes.function
}

export default Profile;