import { connect } from 'react-redux'
import { setFilter } from '../Actions/Actions'
import DateFilter from '../Components/DateFilter'

const mapDispatchToProps = dispatch => ({
    setFilter: id => dispatch(setFilter(id))
})

export default connect(
    null,
    mapDispatchToProps
)(DateFilter)








