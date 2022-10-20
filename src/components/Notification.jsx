import PropTypes from 'prop-types';

const Notification = ({ message }) => (
    <p className="notificationMessage">{message}</p>
)

export default Notification;

Notification.prototype = {
    message: PropTypes.string.isRequired
}