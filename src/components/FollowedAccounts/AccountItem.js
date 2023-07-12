import classNames from 'classnames/bind';
import styles from './FollowedAccounts.module.scss';
import PropTypes from 'prop-types';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <div className={cx('account-item')}>
            <Image className={cx('avatar')} src={data.avatar} alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{`${data.first_name} ${data.last_name}`}</span>
            </div>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
