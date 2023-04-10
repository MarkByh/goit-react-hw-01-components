
import PropTypes from 'prop-types';
import {
  StatsTitle,
  StatsCard,
  StatsList,
  StatsListItem
} from './styledStats.jsx';

export const Statistics =({ title, stats }) => {
    return (
      <StatsCard>
        {title && <StatsTitle>{title}</StatsTitle>}
   <StatsList>
    {stats.map(({ id, label, percentage }) => (
      <StatsListItem key={id}>
        <span>{label}</span>
        <span>{percentage}%</span>
      </StatsListItem> 
        ))}
      </StatsList>
      </StatsCard>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};