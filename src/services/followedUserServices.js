import * as httpRequest from '~/utils/httpRequest';

export const getFollowed = async ({ pageFollow }) => {
    try {
        const res = await httpRequest.get('me/followings', {
            params: {
                page: pageFollow,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
