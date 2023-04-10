import profStile from './user.module.css'; 
import PropTypes from 'prop-types';
export const User = ({ username, tag, location, avatar, stats }) => {
    return (
                    <div className={profStile['profile']}>
            <div className={profStile['description']}>
                <img
                src={avatar}
                alt="User avatar"
                className={profStile['avatar']}
                />
                <p className={profStile['name']}>{username}</p>
                <p className={profStile['tag']}>@{tag}</p>
                <p className={profStile['location']}>{location}</p>
            </div>
            <ul className={profStile['stats']}>
                <li className={profStile['satatsUnit']}>
                <span className={profStile['label']}>Followers</span>
                <span className={profStile['quantity']}>{numberWithCommas(stats.followers)}</span>
                </li>
                <li className={profStile['satatsUnit']}>
                <span className={profStile['label']}>Views</span>
                <span className={profStile['quantity']}>{numberWithCommas(stats.views)}</span>
                </li>
                <li className={profStile['satatsUnit']}>
                <span className="label">Likes</span>
                <span className="quantity">{numberWithCommas(stats.likes)}</span>
                </li>
            </ul>
            </div>
)
}
User.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  };

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }