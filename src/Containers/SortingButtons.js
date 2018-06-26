import { connect } from 'react-redux'
import { setSorting } from '../Actions/Actions'
import SortingFilter from '../Components/SortingFilter'

const mapDispatchToProps = dispatch => ({
    setSorting: id => dispatch(setSorting(id))
})

export default connect(
    mapDispatchToProps
)(SortingFilter)
