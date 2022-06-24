import { useEffect }from "react";
import {usersAction} from "../../store/actions/users";
import {connect} from "react-redux";

const Users = (props) => {
  const {usersList, usersAction} = props

  useEffect(() => {
    usersAction()
  }, [])
  console.log('usersList', usersList)

  return `Users`
}

const mapStateToProps = (state) => ({
  usersList: state.users.user,
});

const mapDispatchToProps = {
  usersAction
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);

export default Container;