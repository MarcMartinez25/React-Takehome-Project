import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import { GridListTile } from '@material-ui/core';

const columnStyle = {
  marginTop: 25,
};


const DealCard = (props) => {
  const prob = props.saleProbability * 100;

  return (
    <Card >
      <CardContent>
        <Typography variant="h4" component="h2">
        {props.productName}
        </Typography>
        <Typography component="p">
          Price{':'} ${props.amount}
        </Typography>
        <Typography component="p">
          Probability{':'} {prob}%
        </Typography>
        <div style={columnStyle}>
          <GridList rows={2}>
            <GridListTile>
              <Typography variant="h6" component="h2">
                Factors Against Sale{':'}
              </Typography>
              <Typography color="textSecondary">
                {props.factorsAgainstSale.map(item => (
                  <div>
                    <Typography color="textSecondary">{item.name} {item.description}</Typography>
                  </div>
                ))}
              </Typography>
            </GridListTile>
            <GridListTile>
              <Typography variant="h6" component="h2">
                Factors For Sale{':'}
              </Typography>
              <Typography color="textSecondary">
              {props.factorsForSale.map(item => (
                  <div>
                    <Typography color="textSecondary">{item.name} {item.description}</Typography>
                  </div>
                ))}
              </Typography>
            </GridListTile>
          </GridList>
        </div>
      </CardContent>
    </Card>
  );
}

export default DealCard;