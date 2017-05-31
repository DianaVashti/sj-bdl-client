import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const ExpandableCard = () => (
  <Card className="card-container">
    <CardHeader
      title="Dangerous strip club customer “Desmond”"
      titleStyle={{
        font: '3em "Open Sans"',
      }}
      subtitle="May 17, 2017"
      actAsExpander={true}
      showExpandableButton={true}]
    />
    <CardText expandable={true}>
      Client gave gifts to dancers then reported them stolen to SFPD.
      As a result dancer was blacklisted from club.
      Also verbally assaults and stalks.
      Black male, 35ish, 5’8″, no obvious scars or tattoos, drives a Porsche.
      San Francisco.
    </CardText>
  </Card>
);

export default ExpandableCard;
