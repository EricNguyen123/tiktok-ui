import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItems } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
// import FollowedAccounts from '~/components/FollowedAccounts';
import * as userService from '~/services/userServices';
// import * as followedUserService from '~/services/followedUserServices';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [isSeeAll, setIsSeeAll] = useState(false);
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    // const [followedUsers, setFollowedUsers] = useState([]);
    // const [pageFollow, setPageFollow] = useState(INIT_PAGE);

    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => {
                console.log(error);
            });

        // followedUserService
        //     .getFollowed({ page })
        //     .then((data) => {
        //         setFollowedUsers(data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }, [page]);

    const handleViewChange = () => {
        setIsSeeAll(!isSeeAll);
        setPage(page + 1);
        if (isSeeAll) {
            setPage(1);
            setSuggestedUsers([]);
        }
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItems
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItems
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItems title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts
                label="Suggested accounts"
                data={suggestedUsers}
                isSeeAll={isSeeAll}
                onViewChange={handleViewChange}
            />
            {/* <FollowedAccounts
                label="Following accounts"
                data={followedUsers}
                isSeeAll={isSeeAll}
                onViewChange={handleViewChange}
            /> */}
        </aside>
    );
}

export default Sidebar;
