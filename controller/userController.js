const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
//const { userService } = require('../service');

const {
    Alert
} = require('../models/alert');
const {
    userService,
} = require('../service');
const { URITooLong } = require('http-errors');

module.exports = {
    // 알림 갯수 가져오기
    alert: async (req, res) => {
        try {
            const alerts = await Alert.findAll({
                attributes: ['id', 'alert'],
            });
            console.log(alerts);
            return res.status(statusCode.OK).send(util.success(statusCode.OK, "알림 조회 성공", alerts));
        } catch (error) {
            console.error(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "알림 조회 실패"));
        }
    },
    subscription: async (req, res) => {
        const {
            user
        } = req.body;

        if (!user) {
            console.log('필요한 값이 없습니다.');
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        }
        try {
            const creators = await userService.getSubscription()
            if (!creators) {
                console.log('creators 테이블이 비어있습니다.');
                return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
            }
            return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_SUBSCRIBED_CREATOR_SUCCESS, creators));
        } catch (error) {
            console.log(error);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
        }
    }
}