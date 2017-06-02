import { Snackbar } from 'material-ui';
import React from 'react';
import { connect } from 'react-redux';

const Notifications = ({ notifications }) =>
  <div>
    {
      notifications.map(notification =>
        <Snackbar
          key={ notification.id }
          open
          message={ notification.message }
          autoHideDuration={ notification.delay }
        />
      )
    }
  </div>

const mapStateToProps = (state) => ({
  notifications: Object.values(state.notifications)
});

export default connect(mapStateToProps)(Notifications);
