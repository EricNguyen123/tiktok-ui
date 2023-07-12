import classNames from 'classnames/bind';
import styles from './FollowedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function FollowedAccounts({ label, isSeeAll = false, data = [], onViewChange }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((user) => (
                <AccountItem key={user.id} data={user} />
            ))}

            <p className={cx('more-btn')} onClick={() => onViewChange(!isSeeAll)}>
                {isSeeAll ? 'See less' : 'See all'}
            </p>
        </div>
    );
}

FollowedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
    onSeeAll: PropTypes.func,
};

export default FollowedAccounts;
