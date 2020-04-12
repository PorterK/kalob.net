import React from 'react';
import PropTypes from 'prop-types';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/styles';

import styles from './style';

const useStyles = makeStyles(styles);

export default function StoryCard({ story }) {
  const classes = useStyles();

  return (
    <ExpansionPanel className={classes.storyCardContainer}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
      >
        <Typography variant="body1" className={classes.mono}>
          {story.name}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="body2" className={classes.mono}>
          {story.body}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

StoryCard.propTypes = {
  story: PropTypes.object.isRequired,
};
